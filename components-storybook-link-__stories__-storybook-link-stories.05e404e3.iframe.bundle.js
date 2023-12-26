"use strict";(globalThis.webpackChunkvibe_storybook_components=globalThis.webpackChunkvibe_storybook_components||[]).push([[2779],{"./src/components/storybook-link/__stories__/storybook-link.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>storybook_link_stories});var react=__webpack_require__("../../node_modules/react/index.js"),link_link=__webpack_require__("./src/components/link/link.tsx"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_=__webpack_require__("@storybook/core-events"),dist=__webpack_require__("../../node_modules/@storybook/csf/dist/index.mjs"),{document:chunk_6GSMXRCY_document,HTMLElement}=external_STORYBOOK_MODULE_GLOBAL_.global;var chunk_6GSMXRCY_navigate=params=>external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel().emit(external_STORYBOOK_MODULE_CORE_EVENTS_.SELECT_STORY,params),hrefTo=(title,name)=>new Promise((resolve=>{let{location}=chunk_6GSMXRCY_document,query=function parseQuery(queryString){let query={},pairs=("?"===queryString[0]?queryString.substring(1):queryString).split("&").filter(Boolean);for(let i=0;i<pairs.length;i++){let pair=pairs[i].split("=");query[decodeURIComponent(pair[0])]=decodeURIComponent(pair[1]||"")}return query}(location.search),existingId=[].concat(query.id)[0],titleToLink=title||existingId.split("--",2)[0],path=`/story/${(0,dist.KK)(titleToLink,name)}`,sbPath=location.pathname.replace(/iframe\.html$/,"");resolve(`${location.origin+sbPath}?${Object.entries({path}).map((item=>`${item[0]}=${item[1]}`)).join("&")}`)})),linksListener=e=>{let{target}=e;if(!(target instanceof HTMLElement))return;let element=target,{sbKind:kind,sbStory:story}=element.dataset;(kind||story)&&(e.preventDefault(),chunk_6GSMXRCY_navigate({kind,story}))},hasListener=!1,off=()=>{hasListener&&(hasListener=!1,chunk_6GSMXRCY_document.removeEventListener("click",linksListener))};(0,external_STORYBOOK_MODULE_PREVIEW_API_.makeDecorator)({name:"withLinks",parameterName:"links",wrapper:(getStory,context)=>(hasListener||(hasListener=!0,chunk_6GSMXRCY_document.addEventListener("click",linksListener)),external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel().once(external_STORYBOOK_MODULE_CORE_EVENTS_.STORY_CHANGED,off),getStory(context))});var LinkConstants=__webpack_require__("./src/components/link/LinkConstants.ts"),withStaticProps=__webpack_require__("./src/types/withStaticProps.ts"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const StorybookLink=({page,story="",children,size})=>{const[url,setUrl]=(0,react.useState)("");return(0,react.useEffect)((()=>{!async function fetchLink(){const href=await hrefTo(page,story);setUrl(href)}()}),[page,story]),(0,jsx_runtime.jsx)(link_link.Z,{href:url,target:link_link.Z.targets.TOP,withoutSpacing:!0,size,children})};StorybookLink.displayName="StorybookLink";const storybook_link=(0,withStaticProps.D)(StorybookLink,{sizes:LinkConstants.h});try{storybooklink.displayName="storybooklink",storybooklink.__docgenInfo={description:"",displayName:"storybooklink",props:{page:{defaultValue:null,description:"",name:"page",required:!0,type:{name:"string"}},story:{defaultValue:{value:""},description:"",name:"story",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/storybook-link/storybook-link.tsx#storybooklink"]={docgenInfo:storybooklink.__docgenInfo,name:"storybooklink",path:"src/components/storybook-link/storybook-link.tsx#storybooklink"})}catch(__react_docgen_typescript_loader_error){}const storybook_link_stories={component:storybook_link,title:"Components/StorybookLink"},Overview={args:{page:"Components/Paragraph",children:'Navigate to "Paragraph"'}};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  args: {\n    page: "Components/Paragraph",\n    children: \'Navigate to "Paragraph"\'\n  }\n}',...Overview.parameters?.docs?.source}}};const __namedExportsOrder=["Overview"]}}]);