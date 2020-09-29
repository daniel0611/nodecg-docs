(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{103:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return u}));var r=t(2),o=t(6),l=(t(0),t(132)),a={id:"log",title:"log()",sidebar_label:"log()"},c={unversionedId:"classes/log",id:"classes/log",isDocsHomePage:!1,title:"log()",description:"log()",source:"@site/docs/classes/log.md",slug:"/classes/log",permalink:"/docs/classes/log",editUrl:"https://github.com/nodecg/docs/edit/master/docs/classes/log.md",version:"current",lastUpdatedBy:"Ewan Lyon",lastUpdatedAt:1601347023,sidebar_label:"log()",sidebar:"mainSidebar",previous:{title:"unlisten",permalink:"/docs/classes/unlisten"},next:{title:"Router",permalink:"/docs/classes/router"}},i=[{value:"Example",id:"example",children:[]}],s={rightToc:i};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"log()")),Object(l.b)("p",null,"An instance of NodeCG's Logger, with the following methods. The logging level is set in cfg/nodecg.json, NodeCG's global config file."),Object(l.b)("h3",{id:"example"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"nodecg.log.trace('trace level logging');\nnodecg.log.debug('debug level logging');\nnodecg.log.info('info level logging');\nnodecg.log.warn('warn level logging');\nnodecg.log.error('error level logging');\n")))}u.isMDXComponent=!0},132:function(e,n,t){"use strict";t.d(n,"a",(function(){return g})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),u=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},g=function(e){var n=u(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,a=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),g=u(t),d=r,f=g["".concat(a,".").concat(d)]||g[d]||p[d]||l;return t?o.a.createElement(f,c(c({ref:n},s),{},{components:t})):o.a.createElement(f,c({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,a=new Array(l);a[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<l;s++)a[s]=t[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);