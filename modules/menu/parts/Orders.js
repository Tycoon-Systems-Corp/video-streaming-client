"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireDefault(require("react")),_link=_interopRequireDefault(require("next/link"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var Module=function(e){return _react.default.createElement(_react.default.Fragment,null,e._loggedIn?_react.default.createElement(_react.default.Fragment,null,_react.default.createElement(_link.default,{href:"/settings?t=orders",className:"menuLinkSelector",onClick:null==e?void 0:e.handleToggleSettings,style:{position:"relative",alignSelf:"center"}},_react.default.createElement("li",null,_react.default.createElement("div",{className:"material-icons"},"receipt"),_react.default.createElement("div",null,"Orders")))):null)},_default=exports.default=Module;