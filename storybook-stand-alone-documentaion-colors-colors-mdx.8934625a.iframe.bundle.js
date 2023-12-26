"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[4144],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/storybook/stand-alone-documentaion/colors/colors.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>colors});var react=__webpack_require__("../../node_modules/react/index.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),frame_frame=__webpack_require__("../vibe-storybook-components/dist/components/frame/frame.js"),component_description_map=__webpack_require__("./src/storybook/components/related-components/component-description-map.tsx"),colors_description=__webpack_require__("./src/storybook/stand-alone-documentaion/colors/colors-description/colors-description.jsx"),colorKeys=["primary-color","primary-hover-color","primary-selected-color","primary-selected-hover-color","positive-color","positive-color-hover","positive-color-selected","positive-color-selected-hover","negative-color","negative-color-hover","negative-color-selected","negative-color-selected-hover","warning-color","warning-color-hover","warning-color-selected","warning-color-selected-hover","private-color","shareable-color","inverted-color-background","icon-color","fixed-light-color","fixed-dark-color"],SemanticColors=function SemanticColors(){return(0,jsx_runtime.jsx)(colors_description.Z,{colorNames:colorKeys})};SemanticColors.displayName="SemanticColors",SemanticColors.__docgenInfo={description:"",methods:[],displayName:"SemanticColors"};var background_colors_colorKeys=["primary-background-color","secondary-background-color","primary-background-hover-color","inverted-color-background","grey-background-color","allgrey-background-color"],BackgroundColors=function BackgroundColors(){return(0,jsx_runtime.jsx)(colors_description.Z,{colorNames:background_colors_colorKeys})};BackgroundColors.displayName="BackgroundColors",BackgroundColors.__docgenInfo={description:"",methods:[],displayName:"BackgroundColors"};var text_colors=__webpack_require__("./src/storybook/stand-alone-documentaion/colors/text-colors/text-colors.jsx"),border_colors_colorKeys=["ui-border-color","layout-border-color"],BorderColors=function BorderColors(){return(0,jsx_runtime.jsx)(colors_description.Z,{colorNames:border_colors_colorKeys})};BorderColors.displayName="BorderColors",BorderColors.__docgenInfo={description:"",methods:[],displayName:"BorderColors"};var colors_utils=__webpack_require__("./src/utils/colors-utils.ts"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),content_color_cell_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/storybook/stand-alone-documentaion/colors/content-color-cell/content-color-cell.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(content_color_cell_module.Z,options);const content_color_cell_content_color_cell_module=content_color_cell_module.Z&&content_color_cell_module.Z.locals?content_color_cell_module.Z.locals:void 0;var ContentColorCell=function ContentColorCell(_ref){var children=_ref.children,style=_ref.style;return(0,jsx_runtime.jsx)("td",{className:content_color_cell_content_color_cell_module["content-colors-cell"],style,children})};ContentColorCell.displayName="ContentColorCell",ContentColorCell.__docgenInfo={description:"",methods:[],displayName:"ContentColorCell"};var ContentColorRow=function ContentColorRow(_ref){var colorName=_ref.colorName,regularStyle=(0,react.useMemo)((function(){return{backgroundColor:colors_utils.Z.getMondayColorAsStyle(colorName,colors_utils.Z.modes.REGULAR)}}),[colorName]),hoverStyle=(0,react.useMemo)((function(){return{backgroundColor:colors_utils.Z.getMondayColorAsStyle(colorName,colors_utils.Z.modes.HOVER)}}),[colorName]),selectedStyle=(0,react.useMemo)((function(){return{backgroundColor:colors_utils.Z.getMondayColorAsStyle(colorName,colors_utils.Z.modes.SELECTED)}}),[colorName]);return(0,jsx_runtime.jsxs)("tr",{className:"content-color-row",children:[(0,jsx_runtime.jsx)(ContentColorCell,{children:"--".concat(colorName)}),(0,jsx_runtime.jsx)(ContentColorCell,{style:regularStyle}),(0,jsx_runtime.jsx)(ContentColorCell,{style:hoverStyle}),(0,jsx_runtime.jsx)(ContentColorCell,{style:selectedStyle})]})};ContentColorRow.displayName="ContentColorRow",ContentColorRow.__docgenInfo={description:"",methods:[],displayName:"ContentColorRow"};var colors_vars_map=__webpack_require__("./src/utils/colors-vars-map.ts"),content_colors_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/storybook/stand-alone-documentaion/colors/content-colors/content-colors.module.scss"),content_colors_module_options={};content_colors_module_options.styleTagTransform=styleTagTransform_default(),content_colors_module_options.setAttributes=setAttributesWithoutAttributes_default(),content_colors_module_options.insert=insertBySelector_default().bind(null,"head"),content_colors_module_options.domAPI=styleDomAPI_default(),content_colors_module_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(content_colors_module.Z,content_colors_module_options);const content_colors_content_colors_module=content_colors_module.Z&&content_colors_module.Z.locals?content_colors_module.Z.locals:void 0;var ContentColors=function ContentColors(){var colorsCells=(0,react.useMemo)((function(){return Object.values(colors_vars_map.$R).map((function(colorName){return(0,jsx_runtime.jsx)(ContentColorRow,{colorName},colorName)}))}),[]);return(0,jsx_runtime.jsx)(frame_frame.Z,{children:(0,jsx_runtime.jsxs)("table",{className:content_colors_content_colors_module["content-colors-table"],cellSpacing:1,children:[(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)(ContentColorCell,{}),(0,jsx_runtime.jsx)(ContentColorCell,{children:"Default"}),(0,jsx_runtime.jsx)(ContentColorCell,{children:"Hover"}),(0,jsx_runtime.jsx)(ContentColorCell,{children:"Selected"})]}),colorsCells]})})};ContentColors.displayName="ContentColors",ContentColors.__docgenInfo={description:"",methods:[],displayName:"ContentColors"};const menuColorsExample_namespaceObject=__webpack_require__.p+"static/media/menuColorsExample.22be6f41.png",cardColorsExample_namespaceObject=__webpack_require__.p+"static/media/cardColorsExample.c3727029.png";var component_name_decorator=__webpack_require__("./src/storybook/components/component-name/component-name-decorator.jsx"),colors_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/storybook/stand-alone-documentaion/colors/colors.module.scss"),colors_module_options={};colors_module_options.styleTagTransform=styleTagTransform_default(),colors_module_options.setAttributes=setAttributesWithoutAttributes_default(),colors_module_options.insert=insertBySelector_default().bind(null,"head"),colors_module_options.domAPI=styleDomAPI_default(),colors_module_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(colors_module.Z,colors_module_options);const colors_colors_module=colors_module.Z&&colors_module.Z.locals?colors_module.Z.locals:void 0;function _createMdxContent(props){const _components=Object.assign({ul:"ul",li:"li",a:"a",h2:"h2",p:"p",h3:"h3"},(0,lib.ah)(),props.components),{RelatedComponents}=_components;return RelatedComponents||function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}("RelatedComponents",!0),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Foundations/Colors"}),"\n",(0,jsx_runtime.jsx)(component_name_decorator.J,{withFoundationBackground:!0,children:"Colors"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#color-keys",children:"Color keys"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#usage-and-examples",children:"Usage and examples"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#up-next",children:"Up next"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#feedback",children:"Feedback"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"monday.com tool is very visual and our color system helps users identify status, see actions, locate help, and to indicate next steps.\nThe consistent use of color in our product keeps cognitive loads low, and makes for a unified and engaging user experience.\nThe colors are designed to be clear and accessible. They come in three color themes."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"color-keys",children:"Color keys"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"semantic-colors",children:"Semantic colors"}),"\n",(0,jsx_runtime.jsx)(SemanticColors,{}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"background-colors",children:"Background colors"}),"\n",(0,jsx_runtime.jsx)(BackgroundColors,{}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"text-colors",children:"Text colors"}),"\n",(0,jsx_runtime.jsx)(text_colors.g,{}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"border-colors",children:"Border colors"}),"\n",(0,jsx_runtime.jsx)(BorderColors,{}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"content-colors",children:"Content colors"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"These colors are used only for color coding purposes like groups colors, statuses timeline bars etc..\nthis gives understanding and indication of orientation and belonging.\nThe board’s main strength is its simple and visual appearance. That’s why the status colors should appear on the board and nowhere else in the UI."}),"\n",(0,jsx_runtime.jsx)(ContentColors,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage-and-examples",children:"Usage and examples"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"menu",children:"Menu"}),"\n",(0,jsx_runtime.jsx)(frame_frame.Z,{className:colors_colors_module["colors-example-frame"],children:(0,jsx_runtime.jsx)("img",{className:colors_colors_module["menu-colors-example-img"],src:menuColorsExample_namespaceObject,alt:""})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"card",children:"Card"}),"\n",(0,jsx_runtime.jsx)(frame_frame.Z,{className:colors_colors_module["colors-example-frame"],children:(0,jsx_runtime.jsx)("img",{className:colors_colors_module["card-colors-example-img"],src:cardColorsExample_namespaceObject,alt:""})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"up-next",children:"Up next"}),"\n",(0,jsx_runtime.jsx)(RelatedComponents,{componentsNames:[component_description_map.l$,component_description_map.AP,component_description_map.N_]})]})}const colors=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/storybook/stand-alone-documentaion/colors/colors-description/colors-description.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>ColorsDescription,Z:()=>colors_description});var react=__webpack_require__("../../node_modules/react/index.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),i_visualDescription="visual-description-module_visualDescription__ucr0q",i_visualDescriptionVisual="visual-description-module_visualDescriptionVisual__2PrLr",i_visualDescriptionText="visual-description-module_visualDescriptionText__E4eqG",i_visualDescriptionTitle="visual-description-module_visualDescriptionTitle__bxuHc",l=function l(_ref){var l=_ref.title,r=_ref.ariaLabel,c=_ref.children,t=_ref.description,o=_ref.code,n=_ref.className,d=_ref.visualDescriptionClassName;return(0,jsx_runtime.jsxs)("div",{className:classnames_default()(i_visualDescription,n),"aria-label":r,children:[(0,jsx_runtime.jsx)("figure",{className:classnames_default()(i_visualDescriptionVisual,d),"aria-hidden":!0,children:c}),(0,jsx_runtime.jsxs)("section",{className:i_visualDescriptionText,children:[(0,jsx_runtime.jsx)("h5",{className:i_visualDescriptionTitle,children:l}),t,o&&(0,jsx_runtime.jsx)("code",{children:o})]})]})},o_colorDescription="color-description-module_colorDescription__Y5Iga",o_withBorder="color-description-module_withBorder__1QtNB";function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperty(obj,key,value){return key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key),key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var t=function t(_ref){var t=_ref.colorName,e=_ref.description,c=_ref.withBorder,a=(0,jsx_runtime.jsx)("div",{className:classnames_default()(o_colorDescription,_defineProperty({},o_withBorder,c)),style:{backgroundColor:"var(--".concat(t,")")}});return(0,jsx_runtime.jsx)(l,{title:t,description:e,ariaLabel:e,children:a})},frame_frame=__webpack_require__("../vibe-storybook-components/dist/components/frame/frame.js"),colors_vars_map=__webpack_require__("./src/utils/colors-vars-map.ts"),colorsWithBorder=new Set(["text-color-on-inverted","text-color-on-primary","fixed-light-color","text-color-on-brand","primary-background-color","secondary-background-color"]),ColorsDescription=function ColorsDescription(_ref){var colorNames=_ref.colorNames,descriptions=(0,react.useMemo)((function(){return colorNames.map((function(color){return(0,jsx_runtime.jsx)(t,{colorName:color,description:colors_vars_map.MU.get(color),withBorder:colorsWithBorder.has(color)},color)}))}),[colorNames]);return(0,jsx_runtime.jsx)(frame_frame.Z,{children:descriptions})};ColorsDescription.displayName="ColorsDescription";const colors_description=ColorsDescription;ColorsDescription.__docgenInfo={description:"",methods:[],displayName:"ColorsDescription"}},"./src/storybook/stand-alone-documentaion/colors/text-colors/text-colors.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,g:()=>TextColors});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_colors_description_colors_description__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/storybook/stand-alone-documentaion/colors/colors-description/colors-description.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),TextColors=function TextColors(){var colorKeys=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return["primary-text-color","secondary-text-color","secondary-text-on-secondary-color","text-color-on-inverted","text-color-on-primary","disabled-text-color","placeholder-color","link-color"]}),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_colors_description_colors_description__WEBPACK_IMPORTED_MODULE_2__.m,{colorNames:colorKeys})};TextColors.displayName="TextColors";const __WEBPACK_DEFAULT_EXPORT__=TextColors;TextColors.__docgenInfo={description:"",methods:[],displayName:"TextColors"}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/storybook/stand-alone-documentaion/colors/colors.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".colors-module_colors-example-frame{display:flex;justify-content:center}.colors-module_content-colors-table{width:80%}.colors-module_card-colors-example-img{width:679px}.colors-module_menu-colors-example-img{width:699px}","",{version:3,sources:["webpack://./src/storybook/stand-alone-documentaion/colors/colors.module.scss"],names:[],mappings:"AAAA,oCACE,YAAA,CACA,sBAAA,CAGF,oCACE,SAAA,CAGF,uCACE,WAAA,CAEF,uCACE,WAAA",sourcesContent:[".colors-example-frame {\n  display: flex;\n  justify-content: center;\n}\n\n.content-colors-table {\n  width: 80%;\n}\n\n.card-colors-example-img {\n  width: 679px;\n}\n.menu-colors-example-img {\n  width: 699px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"colors-example-frame":"colors-module_colors-example-frame","content-colors-table":"colors-module_content-colors-table","card-colors-example-img":"colors-module_card-colors-example-img","menu-colors-example-img":"colors-module_menu-colors-example-img"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/storybook/stand-alone-documentaion/colors/content-color-cell/content-color-cell.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".content-color-cell-module_content-colors-cell{height:40px;width:25%;padding:0;margin:0}","",{version:3,sources:["webpack://./src/storybook/stand-alone-documentaion/colors/content-color-cell/content-color-cell.module.scss"],names:[],mappings:"AAAA,+CACE,WAAA,CACA,SAAA,CACA,SAAA,CACA,QAAA",sourcesContent:[".content-colors-cell {\n  height: 40px;\n  width: 25%;\n  padding: 0;\n  margin: 0;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"content-colors-cell":"content-color-cell-module_content-colors-cell"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/storybook/stand-alone-documentaion/colors/content-colors/content-colors.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".content-colors-module_content-colors-table{width:60%;justify-self:center}","",{version:3,sources:["webpack://./src/storybook/stand-alone-documentaion/colors/content-colors/content-colors.module.scss"],names:[],mappings:"AAAA,4CACE,SAAA,CACA,mBAAA",sourcesContent:[".content-colors-table {\n  width: 60%;\n  justify-self: center;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"content-colors-table":"content-colors-module_content-colors-table"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);