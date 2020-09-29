(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{132:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var a=t(0),o=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),c=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=c(t),u=a,m=p["".concat(r,".").concat(u)]||p[u]||b[u]||i;return t?o.a.createElement(m,l(l({ref:n},s),{},{components:t})):o.a.createElement(m,l({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=u;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<i;s++)r[s]=t[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},96:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return d})),t.d(n,"default",(function(){return c}));var a=t(2),o=t(6),i=(t(0),t(132)),r={id:"making-dialogs",title:"Making Dashboard Dialogs",sidebar_label:"Making Dashboard Dialogs"},l={unversionedId:"making-dialogs",id:"making-dialogs",isDocsHomePage:!1,title:"Making Dashboard Dialogs",description:"Starting with NodeCG 0.7, all dashboard panels are iframes. This was done to provide full code and style encapsulation,",source:"@site/docs/making-dialogs.md",slug:"/making-dialogs",permalink:"/docs/making-dialogs",editUrl:"https://github.com/nodecg/docs/edit/master/docs/making-dialogs.md",version:"current",lastUpdatedBy:"Ewan Lyon",lastUpdatedAt:1601347023,sidebar_label:"Making Dashboard Dialogs",sidebar:"mainSidebar",previous:{title:"Performance Tips",permalink:"/docs/performance-tips"},next:{title:"Portable NodeCG",permalink:"/docs/portable-nodecg"}},d=[{value:"Opening dialogs",id:"opening-dialogs",children:[]},{value:"Closing dialogs",id:"closing-dialogs",children:[]}],s={rightToc:d};function c(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Starting with NodeCG 0.7, all dashboard panels are iframes. This was done to provide full code and style encapsulation,\neliminating the need for bundle authors to worry about what they are putting into the global scope with their panel.\nHowever, because every panel is an iframe, it is not possible for a panel to draw anything outside of its bounding box.\nThis limitation made having dialogs and modals impossible, among other things. To address this, we created a dedicated\nsystem for displaying dialogs."),Object(i.b)("p",null,"A dialog is defined the same as any other dashboard panel would be in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/manifest"}),"package.json"),", with an\nadditional ",Object(i.b)("inlineCode",{parentName:"p"},"dialog: true")," property."),Object(i.b)("h2",{id:"opening-dialogs"},"Opening dialogs"),Object(i.b)("p",null,"To open a dialog, add a ",Object(i.b)("inlineCode",{parentName:"p"},"nodecg-dialog")," attribute to any clickable element on one of your panels. For example, this\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://elements.polymer-project.org/elements/paper-button"}),Object(i.b)("inlineCode",{parentName:"a"},"<paper-button>"))," element will open the ",Object(i.b)("inlineCode",{parentName:"p"},"edit-total")," dialog when clicked:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<paper-button id="edit" class="nodecg-configure" nodecg-dialog="edit-total">Edit...</paper-button>\n')),Object(i.b)("p",null,"When a dialog is opened, NodeCG will emit a ",Object(i.b)("inlineCode",{parentName:"p"},"dialog-opened")," event on your dialog's ",Object(i.b)("inlineCode",{parentName:"p"},"document"),". For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),"\x3c!-- bundles/my-bundle/dashboard/my-dialog.html --\x3e\n<script>\n  document.addEventListener('dialog-opened', function() {\n    // The user opened the dialog.\n  });\n<\/script>\n")),Object(i.b)("h2",{id:"closing-dialogs"},"Closing dialogs"),Object(i.b)("p",null,"By default, a dialog can only be closed by clicking outside of it. Optional confirmation and dismissal buttons can be\nadded via ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),". See the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/manifest"}),"package.json tutorial")," for information on the ",Object(i.b)("inlineCode",{parentName:"p"},"dialogButtons"),"\nproperty."),Object(i.b)("p",null,"When a ",Object(i.b)("inlineCode",{parentName:"p"},"confirm")," or ",Object(i.b)("inlineCode",{parentName:"p"},"dismiss")," button is pressed, NodeCG will emit a ",Object(i.b)("inlineCode",{parentName:"p"},"dialog-confirmed")," or ",Object(i.b)("inlineCode",{parentName:"p"},"dialog-dismissed")," event\non your dialog's ",Object(i.b)("inlineCode",{parentName:"p"},"document"),". For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),"\x3c!-- bundles/my-bundle/dashboard/my-dialog.html --\x3e\n<script>\n  document.addEventListener('dialog-confirmed', function() {\n    // The user pressed the confirm button.\n  });\n\n  document.addEventListener('dialog-dismissed', function() {\n    // The user pressed the dismiss button.\n  });\n<\/script>\n")))}c.isMDXComponent=!0}}]);