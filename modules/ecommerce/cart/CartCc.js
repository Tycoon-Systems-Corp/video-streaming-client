"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireDefault(require("react")),_payment=require("../../payment");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l,n=arguments[t];for(l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}var Module=function(e){var t;return _react.default.createElement("div",{className:"Ecommerce_Credit_Card_Module_Container ".concat(null!=e&&e.validCc?"slide_hide slide_hide_do_full_show":"slide_hide slide_hide_visible"," ").concat(e.forceShowCc||e._isMobile?"slide_hide_do_force_show":""),style:{marginBottom:".25rem"}},null!=e&&e.showContent?null!=e&&e.validCc&&e._loggedIn?_react.default.createElement("div",{className:"hover_show ".concat(e.forceShowCc||e._isMobile?"hover_show_Cc_force":""," Ecommerce_Credit_Card_Label"),style:{textAlign:"center"}},"Credit Card"):0<(null==e||null==(t=e.cart)||null==(t=t.items)?void 0:t.length)?_react.default.createElement("div",{style:{fontSize:".75rem"}},null!=e&&e.free?"":"Add a Credit Card to fulfill Purchase"):null:null,e._loggedIn?null:_react.default.createElement("button",{onClick:null==e?void 0:e.handleToggleSettings,style:{fontSize:".75rem",width:"100%"}},"Please Sign In"),_react.default.createElement(_payment.CreditCard,_extends({},e,{stagger:500,validCc:null==e?void 0:e.validCc,setValidCc:null==e?void 0:e.setValidCc,setShowContent:null==e?void 0:e.setShowContent,setSolution:null==e?void 0:e.setSolution,sx:{marginBottom:".5rem",marginTop:".25rem"},children:e.ccChildren})))},_default=exports.default=Module;