"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireDefault(require("react")),_image=_interopRequireDefault(require("next/image")),_link=_interopRequireDefault(require("next/link"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){var r;if(e)return"string"==typeof e?_arrayLikeToArray(e,t):"Map"===(r="Object"===(r=Object.prototype.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:r)||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function _iterableToArrayLimit(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var a,n,l,i,o=[],u=!0,c=!1;try{if(l=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(a=l.call(r)).done)&&(o.push(a.value),o.length!==t);u=!0);}catch(e){c=!0,n=e}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw n}}return o}}function _arrayWithHoles(e){if(Array.isArray(e))return e}var Module=function(t){var e=_slicedToArray(_react.default.useState(null),2),e=(e[0],e[1],_slicedToArray(_react.default.useState(!1),2)),e=(e[0],e[1],_slicedToArray(_react.default.useState(null),2)),e=(e[0],e[1],_slicedToArray(_react.default.useState(!1),2));e[0],e[1];return console.log(t,t.image1),_react.default.createElement("div",{className:"WideFeatureContainer ".concat(t.className)},_react.default.createElement("div",{className:"WideFeatureInnerContainer"},_react.default.createElement("div",{style:{maxHeight:"200px"}},_react.default.createElement(_image.default,{loader:function(e){e=e.src;return e.match(/greythumb/)?"".concat(e):t.cdn&&t.cdn.static&&0<t.cdn.static.length?"".concat(t.cdn.static,"/").concat(e):void 0},src:t.image1&&t.cdn&&t.cdn.static?t.image1:"img/default/greythumb.jpg",width:320,height:180,layout:"responsive",style:{borderRadius:"1rem"}}))))},_default=exports.default=Module;