"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireDefault(require("react")),_ArticleModule=_interopRequireDefault(require("./Article.module.scss"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var Module=function(e){var l;return _react.default.createElement(_react.default.Fragment,null,null!=e&&e.articleHtml&&null!=e&&null!=(l=e.articleData)&&l.approved?_react.default.createElement("div",null,_react.default.createElement("div",{dangerouslySetInnerHTML:null!=e&&e.createMarkup?e.createMarkup():null,ref:null!=(l=null==e?void 0:e.htmlRef)?l:null})):null)},_default=exports.default=Module;