(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{109:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return s}));var n=a(3),o=a(7),l=(a(0),a(153)),r=(a(156),a(157),{id:"class-download",title:"Download"}),c={unversionedId:"api/class-download",id:"api/class-download",isDocsHomePage:!1,title:"Download",description:"Download] objects are dispatched by page via the [event Page.Download event.",source:"@site/docs/api/class-download.mdx",slug:"/api/class-download",permalink:"/dotnet/docs/api/class-download",version:"current",sidebar:"api",previous:{title:"Dialog",permalink:"/dotnet/docs/api/class-dialog"},next:{title:"ElementHandle",permalink:"/dotnet/docs/api/class-elementhandle"}},d=[{value:"Download.CreateReadStreamAsync()",id:"downloadcreatereadstreamasync",children:[]},{value:"Download.DeleteAsync()",id:"downloaddeleteasync",children:[]},{value:"Download.FailureAsync()",id:"downloadfailureasync",children:[]},{value:"Download.PathAsync()",id:"downloadpathasync",children:[]},{value:"Download.SaveAsAsync(path)",id:"downloadsaveasasyncpath",children:[]},{value:"Download.SuggestedFilename",id:"downloadsuggestedfilename",children:[]},{value:"Download.Url",id:"downloadurl",children:[]}],i={toc:d};function s(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/dotnet/docs/api/class-download",title:"Download"}),"Download")," objects are dispatched by page via the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/dotnet/docs/api/class-page#eventpagedownload"}),"event Page.Download")," event."),Object(l.b)("p",null,"If ",Object(l.b)("inlineCode",{parentName:"p"},"downloadsPath")," isn't specified, all the downloaded files belonging to the browser context are deleted when the browser context is closed. And all downloaded files are deleted when the browser closes."),Object(l.b)("p",null,"Download event is emitted once the download starts. Download path becomes available once download completes:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'var downloadTask = page.WaitForDownloadAsync();\nawait Task.WhenAll(downloadTask, page.ClickAsync("#downloadButton"));\nConsole.WriteLine(await downloadTask.Result.PathAsync());\n')),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"Browser context ",Object(l.b)("strong",{parentName:"p"},"must")," be created with the ",Object(l.b)("inlineCode",{parentName:"p"},"acceptDownloads")," set to ",Object(l.b)("inlineCode",{parentName:"p"},"true")," when user needs access to the downloaded content. If ",Object(l.b)("inlineCode",{parentName:"p"},"acceptDownloads")," is not set, download events are emitted, but the actual download is not performed and user has no access to the downloaded files."))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-download#downloadcreatereadstreamasync"}),"Download.CreateReadStreamAsync()")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-download#downloaddeleteasync"}),"Download.DeleteAsync()")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-download#downloadfailureasync"}),"Download.FailureAsync()")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-download#downloadpathasync"}),"Download.PathAsync()")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-download#downloadsaveasasyncpath"}),"Download.SaveAsAsync(path)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-download#downloadsuggestedfilename"}),"Download.SuggestedFilename")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-download#downloadurl"}),"Download.Url"))),Object(l.b)("h2",{id:"downloadcreatereadstreamasync"},"Download.CreateReadStreamAsync()"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"}),"null"),"|","[Stream]",">")),Object(l.b)("p",null,"Returns readable stream for current download or ",Object(l.b)("inlineCode",{parentName:"p"},"null")," if download failed."),Object(l.b)("h2",{id:"downloaddeleteasync"},"Download.DeleteAsync()"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">")),Object(l.b)("p",null,"Deletes the downloaded file. Will wait for the download to finish if necessary."),Object(l.b)("h2",{id:"downloadfailureasync"},"Download.FailureAsync()"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"}),"null"),"|",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">")),Object(l.b)("p",null,"Returns download error if any. Will wait for the download to finish if necessary."),Object(l.b)("h2",{id:"downloadpathasync"},"Download.PathAsync()"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"}),"null"),"|",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">")),Object(l.b)("p",null,"Returns path to the downloaded file in case of successful download. The method will wait for the download to finish if necessary. The method throws when connected remotely."),Object(l.b)("h2",{id:"downloadsaveasasyncpath"},"Download.SaveAsAsync(path)"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"path")," <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> Path where the download should be copied."),Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">")),Object(l.b)("p",null,"Copy the download to a user-specified path. It is safe to call this method while the download is still in progress. Will wait for the download to finish if necessary."),Object(l.b)("h2",{id:"downloadsuggestedfilename"},"Download.SuggestedFilename"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">")),Object(l.b)("p",null,"Returns suggested filename for this download. It is typically computed by the browser from the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition"}),Object(l.b)("inlineCode",{parentName:"a"},"Content-Disposition"))," response header or the ",Object(l.b)("inlineCode",{parentName:"p"},"download")," attribute. See the spec on ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://html.spec.whatwg.org/#downloading-resources"}),"whatwg"),". Different browsers can use different logic for computing it."),Object(l.b)("h2",{id:"downloadurl"},"Download.Url"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">")),Object(l.b)("p",null,"Returns downloaded url."))}s.isMDXComponent=!0},152:function(e,t,a){"use strict";function n(e){var t,a,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(o&&(o+=" "),o+=a);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,a=0,o="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}},153:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return w}));var n=a(0),o=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=o.a.createContext({}),s=function(e){var t=o.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=s(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,r=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),b=s(a),u=n,w=b["".concat(r,".").concat(u)]||b[u]||p[u]||l;return a?o.a.createElement(w,c(c({ref:t},i),{},{components:a})):o.a.createElement(w,c({ref:t},i))}));function w(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=u;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var i=2;i<l;i++)r[i]=a[i];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},154:function(e,t,a){"use strict";var n=a(0),o=a(155);t.a=function(){var e=Object(n.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},155:function(e,t,a){"use strict";var n=a(0),o=Object(n.createContext)(void 0);t.a=o},156:function(e,t,a){"use strict";a(0),a(154),a(152),a(53)},157:function(e,t,a){"use strict";a(3),a(0)}}]);