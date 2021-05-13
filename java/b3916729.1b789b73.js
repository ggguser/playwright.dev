(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{214:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),i=(n(0),n(272)),o=(n(275),n(276),{id:"extensibility",title:"Extensibility"}),c={unversionedId:"extensibility",id:"extensibility",isDocsHomePage:!1,title:"Extensibility",description:"- Custom selector engines",source:"@site/docs/extensibility.mdx",slug:"/extensibility",permalink:"/java/docs/next/extensibility",version:"current",sidebar:"docs",previous:{title:"Events",permalink:"/java/docs/next/events"},next:{title:"Input",permalink:"/java/docs/next/input"}},l=[{value:"Custom selector engines",id:"custom-selector-engines",children:[]}],s={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#custom-selector-engines"}),"Custom selector engines"))),Object(i.b)("h2",{id:"custom-selector-engines"},"Custom selector engines"),Object(i.b)("p",null,"Playwright supports custom selector engines, registered with ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/java/docs/next/api/class-selectors#selectorsregistername-script-options"}),"Selectors.register(name, script[, options])"),"."),Object(i.b)("p",null,"Selector engine should have the following properties:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"create")," function to create a relative selector from ",Object(i.b)("inlineCode",{parentName:"li"},"root")," (root is either a ",Object(i.b)("inlineCode",{parentName:"li"},"Document"),", ",Object(i.b)("inlineCode",{parentName:"li"},"ShadowRoot")," or ",Object(i.b)("inlineCode",{parentName:"li"},"Element"),") to a ",Object(i.b)("inlineCode",{parentName:"li"},"target")," element."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"query")," function to query first element matching ",Object(i.b)("inlineCode",{parentName:"li"},"selector")," relative to the ",Object(i.b)("inlineCode",{parentName:"li"},"root"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"queryAll")," function to query all elements matching ",Object(i.b)("inlineCode",{parentName:"li"},"selector")," relative to the ",Object(i.b)("inlineCode",{parentName:"li"},"root"),".")),Object(i.b)("p",null,"By default the engine is run directly in the frame's JavaScript context and, for example, can call an application-defined function. To isolate the engine from any JavaScript in the frame, but leave access to the DOM, register the engine with ",Object(i.b)("inlineCode",{parentName:"p"},"{contentScript: true}")," option. Content script engine is safer because it is protected from any tampering with the global objects, for example altering ",Object(i.b)("inlineCode",{parentName:"p"},"Node.prototype")," methods. All built-in selector engines run as content scripts. Note that running as a content script is not guaranteed when the engine is used together with other custom engines."),Object(i.b)("p",null,"An example of registering selector engine that queries elements based on a tag name:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'// Must be a script that evaluates to a selector engine instance.\nString createTagNameEngine = "{\\n" +\n  "  // Returns the first element matching given selector in the root\'s subtree.\\n" +\n  "  query(root, selector) {\\n" +\n  "    return root.querySelector(selector);\\n" +\n  "  },\\n" +\n  "\\n" +\n  "  // Returns all elements matching given selector in the root\'s subtree.\\n" +\n  "  queryAll(root, selector) {\\n" +\n  "    return Array.from(root.querySelectorAll(selector));\\n" +\n  "  }\\n" +\n  "}";\n\n// Register the engine. Selectors will be prefixed with "tag=".\nplaywright.selectors().register("tag", createTagNameEngine);\n\n// Now we can use "tag=" selectors.\nElementHandle button = page.querySelector("tag=button");\n\n// We can combine it with other selector engines using ">>" combinator.\npage.click("tag=div >> span >> \\"Click me\\"");\n\n// We can use it in any methods supporting selectors.\nint buttonCount = (int) page.evalOnSelectorAll("tag=button", "buttons => buttons.length");\n')))}u.isMDXComponent=!0},271:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},272:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),m=r,f=b["".concat(o,".").concat(m)]||b[m]||p[m]||i;return n?a.a.createElement(f,c(c({ref:t},s),{},{components:n})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},273:function(e,t,n){"use strict";var r=n(0),a=n(274);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},274:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},275:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(273),o=n(271),c=n(53),l=n.n(c),s=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,b=e.values,p=e.groupId,m=e.className,f=Object(i.a)(),d=f.tabGroupChoices,g=f.setTabGroupChoices,O=Object(r.useState)(c),y=O[0],v=O[1],h=r.Children.toArray(e.children);if(null!=p){var j=d[p];null!=j&&j!==y&&b.some((function(e){return e.value===j}))&&v(j)}var w=function(e){v(e),null!=p&&g(p,e)},N=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},m)},b.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(r.cloneElement)(h.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},276:function(e,t,n){"use strict";var r=n(3),a=n(0),i=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return i.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:a}),t)}}}]);