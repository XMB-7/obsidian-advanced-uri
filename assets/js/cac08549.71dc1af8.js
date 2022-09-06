"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[206],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),d=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return i.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=d(n),u=a,f=c["".concat(p,".").concat(u)]||c[u]||s[u]||r;return n?i.createElement(f,l(l({ref:t},m),{},{components:n})):i.createElement(f,l({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6017:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=n(7462),a=(n(7294),n(3905));const r={sidebar_position:3},l="File identifiers",o={unversionedId:"concepts/file_identifiers",id:"concepts/file_identifiers",title:"File identifiers",description:"There are multiple ways to identify a file:",source:"@site/docs/concepts/file_identifiers.md",sourceDirName:"concepts",slug:"/concepts/file_identifiers",permalink:"/obsidian-advanced-uri/concepts/file_identifiers",draft:!1,editUrl:"https://github.com/Vinzent03/obsidian-advanced-uri/tree/master/docs/docs/concepts/file_identifiers.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sidebar",previous:{title:"Encoding",permalink:"/obsidian-advanced-uri/concepts/encoding"},next:{title:"Navigation Parameters",permalink:"/obsidian-advanced-uri/concepts/navigation_parameters"}},p={},d=[{value:"File path",id:"file-path",level:2},{value:"File name",id:"file-name",level:2},{value:"Daily note",id:"daily-note",level:2},{value:"Key in frontmatter",id:"key-in-frontmatter",level:2}],m={toc:d};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"file-identifiers"},"File identifiers"),(0,a.kt)("p",null,"There are multiple ways to identify a file:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#file-path"},"File path")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#file-name"},"File name")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#daily-note"},"Daily note")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#key-in-frontmatter"},"Key in frontmatter"))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Make sure your values are properly ",(0,a.kt)("a",{parentName:"p",href:"encoding"},"encoded"))),(0,a.kt)("h2",{id:"file-path"},"File path"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Key: ",(0,a.kt)("inlineCode",{parentName:"li"},"filepath")),(0,a.kt)("li",{parentName:"ul"},"Value: Relative path to the vault"),(0,a.kt)("li",{parentName:"ul"},"Example: ",(0,a.kt)("inlineCode",{parentName:"li"},"hobbies/soccer.md")," / ",(0,a.kt)("inlineCode",{parentName:"li"},"hobbies/soccer")),(0,a.kt)("li",{parentName:"ul"},"Note: You can omit the file extension ",(0,a.kt)("inlineCode",{parentName:"li"},".md"),".")),(0,a.kt)("h2",{id:"file-name"},"File name"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Key: ",(0,a.kt)("inlineCode",{parentName:"li"},"filename")),(0,a.kt)("li",{parentName:"ul"},"Value: Only the name of the file without the actual path"),(0,a.kt)("li",{parentName:"ul"},"Example: ",(0,a.kt)("inlineCode",{parentName:"li"},"soccer")," / ",(0,a.kt)("inlineCode",{parentName:"li"},"soccer.md")),(0,a.kt)("li",{parentName:"ul"},"Note: You can omit the file extension ",(0,a.kt)("inlineCode",{parentName:"li"},".md"),". It prefers just the file name, like when linking via ",(0,a.kt)("inlineCode",{parentName:"li"},"[[fileName]]"),", causing aliases to be supported.")),(0,a.kt)("h2",{id:"daily-note"},"Daily note"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Key: ",(0,a.kt)("inlineCode",{parentName:"li"},"daily")),(0,a.kt)("li",{parentName:"ul"},"Value: ",(0,a.kt)("inlineCode",{parentName:"li"},"true")),(0,a.kt)("li",{parentName:"ul"},"Example: ",(0,a.kt)("inlineCode",{parentName:"li"},"daily=true")),(0,a.kt)("li",{parentName:"ul"},"Note: To use the current daily note simply set the key to ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),". If it doesn't exist already, it will be created. ")),(0,a.kt)("h2",{id:"key-in-frontmatter"},"Key in frontmatter"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Key: ",(0,a.kt)("inlineCode",{parentName:"li"},"uid")),(0,a.kt)("li",{parentName:"ul"},"Example: ",(0,a.kt)("inlineCode",{parentName:"li"},"uid=d43f7a17-058c-4aea-b8dc-515ea646825a")),(0,a.kt)("li",{parentName:"ul"},"Use case: Some users prefer navigating to specific notes per UUID instead of the file path to be able to rename these files, but to keep the link still working."),(0,a.kt)("li",{parentName:"ul"},"Note: By enabling that option in the setting, every generated command with the ",(0,a.kt)("inlineCode",{parentName:"li"},"filepath")," parameter is replaced with the ",(0,a.kt)("inlineCode",{parentName:"li"},"uid")," parameter. The uid is either read from the frontmatter or generated and then written to the frontmatter. ")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"/obsidian-advanced-uri/actions/navigation"},"Navigation")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"uid")," is always supported and doesn't need the setting to be enabled.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"By specifying ",(0,a.kt)("inlineCode",{parentName:"p"},"uid")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"filepath")," it creates a new file, if no file with ",(0,a.kt)("inlineCode",{parentName:"p"},"uid")," exists, at ",(0,a.kt)("inlineCode",{parentName:"p"},"filepath")," and writes ",(0,a.kt)("inlineCode",{parentName:"p"},"uid")," to the frontmatter.")))}s.isMDXComponent=!0}}]);