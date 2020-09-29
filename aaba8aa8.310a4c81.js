(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),s=(n(0),n(132)),l={id:"sendMessage",title:"sendMessage",sidebar_label:"sendMessage"},o={unversionedId:"classes/sendMessage",id:"classes/sendMessage",isDocsHomePage:!1,title:"sendMessage",description:"sendMessage(messageName, data, cb) \u2192 \\{Promise\\}",source:"@site/docs/classes/sendMessage.md",slug:"/classes/sendMessage",permalink:"/docs/classes/sendMessage",editUrl:"https://github.com/nodecg/docs/edit/master/docs/classes/sendMessage.md",version:"current",lastUpdatedBy:"Ewan Lyon",lastUpdatedAt:1601347023,sidebar_label:"sendMessage",sidebar:"mainSidebar",previous:{title:"waitForReplicants",permalink:"/docs/classes/waitForReplicants"},next:{title:"sendMessageToBundle",permalink:"/docs/classes/sendMessageToBundle"}},c=[{value:"Returns",id:"returns",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Example",id:"example",children:[]}],i={rightToc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"sendMessage(messageName, *data, *cb)")," ",Object(s.b)("em",{parentName:"p"},"\u2192 ","{","Promise","}")),Object(s.b)("p",null,"Sends a message with optional data within the current bundle. Messages can be sent from client to server, server to client, or client to client."),Object(s.b)("p",null,"Messages are namespaced by bundle. To send a message in another bundle's namespace, use ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"sendMessageToBundle"}),"sendMessageToBundle"),"."),Object(s.b)("p",null,'When a sendMessage is used from a client context (i.e., graphic or dashboard panel), it returns a Promise called an "acknowledgement". Your server-side code (i.e., extension) can invoke this acknowledgement with whatever data (or error) it wants. Errors sent to acknowledgements from the server will be properly serialized and intact when received on the client.'),Object(s.b)("p",null,"Alternatively, if you do not wish to use a Promise, you can provide a standard error-first callback as the last argument to sendMessage."),Object(s.b)("p",null,"If your server-side code has multiple listenFor handlers for your message, you must first check if the acknowledgement has already been handled before attempting to call it. You may so do by checking the .handled boolean property of the ack function passed to your listenFor handler."),Object(s.b)("p",null,"See ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"http://socket.io/docs/#sending-and-getting-data-%28acknowledgements%29"}),"Socket.IO's docs")," for more information on how acknowledgements work under the hood."),Object(s.b)("h3",{id:"returns"},"Returns"),Object(s.b)("div",{className:"admonition admonition-important alert alert--info"},Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Browser Only")),Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"This can only be used in code which runs in Dashboards and Graphics."))),Object(s.b)("p",null,"A Promise that is rejected if the first argument provided to the acknowledgement is an Error, otherwise it is resolved with the remaining arguments provided to the acknowledgement."),Object(s.b)("h3",{id:"parameters"},"Parameters"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(s.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(s.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Attributes"),Object(s.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"name"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The name of the message.")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"data"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"mixed"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"<","optional>"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The data to send.")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"cb"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"function"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"<","optional>"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(s.b)("em",{parentName:"td"},"Browser only")," The error-first callback to handle the server's acknowledgement message, if any.")))),Object(s.b)("h3",{id:"example"},"Example"),Object(s.b)("p",null,"Sending a normal message:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"nodecg.sendMessage('printMessage', 'dope.');\n")),Object(s.b)("p",null,"Sending a message and replying with an acknowledgement:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// bundles/my-bundle/extension.js\nmodule.exports = function (nodecg) {\n    nodecg.listenFor('multiplyByTwo', (value, ack) => {\n        if (value === 4) {\n            ack(new Error('I don\\'t like multiplying the number 4!'));\n            return;\n        }\n\n        // acknowledgements should always be error-first callbacks.\n        // If you do not wish to send an error, use a falsey value\n        // like \"null\" instead.\n        if (ack && !ack.handled) {\n            ack(null, value * 2);\n        }\n    });\n}\n\n// bundles/my-bundle/graphics/script.js\n// Both of these examples are functionally identical.\n\n// Promise acknowledgement\nnodecg.sendMessage('multiplyByTwo', 2)\n    .then(result => {\n        console.log(result); // Will eventually print '4'\n    }).catch(error => {\n        console.error(error);\n    });\n\n// Error-first callback acknowledgement\nnodecg.sendMessage('multiplyByTwo', 2, (error, result) => {\n    if (error) {\n        console.error(error);\n        return;\n    }\n\n    console.log(result); // Will eventually print '4'\n});\n")))}d.isMDXComponent=!0},132:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),d=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=d(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),b=d(n),u=a,m=b["".concat(l,".").concat(u)]||b[u]||p[u]||s;return n?r.a.createElement(m,o(o({ref:t},i),{},{components:n})):r.a.createElement(m,o({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var i=2;i<s;i++)l[i]=n[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);