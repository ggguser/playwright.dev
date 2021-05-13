(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{131:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),l=(a(0),a(153)),s=(a(156),a(157),{id:"class-jshandle",title:"JSHandle"}),c={unversionedId:"api/class-jshandle",id:"api/class-jshandle",isDocsHomePage:!1,title:"JSHandle",description:"JSHandle represents an in-page JavaScript object. JSHandles can be created with the Page.EvaluateHandleAsync(expression, \u2026) method.",source:"@site/docs/api/class-jshandle.mdx",slug:"/api/class-jshandle",permalink:"/dotnet/docs/api/class-jshandle",version:"current",sidebar:"api",previous:{title:"Frame",permalink:"/dotnet/docs/api/class-frame"},next:{title:"Keyboard",permalink:"/dotnet/docs/api/class-keyboard"}},i=[{value:"JsHandle.AsElement()",id:"jshandleaselement",children:[]},{value:"JsHandle.DisposeAsync()",id:"jshandledisposeasync",children:[]},{value:"JsHandle.EvaluateAsync(expression, \u2026)",id:"jshandleevaluateasyncexpression-",children:[]},{value:"JsHandle.EvaluateHandleAsync(expression, \u2026)",id:"jshandleevaluatehandleasyncexpression-",children:[]},{value:"JsHandle.GetPropertiesAsync()",id:"jshandlegetpropertiesasync",children:[]},{value:"JsHandle.GetPropertyAsync(propertyName)",id:"jshandlegetpropertyasyncpropertyname",children:[]},{value:"JsHandle.JsonValueAsync()",id:"jshandlejsonvalueasync",children:[]}],o={toc:i};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"JSHandle represents an in-page JavaScript object. JSHandles can be created with the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/dotnet/docs/api/class-page#pageevaluatehandleasyncexpression-"}),"Page.EvaluateHandleAsync(expression, \u2026)")," method."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'var windowHandle = await page.EvaluateHandleAsync("() => window");\n')),Object(l.b)("p",null,"JSHandle prevents the referenced JavaScript object being garbage collected unless the handle is exposed with ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/dotnet/docs/api/class-jshandle#jshandledisposeasync"}),"JsHandle.DisposeAsync()"),". JSHandles are auto-disposed when their origin frame gets navigated or the parent context gets destroyed."),Object(l.b)("p",null,"JSHandle instances can be used as an argument in ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/dotnet/docs/api/class-page#pageevalonselectorasyncselector-expression-"}),"Page.EvalOnSelectorAsync(selector, expression, \u2026)"),", ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/dotnet/docs/api/class-page#pageevaluateasyncexpression-"}),"Page.EvaluateAsync(expression, \u2026)")," and ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/dotnet/docs/api/class-page#pageevaluatehandleasyncexpression-"}),"Page.EvaluateHandleAsync(expression, \u2026)")," methods."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-jshandle#jshandleaselement"}),"JsHandle.AsElement()")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-jshandle#jshandledisposeasync"}),"JsHandle.DisposeAsync()")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-jshandle#jshandleevaluateasyncexpression-"}),"JsHandle.EvaluateAsync(expression, \u2026)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-jshandle#jshandleevaluatehandleasyncexpression-"}),"JsHandle.EvaluateHandleAsync(expression, \u2026)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-jshandle#jshandlegetpropertiesasync"}),"JsHandle.GetPropertiesAsync()")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-jshandle#jshandlegetpropertyasyncpropertyname"}),"JsHandle.GetPropertyAsync(propertyName)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-jshandle#jshandlejsonvalueasync"}),"JsHandle.JsonValueAsync()"))),Object(l.b)("h2",{id:"jshandleaselement"},"JsHandle.AsElement()"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"}),"null"),"|",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle"),">")),Object(l.b)("p",null,"Returns either ",Object(l.b)("inlineCode",{parentName:"p"},"null")," or the object handle itself, if the object handle is an instance of ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/dotnet/docs/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle"),"."),Object(l.b)("h2",{id:"jshandledisposeasync"},"JsHandle.DisposeAsync()"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">")),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"jsHandle.dispose")," method stops referencing the element handle."),Object(l.b)("h2",{id:"jshandleevaluateasyncexpression-"},"JsHandle.EvaluateAsync(expression, \u2026)"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"expression")," <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> JavaScript expression to be evaluated in the browser context. If it looks like a function declaration, it is interpreted as a function. Otherwise, evaluated as an expression."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"arg")," <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/core-concepts#evaluation-argument",title:"EvaluationArgument"}),"EvaluationArgument"),"> Optional argument to pass to ",Object(l.b)("inlineCode",{parentName:"li"},"expression"),"."),Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"object"),">")),Object(l.b)("p",null,"Returns the return value of ",Object(l.b)("inlineCode",{parentName:"p"},"expression"),"."),Object(l.b)("p",null,"This method passes this handle as the first argument to ",Object(l.b)("inlineCode",{parentName:"p"},"expression"),"."),Object(l.b)("p",null,"If ",Object(l.b)("inlineCode",{parentName:"p"},"expression")," returns a ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),", then ",Object(l.b)("inlineCode",{parentName:"p"},"handle.evaluate")," would wait for the promise to resolve and return its value."),Object(l.b)("p",null,"Examples:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'var tweetHandle = await page.QuerySelectorAsync(".tweet .retweets");\nAssert.Equals("10 retweets", await tweetHandle.EvaluateAsync("node => node.innerText"));\n')),Object(l.b)("h2",{id:"jshandleevaluatehandleasyncexpression-"},"JsHandle.EvaluateHandleAsync(expression, \u2026)"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"expression")," <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> JavaScript expression to be evaluated in the browser context. If it looks like a function declaration, it is interpreted as a function. Otherwise, evaluated as an expression."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"arg")," <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/core-concepts#evaluation-argument",title:"EvaluationArgument"}),"EvaluationArgument"),"> Optional argument to pass to ",Object(l.b)("inlineCode",{parentName:"li"},"expression"),"."),Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-jshandle",title:"JSHandle"}),"JSHandle"),">")),Object(l.b)("p",null,"Returns the return value of ",Object(l.b)("inlineCode",{parentName:"p"},"expression")," as a ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/dotnet/docs/api/class-jshandle",title:"JSHandle"}),"JSHandle"),"."),Object(l.b)("p",null,"This method passes this handle as the first argument to ",Object(l.b)("inlineCode",{parentName:"p"},"expression"),"."),Object(l.b)("p",null,"The only difference between ",Object(l.b)("inlineCode",{parentName:"p"},"jsHandle.evaluate")," and ",Object(l.b)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," is that ",Object(l.b)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," returns ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/dotnet/docs/api/class-jshandle",title:"JSHandle"}),"JSHandle"),"."),Object(l.b)("p",null,"If the function passed to the ",Object(l.b)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," returns a ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),", then ",Object(l.b)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," would wait for the promise to resolve and return its value."),Object(l.b)("p",null,"See ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/dotnet/docs/api/class-page#pageevaluatehandleasyncexpression-"}),"Page.EvaluateHandleAsync(expression, \u2026)")," for more details."),Object(l.b)("h2",{id:"jshandlegetpropertiesasync"},"JsHandle.GetPropertiesAsync()"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map",title:"Map"}),"Map"),"<",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),", ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-jshandle",title:"JSHandle"}),"JSHandle"),">>")),Object(l.b)("p",null,"The method returns a map with ",Object(l.b)("strong",{parentName:"p"},"own property names")," as keys and JSHandle instances for the property values."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'var handle = await page.EvaluateHandleAsync("() => ({window, document}");\nvar properties = await handle.GetPropertiesAsync();\nvar windowHandle = properties["window"];\nvar documentHandle = properties["document"];\nawait handle.DisposeAsync();\n')),Object(l.b)("h2",{id:"jshandlegetpropertyasyncpropertyname"},"JsHandle.GetPropertyAsync(propertyName)"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"propertyName")," <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> property to get"),Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-jshandle",title:"JSHandle"}),"JSHandle"),">")),Object(l.b)("p",null,"Fetches a single property from the referenced object."),Object(l.b)("h2",{id:"jshandlejsonvalueasync"},"JsHandle.JsonValueAsync()"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"object"),">")),Object(l.b)("p",null,"Returns a JSON representation of the object. If the object has a ",Object(l.b)("inlineCode",{parentName:"p"},"toJSON")," function, it ",Object(l.b)("strong",{parentName:"p"},"will not be called"),"."),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"The method will return an empty JSON object if the referenced object is not stringifiable. It will throw an error if the object has circular references."))))}p.isMDXComponent=!0},152:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},153:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),b=p(a),u=n,j=b["".concat(s,".").concat(u)]||b[u]||d[u]||l;return a?r.a.createElement(j,c(c({ref:t},o),{},{components:a})):r.a.createElement(j,c({ref:t},o))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var o=2;o<l;o++)s[o]=a[o];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},154:function(e,t,a){"use strict";var n=a(0),r=a(155);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},155:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},156:function(e,t,a){"use strict";a(0),a(154),a(152),a(53)},157:function(e,t,a){"use strict";a(3),a(0)}}]);