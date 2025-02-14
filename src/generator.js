/**
 * Copyright (c) Microsoft Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//@ts-check

const fs = require('fs');
const path = require('path');
const md = require('./markdown');
const { parseApi } = require('./api_parser');
const Documentation = require('./documentation');

/** @typedef {import('./documentation').Type} Type */
/** @typedef {import('./markdown').MarkdownNode} MarkdownNode */

const DIR_SRC = path.join(process.env.SRC_DIR, 'docs', 'src');
const commonSnippets = new Set(['html', 'xml', 'yml', 'yaml', 'json', 'groovy', 'html', 'sh']);

/**
 * @typedef {{
 *   formatMember: function(Documentation.Member): { text: string, args: Documentation.Member[] },
 *   formatArgumentName: function(string): string,
 *   formatTemplate: function(string): string,
 *   formatFunction: function(string, string, Documentation.Type): string,
 *   formatPromise: function(string): string,
 *   preprocessComment: function(MarkdownNode[]): MarkdownNode[]
 *   renderType: function(Documentation.Type, string, Documentation.Member): string,
 * }} GeneratorFormatter
 */

class Generator {
  links = new Map();
  rLinks = new Map();

  /**
   * @param {string} lang
   * @param {string} outDir
   * @param {GeneratorFormatter} formatter
   */
  constructor(lang, outDir, formatter) {
    this.lang = lang;
    this.outDir = outDir;
    /** @type {Set<string>} */
    this.sourceFiles = new Set();
    listFiles(DIR_SRC, DIR_SRC, this.sourceFiles);
    this.formatter = formatter;
    this.documentation = parseApi(path.join(DIR_SRC, 'api'));
    this.documentation.filterForLanguage(lang);
    this.documentation.setLinkRenderer(item => {
      const { clazz, member, param, option } = item;
      if (param)
        return `\`${formatter.formatArgumentName(param)}\``;
      if (option)
        return `\`${formatter.formatArgumentName(option)}\``;
      if (clazz)
        return `[${clazz.name}]`;
      return this.createMemberLink(member);
    });

    this.generatedLinksSuffix = '';
    {
      const links = fs.readFileSync(path.join(__dirname, '..', 'common', 'links.md')).toString();
      const langLinks = fs.readFileSync(path.join(__dirname, '..', 'common', `links-${lang}.md`)).toString();
      const localLinks = [];
      for (const clazz of this.documentation.classesArray)
        localLinks.push(`[${clazz.name}]: ./api/class-${clazz.name.toLowerCase()}.md "${clazz.name}"`);
        this.generatedLinksSuffix = '\n' + localLinks.join('\n') + '\n' + links + '\n' + langLinks;
    }

    for (const clazz of this.documentation.classesArray)
      this.generateClassDoc(clazz);

    for (const name of fs.readdirSync(path.join(DIR_SRC))) {
      if (name.startsWith('links') || name === 'api')
        continue;
      this.generateDoc(name);
    }
  }

  /**
   * @param {Documentation.Class} clazz
   */
  generateClassDoc(clazz) {
    /** @type {MarkdownNode[]} */
    const result = [];
    result.push({
      type: 'text',
      text: `---
id: class-${clazz.name.toLowerCase()}
title: "${clazz.name}"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
`});
    result.push(...this.formatComment(clazz.spec));
    result.push({
      type: 'text',
      text: ''
    });
    clazz.membersArray.sort((m1, m2) => {
      const k1 = m1.kind + toSnakeCase(m1.alias.replace(/\$\$eval/, '$$eval2'));
      const k2 = m2.kind + toSnakeCase(m2.alias.replace(/\$\$eval/, '$$eval2'));
      return k1.localeCompare(k2);
    });
    result.push(...this.generateClassToc(clazz));
    if (clazz.extends && !['EventEmitter', 'Error', 'RuntimeException', 'Exception'].includes(clazz.extends)) {
      const superClass = this.documentation.classes.get(clazz.extends);
      result.push(...this.generateClassToc(superClass));
    }
    for (const member of clazz.membersArray) {
      // Iterate members
      /** @type {MarkdownNode} */
      const memberNode = { type: 'h2', children: [] };
      const { text, args } = this.formatter.formatMember(member);
      memberNode.text = text;
      memberNode.children.push(...args.map(a => this.renderProperty(`\`${this.formatter.formatArgumentName(a.alias)}\``, a, a.spec, 'in')));

      // Append type
      if (member.type && (member.type.name !== 'void' || member.kind === 'method')) {
        let name;
        switch (member.kind) {
          case 'event': name = 'type:'; break;
          case 'property': name = this.lang === 'java' ? 'returns:' : 'type:'; break;
          case 'method': name = 'returns:'; break;
        }
        memberNode.children.push(this.renderProperty(name, member, undefined, 'out', member.async));
      }

      // Append member doc
      memberNode.children.push(...this.formatComment(member.spec));
      result.push(memberNode);
    }
    fs.mkdirSync(path.join(this.outDir, 'api'), { recursive: true });
    const output = [md.render(result), this.generatedLinksSuffix].join('\n');
    fs.writeFileSync(path.join(this.outDir, 'api', `class-${clazz.name.toLowerCase()}.mdx`), this.mdxLinks(output));
  }

