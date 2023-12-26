"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[1928],{"./src/components/VirtualizedGrid/__stories__/VirtualizedGrid.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>VirtualizedGrid_stories});var react=__webpack_require__("../../node_modules/react/index.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),index_esm=__webpack_require__("../../node_modules/react-window/dist/index.esm.js"),react_virtualized_auto_sizer_esm=__webpack_require__("../../node_modules/react-virtualized-auto-sizer/dist/react-virtualized-auto-sizer.esm.js"),virtualized_service=__webpack_require__("./src/services/virtualized-service.js"),usePrevious=__webpack_require__("./src/hooks/usePrevious/index.ts"),useThrottledCallback=__webpack_require__("./src/hooks/useThrottledCallback.ts"),useMergeRef=__webpack_require__("./src/hooks/useMergeRef.ts"),function_utils=__webpack_require__("./src/utils/function-utils.ts"),test_ids_utils=__webpack_require__("./src/tests/test-ids-utils.ts"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),VirtualizedGrid_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/components/VirtualizedGrid/VirtualizedGrid.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(VirtualizedGrid_module.Z,options);const VirtualizedGrid_VirtualizedGrid_module=VirtualizedGrid_module.Z&&VirtualizedGrid_module.Z.locals?VirtualizedGrid_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var VirtualizedGrid=(0,react.forwardRef)((function(_ref,ref){var className=_ref.className,id=_ref.id,_ref$items=_ref.items,items=void 0===_ref$items?[]:_ref$items,_ref$itemRenderer=_ref.itemRenderer,itemRenderer=void 0===_ref$itemRenderer?function(item,_index,_style){return item}:_ref$itemRenderer,_ref$getRowHeight=_ref.getRowHeight,getRowHeight=void 0===_ref$getRowHeight?function(){return 50}:_ref$getRowHeight,_ref$getColumnWidth=_ref.getColumnWidth,getColumnWidth=void 0===_ref$getColumnWidth?function(){return 100}:_ref$getColumnWidth,_ref$getItemId=_ref.getItemId,getItemId=void 0===_ref$getItemId?function(item,_index){return item.id}:_ref$getItemId,onScroll=_ref.onScroll,_ref$scrollToId=_ref.scrollToId,scrollToId=void 0===_ref$scrollToId?null:_ref$scrollToId,_ref$onScrollToFinish=_ref.onScrollToFinished,onScrollToFinished=void 0===_ref$onScrollToFinish?function_utils.dG:_ref$onScrollToFinish,_ref$onItemsRendered=_ref.onItemsRendered,onItemsRendered=void 0===_ref$onItemsRendered?null:_ref$onItemsRendered,_ref$onItemsRenderedT=_ref.onItemsRenderedThrottleMs,onItemsRenderedThrottleMs=void 0===_ref$onItemsRenderedT?200:_ref$onItemsRenderedT,_ref$onSizeUpdate=_ref.onSizeUpdate,onSizeUpdate=void 0===_ref$onSizeUpdate?function_utils.dG:_ref$onSizeUpdate,_ref$onVerticalScroll=_ref.onVerticalScrollbarVisiblityChange,onVerticalScrollbarVisiblityChange=void 0===_ref$onVerticalScroll?null:_ref$onVerticalScroll,scrollableClassName=_ref.scrollableClassName,dataTestId=_ref["data-testid"],_useState2=_slicedToArray((0,react.useState)(0),2),gridHeight=_useState2[0],setGridHeight=_useState2[1],_useState4=_slicedToArray((0,react.useState)(0),2),gridWidth=_useState4[0],setGridWidth=_useState4[1],prevScrollToId=(0,usePrevious.Z)(scrollToId),componentRef=(0,react.useRef)(null),isVerticalScrollbarVisibleRef=(0,react.useRef)(null),gridRef=(0,react.useRef)(null),scrollTopRef=(0,react.useRef)(0),animationDataRef=(0,react.useRef)({scrollOffsetInitial:0,scrollOffsetFinal:0,animationStartTime:0}),mergedRef=(0,useMergeRef.Z)(ref,componentRef),animationData=animationDataRef.current,heightGetter=(0,react.useCallback)((function(item){var height=getRowHeight();return height&&!Number.isNaN(height)||console.error("Couldn't get height for item: ",item),height}),[getRowHeight]),idGetter=(0,react.useCallback)((function(item,index){var itemId=getItemId(item,index);return void 0===itemId&&console.error("Couldn't get id for item: ",item),itemId}),[getItemId]),normalizedItems=(0,react.useMemo)((function(){return(0,virtualized_service.uL)(items,idGetter,heightGetter)}),[items,idGetter,heightGetter]),calcColumnCount=(0,react.useMemo)((function(){return Math.min(items.length,Math.floor(gridWidth/getColumnWidth()))}),[items,gridWidth,getColumnWidth]),calcRowCount=(0,react.useMemo)((function(){return calcColumnCount>0?Math.ceil(items.length/calcColumnCount):0}),[items,calcColumnCount]),scrollToColumnIndex=(0,react.useMemo)((function(){return scrollToId%calcColumnCount}),[scrollToId,calcColumnCount]),scrollToRowIndex=(0,react.useMemo)((function(){return Math.floor(scrollToId/calcColumnCount)}),[scrollToId,calcColumnCount]),onScrollCB=(0,react.useCallback)((function(_ref2){var horizontalScrollDirection=_ref2.horizontalScrollDirection,scrollTop=_ref2.scrollTop,scrollUpdateWasRequested=_ref2.scrollUpdateWasRequested;scrollTopRef.current=scrollTop,scrollUpdateWasRequested||(animationData.scrollOffsetInitial=scrollTop),onScroll&&onScroll(horizontalScrollDirection,scrollTop,scrollUpdateWasRequested)}),[onScroll,scrollTopRef,animationData]),cellRenderer=(0,react.useCallback)((function(_ref3){var columnIndex=_ref3.columnIndex,rowIndex=_ref3.rowIndex,style=_ref3.style,index=rowIndex*calcColumnCount+columnIndex,item=items[index];return itemRenderer(item,index,style)}),[items,itemRenderer,calcColumnCount]),updateGridSize=(0,react.useCallback)((function(width,height){height===gridHeight&&width===gridWidth||setTimeout((function(){setGridHeight(height),setGridWidth(width),onSizeUpdate(width,height)}),0)}),[gridHeight,gridWidth,onSizeUpdate]),onItemsRenderedCB=(0,useThrottledCallback.Z)((function(_ref4){var visibleStartIndex=_ref4.visibleStartIndex,visibleStopIndex=_ref4.visibleStopIndex;if(onItemsRendered){var data=(0,virtualized_service.wI)(items,normalizedItems,idGetter,visibleStartIndex,visibleStopIndex,gridHeight,scrollTopRef.current);onItemsRendered(data)}}),{wait:onItemsRenderedThrottleMs,trailing:!0},[onItemsRendered,items,normalizedItems,idGetter,gridHeight]);return(0,react.useEffect)((function(){scrollToId&&prevScrollToId!==scrollToId&&(gridRef.current.scrollToItem({align:"center",columnIndex:scrollToColumnIndex,rowIndex:scrollToRowIndex}),onScrollToFinished())}),[scrollToId,prevScrollToId,gridRef,scrollToColumnIndex,scrollToRowIndex,onScrollToFinished]),(0,react.useEffect)((function(){gridRef.current&&gridRef.current.resetAfterIndices({columnIndex:0,rowIndex:0})}),[normalizedItems]),(0,react.useEffect)((function(){if(onVerticalScrollbarVisiblityChange){var isVisible=(0,virtualized_service.Cr)(items,normalizedItems,idGetter,gridHeight);isVerticalScrollbarVisibleRef.current!==isVisible&&(isVerticalScrollbarVisibleRef.current=isVisible,onVerticalScrollbarVisiblityChange(isVisible))}}),[onVerticalScrollbarVisiblityChange,items,normalizedItems,gridHeight,idGetter]),(0,jsx_runtime.jsx)("div",{ref:mergedRef,className:classnames_default()(VirtualizedGrid_VirtualizedGrid_module.virtualizedGridWrapper,className),id,"data-testid":dataTestId||(0,test_ids_utils.l)(test_ids_utils.S.VIRTUALIZED_GRID,id),children:(0,jsx_runtime.jsx)(react_virtualized_auto_sizer_esm.ZP,{children:function children(_ref5){var height=_ref5.height,width=_ref5.width;return updateGridSize(width,height),(0,jsx_runtime.jsx)(index_esm.cd,{ref:gridRef,height,width,columnWidth:getColumnWidth,columnCount:calcColumnCount,rowHeight:getRowHeight,rowCount:calcRowCount,onScroll:onScrollCB,onItemsRendered:onItemsRenderedCB,className:scrollableClassName,children:cellRenderer})}})})}));const VirtualizedGrid_VirtualizedGrid=VirtualizedGrid;try{VirtualizedGrid.displayName="VirtualizedGrid",VirtualizedGrid.__docgenInfo={description:"",displayName:"VirtualizedGrid",props:{items:{defaultValue:{value:"[]"},description:"A list of items to be rendered\n{\n     item: ItemType,\n    index: number,\n    style: CSSProperties\n}[]",name:"items",required:!1,type:{name:"ItemType[]"}},itemRenderer:{defaultValue:{value:"(item: ItemType, _index: number, _style: CSSProperties) => item"},description:"item render function\nreturns `JSX.Element`",name:"itemRenderer",required:!1,type:{name:"(item: ItemType, index: number, style: CSSProperties) => ItemType | ComponentType<GridChildComponentProps<ItemType>>"}},getRowHeight:{defaultValue:{value:"() => 50"},description:"in order to calculate the number of rows to render in the grid, the component needs the height of the row\nreturn `number`",name:"getRowHeight",required:!1,type:{name:"() => number"}},getColumnWidth:{defaultValue:{value:"() => 100"},description:"in order to calculate the number of columns to render in the grid, the component needs the width of the column\nreturn `number`",name:"getColumnWidth",required:!1,type:{name:"() => number"}},getItemId:{defaultValue:{value:"(item: ItemType, _index: number) => item.id"},description:"returns Id of an items\nreturns `string`",name:"getItemId",required:!1,type:{name:"(item: ItemType, index: number) => string"}},scrollToId:{defaultValue:{value:"null"},description:"index of the item to scroll to",name:"scrollToId",required:!1,type:{name:"number"}},onScroll:{defaultValue:null,description:"",name:"onScroll",required:!1,type:{name:"(horizontalScrollDirection: ScrollDirection, scrollTop: number, scrollUpdateWasRequested: boolean) => void"}},onScrollToFinished:{defaultValue:null,description:"callback to be called when the scroll is finished",name:"onScrollToFinished",required:!1,type:{name:"() => void"}},onItemsRendered:{defaultValue:{value:"null"},description:"a callback that is being called when the items are rendered",name:"onItemsRendered",required:!1,type:{name:"({ firstItemId, secondItemId, lastItemId, centerItemId, firstItemOffsetEnd, currentOffsetTop }: { firstItemId: string; secondItemId: string; lastItemId: string; centerItemId: string; firstItemOffsetEnd: number; currentOffsetTop: number; }) => void"}},onItemsRenderedThrottleMs:{defaultValue:{value:"200"},description:"",name:"onItemsRenderedThrottleMs",required:!1,type:{name:"number"}},onSizeUpdate:{defaultValue:null,description:"when the grid size changes",name:"onSizeUpdate",required:!1,type:{name:"(width: number, height: number) => void"}},onVerticalScrollbarVisiblityChange:{defaultValue:{value:"null"},description:"",name:"onVerticalScrollbarVisiblityChange",required:!1,type:{name:"(value: boolean) => void"}},scrollableClassName:{defaultValue:null,description:"class name to add to the component scrollable container",name:"scrollableClassName",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},"data-testid":{defaultValue:null,description:"",name:"data-testid",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/VirtualizedGrid/VirtualizedGrid.tsx#VirtualizedGrid"]={docgenInfo:VirtualizedGrid.__docgenInfo,name:"VirtualizedGrid",path:"src/components/VirtualizedGrid/VirtualizedGrid.tsx#VirtualizedGrid"})}catch(__react_docgen_typescript_loader_error){}var Button=__webpack_require__("./src/components/Button/Button.tsx"),itemRenderer=function itemRenderer(item,index,style){if(item){var backgroundColor=index%2==0?"#e1e1e1":"#f8f8f0";return(0,jsx_runtime.jsx)("div",{style,children:(0,jsx_runtime.jsx)("div",{style:{backgroundColor,height:item.height,width:item.width,display:"flex",alignItems:"center",justifyContent:"center"},children:item.value})},index)}return(0,jsx_runtime.jsx)("div",{style},index)};function VirtualizedGrid_stories_slicedToArray(arr,i){return function VirtualizedGrid_stories_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function VirtualizedGrid_stories_iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function VirtualizedGrid_stories_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return VirtualizedGrid_stories_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return VirtualizedGrid_stories_arrayLikeToArray(o,minLen)}(arr,i)||function VirtualizedGrid_stories_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function VirtualizedGrid_stories_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}itemRenderer.displayName="itemRenderer",itemRenderer.__docgenInfo={description:"",methods:[],displayName:"itemRenderer"};const VirtualizedGrid_stories={title:"Navigation/VirtualizedGrid",component:VirtualizedGrid_VirtualizedGrid};var virtualizedGridTemplate=function virtualizedGridTemplate(args){var _useState2=VirtualizedGrid_stories_slicedToArray((0,react.useState)(null),2),scrollToId=_useState2[0],setScrollToId=_useState2[1],_useState4=VirtualizedGrid_stories_slicedToArray((0,react.useState)(null),2),lastScrolledId=_useState4[0],setLastScrolledId=_useState4[1],_useState6=VirtualizedGrid_stories_slicedToArray((0,react.useState)(!1),2),scrollToDisabled=_useState6[0],setScrollToDisabled=_useState6[1],_useState8=VirtualizedGrid_stories_slicedToArray((0,react.useState)(args.itemsCount-1),2),nextScrollToId=_useState8[0],setNextScrollToId=_useState8[1],getColumnWidth=(0,react.useCallback)((function(){return 100}),[]),getRowHeight=(0,react.useCallback)((function(){return 50}),[]),items=(0,react.useMemo)((function(){return function generateItems(){for(var height=arguments.length>0&&void 0!==arguments[0]?arguments[0]:30,width=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"100%",itemsCount=arguments.length>2?arguments[2]:void 0,items=[],i=0;i<itemsCount;i++)items.push({value:"Item ".concat(i),height,width,id:i});return items}(50,100,args.itemsCount)}),[args.itemsCount]),onClickToScroll=(0,react.useCallback)((function(){setScrollToId(nextScrollToId),setLastScrolledId(""),setScrollToDisabled(!0)}),[setScrollToId,setScrollToDisabled,nextScrollToId]),onScrollToFinished=(0,react.useCallback)((function(){setLastScrolledId(nextScrollToId),setScrollToId(null),setNextScrollToId(Math.round(Math.random()*items.length)),setScrollToDisabled(!1)}),[nextScrollToId,items,setNextScrollToId,setLastScrolledId]);return(0,jsx_runtime.jsxs)("div",{style:args.wrapperStyle,children:[(0,jsx_runtime.jsx)("div",{style:{width:"430px",height:"100%"},children:(0,jsx_runtime.jsx)(VirtualizedGrid_VirtualizedGrid,{id:args.wrapperId,scrollToId,items,itemRenderer,getColumnWidth,getRowHeight,onScrollToFinished})}),(0,jsx_runtime.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,jsx_runtime.jsx)(Button.Z,{size:Button.Z.sizes.MEDIUM,kind:Button.Z.kinds.PRIMARY,onClick:onClickToScroll,disabled:scrollToDisabled,children:"Scroll to Item ".concat(nextScrollToId)}),(0,jsx_runtime.jsx)("div",{style:{marginTop:16,opacity:lastScrolledId?1:0},children:"Scrolled to Item ".concat(lastScrolledId)})]})]})};virtualizedGridTemplate.displayName="virtualizedGridTemplate";var Overview={render:virtualizedGridTemplate.bind({}),name:"Overview",args:{wrapperStyle:{width:430,height:300,overflow:"hidden",display:"flex",alignItems:"center"},itemsCount:100}};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: virtualizedGridTemplate.bind({}),\n  name: "Overview",\n  args: {\n    wrapperStyle: {\n      width: 430,\n      height: 300,\n      overflow: "hidden",\n      display: "flex",\n      alignItems: "center"\n    },\n    itemsCount: 100\n  }\n}',...Overview.parameters?.docs?.source}}};const __namedExportsOrder=["Overview"]},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/components/VirtualizedGrid/VirtualizedGrid.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".VirtualizedGrid-module_virtualizedGridWrapper{height:100%;width:100%}","",{version:3,sources:["webpack://./src/components/VirtualizedGrid/VirtualizedGrid.module.scss"],names:[],mappings:"AAEA,+CACE,WAAA,CACA,UAAA",sourcesContent:['@import "../../styles/typography";\n\n.virtualizedGridWrapper {\n  height: 100%;\n  width: 100%;\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={virtualizedGridWrapper:"VirtualizedGrid-module_virtualizedGridWrapper"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);