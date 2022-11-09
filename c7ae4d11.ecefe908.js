(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{130:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(143)),c={id:"creating-bundles",title:"Creating Bundles",sidebar_label:"Creating Bundles"},i={unversionedId:"creating-bundles",id:"creating-bundles",isDocsHomePage:!1,title:"Creating Bundles",description:"Examples",source:"@site/docs/creating-bundles.md",slug:"/creating-bundles",permalink:"/docs/creating-bundles",editUrl:"https://github.com/nodecg/docs/edit/master/docs/creating-bundles.md",version:"current",lastUpdatedBy:"Alexander Lange Van Camp",lastUpdatedAt:1668016074,sidebar_label:"Creating Bundles",sidebar:"mainSidebar",previous:{title:"Installing NodeCG",permalink:"/docs/installing"},next:{title:"Concepts and Terminology",permalink:"/docs/concepts-and-terminology"}},l=[{value:"Examples",id:"examples",children:[]},{value:"Using Yeoman",id:"using-yeoman",children:[]}],s={rightToc:l};function p(e){var t=e.components,c=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("p",null,"Before continuing, you may find it helpful to look over our ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/nodecg/nodecg-simple-examples"}),"collection of simple example bundles"),"."),Object(o.b)("h2",{id:"using-yeoman"},"Using Yeoman"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Use Yeoman and generator-nodecg to generate the beginnings of your new bundle:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install --global yo generator-nodecg\ncd bundles\nmkdir my-first-bundle\ncd my-first-bundle\nyo nodecg\n")),Object(o.b)("p",{parentName:"li"},"Answer the prompts one-by-one as they come up.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Once your template bundle has been generated, start NodeCG:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cd ../..\nnodecg start\n")),Object(o.b)("div",Object(a.a)({parentName:"li"},{className:"admonition admonition-note alert alert--secondary"}),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"When running NodeCG in production, ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.docker.com/"}),"Docker")," or ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Unitech/pm2"}),"pm2")," are recommended.")))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Open the NodeCG Dashboard, which will be located at ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://localhost:9090"}),"http://localhost:9090")," by default. You should see a page like this:"),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",{alt:"Dashboard Screenshot",src:n(157).default}))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'That\'s it! You can click the "Graphics" button in the top right to see a list of graphics in your installed bundles.'))),Object(o.b)("p",null,"If you have more questions, want further guidance, or would just like to hang out with other NodeCG devs, ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://discord.com/invite/GJ4r8a8"}),"join our Discord server"),"!"))}p.isMDXComponent=!0},143:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,m=b["".concat(c,".").concat(u)]||b[u]||d[u]||o;return n?r.a.createElement(m,i(i({ref:t},s),{},{components:n})):r.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},157:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/quickstart_dashboard-5d9d13369b59a7a0d68c7b8c889f07a5.png"}}]);