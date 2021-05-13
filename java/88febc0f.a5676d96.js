(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{177:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return b}));var r=a(3),n=a(7),c=(a(0),a(272)),o=(a(275),a(276),{id:"class-websocketframe",title:"WebSocketFrame"}),s={unversionedId:"api/class-websocketframe",id:"version-1.10.0/api/class-websocketframe",isDocsHomePage:!1,title:"WebSocketFrame",description:"The WebSocketFrame] class represents frames sent over [WebSocket] connections in the page. Frame payload is returned by either [WebSocketFrame.text() or WebSocketFrame.binary() method depending on the its type.",source:"@site/versioned_docs/version-1.10.0/api/class-websocketframe.mdx",slug:"/api/class-websocketframe",permalink:"/java/docs/1.10.0/api/class-websocketframe",version:"1.10.0",sidebar:"version-1.10.0/api",previous:{title:"WebSocket",permalink:"/java/docs/1.10.0/api/class-websocket"},next:{title:"Worker",permalink:"/java/docs/1.10.0/api/class-worker"}},i=[{value:"WebSocketFrame.binary()",id:"websocketframebinary",children:[]},{value:"WebSocketFrame.text()",id:"websocketframetext",children:[]}],l={toc:i};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/java/docs/1.10.0/api/class-websocketframe",title:"WebSocketFrame"}),"WebSocketFrame")," class represents frames sent over ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/java/docs/1.10.0/api/class-websocket",title:"WebSocket"}),"WebSocket")," connections in the page. Frame payload is returned by either ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/java/docs/1.10.0/api/class-websocketframe#websocketframetext"}),"WebSocketFrame.text()")," or ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/java/docs/1.10.0/api/class-websocketframe#websocketframebinary"}),"WebSocketFrame.binary()")," method depending on the its type."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/java/docs/1.10.0/api/class-websocketframe#websocketframebinary"}),"WebSocketFrame.binary()")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/java/docs/1.10.0/api/class-websocketframe#websocketframetext"}),"WebSocketFrame.text()"))),Object(c.b)("h2",{id:"websocketframebinary"},"WebSocketFrame.binary()"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"returns: <",Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-3.html#jls-3.10.7",title:"null"}),"null"),"|",Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"byte[]"}),"byte","[","]"),">")),Object(c.b)("p",null,"Returns binary payload."),Object(c.b)("h2",{id:"websocketframetext"},"WebSocketFrame.text()"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"returns: <",Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-3.html#jls-3.10.7",title:"null"}),"null"),"|",Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">")),Object(c.b)("p",null,"Returns text payload."))}b.isMDXComponent=!0},271:function(e,t,a){"use strict";function r(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}t.a=function(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},272:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return f}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),b=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=b(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=b(a),m=r,f=u["".concat(o,".").concat(m)]||u[m]||p[m]||c;return a?n.a.createElement(f,s(s({ref:t},l),{},{components:a})):n.a.createElement(f,s({ref:t},l))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,o=new Array(c);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<c;l++)o[l]=a[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},273:function(e,t,a){"use strict";var r=a(0),n=a(274);t.a=function(){var e=Object(r.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},274:function(e,t,a){"use strict";var r=a(0),n=Object(r.createContext)(void 0);t.a=n},275:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(273),o=a(271),s=a(53),i=a.n(s),l=37,b=39;t.a=function(e){var t=e.lazy,a=e.block,s=e.defaultValue,u=e.values,p=e.groupId,m=e.className,f=Object(c.a)(),d=f.tabGroupChoices,j=f.setTabGroupChoices,v=Object(r.useState)(s),O=v[0],y=v[1],h=r.Children.toArray(e.children);if(null!=p){var k=d[p];null!=k&&k!==O&&u.some((function(e){return e.value===k}))&&y(k)}var w=function(e){y(e),null!=p&&j(p,e)},g=[];return n.a.createElement("div",null,n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":a},m)},u.map((function(e){var t=e.value,a=e.label;return n.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(o.a)("tabs__item",i.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return g.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case b:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(g,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},a)}))),t?Object(r.cloneElement)(h.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):n.a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},276:function(e,t,a){"use strict";var r=a(3),n=a(0),c=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return c.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:a,className:n}),t)}}}]);