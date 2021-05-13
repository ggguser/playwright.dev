(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{341:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),c=(a(0),a(393)),o=(a(396),a(397),{id:"class-websocket",title:"WebSocket"}),s={unversionedId:"api/class-websocket",id:"version-1.11.0/api/class-websocket",isDocsHomePage:!1,title:"WebSocket",description:"The [WebSocket] class represents websocket connections in the page.",source:"@site/versioned_docs/version-1.11.0/api/class-websocket.mdx",slug:"/api/class-websocket",permalink:"/python/docs/api/class-websocket",version:"1.11.0",sidebar:"version-1.11.0/api",previous:{title:"Video",permalink:"/python/docs/api/class-video"},next:{title:"Worker",permalink:"/python/docs/api/class-worker"}},i=[{value:"web_socket.on(&quot;close&quot;)",id:"web_socketonclose",children:[]},{value:"web_socket.on(&quot;framereceived&quot;)",id:"web_socketonframereceived",children:[]},{value:"web_socket.on(&quot;framesent&quot;)",id:"web_socketonframesent",children:[]},{value:"web_socket.on(&quot;socketerror&quot;)",id:"web_socketonsocketerror",children:[]},{value:"web_socket.expect_event(event, **kwargs)",id:"web_socketexpect_eventevent-kwargs",children:[]},{value:"web_socket.is_closed()",id:"web_socketis_closed",children:[]},{value:"web_socket.url",id:"web_socketurl",children:[]},{value:"web_socket.wait_for_event(event, **kwargs)",id:"web_socketwait_for_eventevent-kwargs",children:[]}],l={toc:i};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/api/class-websocket",title:"WebSocket"}),"WebSocket")," class represents websocket connections in the page."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-websocket#web_socketonclose"}),'web_socket.on("close")')),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-websocket#web_socketonframereceived"}),'web_socket.on("framereceived")')),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-websocket#web_socketonframesent"}),'web_socket.on("framesent")')),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-websocket#web_socketonsocketerror"}),'web_socket.on("socketerror")')),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-websocket#web_socketexpect_eventevent-kwargs"}),"web_socket.expect_event(event, **kwargs)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-websocket#web_socketis_closed"}),"web_socket.is_closed()")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-websocket#web_socketurl"}),"web_socket.url")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-websocket#web_socketwait_for_eventevent-kwargs"}),"web_socket.wait_for_event(event, **kwargs)"))),Object(c.b)("h2",{id:"web_socketonclose"},'web_socket.on("close")'),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"type: <",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-websocket",title:"WebSocket"}),"WebSocket"),">")),Object(c.b)("p",null,"Fired when the websocket closes."),Object(c.b)("h2",{id:"web_socketonframereceived"},'web_socket.on("framereceived")'),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"type: <",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"}),"Dict"),">",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"payload")," <",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"|",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#bytes",title:"bytes"}),"bytes"),"> frame payload")))),Object(c.b)("p",null,"Fired when the websocket receives a frame."),Object(c.b)("h2",{id:"web_socketonframesent"},'web_socket.on("framesent")'),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"type: <",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"}),"Dict"),">",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"payload")," <",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"|",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#bytes",title:"bytes"}),"bytes"),"> frame payload")))),Object(c.b)("p",null,"Fired when the websocket sends a frame."),Object(c.b)("h2",{id:"web_socketonsocketerror"},'web_socket.on("socketerror")'),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"type: <","[String]",">")),Object(c.b)("p",null,"Fired when the websocket has an error."),Object(c.b)("h2",{id:"web_socketexpect_eventevent-kwargs"},"web_socket.expect_event(event, **kwargs)"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"event")," <",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"> Event name, same one would pass into ",Object(c.b)("inlineCode",{parentName:"li"},"webSocket.on(event)"),"."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"predicate")," <",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Callable",title:"Callable"}),"Callable"),"> Receives the event data and resolves to truthy value when the waiting should resolve."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"timeout")," <",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"}),"float"),"> Maximum time to wait for in milliseconds. Defaults to ",Object(c.b)("inlineCode",{parentName:"li"},"30000")," (30 seconds). Pass ",Object(c.b)("inlineCode",{parentName:"li"},"0")," to disable timeout. The default value can be changed by using the ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-browsercontext#browser_contextset_default_timeouttimeout"}),"browser_context.set_default_timeout(timeout)"),"."),Object(c.b)("li",{parentName:"ul"},"returns: <",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/reference/datamodel.html#context-managers",title:"Event context manager"}),"EventContextManager"),">")),Object(c.b)("p",null,"Waits for event to fire and passes its value into the predicate function. Returns when the predicate returns truthy value. Will throw an error if the webSocket is closed before the event is fired. Returns the event data value."),Object(c.b)("h2",{id:"web_socketis_closed"},"web_socket.is_closed()"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"returns: <",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"}),"bool"),">")),Object(c.b)("p",null,"Indicates that the web socket has been closed."),Object(c.b)("h2",{id:"web_socketurl"},"web_socket.url"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"returns: <",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">")),Object(c.b)("p",null,"Contains the URL of the WebSocket."),Object(c.b)("h2",{id:"web_socketwait_for_eventevent-kwargs"},"web_socket.wait_for_event(event, **kwargs)"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"event")," <",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"> Event name, same one typically passed into ",Object(c.b)("inlineCode",{parentName:"li"},"*.on(event)"),"."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"predicate")," <",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Callable",title:"Callable"}),"Callable"),"> Receives the event data and resolves to truthy value when the waiting should resolve."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"timeout")," <",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"}),"float"),"> Maximum time to wait for in milliseconds. Defaults to ",Object(c.b)("inlineCode",{parentName:"li"},"30000")," (30 seconds). Pass ",Object(c.b)("inlineCode",{parentName:"li"},"0")," to disable timeout. The default value can be changed by using the ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-browsercontext#browser_contextset_default_timeouttimeout"}),"browser_context.set_default_timeout(timeout)"),"."),Object(c.b)("li",{parentName:"ul"},"returns: <",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Any",title:"Any"}),"Any"),">")),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"In most cases, you should use ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/api/class-websocket#web_socketexpect_eventevent-kwargs"}),"web_socket.expect_event(event, **kwargs)"),"."))),Object(c.b)("p",null,"Waits for given ",Object(c.b)("inlineCode",{parentName:"p"},"event")," to fire. If predicate is provided, it passes event's value into the ",Object(c.b)("inlineCode",{parentName:"p"},"predicate")," function and waits for ",Object(c.b)("inlineCode",{parentName:"p"},"predicate(event)")," to return a truthy value. Will throw an error if the socket is closed before the ",Object(c.b)("inlineCode",{parentName:"p"},"event")," is fired."))}b.isMDXComponent=!0},392:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},393:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=b(a),d=n,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||c;return a?r.a.createElement(m,s(s({ref:t},l),{},{components:a})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<c;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},394:function(e,t,a){"use strict";var n=a(0),r=a(395);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},395:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},396:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(394),o=a(392),s=a(53),i=a.n(s),l=37,b=39;t.a=function(e){var t=e.lazy,a=e.block,s=e.defaultValue,p=e.values,u=e.groupId,d=e.className,m=Object(c.a)(),h=m.tabGroupChoices,O=m.setTabGroupChoices,f=Object(n.useState)(s),j=f[0],v=f[1],y=n.Children.toArray(e.children);if(null!=u){var w=h[u];null!=w&&w!==j&&p.some((function(e){return e.value===w}))&&v(w)}var k=function(e){v(e),null!=u&&O(u,e)},N=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":a},d)},p.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(o.a)("tabs__item",i.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case b:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return k(t)},onClick:function(){k(t)}},a)}))),t?Object(n.cloneElement)(y.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},397:function(e,t,a){"use strict";var n=a(3),r=a(0),c=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return c.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:r}),t)}}}]);