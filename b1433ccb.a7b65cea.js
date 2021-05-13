(window.webpackJsonp=window.webpackJsonp||[]).push([[553],{624:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(890)),i={id:"class-selectors",title:"Selectors"},c={unversionedId:"api/class-selectors",id:"version-1.6.0/api/class-selectors",isDocsHomePage:!1,title:"Selectors",description:"Selectors can be used to install custom selector engines. See Working with selectors) for more information.",source:"@site/versioned_docs/version-1.6.0/api/class-selectors.mdx",slug:"/api/class-selectors",permalink:"/docs/1.6.0/api/class-selectors",version:"1.6.0",sidebar:"version-1.6.0/api",previous:{title:"Response",permalink:"/docs/1.6.0/api/class-response"},next:{title:"Route",permalink:"/docs/1.6.0/api/class-route"}},s=[{value:"selectors.register(name, script, options)",id:"selectorsregistername-script-options",children:[]}],l={toc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Selectors can be used to install custom selector engines. See ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.6.0/api/working-with-selectors"}),"Working with selectors"),") for more information."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.6.0/api/class-selectors#selectorsregistername-script-options"}),"selectors.register(name, script[, options])"))),Object(o.b)("h2",{id:"selectorsregistername-script-options"},"selectors.register(name, script","[, options]",")"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"name")," <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),"> Name that is used in selectors as a prefix, e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"{name: 'foo'}")," enables ",Object(o.b)("inlineCode",{parentName:"li"},"foo=myselectorbody")," selectors. May only contain ",Object(o.b)("inlineCode",{parentName:"li"},"[a-zA-Z0-9_]")," characters."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"script")," <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"}),"function"),"|",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),"|",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),"> Script that evaluates to a selector engine instance.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"path")," <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),"> Path to the JavaScript file. If ",Object(o.b)("inlineCode",{parentName:"li"},"path")," is a relative path, then it is resolved relative to ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://nodejs.org/api/process.html#process_process_cwd"}),"current working directory"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"content")," <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),"> Raw script content."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"options")," <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"contentScript")," <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Boolean_type",title:"Boolean"}),"boolean"),"> Whether to run this selector engine in isolated JavaScript environment. This environment has access to the same DOM, but not any JavaScript objects from the frame's scripts. Defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"false"),". Note that running as a content script is not guaranteed when this engine is used together with other registered engines."))),Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),">")),Object(o.b)("p",null,"An example of registering selector engine that queries elements based on a tag name:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const { selectors, firefox } = require('playwright');  // Or 'chromium' or 'webkit'.\n\n(async () => {\n  // Must be a function that evaluates to a selector engine instance.\n  const createTagNameEngine = () => ({\n    // Creates a selector that matches given target when queried at the root.\n    // Can return undefined if unable to create one.\n    create(root, target) {\n      return root.querySelector(target.tagName) === target ? target.tagName : undefined;\n    },\n\n    // Returns the first element matching given selector in the root's subtree.\n    query(root, selector) {\n      return root.querySelector(selector);\n    },\n\n    // Returns all elements matching given selector in the root's subtree.\n    queryAll(root, selector) {\n      return Array.from(root.querySelectorAll(selector));\n    }\n  });\n\n  // Register the engine. Selectors will be prefixed with \"tag=\".\n  await selectors.register('tag', createTagNameEngine);\n\n  const browser = await firefox.launch();\n  const page = await browser.newPage();\n  await page.setContent(`<div><button>Click me</button></div>`);\n\n  // Use the selector prefixed with its name.\n  const button = await page.$('tag=button');\n  // Combine it with other selector engines.\n  await page.click('tag=div >> text=\"Click me\"');\n  // Can use it in any methods supporting selectors.\n  const buttonCount = await page.$$eval('tag=button', buttons => buttons.length);\n\n  await browser.close();\n})();\n")))}p.isMDXComponent=!0},890:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return g}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(r),m=n,g=b["".concat(i,".").concat(m)]||b[m]||u[m]||o;return r?a.a.createElement(g,c(c({ref:t},l),{},{components:r})):a.a.createElement(g,c({ref:t},l))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);