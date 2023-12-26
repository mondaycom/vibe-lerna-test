"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[5953],{"./src/hooks/useIsOverflowing/__stories__/useIsOverflowing.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>useIsOverflowing_stories});var react=__webpack_require__("../../node_modules/react/index.js"),useIsOverflowing=__webpack_require__("./src/hooks/useIsOverflowing/useIsOverflowing.ts"),Flex=__webpack_require__("./src/components/Flex/Flex.tsx"),Tooltip=__webpack_require__("./src/components/Tooltip/Tooltip.tsx"),EditableInput=__webpack_require__("./src/components/EditableInput/EditableInput.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),useIsOverflowing_stories_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/hooks/useIsOverflowing/__stories__/useIsOverflowing.stories.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(useIsOverflowing_stories_module.Z,options);const _stories_useIsOverflowing_stories_module=useIsOverflowing_stories_module.Z&&useIsOverflowing_stories_module.Z.locals?useIsOverflowing_stories_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}const useIsOverflowing_stories={title:"Hooks/useIsOverflowing"};var Overview={render:function render(){var ComponentWithOverflow=function ComponentWithOverflow(_ref){var text=_ref.text,ref=(0,react.useRef)(null),isOverflowing=(0,useIsOverflowing.Z)({ref});return(0,jsx_runtime.jsxs)(Flex.Z,{direction:Flex.Z.directions.COLUMN,gap:Flex.Z.gaps.MEDIUM,align:Flex.Z.align.START,children:[(0,jsx_runtime.jsxs)("div",{children:["Is overflowing: ",isOverflowing.toString()]}),(0,jsx_runtime.jsx)(Tooltip.Z,{content:isOverflowing?text:void 0,children:(0,jsx_runtime.jsx)("div",{ref,className:_stories_useIsOverflowing_stories_module.textContainer,children:text})})]})},_useState2=_slicedToArray((0,react.useState)(""),2),text=_useState2[0],setText=_useState2[1];return(0,jsx_runtime.jsxs)(Flex.Z,{direction:Flex.Z.directions.COLUMN,gap:Flex.Z.gaps.SMALL,align:Flex.Z.align.START,children:[(0,jsx_runtime.jsx)(EditableInput.Z,{onChange:setText,placeholder:"Type text here",className:_stories_useIsOverflowing_stories_module.input}),(0,jsx_runtime.jsx)(ComponentWithOverflow,{text})]})},name:"Overview"};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const ComponentWithOverflow = ({\n      text\n    }) => {\n      const ref = useRef(null);\n      const isOverflowing = useIsOverflowing({\n        ref\n      });\n      return <Flex direction={Flex.directions.COLUMN} gap={Flex.gaps.MEDIUM} align={Flex.align.START}>\n          <div>Is overflowing: {isOverflowing.toString()}</div>\n          <Tooltip content={isOverflowing ? text : undefined}>\n            <div ref={ref} className={styles.textContainer}>\n              {text}\n            </div>\n          </Tooltip>\n        </Flex>;\n    };\n    const [text, setText] = useState("");\n    return <Flex direction={Flex.directions.COLUMN} gap={Flex.gaps.SMALL} align={Flex.align.START}>\n        <EditableInput onChange={setText} placeholder="Type text here" className={styles.input} />\n        <ComponentWithOverflow text={text} />\n      </Flex>;\n  },\n  name: "Overview"\n}',...Overview.parameters?.docs?.source}}};const __namedExportsOrder=["Overview"]},"./src/components/EditableInput/EditableInput.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>EditableInput_EditableInput});var e,t,classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),react=__webpack_require__("../../node_modules/react/index.js"),n="function"==typeof Map?new Map:(e=[],t=[],{has:function(t){return e.indexOf(t)>-1},get:function(n){return t[e.indexOf(n)]},set:function(n,o){-1===e.indexOf(n)&&(e.push(n),t.push(o))},delete:function(n){var o=e.indexOf(n);o>-1&&(e.splice(o,1),t.splice(o,1))}}),o=function(e){return new Event(e,{bubbles:!0})};try{new Event("test")}catch(e){o=function(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!1),t}}function r(e){var t=n.get(e);t&&t.destroy()}function i(e){var t=n.get(e);t&&t.update()}var l=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?((l=function(e){return e}).destroy=function(e){return e},l.update=function(e){return e}):((l=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],(function(e){return function(e){if(e&&e.nodeName&&"TEXTAREA"===e.nodeName&&!n.has(e)){var t,r=null,i=null,l=null,a=function(){e.clientWidth!==i&&p()},d=function(t){window.removeEventListener("resize",a,!1),e.removeEventListener("input",p,!1),e.removeEventListener("keyup",p,!1),e.removeEventListener("autosize:destroy",d,!1),e.removeEventListener("autosize:update",p,!1),Object.keys(t).forEach((function(n){e.style[n]=t[n]})),n.delete(e)}.bind(e,{height:e.style.height,resize:e.style.resize,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener("autosize:destroy",d,!1),"onpropertychange"in e&&"oninput"in e&&e.addEventListener("keyup",p,!1),window.addEventListener("resize",a,!1),e.addEventListener("input",p,!1),e.addEventListener("autosize:update",p,!1),e.style.overflowX="hidden",e.style.wordWrap="break-word",n.set(e,{destroy:d,update:p}),"vertical"===(t=window.getComputedStyle(e,null)).resize?e.style.resize="none":"both"===t.resize&&(e.style.resize="horizontal"),r="content-box"===t.boxSizing?-(parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)):parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),isNaN(r)&&(r=0),p()}function s(t){var n=e.style.width;e.style.width="0px",e.style.width=n,e.style.overflowY=t}function u(){if(0!==e.scrollHeight){var t=function(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&(e.parentNode.style.scrollBehavior="auto",t.push([e.parentNode,e.parentNode.scrollTop])),e=e.parentNode;return function(){return t.forEach((function(e){var t=e[0];t.scrollTop=e[1],t.style.scrollBehavior=null}))}}(e);e.style.height="",e.style.height=e.scrollHeight+r+"px",i=e.clientWidth,t()}}function p(){u();var t=Math.round(parseFloat(e.style.height)),n=window.getComputedStyle(e,null),r="content-box"===n.boxSizing?Math.round(parseFloat(n.height)):e.offsetHeight;if(r<t?"hidden"===n.overflowY&&(s("scroll"),u(),r="content-box"===n.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight):"hidden"!==n.overflowY&&(s("hidden"),u(),r="content-box"===n.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight),l!==r){l=r;var i=o("autosize:resized");try{e.dispatchEvent(i)}catch(e){}}}}(e)})),e}).destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],r),e},l.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],i),e});const autosize_esm=l;var useStyle=__webpack_require__("./src/hooks/useStyle.ts"),useMergeRef=__webpack_require__("./src/hooks/useMergeRef.ts"),dom_event_utils=__webpack_require__("./src/utils/dom-event-utils.ts"),withStaticProps=__webpack_require__("./src/types/withStaticProps.ts"),EditableInputConstants=__webpack_require__("./src/components/EditableInput/EditableInputConstants.ts"),test_ids_utils=__webpack_require__("./src/tests/test-ids-utils.ts"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),EditableInput_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/components/EditableInput/EditableInput.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(EditableInput_module.Z,options);const EditableInput_EditableInput_module=EditableInput_module.Z&&EditableInput_module.Z.locals?EditableInput_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperty(obj,key,value){return key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key),key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var EditableInput=(0,react.forwardRef)((function(_ref,ref){var className=_ref.className,_ref$inputType=_ref.inputType,inputType=void 0===_ref$inputType?EditableInputConstants.n.INPUT:_ref$inputType,_ref$autoSize=_ref.autoSize,autoSize=void 0!==_ref$autoSize&&_ref$autoSize,id=_ref.id,tabIndex=_ref.tabIndex,_ref$autoComplete=_ref.autoComplete,autoComplete=void 0===_ref$autoComplete||_ref$autoComplete,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,maxLength=_ref.maxLength,_ref$placeholder=_ref.placeholder,placeholder=void 0===_ref$placeholder?"":_ref$placeholder,onClick=_ref.onClick,onKeyPress=_ref.onKeyPress,_ref$shouldFocusOnMou=_ref.shouldFocusOnMount,shouldFocusOnMount=void 0===_ref$shouldFocusOnMou||_ref$shouldFocusOnMou,selectOnMount=_ref.selectOnMount,value=_ref.value,customColor=_ref.customColor,ignoreBlurClass=_ref.ignoreBlurClass,onFinishEditing=_ref.onFinishEditing,onIgnoreBlurEvent=_ref.onIgnoreBlurEvent,onFocus=_ref.onFocus,onBlur=_ref.onBlur,isValidValue=_ref.isValidValue,onChange=_ref.onChange,onError=_ref.onError,onSuccess=_ref.onSuccess,onKeyDown=_ref.onKeyDown,onTabHandler=_ref.onTabHandler,onCancelEditing=_ref.onCancelEditing,_ref$textareaSubmitOn=_ref.textareaSubmitOnEnter,textareaSubmitOnEnter=void 0!==_ref$textareaSubmitOn&&_ref$textareaSubmitOn,onArrowKeyDown=_ref.onArrowKeyDown,ariaLabel=_ref.ariaLabel,dataTestId=_ref["data-testid"],_useState2=_slicedToArray((0,react.useState)(value||""),2),valueState=_useState2[0],setValueState=_useState2[1],componentRef=(0,react.useRef)(null),mergedRef=(0,useMergeRef.Z)(ref,componentRef),autosizeIfNeeded=(0,react.useCallback)((function(){componentRef.current&&autoSize&&inputType===EditableInputConstants.n.TEXT_AREA&&autosize_esm(componentRef.current)}),[componentRef,autoSize,inputType]),focus=(0,react.useCallback)((function(){componentRef.current&&requestAnimationFrame((function(){var _componentRef$current;null===(_componentRef$current=componentRef.current)||void 0===_componentRef$current||_componentRef$current.focus()}))}),[componentRef]),onFocusCallback=(0,react.useCallback)((function(event){onFocus&&onFocus(event)}),[onFocus]),onBlurCallback=(0,react.useCallback)((function(event){if(function shouldIgnoreBlur(el,ignoreClass){return el&&ignoreClass&&el.classList.contains(ignoreClass)}(event.relatedTarget,ignoreBlurClass))onIgnoreBlurEvent(valueState);else{var enrichedEvent=event;enrichedEvent.origin="blur",onFinishEditing&&onFinishEditing(valueState,enrichedEvent),onBlur&&onBlur(enrichedEvent)}}),[ignoreBlurClass,valueState,onFinishEditing,onBlur,onIgnoreBlurEvent]),onChangeCallback=(0,react.useCallback)((function(event){var newValue=event.target.value;!isValidValue||isValidValue(newValue)?(setValueState(newValue),onChange&&onChange(newValue),onSuccess&&onSuccess()):onError&&onError()}),[isValidValue,onChange,onError,onSuccess]),select=(0,react.useCallback)((function(){componentRef.current&&componentRef.current.select()}),[componentRef]),moveCaretAtEnd=(0,react.useCallback)((function(){componentRef.current&&(componentRef.current.value="",componentRef.current.value=valueState)}),[componentRef,valueState]),onKeyDownCallback=(0,react.useCallback)((function(event){return onKeyDown?onKeyDown(event,valueState):onTabHandler&&(0,dom_event_utils.sH)(event)&&inputType!==EditableInputConstants.n.TEXT_AREA?(event.preventDefault(),onTabHandler(valueState,event)):(onFinishEditing&&(0,dom_event_utils.gl)(event)&&(inputType!==EditableInputConstants.n.TEXT_AREA||textareaSubmitOnEnter)&&onFinishEditing(valueState,event),onCancelEditing&&(0,dom_event_utils.nC)(event)&&onCancelEditing(event),void(onArrowKeyDown&&((0,dom_event_utils.lD)(event)||(0,dom_event_utils.Dx)(event)||(0,dom_event_utils.tu)(event)||(0,dom_event_utils.vz)(event))&&onArrowKeyDown(valueState,event)))}),[onKeyDown,inputType,valueState,onTabHandler,textareaSubmitOnEnter,onFinishEditing,onCancelEditing,onArrowKeyDown]);(0,react.useLayoutEffect)((function(){shouldFocusOnMount&&focus(),autosizeIfNeeded(),selectOnMount?select():moveCaretAtEnd()}),[]),(0,react.useEffect)((function(){setValueState(value)}),[value]);var style=(0,useStyle.Z)(void 0,{color:customColor}),rows=inputType===EditableInputConstants.n.TEXT_AREA&&autoSize?1:void 0,InputTypeComponent=inputType;return(0,jsx_runtime.jsx)(InputTypeComponent,{ref:mergedRef,id,"data-testid":dataTestId||(0,test_ids_utils.l)(test_ids_utils.S.EDITABLE_INPUT,id),style,className:classnames_default()(EditableInput_EditableInput_module.editableInputWrapper,className,_defineProperty({},EditableInput_EditableInput_module.noResize,autoSize)),onChange:onChangeCallback,onKeyDown:onKeyDownCallback,onBlur:onBlurCallback,onFocus:onFocusCallback,onClick,onKeyPress,value:valueState,placeholder,dir:"auto",tabIndex,autoComplete:autoComplete?"on":"off",rows,maxLength,"aria-label":ariaLabel,disabled})}));const EditableInput_EditableInput=(0,withStaticProps.D)(EditableInput,{inputTypes:EditableInputConstants.n});try{EditableInput.displayName="EditableInput",EditableInput.__docgenInfo={description:"",displayName:"EditableInput",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:""},description:"",name:"placeholder",required:!1,type:{name:"string"}},inputType:{defaultValue:{value:"InputType.INPUT"},description:"",name:"inputType",required:!1,type:{name:"enum",value:[{value:'"input"'},{value:'"textarea"'}]}},autoSize:{defaultValue:{value:"false"},description:"",name:"autoSize",required:!1,type:{name:"boolean"}},autoComplete:{defaultValue:{value:"true"},description:"",name:"autoComplete",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},shouldFocusOnMount:{defaultValue:{value:"true"},description:"",name:"shouldFocusOnMount",required:!1,type:{name:"boolean"}},textareaSubmitOnEnter:{defaultValue:{value:"false"},description:"",name:"textareaSubmitOnEnter",required:!1,type:{name:"boolean"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string"}},customColor:{defaultValue:null,description:"",name:"customColor",required:!1,type:{name:"string"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},isValidValue:{defaultValue:null,description:"",name:"isValidValue",required:!1,type:{name:"(value: string) => boolean"}},onFinishEditing:{defaultValue:null,description:"",name:"onFinishEditing",required:!1,type:{name:"(value: string, event: FocusEvent<Element, Element> | KeyboardEvent<Element>) => void"}},onArrowKeyDown:{defaultValue:null,description:"",name:"onArrowKeyDown",required:!1,type:{name:"(value: string, event: KeyboardEvent<Element>) => void"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(event: MouseEvent<HTMLInputElement | HTMLTextAreaElement, MouseEvent>) => void"}},onKeyPress:{defaultValue:null,description:"",name:"onKeyPress",required:!1,type:{name:"() => void"}},selectOnMount:{defaultValue:null,description:"",name:"selectOnMount",required:!1,type:{name:"() => void"}},ignoreBlurClass:{defaultValue:null,description:"",name:"ignoreBlurClass",required:!1,type:{name:"string"}},onIgnoreBlurEvent:{defaultValue:null,description:"",name:"onIgnoreBlurEvent",required:!1,type:{name:"(value: string) => void"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(event: FocusEvent<Element, Element>) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(event: FocusEvent<Element, Element>) => void"}},onCancelEditing:{defaultValue:null,description:"",name:"onCancelEditing",required:!1,type:{name:"(event: KeyboardEvent<Element>) => void"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(value: string) => void"}},onError:{defaultValue:null,description:"",name:"onError",required:!1,type:{name:"() => void"}},onSuccess:{defaultValue:null,description:"",name:"onSuccess",required:!1,type:{name:"() => void"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"(event: KeyboardEvent<Element>, value: string) => void"}},onTabHandler:{defaultValue:null,description:"",name:"onTabHandler",required:!1,type:{name:"(value: string, event: KeyboardEvent<Element>) => void"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},"data-testid":{defaultValue:null,description:"",name:"data-testid",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/EditableInput/EditableInput.tsx#EditableInput"]={docgenInfo:EditableInput.__docgenInfo,name:"EditableInput",path:"src/components/EditableInput/EditableInput.tsx#EditableInput"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/EditableInput/EditableInputConstants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>InputType});var InputType=function(InputType){return InputType.INPUT="input",InputType.TEXT_AREA="textarea",InputType}({})},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/components/EditableInput/EditableInput.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".EditableInput-module_editableInputWrapper{background-color:var(--primary-background-color);display:inline-block;width:100%;min-width:0;max-height:100%;margin:auto 0;padding:0 4px;outline:none;border:1px solid;border-radius:var(--border-radius-small);border-color:var(--primary-color);vertical-align:top;text-align:left}.EditableInput-module_editableInputWrapper.EditableInput-module_noResize{resize:none}","",{version:3,sources:["webpack://./src/components/EditableInput/EditableInput.module.scss","webpack://./src/styles/typography.scss"],names:[],mappings:"AAEA,2CACE,gDAAA,CACA,oBAAA,CACA,UAAA,CACA,WAAA,CACA,eAAA,CACA,aAAA,CCyEA,aAAA,CDvEA,YAAA,CACA,gBAAA,CACA,wCAAA,CACA,iCAAA,CACA,kBAAA,CACA,eAAA,CAGF,yEACE,WAAA",sourcesContent:['@import "../../styles/typography";\n\n.editableInputWrapper {\n  background-color: var(--primary-background-color);\n  display: inline-block;\n  width: 100%;\n  min-width: 0;\n  max-height: 100%;\n  margin: auto 0;\n  @include heading-padding();\n  outline: none;\n  border: 1px solid;\n  border-radius: var(--border-radius-small);\n  border-color: var(--primary-color);\n  vertical-align: top;\n  text-align: left;\n}\n\n.editableInputWrapper.noResize {\n  resize: none;\n}\n','@use "sass:string";\n@import "~monday-ui-style/dist/mixins";\n@import "~monday-ui-style/dist/functions";\n\n@mixin create-text-classes() {\n  @include create-typography-classes($textClasses, text);\n}\n\n@mixin create-title-classes() {\n  @include create-typography-classes($headingClasses, null);\n}\n\n@mixin create-typography-classes($classes, $token-prefix) {\n  @each $class-prefix, $weight-types in $classes {\n    @each $weight-type in $weight-types {\n      $class-name: camelize(#{$class-prefix}-#{$weight-type});\n\n      .#{$class-name} {\n        // if class is a heading class\n        @if str-slice($class-prefix, 1, 1) == "h" {\n          @include vibe-heading($class-prefix, $weight-type);\n        } @else {\n          @include vibe-text($class-prefix, $weight-type);\n        }\n      }\n    }\n  }\n}\n\n$headingClasses: (\n  "h1": (\n    "bold",\n    "normal",\n    "light"\n  ),\n  "h2": (\n    "bold",\n    "normal",\n    "light"\n  ),\n  "h3": (\n    "bold",\n    "normal",\n    "light"\n  )\n);\n\n$textClasses: (\n  "text1": (\n    "bold",\n    "medium",\n    "normal"\n  ),\n  "text2": (\n    "bold",\n    "medium",\n    "normal"\n  )\n);\n\n@mixin smoothing-text {\n  -webkit-font-smoothing: var(--font-smoothing-webkit);\n  -moz-osx-font-smoothing: var(--font-smoothing-moz);\n}\n\n@mixin label-text {\n  @include smoothing-text;\n  @include vibe-text(text2, normal);\n}\n\n// Caption / Subtext (small)\n@mixin font-caption {\n  @include vibe-text(text2, normal);\n  @include smoothing-text;\n}\n\n@mixin font-input {\n  @include vibe-text(text2, normal);\n}\n\n@mixin heading-padding {\n  padding: 0 4px;\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={editableInputWrapper:"EditableInput-module_editableInputWrapper",noResize:"EditableInput-module_noResize"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/hooks/useIsOverflowing/__stories__/useIsOverflowing.stories.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".useIsOverflowing-stories-module_textContainer{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:50px;border:solid 1px var(--sb-layout-border-color);padding:1px 2px;height:24px;cursor:not-allowed}.useIsOverflowing-stories-module_input{width:110px;padding:1px 2px}","",{version:3,sources:["webpack://./src/hooks/useIsOverflowing/__stories__/useIsOverflowing.stories.module.scss"],names:[],mappings:"AAAA,+CACE,eAAA,CACA,sBAAA,CACA,kBAAA,CAEA,UAAA,CACA,8CAAA,CACA,eAAA,CACA,WAAA,CACA,kBAAA,CAGF,uCACE,WAAA,CACA,eAAA",sourcesContent:[".textContainer {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n\n  width: 50px;\n  border: solid 1px var(--sb-layout-border-color);\n  padding: 1px 2px;\n  height: 24px;\n  cursor: not-allowed;\n}\n\n.input {\n  width: 110px;\n  padding: 1px 2px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={textContainer:"useIsOverflowing-stories-module_textContainer",input:"useIsOverflowing-stories-module_input"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);