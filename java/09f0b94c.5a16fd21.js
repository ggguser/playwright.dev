(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{271:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},272:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,b=p["".concat(i,".").concat(m)]||p[m]||f[m]||o;return n?a.a.createElement(b,c(c({ref:t},s),{},{components:n})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},273:function(e,t,n){"use strict";var r=n(0),a=n(274);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},274:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},275:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(273),i=n(271),c=n(53),l=n.n(c),s=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,p=e.values,f=e.groupId,m=e.className,b=Object(o.a)(),d=b.tabGroupChoices,v=b.setTabGroupChoices,y=Object(r.useState)(c),g=y[0],O=y[1],h=r.Children.toArray(e.children);if(null!=f){var j=d[f];null!=j&&j!==g&&p.some((function(e){return e.value===j}))&&O(j)}var w=function(e){O(e),null!=f&&v(f,e)},x=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(r.cloneElement)(h.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},276:function(e,t,n){"use strict";var r=n(3),a=n(0),o=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return o.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:a}),t)}},78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(272)),i=(n(275),n(276),{id:"class-playwrightexception",title:"PlaywrightException"}),c={unversionedId:"api/class-playwrightexception",id:"version-1.10.0/api/class-playwrightexception",isDocsHomePage:!1,title:"PlaywrightException",description:"* extends: [RuntimeException]",source:"@site/versioned_docs/version-1.10.0/api/class-playwrightexception.mdx",slug:"/api/class-playwrightexception",permalink:"/java/docs/1.10.0/api/class-playwrightexception",version:"1.10.0",sidebar:"version-1.10.0/api",previous:{title:"Page",permalink:"/java/docs/1.10.0/api/class-page"},next:{title:"Request",permalink:"/java/docs/1.10.0/api/class-request"}},l=[],s={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"extends: ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/RuntimeException.html",title:"RuntimeException"}),"RuntimeException"))),Object(o.b)("p",null,"PlaywrightException is thrown whenever certain operations are terminated abnormally, e.g. browser closes while ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/java/docs/1.10.0/api/class-page#pageevaluateexpression-arg"}),"Page.evaluate(expression[, arg])")," is running. All Playwright exceptions inherit from this class."))}u.isMDXComponent=!0}}]);