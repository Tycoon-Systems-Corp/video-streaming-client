"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireDefault(require("react")),_link=_interopRequireDefault(require("next/link")),_AdminModule=_interopRequireDefault(require("./Admin.module.scss"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var Module=function(e){var l;return _react.default.createElement("div",{className:"".concat(_AdminModule.default.adminBannerContainer," Admin_BannerContainer"),style:{fontSize:".85rem"}},_react.default.createElement("div",{className:"".concat(_AdminModule.default.adminBannerInternalContainer)},_react.default.createElement("div",null,_react.default.createElement("div",{style:{textWrap:"nowrap"}},"Welcome ",_react.default.createElement(_link.default,{href:"/p?u=".concat(null!=(l=null==e||null==(l=e._loggedIn)?void 0:l.username)?l:null==e||null==(l=e._loggedIn)?void 0:l.identifier),style:{fontWeight:"600"}},null!=(l=null==e||null==(l=e._loggedIn)?void 0:l.username)?l:null==e||null==(l=e._loggedIn)?void 0:l.identifier))),_react.default.createElement("div",{className:"flex gap-p5",style:{alignItems:"center"}},_react.default.createElement(_link.default,{href:"/",style:{fontWeight:"600"}},e.domainUrl),_react.default.createElement("div",{style:{textWrap:"nowrap"}},null!=e&&null!=(l=e._adminAuth)&&null!=(l=l.adminc)&&l.access?"(admin access: ".concat(null==e||null==(l=e._adminAuth)||null==(l=l.adminc)?void 0:l.access,")"):""))))},_default=exports.default=Module;