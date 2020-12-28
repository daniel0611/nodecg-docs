(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{142:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),s=p(a),d=n,m=s["".concat(c,".").concat(d)]||s[d]||u[d]||l;return a?r.a.createElement(m,i(i({ref:t},o),{},{components:a})):r.a.createElement(m,i({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,c=new Array(l);c[0]=d;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var o=2;o<l;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},93:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),l=(a(0),a(142)),c={id:"replicant",title:"Replicant",sidebar_label:"Replicant"},i={unversionedId:"classes/replicant",id:"classes/replicant",isDocsHomePage:!1,title:"Replicant",description:"Replicant(name, namespace, opts)",source:"@site/docs/classes/replicant.md",slug:"/classes/replicant",permalink:"/docs/classes/replicant",editUrl:"https://github.com/nodecg/docs/edit/master/docs/classes/replicant.md",version:"current",lastUpdatedBy:"Daniel Shields",lastUpdatedAt:1609122495,sidebar_label:"Replicant",sidebar:"mainSidebar",previous:{title:"NodeCG",permalink:"/docs/classes/nodecg"},next:{title:"readReplicant",permalink:"/docs/classes/readReplicant"}},b=[{value:"Parameters",id:"parameters",children:[]},{value:"Example",id:"example",children:[]}],o={rightToc:b};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Replicant(name, *namespace, *opts)")),Object(l.b)("p",null,"Replicants are objcts which monitor changes to a variable's value. The changes are replicated across all extensions, graphics, and dashboard panels. When a Replicant changes in one of those places it is quickly updated in the rest, and a change event is emitted allowing bundles to react to the changes in the data."),Object(l.b)("p",null,"If a Replicant with a given name in a given bundle namespace has already been declared, the Replicant will automatically be assigned the existing value."),Object(l.b)("p",null,"Replicants must be declared in each context that wishes to use them. For instance, declaring a replicant in an extension does not automatically make it available in a graphic. The graphic must also declare it."),Object(l.b)("p",null,"By default Replicants will be saved to disk, meaning they will automatically be restored when NodeCG is restarted, such as after an unexpected crash. If you need to opt-out of this behaviour simply set ",Object(l.b)("inlineCode",{parentName:"p"},"persistent: false")," in the ",Object(l.b)("inlineCode",{parentName:"p"},"opts")," argument."),Object(l.b)("p",null,"As of NodeCG 0.8.4, Replicants can also be automatically validated against a JSON Schema that you provide. See ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/replicant-schemas"}),"Replicant Validation")," for more information."),Object(l.b)("h3",{id:"parameters"},"Parameters"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attributes"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The name of the replicant.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"namespace"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"<","optional>"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The namespace to in which to look for this replicant. Defaults to the name of the current bundle.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"opts"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"object"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"<","optional>"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The options for this replicant.")))),Object(l.b)("h4",{id:"opts"},"Opts"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attributes"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"defaultValue"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"<","optional>"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The default value to instantiate this Replicant with. The default value is only applied if this Replicant has not previously been declared and if it has no persisted value.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"persistent"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"<","optional>"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Whether to persist the Replicant's value to disk on every change. Persisted values are re-loaded on startup.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"persistenceInterval"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"<","optional>"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"100"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Interval between each persistence, in milliseconds.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"schemaPath"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"<","optional>"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The filepath at which to look for a JSON Schema for this Replicant. Defaults to ",Object(l.b)("inlineCode",{parentName:"td"},"nodecg/bundles/${bundleName}/schemas/${replicantName}.json"),". Please note that this default path will be URIEncoded to ensure that it results in a valid filename.")))),Object(l.b)("h3",{id:"example"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const myRep = nodecg.Replicant('myRep', { defaultValue: 123 });\n\nmyRep.on('change', (newValue, oldValue) => {\n    console.log(`myRep changed from ${oldValue} to ${newValue}`);\n});\n\nmyRep.value = 'Hello!';\nmyRep.value = { objects: 'work too!' };\nmyRep.value = { objects: { can: { be: 'nested!' } } };\nmyRep.value = ['Even', 'arrays', 'work!'];\n")))}p.isMDXComponent=!0}}]);