  /**
   * @param {string} text
   */
  mdxLinks(text) {
    for (const name of this.sourceFiles)
      text = text.replace(new RegExp('\\' + name, 'g'), name + 'x');
    return text;
  }

  /**
   * @param {MarkdownNode[]} spec
   * @return {MarkdownNode[]}
   */
  formatComment(spec) {
    spec = this.formatter.preprocessComment(spec);
    spec = spec.filter(c => {
      // No lang or common lang - Ok.
      if (!c.codeLang || commonSnippets.has(c.codeLang))
        return true;

      // Our lang - Ok.
      if (c.codeLang === this.lang || c.codeLang === highlighterName(this.lang)) {
        c.codeLang = highlighterName(this.lang);
        return true;
      }

      // '* browser' - always Ok
      // 'sh python' - Ok for Python.
      const tokens = c.codeLang.split(' ');
      if (tokens[1] === 'browser' || tokens[1] === this.lang) {
        c.codeLang = highlighterName(tokens[0]);
        return true;
      }
      // python * - Ok for Python
      if (tokens[0] === this.lang) {
        c.lines.unshift('# ' + tokens[1], '');
        c.codeLang = highlighterName(this.lang);
        return true;
      }
      return false;
    });
    return spec;
  }

  /**
   * @param {string} name
   */
  generateDoc(name) {
    if (name.includes('-js') || name.includes('-python') || name.includes('-java') || name.includes('-csharp'))
      if (!name.includes('-' + this.lang))
        return;
    const content = fs.readFileSync(path.join(DIR_SRC, name)).toString();
    let nodes = this.filterForLanguage(md.parse(content));
    this.documentation.renderLinksInText(nodes);
    for (const node of nodes) {
      if (node.text === '<!-- TOC -->')
        node.text = md.generateToc(nodes);
    }
    nodes = this.formatComment(nodes);
    md.visitAll(nodes, node => {
      if (node.children)
        node.children = this.formatComment(node.children);
    });
    fs.mkdirSync(this.outDir, { recursive: true });
    let output = [md.render(nodes), this.generatedLinksSuffix].join('\n');
    output = output.replace(`"
---`, `"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';`);
    const outName = name.replace(new RegExp('-' + this.lang), '') + 'x';
    fs.writeFileSync(path.join(this.outDir, outName), this.mdxLinks(output));
  }

