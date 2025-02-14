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

const Documentation = require('./documentation');
const { toTitleCase } = require('./generator');
/** @typedef {import('./generator').GeneratorFormatter} GeneratorFormatter */

/**
 * @implements {GeneratorFormatter}
 */
class CSharpFormatter {
  /**
   * @param {Documentation.Member} member 
   */
  formatMember(member) {
    let text;
    let args = [];
    if (member.kind === 'property')
      text = `${toTitleCase(member.clazz.varName)}.${toTitleCase(member.alias)}`;
    if (member.kind === 'event')
      text = `event ${toTitleCase(member.clazz.varName)}.${toTitleCase(member.alias)}`;
    if (member.kind === 'method' ) {
      args = member.argsArray.slice();
      const signature = renderSharpSignature(args);

      let isGetter = !signature && !member.async && !!member.type;
      if (member.name.startsWith('as'))
        isGetter = false;
      text = `${toTitleCase(member.clazz.varName)}.${toAsyncTitleCase(member.async, member.alias)}`;
      if (!isGetter)
        text += `(${signature})`;
    }
    return { text, args };
  }

  formatArgumentName(name) {
    return name;
  }

  formatTemplate(text) {
    return`<${text}>`;
  }

  formatFunction(args, ret, type) {
    if (type.args.length !== 1)
      throw new Error('Unsupported number of arguments in function: ' + type);
    if (!type.returnType)
      return "[Action]<" + args + ">";
    if (type.returnType.name === 'boolean')
      return "[Func]<" + args + ", bool>";
    throw new Error('Unknown C# type for function: ' + type);
  }

  formatPromise(text) {
    return text;
  }

  renderType(type, direction, member) {
    if (member.kind === 'property' && member.name === 'options') {
      const method = member.enclosingMethod;
      return `\`${toTitleCase(method.clazz.varName)}${toTitleCase(method.alias, { omitAsync: true })}Options\``;
    }
    const text = type.name;
    switch (text) {
      case 'any': return '[object]';
      case 'Array': return '[IEnumerable]';
      case 'float': return '[double]';
      case 'function': {
        switch (fullName(member)) {
          case 'BrowserContext.exposeBinding.callback': return '[Action]<BindingSource, T, [TResult]>';
          case 'BrowserContext.exposeFunction.callback': return '[Action]<T, [TResult]>';
          case 'BrowserContext.waitForEvent.predicate': return '[Func]<T, [bool]>';
          case 'BrowserContext.waitForEvent2.predicate': return '[Func]<T, [bool]>';
          case 'Page.exposeBinding.callback': return '[Action]<BindingSource, T, [TResult]>';
          case 'Page.exposeFunction.callback': return '[Action]<T, [TResult]>';
          case 'Page.waitForEvent.predicate': return '[Func]<T, [bool]>';
          case 'Page.waitForEvent2.predicate': return '[Func]<T, [bool]>';
        }
        throw new Error(`Unknwon C# type for "${fullName(member)}": "${text}"`);
      };
      case 'null': return '[null]';
      case 'Object': {
        // FIXME: generate correct type for accessibility snapshot children.
        if (member.name === 'children') {
          return '[IEnumerable]';
        }
        switch (fullName(member)) {
          case 'BrowserContext.addCookies.cookies': return '`Cookie`';
          case 'BrowserContext.cookies': return '`Cookie`';
          case 'ElementHandle.selectOption.values': return '`SelectOption`';
          case 'Frame.selectOption.values': return '`SelectOption`';
          case 'Page.selectOption.values': return '`SelectOption`';
          case 'ElementHandle.setInputFiles.files': return '`FilePayload`';
          case 'FileChooser.setFiles.files': return '`FilePayload`';
          case 'Frame.setInputFiles.files': return '`FilePayload`';
          case 'Page.setInputFiles.files': return '`FilePayload`';
        }
        if (!type.templates)
          return `\`${toTitleCase(member.alias)}\``;
        return '[Map]';
      }
      case 'path': return '[string]';
      case 'RegExp': return '[Regex]';
      case 'string': return '[string]';
      // Escape '[' and ']' so that they don't break markdown links like [byte[]](link)
      case 'Buffer': return '[byte&#91;&#93;]';
      case 'Readable': return '[Stream]';
      case 'Serializable': return '[object]';
      case 'URL': return '[string]';
    }
    return `[${text}]`;
  }

  preprocessComment(spec) {
    return spec;
  }
}

/**
 * @param {Documentation.Member} member
 * @returns {string}
 */
function fullName(member) {
  if (member.enclosingMethod) {
    const method = member.enclosingMethod;
    let fqn = `${toTitleCase(method.clazz.varName)}.${method.name}`;
    if (member.kind === 'property')
      fqn += '.' + member.name;
    return fqn;
  }
  return `${toTitleCase(member.clazz.varName)}.${member.name}`;
}

/**
 * @param {Documentation.Member[]} args
 * @return {string}
 */
function renderSharpSignature(args) {
  const argNames = args.map(a => a.name);
  return argNames.join(', ');
}

/**
 * @param {boolean} isAsync
 * @param {string} name
 */
function toAsyncTitleCase(isAsync, name) {
  if (!isAsync || name.endsWith('Async'))
    return toTitleCase(name);
  return toTitleCase(name) + 'Async';
}

module.exports = { CSharpFormatter };
