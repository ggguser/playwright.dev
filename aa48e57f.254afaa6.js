(window.webpackJsonp=window.webpackJsonp||[]).push([[526],{597:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(890)),i=(n(894),n(895),{id:"debug",title:"Debugging tools"}),c={unversionedId:"debug",id:"version-1.9.0/debug",isDocsHomePage:!1,title:"Debugging tools",description:"Playwright scripts work with existing debugging tools, like Node.js debuggers and browser developer tools. Playwright also introduces new debugging features for browser automation.",source:"@site/versioned_docs/version-1.9.0/debug.mdx",slug:"/debug",permalink:"/docs/1.9.0/debug",version:"1.9.0",sidebar:"version-1.9.0/docs",previous:{title:"Core concepts",permalink:"/docs/1.9.0/core-concepts"},next:{title:"Supported languages",permalink:"/docs/1.9.0/languages"}},l=[{value:"Playwright Inspector",id:"playwright-inspector",children:[]},{value:"Run in headful mode",id:"run-in-headful-mode",children:[]},{value:"Visual Studio Code debugger (Node.JS)",id:"visual-studio-code-debugger-nodejs",children:[{value:"Use launch config",id:"use-launch-config",children:[]},{value:"Use the new JavaScript debugging terminal",id:"use-the-new-javascript-debugging-terminal",children:[]}]},{value:"Browser Developer Tools",id:"browser-developer-tools",children:[{value:"API for Chromium",id:"api-for-chromium",children:[]}]},{value:"Run in Debug Mode",id:"run-in-debug-mode",children:[{value:"Defaults",id:"defaults",children:[]},{value:"Debugging Selectors",id:"debugging-selectors",children:[]},{value:"Evaluate Source Maps",id:"evaluate-source-maps",children:[]}]},{value:"Verbose API logs",id:"verbose-api-logs",children:[]}],s={toc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Playwright scripts work with existing debugging tools, like Node.js debuggers and browser developer tools. Playwright also introduces new debugging features for browser automation."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#playwright-inspector"}),"Playwright Inspector")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#run-in-headful-mode"}),"Run in headful mode")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#visual-studio-code-debugger-nodejs"}),"Visual Studio Code debugger (Node.JS)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#browser-developer-tools"}),"Browser Developer Tools")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#run-in-debug-mode"}),"Run in Debug Mode")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#verbose-api-logs"}),"Verbose API logs"))),Object(a.b)("h2",{id:"playwright-inspector"},"Playwright Inspector"),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/1.9.0/inspector"}),"Playwright Inspector")," is a GUI tool that helps authoring and debugging Playwright scripts. That's our default recommended tool for scripts troubleshooting."),Object(a.b)("img",{width:"712",alt:"Playwright Inspector",src:"https://user-images.githubusercontent.com/883973/108614092-8c478a80-73ac-11eb-9597-67dfce110e00.png"}),Object(a.b)("h2",{id:"run-in-headful-mode"},"Run in headful mode"),Object(a.b)("p",null,"Playwright runs browsers in headless mode by default. To change this behavior, use ",Object(a.b)("inlineCode",{parentName:"p"},"headless: false")," as a launch option. You can also use the ",Object(a.b)("inlineCode",{parentName:"p"},"slowMo")," option to slow down execution and follow along while debugging."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"await chromium.launch({ headless: false, slowMo: 100 }); // or firefox, webkit\n")),Object(a.b)("h2",{id:"visual-studio-code-debugger-nodejs"},"Visual Studio Code debugger (Node.JS)"),Object(a.b)("p",null,"The VS Code debugger can be used to pause and resume execution of Playwright scripts with breakpoints. The debugger can be configured in two ways."),Object(a.b)("h3",{id:"use-launch-config"},"Use launch config"),Object(a.b)("p",null,"Setup ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://code.visualstudio.com/docs/nodejs/nodejs-debugging"}),Object(a.b)("inlineCode",{parentName:"a"},"launch.json")," configuration")," for your Node.js project. Once configured launch the scripts with F5 and use breakpoints."),Object(a.b)("h3",{id:"use-the-new-javascript-debugging-terminal"},"Use the new JavaScript debugging terminal"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Set a breakpoint in VS Code",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Use the ",Object(a.b)("inlineCode",{parentName:"li"},"debugger")," keyword or set a breakpoint in the VS Code UI"))),Object(a.b)("li",{parentName:"ol"},"Run your Node.js script from the terminal")),Object(a.b)("h2",{id:"browser-developer-tools"},"Browser Developer Tools"),Object(a.b)("p",null,"You can use browser developer tools in Chromium, Firefox and WebKit while running a Playwright script. Developer tools help to:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Inspect the DOM tree and ",Object(a.b)("strong",{parentName:"li"},"find element selectors")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"See console logs")," during execution (or learn how to ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/1.9.0/verification#console-logs"}),"read logs via API"),")"),Object(a.b)("li",{parentName:"ul"},"Check ",Object(a.b)("strong",{parentName:"li"},"network activity")," and other developer tools features")),Object(a.b)("a",{href:"https://user-images.githubusercontent.com/284612/77234134-5f21a500-6b69-11ea-92ec-1c146e1333ec.png"},Object(a.b)("img",{src:"https://user-images.githubusercontent.com/284612/77234134-5f21a500-6b69-11ea-92ec-1c146e1333ec.png",width:"500",alt:"Chromium Developer Tools"})),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"For WebKit"),": Note that launching WebKit Inspector during the execution will prevent the Playwright script from executing any further.")),Object(a.b)("h3",{id:"api-for-chromium"},"API for Chromium"),Object(a.b)("p",null,"In Chromium, you can also open developer tools through a launch option."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"await chromium.launch({ devtools: true });\n")),Object(a.b)("h2",{id:"run-in-debug-mode"},"Run in Debug Mode"),Object(a.b)("p",null,"Set the ",Object(a.b)("inlineCode",{parentName:"p"},"PWDEBUG")," environment variable to run your scripts in debug mode. This configures the browser for debugging."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"# Linux/macOS\n$ PWDEBUG=1 npm run test\n\n# Windows\n$ set PWDEBUG=1\n$ npm run test\n")),Object(a.b)("h3",{id:"defaults"},"Defaults"),Object(a.b)("p",null,"With PWDEBUG, the following defaults are configured for you:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Run in headful"),": With PWDEBUG, browsers always launch in headful mode"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Disables timeout"),": PWDEBUG sets timeout to 0 (= no timeout)")),Object(a.b)("h3",{id:"debugging-selectors"},"Debugging Selectors"),Object(a.b)("p",null,"PWDEBUG configures a ",Object(a.b)("inlineCode",{parentName:"p"},"playwright")," object in the browser to highlight ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/1.9.0/selectors"}),"Playwright selectors"),". This can be used to verify text or composite selectors. To use this:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Setup a breakpoint to pause the execution"),Object(a.b)("li",{parentName:"ol"},"Open the console panel in browser developer tools"),Object(a.b)("li",{parentName:"ol"},"Use the ",Object(a.b)("inlineCode",{parentName:"li"},"playwright")," API",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"playwright.$(selector)"),": Highlight the first occurrence of the selector. This reflects how ",Object(a.b)("inlineCode",{parentName:"li"},"page.$")," would see the page."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"playwright.$$(selector)"),": Highlight all occurrences of the selector. This reflects how ",Object(a.b)("inlineCode",{parentName:"li"},"page.$$")," would see the page."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"playwright.inspect(selector)"),": Inspect the selector in the Elements panel."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"playwright.clear()"),": Clear existing highlights.")))),Object(a.b)("a",{href:"https://user-images.githubusercontent.com/284612/86857345-299abc00-c073-11ea-9e31-02923a9f0d4b.png"},Object(a.b)("img",{src:"https://user-images.githubusercontent.com/284612/86857345-299abc00-c073-11ea-9e31-02923a9f0d4b.png",width:"500",alt:"Highlight selectors"})),Object(a.b)("h3",{id:"evaluate-source-maps"},"Evaluate Source Maps"),Object(a.b)("p",null,"PWDEBUG also enables source maps for ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-page#pageevaluatepagefunction-arg"}),"page.evaluate(pageFunction[, arg])")," ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/1.9.0/core-concepts#evaluation"}),"executions"),". This improves the debugging experience for JavaScript executions in the page context."),Object(a.b)("a",{href:"https://user-images.githubusercontent.com/284612/86857568-a6c63100-c073-11ea-82a4-bfd531a4ec87.png"},Object(a.b)("img",{src:"https://user-images.githubusercontent.com/284612/86857568-a6c63100-c073-11ea-82a4-bfd531a4ec87.png",width:"500",alt:"Highlight selectors"})),Object(a.b)("h2",{id:"verbose-api-logs"},"Verbose API logs"),Object(a.b)("p",null,"Playwright supports verbose logging with the ",Object(a.b)("inlineCode",{parentName:"p"},"DEBUG")," environment variable."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"# Linux/macOS\n$ DEBUG=pw:api npm run test\n\n# Windows\n$ set DEBUG=pw:api\n$ npm run test\n")))}u.isMDXComponent=!0},890:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return g}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,g=b["".concat(i,".").concat(d)]||b[d]||p[d]||a;return n?o.a.createElement(g,c(c({ref:t},s),{},{components:n})):o.a.createElement(g,c({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},891:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},892:function(e,t,n){"use strict";var r=n(0),o=n(893);t.a=function(){var e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},893:function(e,t,n){"use strict";var r=n(0),o=Object(r.createContext)(void 0);t.a=o},894:function(e,t,n){"use strict";n(0),n(892),n(891),n(55)},895:function(e,t,n){"use strict";n(3),n(0)}}]);