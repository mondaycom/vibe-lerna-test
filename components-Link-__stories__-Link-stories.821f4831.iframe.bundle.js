"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[1645],{"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>action});var v4=__webpack_require__("../../node_modules/uuid/dist/esm-browser/v4.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),preview_errors=__webpack_require__("../../node_modules/@storybook/core-events/dist/errors/preview-errors.mjs"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.Z)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new preview_errors.is({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler}},"./src/components/Link/__stories__/Link.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,ReferenceLink:()=>ReferenceLink,RightToLeft:()=>RightToLeft,ShorteningTexts:()=>ShorteningTexts,States:()=>States,WithIcons:()=>WithIcons,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Link_stories_Link_stories});__webpack_require__("../../node_modules/react/index.js");var Link=__webpack_require__("./src/components/Link/Link.tsx"),createStoryMetaSettingsDecorator=__webpack_require__("./src/storybook/functions/createStoryMetaSettingsDecorator.ts"),components_Link=__webpack_require__("./src/components/Icon/Icons/components/Link.tsx"),Info=__webpack_require__("./src/components/Icon/Icons/components/Info.tsx"),ExternalPage=__webpack_require__("./src/components/Icon/Icons/components/ExternalPage.tsx"),createComponentTemplate=__webpack_require__("../vibe-storybook-components/dist/functions/createComponentTemplate.js"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Link_stories=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/components/Link/__stories__/Link.stories.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Link_stories.Z,options);Link_stories.Z&&Link_stories.Z.locals&&Link_stories.Z.locals;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),metaSettings=(0,createStoryMetaSettingsDecorator.d)({component:Link.Z,enumPropNamesArray:["iconPosition","target"],iconPropNamesArray:["icon"]});const Link_stories_Link_stories={title:"Navigation/Link",component:Link.Z,argTypes:metaSettings.argTypes,decorators:metaSettings.decorators};var Overview={render:(0,createComponentTemplate.U)(Link.Z).bind({}),name:"Overview",args:{text:"Read more",href:"https://www.monday.com"}},States={render:function render(){return(0,jsx_runtime.jsx)(Link.Z,{text:"Default",href:"https://www.monday.com"})},name:"States"},RightToLeft={render:function render(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Link.Z,{text:"اقرأ أكثر",href:"https://www.monday.com",icon:components_Link.Z}),(0,jsx_runtime.jsx)(Link.Z,{text:"קרא עוד",href:"https://www.monday.com",iconPosition:Link.Z.iconPositions.END,icon:Info.Z})]})},name:"Right to left"},WithIcons={render:function render(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Link.Z,{text:"Read more",href:"https://www.monday.com",icon:ExternalPage.Z}),(0,jsx_runtime.jsx)(Link.Z,{text:"Read more",href:"https://www.monday.com",iconPosition:Link.Z.iconPositions.END,icon:ExternalPage.Z})]})},name:"With icons"},ReferenceLink={render:function render(){return(0,jsx_runtime.jsxs)("div",{children:["Lorem Ipsum has been the industry's ",(0,jsx_runtime.jsx)(Link.Z,{inlineText:!0,inheritFontSize:!0,text:"standard",href:"https://www.monday.com"})," dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."]})},name:"Reference link"},ShorteningTexts={render:function render(){return(0,jsx_runtime.jsxs)("div",{children:["Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a\n      galley of type and scrambled it to make a type specimen book. ",(0,jsx_runtime.jsx)(Link.Z,{text:"Read more",href:"https://www.monday.com",inheritFontSize:!0,inlineText:!0})]})},name:"Shortening texts"};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: linkTemplate.bind({}),\n  name: "Overview",\n  args: {\n    text: "Read more",\n    href: "https://www.monday.com"\n  }\n}',...Overview.parameters?.docs?.source}}},States.parameters={...States.parameters,docs:{...States.parameters?.docs,source:{originalSource:'{\n  render: () => <Link text="Default" href="https://www.monday.com" />,\n  name: "States"\n}',...States.parameters?.docs?.source}}},RightToLeft.parameters={...RightToLeft.parameters,docs:{...RightToLeft.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <Link text="اقرأ أكثر" href="https://www.monday.com" icon={IconLink} />\n      <Link text="קרא עוד" href="https://www.monday.com" iconPosition={Link.iconPositions.END} icon={Info} />\n    </>,\n  name: "Right to left"\n}',...RightToLeft.parameters?.docs?.source}}},WithIcons.parameters={...WithIcons.parameters,docs:{...WithIcons.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <Link text="Read more" href="https://www.monday.com" icon={ExternalPage} />\n      <Link text="Read more" href="https://www.monday.com" iconPosition={Link.iconPositions.END} icon={ExternalPage} />\n    </>,\n  name: "With icons"\n}',...WithIcons.parameters?.docs?.source}}},ReferenceLink.parameters={...ReferenceLink.parameters,docs:{...ReferenceLink.parameters?.docs,source:{originalSource:'{\n  render: () => <div>\n      {`Lorem Ipsum has been the industry\'s `}\n      <Link inlineText inheritFontSize text="standard" href="https://www.monday.com" />\n      {` dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}\n    </div>,\n  name: "Reference link"\n}',...ReferenceLink.parameters?.docs?.source}}},ShorteningTexts.parameters={...ShorteningTexts.parameters,docs:{...ShorteningTexts.parameters?.docs,source:{originalSource:'{\n  render: () => <div>\n      {`Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a\n      galley of type and scrambled it to make a type specimen book. `}\n      <Link text="Read more" href="https://www.monday.com" inheritFontSize inlineText />\n    </div>,\n  name: "Shortening texts"\n}',...ShorteningTexts.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","States","RightToLeft","WithIcons","ReferenceLink","ShorteningTexts"]},"../vibe-storybook-components/dist/functions/createComponentTemplate.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>r});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function r(r){return function(e){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r,Object.assign({},e))}}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/components/Link/__stories__/Link.stories.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".monday-storybook-link_inline-wrapper{display:flex;align-items:flex-end;justify-content:space-between;height:40px;width:max-content;padding-top:20px}.monday-storybook-link_text{font-size:14px;padding:0 8px 2px 0}","",{version:3,sources:["webpack://./src/components/Link/__stories__/Link.stories.scss"],names:[],mappings:"AACE,sCACE,YAAA,CACA,oBAAA,CACA,6BAAA,CACA,WAAA,CACA,iBAAA,CACA,gBAAA,CAGF,4BACE,cAAA,CACA,mBAAA",sourcesContent:[".monday-storybook-link {\n  &_inline-wrapper {\n    display: flex;\n    align-items: flex-end;\n    justify-content: space-between;\n    height: 40px;\n    width: max-content;\n    padding-top: 20px;\n  }\n\n  &_text {\n    font-size: 14px;\n    padding: 0 8px 2px 0;\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);