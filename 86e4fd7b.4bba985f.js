(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{132:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),b=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=b(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),d=b(n),p=a,m=d["".concat(c,".").concat(p)]||d[p]||u[p]||s;return n?r.a.createElement(m,l(l({ref:t},o),{},{components:n})):r.a.createElement(m,l({ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,c=new Array(s);c[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var o=2;o<s;o++)c[o]=n[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),s=(n(0),n(132)),c={id:"sendMessageToBundle",title:"sendMessageToBundle",sidebar_label:"sendMessageToBundle"},l={unversionedId:"classes/sendMessageToBundle",id:"classes/sendMessageToBundle",isDocsHomePage:!1,title:"sendMessageToBundle",description:"sendMessageToBundle(messageName, bundleName, data, cb) \u2192 \\{Promise|undefined\\}",source:"@site/docs/classes/sendMessageToBundle.md",slug:"/classes/sendMessageToBundle",permalink:"/docs/classes/sendMessageToBundle",editUrl:"https://github.com/nodecg/docs/edit/master/docs/classes/sendMessageToBundle.md",version:"current",lastUpdatedBy:"Ewan Lyon",lastUpdatedAt:1601347023,sidebar_label:"sendMessageToBundle",sidebar:"mainSidebar",previous:{title:"sendMessage",permalink:"/docs/classes/sendMessage"},next:{title:"listenFor",permalink:"/docs/classes/listenFor"}},i=[{value:"Returns",id:"returns",children:[]},{value:"Parameters",id:"parameters",children:[]}],o={rightToc:i};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"sendMessageToBundle(messageName, bundleName, *data, *cb)")," ",Object(s.b)("em",{parentName:"p"},"\u2192 ","{","Promise|undefined","}")),Object(s.b)("p",null,"Sends a message to a specific bundle. Also available as a static method. See ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/classes/sendMessage"}),"sendMessage")," for usage details."),Object(s.b)("h3",{id:"returns"},"Returns"),Object(s.b)("div",{className:"admonition admonition-important alert alert--info"},Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Browser Only")),Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"This can only be used in code which runs in Dashboards and Graphics."))),Object(s.b)("p",null,"A Promise that is rejected if the first argument provided to the acknowledgement is an Error, otherwise it is resolved with the remaining arguments provided to the acknowledgement. But, if a callback was provided, this return value will be undefined, and there will be no Promise."),Object(s.b)("h3",{id:"parameters"},"Parameters"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(s.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(s.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Attributes"),Object(s.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"name"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The name of the message.")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"bundleName"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The name of the target bundle.")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"data"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"mixed"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"<","optional>"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The data to send.")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"cb"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"function"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"<","optional>"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(s.b)("em",{parentName:"td"},"Browser only")," The error-first callback to handle the server's ",Object(s.b)("a",Object(a.a)({parentName:"td"},{href:"http://socket.io/docs/#sending-and-getting-data-%28acknowledgements%29"}),"acknowledgement")," message, if any.")))))}b.isMDXComponent=!0}}]);