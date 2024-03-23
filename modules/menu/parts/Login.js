"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _MenuModule = _interopRequireDefault(require("../Menu.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Module = function Module(props) {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !props._loggedIn ? /*#__PURE__*/_react["default"].createElement("li", {
    className: "".concat(_MenuModule["default"].menuLink, " darkMenuLink"),
    onClick: props === null || props === void 0 ? void 0 : props.fireShowSignIn
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "".concat(_MenuModule["default"].menuLinkText)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_MenuModule["default"].menuText)
  }, "Login"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_MenuModule["default"].menuLinkIconPair, " ").concat(_MenuModule["default"].maxIconWidth, " person material-icons")
  }, "person")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_MenuModule["default"].menuLinkIcon, " ").concat(_MenuModule["default"].maxIconWidth, " person material-icons")
  }, "person")) : null);
};
var _default = exports["default"] = Module;