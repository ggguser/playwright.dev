(window.webpackJsonp=window.webpackJsonp||[]).push([[286],{354:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return h}));var a=r(3),o=r(7),n=(r(0),r(393)),i=r(396),s=r(397),l={id:"browsers",title:"Browsers"},c={unversionedId:"browsers",id:"version-1.11.0/browsers",isDocsHomePage:!1,title:"Browsers",description:"Each version of Playwright needs specific versions of browser binaries to operate. By default Playwright downloads Chromium, WebKit and Firefox browser versions that it supports. With every release, Playwright updates the versions of the browsers it supports, so that the latest Playwright would support the latest browsers at any moment.",source:"@site/versioned_docs/version-1.11.0/browsers.mdx",slug:"/browsers",permalink:"/python/docs/browsers",version:"1.11.0",sidebar:"version-1.11.0/docs",previous:{title:"Authentication",permalink:"/python/docs/auth"},next:{title:"Dialogs",permalink:"/python/docs/dialogs"}},b=[{value:"Chromium",id:"chromium",children:[]},{value:"Firefox",id:"firefox",children:[{value:"Firefox-Stable",id:"firefox-stable",children:[]}]},{value:"WebKit",id:"webkit",children:[]},{value:"Google Chrome &amp; Microsoft Edge",id:"google-chrome--microsoft-edge",children:[{value:"When to use Google Chrome &amp; Microsoft Edge and when not to?",id:"when-to-use-google-chrome--microsoft-edge-and-when-not-to",children:[]}]}],u={toc:b};function h(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Each version of Playwright needs specific versions of browser binaries to operate. By default Playwright downloads Chromium, WebKit and Firefox browser versions that it supports. With every release, Playwright updates the versions of the browsers it supports, so that the latest Playwright would support the latest browsers at any moment."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"#chromium"}),"Chromium")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"#firefox"}),"Firefox")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"#webkit"}),"WebKit")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"#google-chrome--microsoft-edge"}),"Google Chrome & Microsoft Edge"))),Object(n.b)("h2",{id:"chromium"},"Chromium"),Object(n.b)("p",null,"For Google Chrome, Microsoft Edge and other Chromium-based browsers, by default, Playwright uses open source Chromium builds. These builds match the current ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://support.google.com/chrome/a/answer/9027636?hl=en"}),"Chrome Dev Channel")," at the time of each Playwright release, i.e. it is new with every Playwright update. Since Chromium project is ahead of the branded browsers, when the world is on Google Chrome 89, Playwright already supports Chromium 91 that will hit Google Chrome and Microsoft Edge if a few weeks."),Object(n.b)("p",null,"There is also a way to opt into using Google Chrome's or Microsoft Edge's branded builds for testing. For details on when to opt into stable channels, refer to the ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"#google-chrome--microsoft-edge"}),"Google Chrome & Microsoft Edge")," section below."),Object(n.b)("h2",{id:"firefox"},"Firefox"),Object(n.b)("p",null,"Playwright's Firefox version matches the recent ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.mozilla.org/en-US/firefox/channel/desktop/"}),"Firefox Beta")," build."),Object(n.b)("h3",{id:"firefox-stable"},"Firefox-Stable"),Object(n.b)("p",null,"Playwright team maintains a Playwright Firefox version that matches the latest Firefox Stable, a.k.a. ",Object(n.b)("inlineCode",{parentName:"p"},"firefox-stable"),"."),Object(n.b)("p",null,"Using ",Object(n.b)("inlineCode",{parentName:"p"},"firefox-stable")," is a 2-steps process:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Installing ",Object(n.b)("inlineCode",{parentName:"p"},"firefox-stable")," with Playwright CLI."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"$ playwright install firefox-stable\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Using ",Object(n.b)("inlineCode",{parentName:"p"},"firefox-stable")," channel when launching browser."))),Object(n.b)(i.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(n.b)(s.a,{value:"sync",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),'browser = playwright.firefox.launch(channel="firefox-stable")\n'))),Object(n.b)(s.a,{value:"async",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),'browser = await playwright.firefox.launch(channel="firefox-stable")\n')))),Object(n.b)("h2",{id:"webkit"},"WebKit"),Object(n.b)("p",null,"Playwright's WebKit version matches the recent WebKit trunk build, before it is used in Apple Safari and other WebKit-based browsers. This gives a lot of lead time to react on the potential browser update issues. We are also working on a dedicated support for builds that would match Apple Safari Technology Preview."),Object(n.b)("h2",{id:"google-chrome--microsoft-edge"},"Google Chrome & Microsoft Edge"),Object(n.b)("p",null,"While Playwright will download and use the recent Chromium build by default, it can operate against the stock Google Chrome and Microsoft Edge browsers available on the machine. In particular, current Playwright version will support Stable and Beta channels of these browsers. Here is how you can opt into using the stock browser:"),Object(n.b)(i.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(n.b)(s.a,{value:"sync",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),'# Can be "msedge", "chrome-beta", "msedge-beta", "msedge-dev", etc.\nbrowser = playwright.chromium.launch(channel="chrome")\n'))),Object(n.b)(s.a,{value:"async",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),'# Can be "msedge", "chrome-beta", "msedge-beta", "msedge-dev", etc.\nbrowser = await playwright.chromium.launch(channel="chrome")\n')))),Object(n.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(n.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(n.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(n.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(n.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(n.b)("p",{parentName:"div"},"Playwright bundles a recent Chromium build, but not Google Chrome or Microsoft Edge browsers - these should be installed manually before use."))),Object(n.b)("h3",{id:"when-to-use-google-chrome--microsoft-edge-and-when-not-to"},"When to use Google Chrome & Microsoft Edge and when not to?"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Defaults")),Object(n.b)("p",null,"Using default Playwright configuration with the latest Chromium is a good idea most of the time. Since Playwright is ahead of Stable channels for the browsers, it gives peace of mind that the upcoming Google Chrome or Microsoft Edge releases won't break your site. You catch breakage early and have a lot of time to fix it before the official Chrome update."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Regression testing")),Object(n.b)("p",null,"Having said that, testing policies often require regression testing to be performed against the current publicly available browsers. In this case, you can opt into one of the stable channels, ",Object(n.b)("inlineCode",{parentName:"p"},'"chrome"')," or ",Object(n.b)("inlineCode",{parentName:"p"},'"msedge"'),"."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Media codecs")),Object(n.b)("p",null,"Another reason for testing using official binaries is to test functionality related to media codecs. Chromium does not have all the codecs that Google Chrome or Microsoft Edge are bundling due to various licensing considerations and agreements. If your site relies on this kind of codecs (which is rarely the case), you also want to use official channel."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Enterprise policy")),Object(n.b)("p",null,"Google Chrome and Microsoft Edge respect enterprise policies, which include limitations to the capabilities, network proxy, mandatory extensions that stand in the way of testing. So if you are a part of the organization that uses such policies, it is the easiest to use bundled Chromium for your local testing, you can still opt into stable channels on the bots that are typically free of such restrictions."))}h.isMDXComponent=!0},392:function(e,t,r){"use strict";function a(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=a(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}},393:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var a=r(0),o=r.n(a);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),b=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=b(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=b(r),p=a,d=u["".concat(i,".").concat(p)]||u[p]||h[p]||n;return r?o.a.createElement(d,s(s({ref:t},c),{},{components:r})):o.a.createElement(d,s({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<n;c++)i[c]=r[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},394:function(e,t,r){"use strict";var a=r(0),o=r(395);t.a=function(){var e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},395:function(e,t,r){"use strict";var a=r(0),o=Object(a.createContext)(void 0);t.a=o},396:function(e,t,r){"use strict";var a=r(0),o=r.n(a),n=r(394),i=r(392),s=r(53),l=r.n(s),c=37,b=39;t.a=function(e){var t=e.lazy,r=e.block,s=e.defaultValue,u=e.values,h=e.groupId,p=e.className,d=Object(n.a)(),m=d.tabGroupChoices,f=d.setTabGroupChoices,g=Object(a.useState)(s),y=g[0],w=g[1],O=a.Children.toArray(e.children);if(null!=h){var j=m[h];null!=j&&j!==y&&u.some((function(e){return e.value===j}))&&w(j)}var v=function(e){w(e),null!=h&&f(h,e)},N=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":r},p)},u.map((function(e){var t=e.value,r=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,r){switch(r.keyCode){case b:!function(e,t){var r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return v(t)},onClick:function(){v(t)}},r)}))),t?Object(a.cloneElement)(O.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},397:function(e,t,r){"use strict";var a=r(3),o=r(0),n=r.n(o);t.a=function(e){var t=e.children,r=e.hidden,o=e.className;return n.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:r,className:o}),t)}}}]);