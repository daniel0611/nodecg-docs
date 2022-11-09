(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(3),o=n(7),r=(n(0),n(143)),c={id:"docker",title:"Docker",sidebar_label:"Docker"},i={unversionedId:"docker",id:"docker",isDocsHomePage:!1,title:"Docker",description:"Introduction",source:"@site/docs/docker.md",slug:"/docker",permalink:"/docs/docker",editUrl:"https://github.com/nodecg/docs/edit/master/docs/docker.md",version:"current",lastUpdatedBy:"Alexander Lange Van Camp",lastUpdatedAt:1668016074,sidebar_label:"Docker",sidebar:"mainSidebar",previous:{title:"Error Reporting with Sentry.io",permalink:"/docs/sentry"},next:{title:"Using Bundlers",permalink:"/docs/frameworks/using-bundlers"}},l=[],b={rightToc:l};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"introduction"},"Introduction"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Docker is a platform for developers and sysadmins to develop, deploy, and run applications with containers. The use of Linux containers to deploy applications is called containerization. Containers are not new, but their use for easily deploying applications is."),Object(r.b)("p",{parentName:"blockquote"},"Containerization is increasingly popular because containers are:"),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"Flexible: Even the most complex applications can be containerized."),Object(r.b)("li",{parentName:"ul"},"Lightweight: Containers leverage and share the host kernel."),Object(r.b)("li",{parentName:"ul"},"Interchangeable: You can deploy updates and upgrades on-the-fly."),Object(r.b)("li",{parentName:"ul"},"Portable: You can build locally, deploy to the cloud, and run anywhere."),Object(r.b)("li",{parentName:"ul"},"Scalable: You can increase and automatically distribute container replicas."),Object(r.b)("li",{parentName:"ul"},"Stackable: You can stack services vertically and on-the-fly.")),Object(r.b)("p",{parentName:"blockquote"},"Source ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.docker.com/get-started/"}),"Get Started - docs.docker.com")," (It's highly recommend to read into it if you didn't already)")),Object(r.b)("p",null,"Docker provides a lot of useful features for NodeCG:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"No need to care about dependencies. They are all bundled with the docker image"),Object(r.b)("li",{parentName:"ul"},"Run it everywhere."),Object(r.b)("li",{parentName:"ul"},"Easy upgrades.")),Object(r.b)("h1",{id:"prerequisites"},"Prerequisites"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.docker.com/install/"}),"Docker")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.docker.com/compose/install/"}),"Docker-Compose")," (",Object(r.b)("inlineCode",{parentName:"li"},"1.13.0+"),") (optional)")),Object(r.b)("h1",{id:"bundle-development"},"Bundle development"),Object(r.b)("p",null,"If you want to use NodeCG in development, you can easily deploy a NodeCG instance with Docker. All you have to do is run:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"docker run -it -u root -p 9090:9090 -rm nodecg/nodecg\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The argument ",Object(r.b)("inlineCode",{parentName:"p"},"-u root")," is needed to ensure that the NodeCG process runnning inside the container has the rights to read the mounted volumes."))),Object(r.b)("p",null,"To include the bundle you're working on in this Docker Container. You can mount it like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"docker run -it -u root -p 9090:9090 -rm -v [bundle-dir]:/opt/nodecg/bundles/[bundle-name] -v [config-file]:/opt/nodecg/cfg/[bundle].json nodecg/nodecg\n")),Object(r.b)("p",null,"Mounting the volumes and running as ",Object(r.b)("inlineCode",{parentName:"p"},"root")," will ensure that the changes are in the container, without a docker image rebuild."),Object(r.b)("h1",{id:"production"},"Production"),Object(r.b)("p",null,"If you want to use NodeCG in production, it is recommended to build a own Docker Image to hold all your bundles and configuration."),Object(r.b)("p",null,"Example Dockerfile:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-dockerfile"}),"FROM nodecg/nodecg:v1.9.0\n\nUSER root\n\n# Add commands to install global dependencies here, like Bower\n\nUSER nodecg\n\nRUN nodecg install [bundle-repo] && nodecg defaultconfig [bundle-name] && \\\n    ... \n    \nCOPY --chown=nodecg:nodecg [nodecg-config-file] /opt/nodecg/cfg/nodecg.json\n")),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Optional Tip")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"You could add the configuration files to your image to avoid problems with the file permissions. (",Object(r.b)("strong",{parentName:"p"},"If you decide to do so, be careful with the secrets in these files as everyone who has access to the docker image has access to the secrets in the configuration files"),")"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-dockerfile"}),"COPY --chown=nodecg:nodecg [bundle-config-file] /opt/nodecg/cfg/[bundle].json\n")),Object(r.b)("p",{parentName:"div"},"Instead of the seperate ",Object(r.b)("inlineCode",{parentName:"p"},"COPY")," directives you could use only one:"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-dockerfile"}),"COPY --chown=nodecg:nodecg [config-dir]/* /opt/nodecg/cfg/\n")),Object(r.b)("p",{parentName:"div"},"This will create only one layer. But requires you to organize all your configuration files in the same directory.\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.docker.com/engine/reference/builder/#copy"}),"More Information")))),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"FROM nodecg/nodecg:v1.9.0")," Defines the parent image that should be used to build your Docker Image. We use ",Object(r.b)("inlineCode",{parentName:"p"},"nodecg/nodecg")," with the latest version tag ",Object(r.b)("inlineCode",{parentName:"p"},"v1.5.0"),". The parent image already include ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://nodecg.com"}),"NodeCG")," and ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/nodecg/nodecg-cli"}),"nodecg-cli"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"# Add commands to install global dependencies here, like Bower")," If you use bundles that require Bower or any other external dependencies, install them here. It will make the next build faster if these external dependencies dont change. To install bower use ",Object(r.b)("inlineCode",{parentName:"p"},"RUN npm install -g bower"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"RUN nodecg install ... && nodecg defaultconfig ...")," Installs your bundles and generates the default configs for them. (if you include the configuration later, you dont need to generate the default configuration)"),Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},"nodecg install (more information at ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/nodecg/nodecg-cli"}),"nodecg-cli"),")"),Object(r.b)("p",{parentName:"blockquote"},"To install a bundle from Github, enter the owner and repository name:"),Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("inlineCode",{parentName:"p"},"nodecg install lange/lange-notify")),Object(r.b)("p",{parentName:"blockquote"},"... to install a bundle from Bitbucket, enter the owner and repository name prefixed with bitbucket:"),Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("inlineCode",{parentName:"p"},"nodecg install bitbucket:username/repo-name")),Object(r.b)("p",{parentName:"blockquote"},"... to install a bundle from any other git provider, enter the git URL:"),Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("inlineCode",{parentName:"p"},"nodecg install https://gitlab.com/username/repo-name.git")))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"COPY --chown=nodecg:nodecg [nodecg-config-file] /usr/src/app/cfg/nodecg.json")," Copies the config file from your filesystem into the Docker Image and can be accessed from the container. (",Object(r.b)("inlineCode",{parentName:"p"},"--chown")," is needed because the NodeCG process is run by the user ",Object(r.b)("inlineCode",{parentName:"p"},"nodecg"),")"))),Object(r.b)("p",null,"Now use Docker to build your image from the Dockerfile you just created:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"docker build -v [configuration dir]:/opt/nodecg/cfg -t [your-image-name] .\n")),Object(r.b)("p",null,"And run it with:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"docker run -p 9090:9090 [your-image-name]\n")),Object(r.b)("p",null,"Or create a docker-compose.yml like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"version: '3'\nservices:\n  nodecg:\n    image: '[your-image-name]'\n    ports:\n      - '9090:9090'\n    volumes:\n      - '[configuration dir]:/opt/nodecg/cfg'\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Be sure that your configuration dir is accessable by ",Object(r.b)("inlineCode",{parentName:"p"},"nodecg:nodecg")," (uid: ",Object(r.b)("inlineCode",{parentName:"p"},"101"),", gid: ",Object(r.b)("inlineCode",{parentName:"p"},"102"),")")),Object(r.b)("p",null,"Build a new docker image for your deployment has the advantage, that it is safer (because it is run as a non-root user), more consistent (because the container wont keep changes, except your explicitly tell it to)."),Object(r.b)("p",null,"To upgrade NodeCG just build a new image with the new parent.\nReplace ",Object(r.b)("inlineCode",{parentName:"p"},"FROM nodecg/nodecg:1.9.0")," with ",Object(r.b)("inlineCode",{parentName:"p"},"FROM nodecg/nodecg:[newer version]")),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If you want to host your NodeCG instance on the internet (instead of just on a secure LAN), it is highly recommended to encrypt and secure NodeCG."),Object(r.b)("p",{parentName:"div"},"To encrypt the traffic, you can use a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/TLS_termination_proxy"}),"TLS/SSL termination proxy")," like:"),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/containous/traefik"}),"Traefik")," - Really neat if you host a lot of services in docker."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://proxy.dockerflow.com/"}),"Docker Flow Proxy")," - Similar to Traefik."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://caddyserver.com"}),"Caddy")," - Be aware of the licensing of the binaries. It should be ok if you build it yourself e.g. in a Docker Image. No garantee."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/nginx-proxy/nginx-proxy#ssl-support-using-letsencrypt"}),"nginx-proxy w/ letsencrypt")," - Useful if you're already familiar with nginx or have existing site configurations you'd like to port over."),Object(r.b)("li",{parentName:"ul"},"Others - There are a lot of other solutions. Choose what fits you best.")),Object(r.b)("p",{parentName:"div"},"To secure NodeCG, follow the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"security"}),"Security & Authentication")," guide."))))}d.isMDXComponent=!0},143:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),d=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,m=p["".concat(c,".").concat(u)]||p[u]||s[u]||r;return n?o.a.createElement(m,i(i({ref:t},b),{},{components:n})):o.a.createElement(m,i({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var b=2;b<r;b++)c[b]=n[b];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);