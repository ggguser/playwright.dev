(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{201:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),o=(n(0),n(272)),i=(n(275),n(276),{id:"installation",title:"Installation"}),s={unversionedId:"installation",id:"version-1.11.0/installation",isDocsHomePage:!1,title:"Installation",description:"- Managing browser binaries",source:"@site/versioned_docs/version-1.11.0/installation.mdx",slug:"/installation",permalink:"/java/docs/installation",version:"1.11.0",sidebar:"version-1.11.0/docs",previous:{title:"Inspector",permalink:"/java/docs/inspector"},next:{title:"Multi-page scenarios",permalink:"/java/docs/multi-pages"}},l=[{value:"Managing browser binaries",id:"managing-browser-binaries",children:[]},{value:"Install behind the firewall or proxy",id:"install-behind-the-firewall-or-proxy",children:[]},{value:"Download from artifact repository",id:"download-from-artifact-repository",children:[]},{value:"Skip browser downloads",id:"skip-browser-downloads",children:[]},{value:"Stale browser removal",id:"stale-browser-removal",children:[]}],c={toc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#managing-browser-binaries"}),"Managing browser binaries")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#install-behind-the-firewall-or-proxy"}),"Install behind the firewall or proxy")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#download-from-artifact-repository"}),"Download from artifact repository")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#skip-browser-downloads"}),"Skip browser downloads")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#stale-browser-removal"}),"Stale browser removal"))),Object(o.b)("h2",{id:"managing-browser-binaries"},"Managing browser binaries"),Object(o.b)("p",null,"Each version of Playwright needs specific versions of browser binaries to operate. By default Playwright downloads Chromium, WebKit and Firefox browsers into the OS-specific cache folders:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"%USERPROFILE%\\AppData\\Local\\ms-playwright")," on Windows"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"~/Library/Caches/ms-playwright")," on MacOS"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"~/.cache/ms-playwright")," on Linux")),Object(o.b)("p",null,"These browsers will take few hundreds of megabytes of the disk space when installed:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"$ du -hs ./Library/Caches/ms-playwright/*\n281M  chromium-XXXXXX\n187M  firefox-XXXX\n180M  webkit-XXXX\n")),Object(o.b)("p",null,"You can override default behavior using environment variables. When installing Playwright, ask it to download browsers into a specific location:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"# Linux/macOS\n$ PLAYWRIGHT_BROWSERS_PATH=$HOME/pw-browsers mvn test\n")),Object(o.b)("p",null,"When running Playwright scripts, ask it to search for browsers in a shared location."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"# Windows\n$ set PLAYWRIGHT_BROWSERS_PATH=%USERPROFILE%\\pw-browsers\n$ mvn test\n")),Object(o.b)("p",null,"Or you can opt into the hermetic install and place binaries in the local folder:"),Object(o.b)("p",null,"Playwright keeps track of packages that need those browsers and will garbage collect them as you update Playwright to the newer versions."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Developers can opt-in in this mode via exporting ",Object(o.b)("inlineCode",{parentName:"p"},"PLAYWRIGHT_BROWSERS_PATH=$HOME/pw-browsers")," in their ",Object(o.b)("inlineCode",{parentName:"p"},".bashrc"),"."))),Object(o.b)("h2",{id:"install-behind-the-firewall-or-proxy"},"Install behind the firewall or proxy"),Object(o.b)("p",null,"By default, Playwright downloads browsers from Microsoft CDN."),Object(o.b)("p",null,"Sometimes companies maintain an internal proxy that blocks direct access to the public resources. In this case, Playwright can be configured to download browsers via a proxy server."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"# Linux/macOS\n$ HTTPS_PROXY=https://192.168.1.78 mvn test\n\n# Windows\n$ set HTTPS_PROXY=https://192.168.1.78\n$ mvn test\n")),Object(o.b)("h2",{id:"download-from-artifact-repository"},"Download from artifact repository"),Object(o.b)("p",null,"By default, Playwright downloads browsers from Microsoft CDN."),Object(o.b)("p",null,"Sometimes companies maintain an internal artifact repository to host browser binaries. In this case, Playwright can be configured to download from a custom location using the ",Object(o.b)("inlineCode",{parentName:"p"},"PLAYWRIGHT_DOWNLOAD_HOST")," env variable."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"# Linux/macOS\n$ PLAYWRIGHT_DOWNLOAD_HOST=192.168.1.78 mvn test\n\n# Windows\n$ set PLAYWRIGHT_DOWNLOAD_HOST=192.168.1.78\n$ mvn test\n")),Object(o.b)("p",null,"It is also possible to use a per-browser download hosts using ",Object(o.b)("inlineCode",{parentName:"p"},"PLAYWRIGHT_CHROMIUM_DOWNLOAD_HOST"),", ",Object(o.b)("inlineCode",{parentName:"p"},"PLAYWRIGHT_FIREFOX_DOWNLOAD_HOST")," and ",Object(o.b)("inlineCode",{parentName:"p"},"PLAYWRIGHT_WEBKIT_DOWNLOAD_HOST")," env variables that take precedence over ",Object(o.b)("inlineCode",{parentName:"p"},"PLAYWRIGHT_DOWNLOAD_HOST"),"."),Object(o.b)("p",null,"It is also possible to use a per-browser download hosts using ",Object(o.b)("inlineCode",{parentName:"p"},"PLAYWRIGHT_CHROMIUM_DOWNLOAD_HOST"),", ",Object(o.b)("inlineCode",{parentName:"p"},"PLAYWRIGHT_FIREFOX_DOWNLOAD_HOST")," and ",Object(o.b)("inlineCode",{parentName:"p"},"PLAYWRIGHT_WEBKIT_DOWNLOAD_HOST")," env variables that take precedence over ",Object(o.b)("inlineCode",{parentName:"p"},"PLAYWRIGHT_DOWNLOAD_HOST"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"# Linux/macOS\n$ PLAYWRIGHT_FIREFOX_DOWNLOAD_HOST=192.168.1.1 PLAYWRIGHT_DOWNLOAD_HOST=192.168.1.78 mvn test\n")),Object(o.b)("h2",{id:"skip-browser-downloads"},"Skip browser downloads"),Object(o.b)("p",null,"In certain cases, it is desired to avoid browser downloads altogether because browser binaries are managed separately."),Object(o.b)("p",null,"This can be done by setting ",Object(o.b)("inlineCode",{parentName:"p"},"PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD")," variable before installation."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"# Linux/macOS\n$ PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 mvn test\n\n# Windows\n$ set PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1\n$ mvn test\n")),Object(o.b)("h2",{id:"stale-browser-removal"},"Stale browser removal"),Object(o.b)("p",null,"Playwright keeps track of the clients that use its browsers. When there are no more clients that require particular version of the browser, that version is deleted from the system. That way you can safely use Playwright instances of different versions and at the same time, you don't waste disk space for the browsers that are no longer in use."),Object(o.b)("p",null,"To opt-out from the unused browser removal, you can set the ",Object(o.b)("inlineCode",{parentName:"p"},"PLAYWRIGHT_SKIP_BROWSER_GC=1")," environment variable."))}b.isMDXComponent=!0},271:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},272:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,O=p["".concat(i,".").concat(d)]||p[d]||u[d]||o;return n?r.a.createElement(O,s(s({ref:t},c),{},{components:n})):r.a.createElement(O,s({ref:t},c))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},273:function(e,t,n){"use strict";var a=n(0),r=n(274);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},274:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},275:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(273),i=n(271),s=n(53),l=n.n(s),c=37,b=39;t.a=function(e){var t=e.lazy,n=e.block,s=e.defaultValue,p=e.values,u=e.groupId,d=e.className,O=Object(o.a)(),m=O.tabGroupChoices,f=O.setTabGroupChoices,h=Object(a.useState)(s),w=h[0],j=h[1],v=a.Children.toArray(e.children);if(null!=u){var g=m[u];null!=g&&g!==w&&p.some((function(e){return e.value===g}))&&j(g)}var y=function(e){j(e),null!=u&&f(u,e)},N=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":w===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":w===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return y(t)},onClick:function(){y(t)}},n)}))),t?Object(a.cloneElement)(v.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}},276:function(e,t,n){"use strict";var a=n(3),r=n(0),o=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return o.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}}}]);