  /**
   * @param {MarkdownNode[]} nodes
   * @return {MarkdownNode[]}
   */
  filterForLanguage(nodes) {
    const result = nodes.filter(node => {
      if (!node.children)
        return true;
      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];
        if (child.type !== 'li' || child.liType !== 'bullet' || !child.text.startsWith('langs:'))
          continue;
        const only = child.text.substring('langs:'.length).split(',').map(l => l.trim());
        node.children.splice(i, 1);
        return only.includes(this.lang);
      }
      return true;
    });
    result.forEach(n => {
      if (!n.children)
        return;
      n.children = this.filterForLanguage(n.children);
    });
    return result;
  }

  /**
   * @param {string} file
   * @param {string} text
   */
  createLink(file, text) {
    const key = file + '#' + text;
    if (this.links.has(key))
      return this.links.get(key);
    const baseLink = file + '#' + text.toLowerCase().split(',').map(c => c.replace(/[^a-z_]/g, '')).join('-');
    let link = baseLink;
    let index = 0;
    while (this.rLinks.has(link))
      link = baseLink + '-' + (++index);
    const result = `[${text}](${link})`;
    this.links.set(key, result);
    this.rLinks.set(link, text);
    return result;
  }

  /**
   * @param {Documentation.Member} member
   * @return {string}
   */
  createMemberLink(member) {
    const file = `./api/class-${member.clazz.name.toLowerCase()}.md`;
    return this.createLink(file, this.formatter.formatMember(member).text);
  }

  /**
   * @param {Documentation.Class} clazz
   * @return {MarkdownNode[]}
   */
  generateClassToc(clazz) {
    /** @type {MarkdownNode[]} */
    const result = [];
    for (const member of clazz.membersArray) {
      result.push({
        type: 'li',
        liType: 'default',
        text: this.createMemberLink(member)
      });
    }
    return result;
  }

  /**
   * @param {string} name
   * @param {Documentation.Member} member
   * @param {MarkdownNode[]} spec
   * @param {'in'|'out'} direction
   * @param {boolean=} async
   */
  renderProperty(name, member, spec, direction, async) {
    let comment = '';
    if (spec && spec.length)
      comment = spec[0].text;
    const type = member.type;
    const properties = type.deepProperties();
    let children;
    if (properties && properties.length)
      children = properties.map(p => {
        let alias = p.alias;
        if (this.lang === 'java' && member.kind === 'property' && direction === 'in')
          alias = `set${toTitleCase(alias)}`;
        if (this.lang === 'csharp' && member.kind === 'property' && direction === 'in')
          alias = toTitleCase(alias);
        return this.renderProperty(`\`${alias}\``, p, p.spec, direction, false)
      });
    else if (spec && spec.length > 1)
      children = spec.slice(1).map(s => md.clone(s));

    let typeText = this.renderType(type, direction, member);
    if (async)
      typeText = this.formatter.formatPromise(typeText);

    /** @type {MarkdownNode} */
    const result = {
      type: 'li',
      liType: 'default',
      text: `${name} <${typeText}>${comment ? ' ' + comment : ''}`,
      children
    };
    return result;
  }


  /**
   * @param {Documentation.Type} type
   * @param {'in'|'out'} direction
   * @param {Documentation.Member} member
   */
  renderType(type, direction, member) {
    if (type.union) {
      if (this.lang === 'java' && type.union.some(v => v.name.startsWith('"'))) {
        const values = type.union.map(l => l.name.substring(1, l.name.length - 1).replace('-', '_').toLocaleUpperCase());
        return `\`enum ${type.name} { ${values.join(', ')} }\``;
      }
      return type.union.map(l => this.renderType(l, direction, member)).join('|');
    }
    if (type.templates)
      return `${this.renderTypeName(type, direction, member)}${this.formatter.formatTemplate(type.templates.map(l => this.renderType(l, direction, member)).join(', '))}`;
    if (type.args)
      return `${this.formatter.formatFunction(type.args.map(l => this.renderType(l, direction, member)).join(', '), type.returnType ? ':' + this.renderType(type.returnType, direction, member) : '', type)}`;
    if (type.name.startsWith('"'))
      return type.name;
    return `${this.renderTypeName(type, direction, member)}`;
  }

  /**
   * @param {Documentation.Type} type
   * @param {'in'|'out'} direction
   * @param {Documentation.Member} member
   */
  renderTypeName(type, direction, member) {
    return this.formatter.renderType(type, direction, member);
  }
}

/**
 * @param {string} name
 */
function toSnakeCase(name) {
  const toSnakeCaseRegex = /((?<=[a-z0-9])[A-Z]|(?!^)[A-Z](?=[a-z]))/g;
  return name.replace(toSnakeCaseRegex, `_$1`).toLowerCase();
}

/**
 * @param {Documentation.Member[]} args
 * @return {string}
 */
function renderJSSignature(args) {
  const tokens = [];
  let lastIsOptional = false;
  for (const arg of args) {
    const name = arg.alias;
    const optional = !arg.required;
    if (tokens.length) {
      if (optional && !lastIsOptional)
        tokens.push(`[`);
      // In java callback goes last, after optional 'options'
      if (!optional && lastIsOptional)
        tokens.push(`]`);
      tokens.push(`, `);
    } else {
      if (optional)
        tokens.push(`[`);
    }
    tokens.push(name);
    lastIsOptional = optional;
  }
  if (lastIsOptional)
    tokens.push(']');
  return tokens.join('');
}

/**
 * @param {string} name
 * @param {{omitAsync: boolean}=} options
 */
function toTitleCase(name, options) {
  let result = name[0].toUpperCase() + name.substring(1);
  if (options && options.omitAsync && result.endsWith('Async'))
    result = result.slice(0, result.length - 'Async'.length);
  return result;
}


/**
 * @param {string} lang
 */
function highlighterName(lang) {
  if (lang === 'python')
    return 'py';
  return lang;
}

/**
 * @param {string} dir
 * @param {string} base
 * @param {Set<string>} result
 */
function listFiles(dir, base, result) {
  for (let name of fs.readdirSync(dir)) {
    const f = path.join(dir, name);
    if (fs.lstatSync(f).isDirectory()) {
      listFiles(f, base, result);
    } else {
      name = name.replace(/(-js\.|-python\.|-java\.|-sharp\.)/, '.');
      if (name.endsWith('.md'))
        result.add('./' + path.relative(base, path.join(dir, name)));
    }
  }
}

module.exports = { Generator, toTitleCase, toSnakeCase, renderJSSignature };
