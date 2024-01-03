"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[7565],{"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>action});var v4=__webpack_require__("../../node_modules/uuid/dist/esm-browser/v4.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),preview_errors=__webpack_require__("../../node_modules/@storybook/core-events/dist/errors/preview-errors.mjs"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.Z)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new preview_errors.is({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler}},"./src/components/GridKeyboardNavigationContext/__stories__/useGridKeyboardNavigationContext.stories.helpers.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>DummyNavigableGrid,b:()=>LayoutWithInnerKeyboardNavigation});var react=__webpack_require__("../../node_modules/react/index.js"),range=__webpack_require__("../../node_modules/lodash-es/range.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),dist=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs"),Button=__webpack_require__("./src/components/Button/Button.tsx"),Flex=__webpack_require__("./src/components/Flex/Flex.tsx"),useGridKeyboardNavigation=__webpack_require__("./src/hooks/useGridKeyboardNavigation/useGridKeyboardNavigation.ts"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),useGridKeyboardNavigationContext_stories=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/components/GridKeyboardNavigationContext/__stories__/useGridKeyboardNavigationContext.stories.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(useGridKeyboardNavigationContext_stories.Z,options);useGridKeyboardNavigationContext_stories.Z&&useGridKeyboardNavigationContext_stories.Z.locals&&useGridKeyboardNavigationContext_stories.Z.locals;var GridKeyboardNavigationContext=__webpack_require__("./src/components/GridKeyboardNavigationContext/GridKeyboardNavigationContext.ts"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),ON_CLICK=(0,dist.aD)("Selected"),DummyNavigableGrid=(0,react.forwardRef)((function(_ref,ref){var itemsCount=_ref.itemsCount,numberOfItemsInLine=_ref.numberOfItemsInLine,_ref$itemPrefix=_ref.itemPrefix,itemPrefix=void 0===_ref$itemPrefix?"":_ref$itemPrefix,disabled=_ref.disabled,disabledIndexes=_ref.disabledIndexes,_ref$withoutBorder=_ref.withoutBorder,withoutBorder=void 0!==_ref$withoutBorder&&_ref$withoutBorder,width=(0,react.useMemo)((function(){return 72*numberOfItemsInLine+48}),[numberOfItemsInLine]),items=(0,react.useMemo)((function(){return(0,range.Z)(itemsCount).map((function(num){return"".concat(itemPrefix," ").concat(num)}))}),[itemPrefix,itemsCount]),getItemByIndex=(0,react.useCallback)((function(index){return items[index]}),[items]),_useGridKeyboardNavig=(0,useGridKeyboardNavigation.Z)({ref,numberOfItemsInLine,itemsCount,getItemByIndex,onItemClicked:ON_CLICK,disabledIndexes}),activeIndex=_useGridKeyboardNavig.activeIndex,onSelectionAction=_useGridKeyboardNavig.onSelectionAction,onClickByIndex=(0,react.useCallback)((function(index){return function(){return onSelectionAction(index)}}),[onSelectionAction]);return(0,jsx_runtime.jsx)("div",{className:classnames_default()("use-grid-keyboard-dummy-grid-wrapper",{"without-border":withoutBorder}),style:{width},"data-disabled":disabled,ref,tabIndex:-1,children:items.map((function(item,index){return(0,jsx_runtime.jsx)(Button.Z,{kind:Button.Z.kinds.SECONDARY,onClick:onClickByIndex(index),disabled:disabled||(null==disabledIndexes?void 0:disabledIndexes.includes(index)),className:classnames_default()("use-grid-keyboard-dummy-grid-item",{"active-item":index===activeIndex}),children:item},item)}))})})),LayoutWithInnerKeyboardNavigation=(0,react.forwardRef)((function(_ref2,ref){var id=_ref2.id,itemPrefix=_ref2.itemPrefix,leftElRef=(0,react.useRef)(null),rightElRef=(0,react.useRef)(null),bottomElRef=(0,react.useRef)(null),keyboardContext=(0,GridKeyboardNavigationContext.$)([{leftElement:leftElRef,rightElement:rightElRef},{topElement:leftElRef,bottomElement:bottomElRef}],ref),innerPrefix=itemPrefix||"";return(0,jsx_runtime.jsx)(GridKeyboardNavigationContext.D.Provider,{value:keyboardContext,children:(0,jsx_runtime.jsxs)(Flex.Z,{ref,id,direction:Flex.Z.directions.COLUMN,align:Flex.Z.align.START,className:"use-grid-keyboard-dummy-grid-wrapper",tabIndex:-1,children:[(0,jsx_runtime.jsxs)(Flex.Z,{children:[(0,jsx_runtime.jsx)(DummyNavigableGrid,{ref:leftElRef,itemsCount:6,numberOfItemsInLine:3,itemPrefix:"".concat(innerPrefix,"L")}),(0,jsx_runtime.jsx)(DummyNavigableGrid,{ref:rightElRef,itemsCount:6,numberOfItemsInLine:2,itemPrefix:"".concat(innerPrefix,"R")})]}),(0,jsx_runtime.jsx)(DummyNavigableGrid,{ref:bottomElRef,itemsCount:6,numberOfItemsInLine:2,itemPrefix:"".concat(innerPrefix,"B")})]})})}));DummyNavigableGrid.__docgenInfo={description:"",methods:[],displayName:"DummyNavigableGrid",props:{itemPrefix:{defaultValue:{value:'""',computed:!1},required:!1},withoutBorder:{defaultValue:{value:"false",computed:!1},required:!1}}},LayoutWithInnerKeyboardNavigation.__docgenInfo={description:"",methods:[],displayName:"LayoutWithInnerKeyboardNavigation"}},"./src/components/Menu/MenuGridItem/MenuGridItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>MenuGridItem_MenuGridItem});var react=__webpack_require__("../../node_modules/react/index.js"),useMergeRef=__webpack_require__("./src/hooks/useMergeRef.ts"),GridKeyboardNavigationContext=__webpack_require__("./src/components/GridKeyboardNavigationContext/GridKeyboardNavigationContext.ts"),useFullKeyboardListeners=__webpack_require__("./src/hooks/useFullKeyboardListeners.ts"),useMenuGridItemNavContext=function useMenuGridItemNavContext(_ref){var wrapperRef=_ref.wrapperRef,setActiveItemIndex=_ref.setActiveItemIndex,getPreviousSelectableIndex=_ref.getPreviousSelectableIndex,getNextSelectableIndex=_ref.getNextSelectableIndex,activeItemIndex=_ref.activeItemIndex,isUnderSubMenu=_ref.isUnderSubMenu,closeMenu=_ref.closeMenu,innerKeyboardContext=(0,GridKeyboardNavigationContext.$)([],wrapperRef);return(0,react.useMemo)((function(){return{onOutboundNavigation:function onOutboundNavigation(elementRef,direction){switch(innerKeyboardContext.onOutboundNavigation(elementRef,direction),direction){case useFullKeyboardListeners.d.UP:return setActiveItemIndex(getPreviousSelectableIndex(activeItemIndex));case useFullKeyboardListeners.d.DOWN:return setActiveItemIndex(getNextSelectableIndex(activeItemIndex));case useFullKeyboardListeners.d.LEFT:isUnderSubMenu&&closeMenu({})}}}}),[innerKeyboardContext,setActiveItemIndex,getPreviousSelectableIndex,activeItemIndex,getNextSelectableIndex,isUnderSubMenu,closeMenu])};try{useMenuGridItemNavContext.displayName="useMenuGridItemNavContext",useMenuGridItemNavContext.__docgenInfo={description:"",displayName:"useMenuGridItemNavContext",props:{wrapperRef:{defaultValue:null,description:"",name:"wrapperRef",required:!1,type:{name:"MutableRefObject<HTMLElement> & { current?: HTMLElement & { disabled?: boolean; }; }"}},setActiveItemIndex:{defaultValue:null,description:"",name:"setActiveItemIndex",required:!1,type:{name:"(index: number) => void"}},getNextSelectableIndex:{defaultValue:null,description:"",name:"getNextSelectableIndex",required:!1,type:{name:"(activeItemIndex: number) => number"}},getPreviousSelectableIndex:{defaultValue:null,description:"",name:"getPreviousSelectableIndex",required:!1,type:{name:"(activeItemIndex: number) => number"}},activeItemIndex:{defaultValue:null,description:"",name:"activeItemIndex",required:!1,type:{name:"number"}},isUnderSubMenu:{defaultValue:null,description:"",name:"isUnderSubMenu",required:!1,type:{name:"boolean"}},closeMenu:{defaultValue:null,description:"",name:"closeMenu",required:!1,type:{name:"(option: CloseMenuOption) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Menu/MenuGridItem/useMenuGridItemNavContext.tsx#useMenuGridItemNavContext"]={docgenInfo:useMenuGridItemNavContext.__docgenInfo,name:"useMenuGridItemNavContext",path:"src/components/Menu/MenuGridItem/useMenuGridItemNavContext.tsx#useMenuGridItemNavContext"})}catch(__react_docgen_typescript_loader_error){}var useLastNavigationDirection=__webpack_require__("./src/components/Menu/Menu/hooks/useLastNavigationDirection.tsx"),useFocusGridItemByActiveStatus=function useFocusGridItemByActiveStatus(_ref){var wrapperRef=_ref.wrapperRef,childRef=_ref.childRef,index=_ref.index,activeItemIndex=_ref.activeItemIndex,_ref$useDocumentEvent=_ref.useDocumentEventListeners,useDocumentEventListeners=void 0!==_ref$useDocumentEvent&&_ref$useDocumentEvent,lastNavigationDirectionRef=(0,useLastNavigationDirection.t)().lastNavigationDirectionRef,isActive=(0,react.useMemo)((function(){return index===activeItemIndex}),[activeItemIndex,index]);(0,react.useEffect)((function(){var _childRef$current,_wrapperRef$current,_wrapperRef$current$b;useDocumentEventListeners||(isActive?null===(_childRef$current=childRef.current)||void 0===_childRef$current||_childRef$current.focus():null==wrapperRef||null===(_wrapperRef$current=wrapperRef.current)||void 0===_wrapperRef$current||null===(_wrapperRef$current$b=_wrapperRef$current.blur)||void 0===_wrapperRef$current$b||_wrapperRef$current$b.call(_wrapperRef$current))}),[childRef,isActive,lastNavigationDirectionRef,wrapperRef,useDocumentEventListeners])};try{useFocusGridItemByActiveStatus.displayName="useFocusGridItemByActiveStatus",useFocusGridItemByActiveStatus.__docgenInfo={description:"",displayName:"useFocusGridItemByActiveStatus",props:{wrapperRef:{defaultValue:null,description:"",name:"wrapperRef",required:!0,type:{name:"RefObject<HTMLElement>"}},childRef:{defaultValue:null,description:"",name:"childRef",required:!0,type:{name:"RefObject<HTMLElement>"}},index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}},activeItemIndex:{defaultValue:null,description:"",name:"activeItemIndex",required:!0,type:{name:"number"}},useDocumentEventListeners:{defaultValue:{value:"false"},description:"",name:"useDocumentEventListeners",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Menu/MenuGridItem/useFocusGridItemByActiveStatus.tsx#useFocusGridItemByActiveStatus"]={docgenInfo:useFocusGridItemByActiveStatus.__docgenInfo,name:"useFocusGridItemByActiveStatus",path:"src/components/Menu/MenuGridItem/useFocusGridItemByActiveStatus.tsx#useFocusGridItemByActiveStatus"})}catch(__react_docgen_typescript_loader_error){}var useFocusWithin=__webpack_require__("./src/hooks/useFocusWithin.ts"),test_ids_utils=__webpack_require__("./src/tests/test-ids-utils.ts"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var MenuGridItem=(0,react.forwardRef)((function(_ref,ref){var className=_ref.className,id=_ref.id,children=_ref.children,index=_ref.index,_ref$activeItemIndex=_ref.activeItemIndex,activeItemIndex=void 0===_ref$activeItemIndex?-1:_ref$activeItemIndex,closeMenu=_ref.closeMenu,getNextSelectableIndex=_ref.getNextSelectableIndex,getPreviousSelectableIndex=_ref.getPreviousSelectableIndex,setActiveItemIndex=_ref.setActiveItemIndex,setSubMenuIsOpenByIndex=_ref.setSubMenuIsOpenByIndex,_ref$isUnderSubMenu=_ref.isUnderSubMenu,isUnderSubMenu=void 0!==_ref$isUnderSubMenu&&_ref$isUnderSubMenu,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,_ref$useDocumentEvent=_ref.useDocumentEventListeners,useDocumentEventListeners=void 0!==_ref$useDocumentEvent&&_ref$useDocumentEvent,dataTestId=_ref["data-testid"],componentRef=(0,react.useRef)(null),mergedRef=(0,useMergeRef.Z)(ref,componentRef),childRef=(0,react.useRef)(),child=children&&react.Children.only(children);child||console.error("MenuGridItem can accept only a single element as first level child, this element is not valid: ",child);var onFocusWithinChange=(0,react.useCallback)((function(isFocusWithin){setSubMenuIsOpenByIndex(index,isFocusWithin),isFocusWithin&&setActiveItemIndex(index)}),[index,setActiveItemIndex,setSubMenuIsOpenByIndex]),focusWithinProps=(0,useFocusWithin.L)({onFocusWithinChange}).focusWithinProps;useFocusGridItemByActiveStatus({wrapperRef:componentRef,childRef,activeItemIndex,index,useDocumentEventListeners});var keyboardContext=useMenuGridItemNavContext({wrapperRef:componentRef,setActiveItemIndex,getPreviousSelectableIndex,getNextSelectableIndex,activeItemIndex,isUnderSubMenu,closeMenu});return(0,jsx_runtime.jsx)("section",_objectSpread(_objectSpread({ref:mergedRef,className,id,"data-testid":dataTestId||(0,test_ids_utils.l)(test_ids_utils.S.MENU_GRID_ITEM,id),tabIndex:-1,role:"grid"},focusWithinProps),{},{children:(0,jsx_runtime.jsx)(GridKeyboardNavigationContext.D.Provider,{value:keyboardContext,children:react.cloneElement(child,_objectSpread(_objectSpread({},null==child?void 0:child.props),{},{disabled,ref:childRef}))})}))}));Object.assign(MenuGridItem,{isMenuChild:!0,isSelectable:!0});const MenuGridItem_MenuGridItem=MenuGridItem;try{MenuGridItem.displayName="MenuGridItem",MenuGridItem.__docgenInfo={description:"",displayName:"MenuGridItem",props:{disabled:{defaultValue:{value:"false"},description:"if true, keyboard navigation will skip on this item. Also, this prop will be passed on to the child *",name:"disabled",required:!1,type:{name:"boolean"}},closeMenu:{defaultValue:null,description:"a callback to close the wrapping menu *",name:"closeMenu",required:!1,type:{name:"(option: CloseMenuOption) => void"}},activeItemIndex:{defaultValue:{value:"-1"},description:"the currently active index of the wrapping menu *",name:"activeItemIndex",required:!1,type:{name:"number"}},setActiveItemIndex:{defaultValue:null,description:"",name:"setActiveItemIndex",required:!1,type:{name:"(index: number) => void"}},getNextSelectableIndex:{defaultValue:null,description:"",name:"getNextSelectableIndex",required:!1,type:{name:"(activeItemIndex: number) => number"}},getPreviousSelectableIndex:{defaultValue:null,description:"",name:"getPreviousSelectableIndex",required:!1,type:{name:"(activeItemIndex: number) => number"}},index:{defaultValue:null,description:"the index of this item *",name:"index",required:!1,type:{name:"number"}},isUnderSubMenu:{defaultValue:{value:"false"},description:"true if this item is under a submenu, and not a top-level menu *",name:"isUnderSubMenu",required:!1,type:{name:"boolean"}},setSubMenuIsOpenByIndex:{defaultValue:null,description:"",name:"setSubMenuIsOpenByIndex",required:!1,type:{name:"(index: number, isOpen: boolean) => void"}},useDocumentEventListeners:{defaultValue:{value:"false"},description:"",name:"useDocumentEventListeners",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},"data-testid":{defaultValue:null,description:"",name:"data-testid",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Menu/MenuGridItem/MenuGridItem.tsx#MenuGridItem"]={docgenInfo:MenuGridItem.__docgenInfo,name:"MenuGridItem",path:"src/components/Menu/MenuGridItem/MenuGridItem.tsx#MenuGridItem"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/components/GridKeyboardNavigationContext/__stories__/useGridKeyboardNavigationContext.stories.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".use-grid-keyboard-dummy-grid-wrapper{padding:12px;display:flex;flex-wrap:wrap;outline:none;text-align:center;box-shadow:0 0 0 1px rgba(0,0,0,.1),0 0 0 1px var(--sb-primary-hover-color) inset}.use-grid-keyboard-dummy-grid-wrapper.without-border{box-shadow:none}.use-grid-keyboard-dummy-grid-item{width:60px;margin:6px}.use-grid-keyboard-dummy-grid-item.active-item{outline:none;z-index:11;border-radius:4px;box-shadow:0 0 0 3px rgba(0,132,255,.5),0 0 0 1px var(--sb-primary-hover-color) inset}","",{version:3,sources:["webpack://./src/components/GridKeyboardNavigationContext/__stories__/useGridKeyboardNavigationContext.stories.scss","webpack://./../vibe-storybook-components/dist/styles/mixins/_focus.scss"],names:[],mappings:"AAEA,sCACE,YAAA,CACA,YAAA,CACA,cAAA,CACA,YAAA,CACA,iBAAA,CACA,iFACE,CAGF,qDACE,eAAA,CAIJ,mCACE,UAAA,CACA,UAAA,CAEA,+CCDA,YAAA,CACA,UAAA,CACA,iBAXuC,CAGvC,qFACE",sourcesContent:['@import "~vibe-storybook-components/dist/mixins";\n\n.use-grid-keyboard-dummy-grid-wrapper {\n  padding: 12px;\n  display: flex;\n  flex-wrap: wrap;\n  outline: none;\n  text-align: center;\n  box-shadow:\n    0 0 0 1px rgba(0, 0, 0, 0.1),\n    0 0 0 1px var(--sb-primary-hover-color) inset;\n\n  &.without-border {\n    box-shadow: none;\n  }\n}\n\n.use-grid-keyboard-dummy-grid-item {\n  width: 60px;\n  margin: 6px;\n\n  &.active-item {\n    @include sb-focus-style-css();\n  }\n}\n',"@mixin sb-focus-style($focus-radius: 4px) {\n  &:focus-visible,\n  &.focus-visible {\n    @include sb-focus-style-css($focus-radius);\n  }\n\n  &:focus:not(.focus-visible) {\n    outline: none;\n  }\n}\n\n@mixin sb-focus-style-css($focus-radius: 4px, $shadow-depth: 3px) {\n  @include sb-focus-style-base($focus-radius);\n\n  box-shadow:\n    0 0 0 $shadow-depth hsl(209deg 100% 50% / 50%),\n    0 0 0 1px var(--sb-primary-hover-color) inset;\n}\n\n@mixin sb-focus-style-base($focus-radius: 4px) {\n  outline: none;\n  z-index: 11;\n  border-radius: $focus-radius;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);