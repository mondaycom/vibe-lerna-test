"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[13],{"./src/hooks/useDebounceEvent/__stories__/useDebounceEvent.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,PassingAnInitialValue:()=>PassingAnInitialValue,PassingAnOnChangeHandler:()=>PassingAnOnChangeHandler,WithTrim:()=>WithTrim,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/hooks/useDebounceEvent/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./src/hooks/__stories__/general-hooks-stories.scss"),__webpack_require__("../../node_modules/react/jsx-runtime.js"));function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}const __WEBPACK_DEFAULT_EXPORT__={title:"Hooks/useDebounceEvent"};var Overview={render:function render(){var _useDebounceEvent=(0,___WEBPACK_IMPORTED_MODULE_3__.Z)({delay:100}),inputValue=_useDebounceEvent.inputValue,onEventChanged=_useDebounceEvent.onEventChanged;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{type:"text",value:inputValue,onChange:onEventChanged})},name:"Overview"},PassingAnInitialValue={render:function render(){var _useDebounceEvent2=(0,___WEBPACK_IMPORTED_MODULE_3__.Z)({initialStateValue:"bla bla bla"}),inputValue=_useDebounceEvent2.inputValue,onEventChanged=_useDebounceEvent2.onEventChanged;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{type:"text",value:inputValue,onChange:onEventChanged})},name:"Passing an initial value"},PassingAnOnChangeHandler={render:function render(){var _useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),2),length=_useState2[0],setLength=_useState2[1],_useDebounceEvent3=(0,___WEBPACK_IMPORTED_MODULE_3__.Z)({onChange:function onChange(value){return setLength(value.length)}}),inputValue=_useDebounceEvent3.inputValue,onEventChanged=_useDebounceEvent3.onEventChanged;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{type:"text",value:inputValue,onChange:onEventChanged}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span",{children:["Input has ",length," characters"]})]})},name:"Passing an `onChange` handler"},WithTrim={render:function render(){var _useDebounceEvent4=(0,___WEBPACK_IMPORTED_MODULE_3__.Z)({trim:!0}),inputValue=_useDebounceEvent4.inputValue,onEventChanged=_useDebounceEvent4.onEventChanged;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{type:"text",value:inputValue,onChange:onEventChanged})},name:"With trim"};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const {\n      inputValue,\n      onEventChanged\n    } = useDebounceEvent({\n      delay: 100\n    });\n    return <input type="text" value={inputValue} onChange={onEventChanged} />;\n  },\n  name: "Overview"\n}',...Overview.parameters?.docs?.source}}},PassingAnInitialValue.parameters={...PassingAnInitialValue.parameters,docs:{...PassingAnInitialValue.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const {\n      inputValue,\n      onEventChanged\n    } = useDebounceEvent({\n      initialStateValue: "bla bla bla"\n    });\n    return <input type="text" value={inputValue} onChange={onEventChanged} />;\n  },\n  name: "Passing an initial value"\n}',...PassingAnInitialValue.parameters?.docs?.source}}},PassingAnOnChangeHandler.parameters={...PassingAnOnChangeHandler.parameters,docs:{...PassingAnOnChangeHandler.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const [length, setLength] = useState(0);\n    const {\n      inputValue,\n      onEventChanged\n    } = useDebounceEvent({\n      onChange: value => setLength(value.length)\n    });\n    return <>\n        <input type="text" value={inputValue} onChange={onEventChanged} />\n        {<span>Input has {length} characters</span>}\n      </>;\n  },\n  name: "Passing an `onChange` handler"\n}',...PassingAnOnChangeHandler.parameters?.docs?.source}}},WithTrim.parameters={...WithTrim.parameters,docs:{...WithTrim.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const {\n      inputValue,\n      onEventChanged\n    } = useDebounceEvent({\n      trim: true\n    });\n    return <input type="text" value={inputValue} onChange={onEventChanged} />;\n  },\n  name: "With trim"\n}',...WithTrim.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","PassingAnInitialValue","PassingAnOnChangeHandler","WithTrim"]},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/hooks/__stories__/general-hooks-stories.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".hooks-reference-element{width:150px;color:var(--primary-text-color);border:1px solid var(--ui-border-color);background:var(--secondary-background-color);height:50px;border-radius:4px;display:flex;justify-content:center;align-items:center;user-select:none}","",{version:3,sources:["webpack://./src/hooks/__stories__/general-hooks-stories.scss"],names:[],mappings:"AAAA,yBACE,WAAA,CACA,+BAAA,CACA,uCAAA,CACA,4CAAA,CACA,WAAA,CACA,iBAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,gBAAA",sourcesContent:[".hooks-reference-element {\n  width: 150px;\n  color: var(--primary-text-color);\n  border: 1px solid var(--ui-border-color);\n  background: var(--secondary-background-color);\n  height: 50px;\n  border-radius: 4px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  user-select: none;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/hooks/__stories__/general-hooks-stories.scss":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_15_use_3_general_hooks_stories_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/hooks/__stories__/general-hooks-stories.scss"),options={};options.styleTagTransform=_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_15_use_3_general_hooks_stories_scss__WEBPACK_IMPORTED_MODULE_6__.Z,options),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_15_use_3_general_hooks_stories_scss__WEBPACK_IMPORTED_MODULE_6__.Z&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_15_use_3_general_hooks_stories_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_15_use_3_general_hooks_stories_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals}}]);