(window.webpackJsonp=window.webpackJsonp||[]).push([[497],{569:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return o})),t.d(a,"metadata",(function(){return l})),t.d(a,"toc",(function(){return s})),t.d(a,"default",(function(){return b}));var n=t(3),r=t(7),i=(t(0),t(890)),o=(t(894),t(895),{id:"installation",title:"Installation"}),l={unversionedId:"installation",id:"version-1.11.0/installation",isDocsHomePage:!1,title:"Installation",description:"- Managing browser binaries",source:"@site/versioned_docs/version-1.11.0/installation.mdx",slug:"/installation",permalink:"/docs/installation",version:"1.11.0",sidebar:"version-1.11.0/docs",previous:{title:"Inspector",permalink:"/docs/inspector"},next:{title:"Multi-page scenarios",permalink:"/docs/multi-pages"}},s=[{value:"Managing browser binaries",id:"managing-browser-binaries",children:[]},{value:"Install behind the firewall or proxy",id:"install-behind-the-firewall-or-proxy",children:[]},{value:"Download from artifact repository",id:"download-from-artifact-repository",children:[]},{value:"Skip browser downloads",id:"skip-browser-downloads",children:[]},{value:"Download single browser binary",id:"download-single-browser-binary",children:[]},{value:"Stale browser removal",id:"stale-browser-removal",children:[]}],c={toc:s};function b(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#managing-browser-binaries"}),"Managing browser binaries")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#install-behind-the-firewall-or-proxy"}),"Install behind the firewall or proxy")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#download-from-artifact-repository"}),"Download from artifact repository")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#skip-browser-downloads"}),"Skip browser downloads")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#download-single-browser-binary"}),"Download single browser binary")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#stale-browser-removal"}),"Stale browser removal"))),Object(i.b)("h2",{id:"managing-browser-binaries"},"Managing browser binaries"),Object(i.b)("p",null,"Each version of Playwright needs specific versions of browser binaries to operate. By default Playwright downloads Chromium, WebKit and Firefox browsers into the OS-specific cache folders:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"%USERPROFILE%\\AppData\\Local\\ms-playwright")," on Windows"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"~/Library/Caches/ms-playwright")," on MacOS"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"~/.cache/ms-playwright")," on Linux")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"$ npm i -D playwright\n")),Object(i.b)("p",null,"These browsers will take few hundreds of megabytes of the disk space when installed:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"$ du -hs ./Library/Caches/ms-playwright/*\n281M  chromium-XXXXXX\n187M  firefox-XXXX\n180M  webkit-XXXX\n")),Object(i.b)("p",null,"You can override default behavior using environment variables. When installing Playwright, ask it to download browsers into a specific location:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"# Linux/macOS\n$ PLAYWRIGHT_BROWSERS_PATH=$HOME/pw-browsers npm i -D playwright\n\n# Windows\n$ set PLAYWRIGHT_BROWSERS_PATH=%USERPROFILE%\\pw-browsers\n$ npm i -D playwright\n")),Object(i.b)("p",null,"When running Playwright scripts, ask it to search for browsers in a shared location."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"# Linux/macOS\n$ PLAYWRIGHT_BROWSERS_PATH=$HOME/pw-browsers node playwright-script.js\n\n# Windows\n$ set PLAYWRIGHT_BROWSERS_PATH=%USERPROFILE%\\pw-browsers\n$ node playwright-script.js\n")),Object(i.b)("p",null,"Or you can opt into the hermetic install and place binaries in the local folder:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"# Linux/macOS\n# Places binaries to node_modules/playwright\n$ PLAYWRIGHT_BROWSERS_PATH=0 npm i -D playwright\n\n# Windows\n# Places binaries to node_modules\\playwright\n$ set PLAYWRIGHT_BROWSERS_PATH=0\n$ npm i -D playwright\n")),Object(i.b)("p",null,"Playwright keeps track of packages that need those browsers and will garbage collect them as you update Playwright to the newer versions."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Developers can opt-in in this mode via exporting ",Object(i.b)("inlineCode",{parentName:"p"},"PLAYWRIGHT_BROWSERS_PATH=$HOME/pw-browsers")," in their ",Object(i.b)("inlineCode",{parentName:"p"},".bashrc"),"."))),Object(i.b)("h2",{id:"install-behind-the-firewall-or-proxy"},"Install behind the firewall or proxy"),Object(i.b)("p",null,"By default, Playwright downloads browsers from Microsoft CDN."),Object(i.b)("p",null,"Sometimes companies maintain an internal proxy that blocks direct access to the public resources. In this case, Playwright can be configured to download browsers via a proxy server."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"# Linux/macOS\n$ HTTPS_PROXY=https://192.168.1.78 npm i -D playwright\n\n# Windows\n$ set HTTPS_PROXY=https://192.168.1.78\n$ npm i -D playwright\n")),Object(i.b)("h2",{id:"download-from-artifact-repository"},"Download from artifact repository"),Object(i.b)("p",null,"By default, Playwright downloads browsers from Microsoft CDN."),Object(i.b)("p",null,"Sometimes companies maintain an internal artifact repository to host browser binaries. In this case, Playwright can be configured to download from a custom location using the ",Object(i.b)("inlineCode",{parentName:"p"},"PLAYWRIGHT_DOWNLOAD_HOST")," env variable."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"# Linux/macOS\n$ PLAYWRIGHT_DOWNLOAD_HOST=192.168.1.78 npm i -D playwright\n\n# Windows\n$ set PLAYWRIGHT_DOWNLOAD_HOST=192.168.1.78\n$ npm i -D playwright\n")),Object(i.b)("p",null,"It is also possible to use a per-browser download hosts using ",Object(i.b)("inlineCode",{parentName:"p"},"PLAYWRIGHT_CHROMIUM_DOWNLOAD_HOST"),", ",Object(i.b)("inlineCode",{parentName:"p"},"PLAYWRIGHT_FIREFOX_DOWNLOAD_HOST")," and ",Object(i.b)("inlineCode",{parentName:"p"},"PLAYWRIGHT_WEBKIT_DOWNLOAD_HOST")," env variables that take precedence over ",Object(i.b)("inlineCode",{parentName:"p"},"PLAYWRIGHT_DOWNLOAD_HOST"),"."),Object(i.b)("p",null,"It is also possible to use a per-browser download hosts using ",Object(i.b)("inlineCode",{parentName:"p"},"PLAYWRIGHT_CHROMIUM_DOWNLOAD_HOST"),", ",Object(i.b)("inlineCode",{parentName:"p"},"PLAYWRIGHT_FIREFOX_DOWNLOAD_HOST")," and ",Object(i.b)("inlineCode",{parentName:"p"},"PLAYWRIGHT_WEBKIT_DOWNLOAD_HOST")," env variables that take precedence over ",Object(i.b)("inlineCode",{parentName:"p"},"PLAYWRIGHT_DOWNLOAD_HOST"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"# Linux/macOS\n$ PLAYWRIGHT_FIREFOX_DOWNLOAD_HOST=192.168.1.1 PLAYWRIGHT_DOWNLOAD_HOST=192.168.1.78 npm i -D playwright\n")),Object(i.b)("h2",{id:"skip-browser-downloads"},"Skip browser downloads"),Object(i.b)("p",null,"In certain cases, it is desired to avoid browser downloads altogether because browser binaries are managed separately."),Object(i.b)("p",null,"This can be done by setting ",Object(i.b)("inlineCode",{parentName:"p"},"PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD")," variable before installation."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"# Linux/macOS\n$ PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 npm i -D playwright\n\n# Windows\n$ set PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1\n$ npm i -D playwright\n")),Object(i.b)("h2",{id:"download-single-browser-binary"},"Download single browser binary"),Object(i.b)("p",null,"Playwright ships three packages that bundle only a single browser:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.npmjs.com/package/playwright-chromium"}),Object(i.b)("inlineCode",{parentName:"a"},"playwright-chromium"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.npmjs.com/package/playwright-webkit"}),Object(i.b)("inlineCode",{parentName:"a"},"playwright-webkit"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.npmjs.com/package/playwright-firefox"}),Object(i.b)("inlineCode",{parentName:"a"},"playwright-firefox")))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"All configuration environment variables also apply to these packages."))),Object(i.b)("p",null,"Using these packages is as easy as using a regular Playwright:"),Object(i.b)("p",null,"Install a specific package"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"$ npm i -D playwright-webkit\n")),Object(i.b)("p",null,"Require package"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Notice a proper package name in require\nconst { webkit } = require('playwright-webkit');\n\n(async () => {\n  const browser = await webkit.launch();\n  // ...\n})();\n")),Object(i.b)("h2",{id:"stale-browser-removal"},"Stale browser removal"),Object(i.b)("p",null,"Playwright keeps track of the clients that use its browsers. When there are no more clients that require particular version of the browser, that version is deleted from the system. That way you can safely use Playwright instances of different versions and at the same time, you don't waste disk space for the browsers that are no longer in use."),Object(i.b)("p",null,"To opt-out from the unused browser removal, you can set the ",Object(i.b)("inlineCode",{parentName:"p"},"PLAYWRIGHT_SKIP_BROWSER_GC=1")," environment variable."))}b.isMDXComponent=!0},890:function(e,a,t){"use strict";t.d(a,"a",(function(){return p})),t.d(a,"b",(function(){return m}));var n=t(0),r=t.n(n);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),b=function(e){var a=r.a.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},p=function(e){var a=b(e.components);return r.a.createElement(c.Provider,{value:a},e.children)},O={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},d=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(t),d=n,m=p["".concat(o,".").concat(d)]||p[d]||O[d]||i;return t?r.a.createElement(m,l(l({ref:a},c),{},{components:t})):r.a.createElement(m,l({ref:a},c))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},891:function(e,a,t){"use strict";function n(e){var a,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(r&&(r+=" "),r+=t);else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}a.a=function(){for(var e,a,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(r&&(r+=" "),r+=a);return r}},892:function(e,a,t){"use strict";var n=t(0),r=t(893);a.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},893:function(e,a,t){"use strict";var n=t(0),r=Object(n.createContext)(void 0);a.a=r},894:function(e,a,t){"use strict";t(0),t(892),t(891),t(55)},895:function(e,a,t){"use strict";t(3),t(0)}}]);