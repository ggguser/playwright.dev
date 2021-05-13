(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{152:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}},153:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),p=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(s,".").concat(d)]||b[d]||u[d]||r;return n?o.a.createElement(m,c(c({ref:t},i),{},{components:n})):o.a.createElement(m,c({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var i=2;i<r;i++)s[i]=n[i];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},154:function(e,t,n){"use strict";var a=n(0),o=n(155);t.a=function(){var e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},155:function(e,t,n){"use strict";var a=n(0),o=Object(a.createContext)(void 0);t.a=o},156:function(e,t,n){"use strict";n(0),n(154),n(152),n(53)},157:function(e,t,n){"use strict";n(3),n(0)},75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),r=(n(0),n(153)),s=(n(156),n(157),{id:"class-consolemessage",title:"ConsoleMessage"}),c={unversionedId:"api/class-consolemessage",id:"api/class-consolemessage",isDocsHomePage:!1,title:"ConsoleMessage",description:"ConsoleMessage] objects are dispatched by page via the [event Page.Console event.",source:"@site/docs/api/class-consolemessage.mdx",slug:"/api/class-consolemessage",permalink:"/dotnet/docs/api/class-consolemessage",version:"current",sidebar:"api",previous:{title:"BrowserType",permalink:"/dotnet/docs/api/class-browsertype"},next:{title:"Dialog",permalink:"/dotnet/docs/api/class-dialog"}},l=[{value:"ConsoleMessage.Args",id:"consolemessageargs",children:[]},{value:"ConsoleMessage.Location",id:"consolemessagelocation",children:[]},{value:"ConsoleMessage.Text",id:"consolemessagetext",children:[]},{value:"ConsoleMessage.Type",id:"consolemessagetype",children:[]}],i={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/dotnet/docs/api/class-consolemessage",title:"ConsoleMessage"}),"ConsoleMessage")," objects are dispatched by page via the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/dotnet/docs/api/class-page#eventpageconsole"}),"event Page.Console")," event."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/dotnet/docs/api/class-consolemessage#consolemessageargs"}),"ConsoleMessage.Args")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/dotnet/docs/api/class-consolemessage#consolemessagelocation"}),"ConsoleMessage.Location")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/dotnet/docs/api/class-consolemessage#consolemessagetext"}),"ConsoleMessage.Text")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/dotnet/docs/api/class-consolemessage#consolemessagetype"}),"ConsoleMessage.Type"))),Object(r.b)("h2",{id:"consolemessageargs"},"ConsoleMessage.Args"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"returns: <",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.collections.ienumerable?view=net-5.0",title:"IEnumerable"}),"IEnumerable"),"<",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/dotnet/docs/api/class-jshandle",title:"JSHandle"}),"JSHandle"),">>")),Object(r.b)("p",null,"List of arguments passed to a ",Object(r.b)("inlineCode",{parentName:"p"},"console")," function call. See also ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/dotnet/docs/api/class-page#eventpageconsole"}),"event Page.Console"),"."),Object(r.b)("h2",{id:"consolemessagelocation"},"ConsoleMessage.Location"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"returns: <",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">")),Object(r.b)("p",null,"URL of the resource followed by 0-based line and column numbers in the resource formatted as ",Object(r.b)("inlineCode",{parentName:"p"},"URL:line:column"),"."),Object(r.b)("h2",{id:"consolemessagetext"},"ConsoleMessage.Text"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"returns: <",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">")),Object(r.b)("p",null,"The text of the console message."),Object(r.b)("h2",{id:"consolemessagetype"},"ConsoleMessage.Type"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"returns: <",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">")),Object(r.b)("p",null,"One of the following values: ",Object(r.b)("inlineCode",{parentName:"p"},"'log'"),", ",Object(r.b)("inlineCode",{parentName:"p"},"'debug'"),", ",Object(r.b)("inlineCode",{parentName:"p"},"'info'"),", ",Object(r.b)("inlineCode",{parentName:"p"},"'error'"),", ",Object(r.b)("inlineCode",{parentName:"p"},"'warning'"),", ",Object(r.b)("inlineCode",{parentName:"p"},"'dir'"),", ",Object(r.b)("inlineCode",{parentName:"p"},"'dirxml'"),", ",Object(r.b)("inlineCode",{parentName:"p"},"'table'"),", ",Object(r.b)("inlineCode",{parentName:"p"},"'trace'"),", ",Object(r.b)("inlineCode",{parentName:"p"},"'clear'"),", ",Object(r.b)("inlineCode",{parentName:"p"},"'startGroup'"),", ",Object(r.b)("inlineCode",{parentName:"p"},"'startGroupCollapsed'"),", ",Object(r.b)("inlineCode",{parentName:"p"},"'endGroup'"),", ",Object(r.b)("inlineCode",{parentName:"p"},"'assert'"),", ",Object(r.b)("inlineCode",{parentName:"p"},"'profile'"),", ",Object(r.b)("inlineCode",{parentName:"p"},"'profileEnd'"),", ",Object(r.b)("inlineCode",{parentName:"p"},"'count'"),", ",Object(r.b)("inlineCode",{parentName:"p"},"'timeEnd'"),"."))}p.isMDXComponent=!0}}]);