"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.updateLocalLoginSession=exports.requestSettingsUpdate=exports.logout=exports.grabUsername=exports.checkUserData=exports.checkSignedInAndPrompt=exports.checkSignedIn=exports.attemptThirdPartySignIn=void 0;var _universalCookie=_interopRequireDefault(require("universal-cookie")),_fetch=require("/modules/utility/fetch/fetch.js"),_ecommerce=require("/modules/utility/ecommerce/ecommerce.js"),_LocalEventEmitter2=require("/modules/events/LocalEventEmitter"),_utility=require("../utility"),_jwtDecode=_interopRequireDefault(require("jwt-decode"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _regeneratorRuntime(){_regeneratorRuntime=function(){return a};var c,a={},e=Object.prototype,s=e.hasOwnProperty,l=Object.defineProperty||function(e,t,r){e[t]=r.value},t="function"==typeof Symbol?Symbol:{},n=t.iterator||"@@iterator",r=t.asyncIterator||"@@asyncIterator",o=t.toStringTag||"@@toStringTag";function i(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(c){i=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var o,i,a,u,t=t&&t.prototype instanceof y?t:y,t=Object.create(t.prototype),n=new E(n||[]);return l(t,"_invoke",{value:(o=e,i=r,a=n,u=h,function(e,t){if(u===d)throw new Error("Generator is already running");if(u===g){if("throw"===e)throw t;return{value:c,done:!0}}for(a.method=e,a.arg=t;;){var r=a.delegate;if(r){r=function e(t,r){var n=r.method,o=t.iterator[n];if(o===c)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=c,e(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;n=f(o,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,m;o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=c),r.delegate=null,m):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}(r,a);if(r){if(r===m)continue;return r}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(u===h)throw u=g,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);u=d;r=f(o,i,a);if("normal"===r.type){if(u=a.done?g:p,r.arg===m)continue;return{value:r.arg,done:a.done}}"throw"===r.type&&(u=g,a.method="throw",a.arg=r.arg)}})}),t}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}a.wrap=u;var h="suspendedStart",p="suspendedYield",d="executing",g="completed",m={};function y(){}function v(){}function b(){}var t={},x=(i(t,n,function(){return this}),Object.getPrototypeOf),x=x&&x(x(P([]))),_=(x&&x!==e&&s.call(x,n)&&(t=x),b.prototype=y.prototype=Object.create(t));function w(e){["next","throw","return"].forEach(function(t){i(e,t,function(e){return this._invoke(t,e)})})}function k(a,u){var t;l(this,"_invoke",{value:function(r,n){function e(){return new u(function(e,t){!function t(e,r,n,o){var i,e=f(a[e],a,r);if("throw"!==e.type)return(r=(i=e.arg).value)&&"object"==_typeof(r)&&s.call(r,"__await")?u.resolve(r.__await).then(function(e){t("next",e,n,o)},function(e){t("throw",e,n,o)}):u.resolve(r).then(function(e){i.value=e,n(i)},function(e){return t("throw",e,n,o)});o(e.arg)}(r,n,e,t)})}return t=t?t.then(e,e):e()}})}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function P(t){if(t||""===t){var r,e=t[n];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length))return r=-1,(e=function e(){for(;++r<t.length;)if(s.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=c,e.done=!0,e}).next=e}throw new TypeError(_typeof(t)+" is not iterable")}return l(_,"constructor",{value:v.prototype=b,configurable:!0}),l(b,"constructor",{value:v,configurable:!0}),v.displayName=i(b,o,"GeneratorFunction"),a.isGeneratorFunction=function(e){e="function"==typeof e&&e.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},a.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,i(e,o,"GeneratorFunction")),e.prototype=Object.create(_),e},a.awrap=function(e){return{__await:e}},w(k.prototype),i(k.prototype,r,function(){return this}),a.AsyncIterator=k,a.async=function(e,t,r,n,o){void 0===o&&(o=Promise);var i=new k(u(e,t,r,n),o);return a.isGeneratorFunction(t)?i:i.next().then(function(e){return e.done?e.value:i.next()})},w(_),i(_,o,"Generator"),i(_,n,function(){return this}),i(_,"toString",function(){return"[object Generator]"}),a.keys=function(e){var t,r=Object(e),n=[];for(t in r)n.push(t);return n.reverse(),function e(){for(;n.length;){var t=n.pop();if(t in r)return e.value=t,e.done=!1,e}return e.done=!0,e}},a.values=P,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=c,this.done=!1,this.delegate=null,this.method="next",this.arg=c,this.tryEntries.forEach(S),!e)for(var t in this)"t"===t.charAt(0)&&s.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=c)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function e(e,t){return i.type="throw",i.arg=r,n.next=e,t&&(n.method="next",n.arg=c),!!t}for(var t=this.tryEntries.length-1;0<=t;--t){var o=this.tryEntries[t],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var a=s.call(o,"catchLoc"),u=s.call(o,"finallyLoc");if(a&&u){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&s.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}var i=(o=o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc?null:o)?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var r,n,o=this.tryEntries[t];if(o.tryLoc===e)return"throw"===(r=o.completion).type&&(n=r.arg,S(o)),n}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:P(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=c),m}},a}function _defineProperty(e,t,r){return(t=_toPropertyKey(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _toPropertyKey(e){e=_toPrimitive(e,"string");return"symbol"==_typeof(e)?e:String(e)}function _toPrimitive(e,t){if("object"!=_typeof(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0===r)return("string"===t?String:Number)(e);r=r.call(e,t||"default");if("object"!=_typeof(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}function asyncGeneratorStep(e,t,r,n,o,i,a){try{var u=e[i](a),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,o)}function _asyncToGenerator(u){return function(){var e=this,a=arguments;return new Promise(function(t,r){var n=u.apply(e,a);function o(e){asyncGeneratorStep(n,t,r,o,i,"next",e)}function i(e){asyncGeneratorStep(n,t,r,o,i,"throw",e)}o(void 0)})}}var cookies=new _universalCookie.default,updateLocalLoginSession=exports.updateLocalLoginSession=function(e){cookies.set("login",e)},doThirdPartySignIn=function(){},attemptThirdPartySignIn=exports.attemptThirdPartySignIn=function(){var i=_asyncToGenerator(_regeneratorRuntime().mark(function e(t,r,n,o,i){var a,u,c,s;return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("Running",t,r,n),t&&t.detail&&t.detail.credential&&(a=(0,_jwtDecode.default)(t.detail.credential)),u={domainKey:n,googleData:t,token:a,encodedToken:t.detail.credential},t.requestedUsername&&(u.requestedUsername=t.requestedUsername),e.next=7,(0,_fetch.fetchPost)(r+"/m/authenticate",null,null,u);case 7:return(u=e.sent)&&u.hash&&(o&&o.dispatch("completeSignIn",{data:u}),c=_defineProperty(_defineProperty({identifier:u.identifier,username:u.username,email:u.email,icon:u.icon,hash:u.hash,vendor:null!=(c=u.vendor)?c:null},"icon",u.icon),"meta",u.meta),u.plan&&(c.plan=u.plan),u.cart&&(s=JSON.parse(localStorage.getItem("cart")),(0,_ecommerce.updateCart)(s,u.cart)),null!=u&&u.admin&&(i(u.admin),c.admin=u.admin),updateLocalLoginSession(c),s=new CustomEvent("mute-login-error",{detail:!0}),document.dispatchEvent(s)),e.abrupt("return",u);case 12:return e.prev=12,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 16:case"end":return e.stop()}},e,null,[[0,12]])}));return function(e,t,r,n,o){return i.apply(this,arguments)}}(),checkSignedIn=exports.checkSignedIn=function(){return!!cookies.get("login")&&cookies.get("login")},checkSignedInAndPrompt=exports.checkSignedInAndPrompt=function(e,t){try{var r=checkSignedIn();return r?r:(e&&e(t||"Please sign in with google to register"),google.accounts.id.prompt(function(e){console.log("on prompt notification",e)}),!1)}catch(e){return e}},logout=exports.logout=function(){try{cookies.remove("login"),(0,_utility.fireGlobalEvent)({event:"logout"},_LocalEventEmitter2._LocalEventEmitter),(0,_ecommerce.updateCart)("",{items:[],user:null});var e=function(e){e=new CustomEvent("thirdparty-signin",{detail:e});document.dispatchEvent(e)};return setTimeout(function(){!function(){try{google.accounts.id.initialize({client_id:"169701902623-9a74mqcbqr38uj87qm8tm3190cicaa7m.apps.googleusercontent.com",callback:e}),console.log("Google Loaded")}catch(e){console.log(e)}}()},2e3),!0}catch(e){return console.log(e),!1}},grabUsername=exports.grabUsername=function(){var i=_asyncToGenerator(_regeneratorRuntime().mark(function e(t,r,n,o,i){var a,u,c;return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,o){if((a=o())&&a.identifier&&a.hash)return u={domainKey:r,identifier:a.identifier,hash:a.hash,proposedUsername:n.proposedUsername},e.next=7,(0,_fetch.fetchPost)(t+"/m/grabusername",null,null,u);e.next=28}else e.next=31;break;case 7:if(c=e.sent){e.next=12;break}return e.abrupt("return",!1);case 12:if(c.hasOwnProperty("status")&&"success"!==c.status){if("disauthenticated"==c.status)return logout(),e.abrupt("return","disauthenticated");e.next=18}else e.next=19;break;case 18:return e.abrupt("return",c.status);case 19:if(c.identifier&&c.username&&c.hash)return a.username=c.username,a.hash=c.hash,a.identifier=c.identifier,updateLocalLoginSession(a),i(a),e.abrupt("return",!0);e.next=26;break;case 26:e.next=29;break;case 28:return e.abrupt("return",!1);case 29:e.next=32;break;case 31:return e.abrupt("return",!1);case 32:e.next=37;break;case 34:return e.prev=34,e.t0=e.catch(0),e.abrupt("return",!1);case 37:return e.abrupt("return",!1);case 38:case"end":return e.stop()}},e,null,[[0,34]])}));return function(e,t,r,n,o){return i.apply(this,arguments)}}(),checkUserData=exports.checkUserData=function(){var r=_asyncToGenerator(_regeneratorRuntime().mark(function e(t,r){var n,o,i;return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("Check user data",t,r),r){if(n=Object.entries(r).find(function(e){return!0===e[1]}),null!=t&&null!=(o=t._loggedIn)&&o.identifier&&null!=t&&null!=(o=t._loggedIn)&&o.hash&&t.domainKey&&t.apiUrl&&n)return o={domainKey:t.domainKey,identifier:t._loggedIn.identifier,hash:t._loggedIn.hash,ip:t._loggedIn.ip,checkItems:r},console.log(o),e.next=8,(0,_fetch.fetchPost)(t.apiUrl+"/m/checkuserdata",null,null,o);e.next=29}else e.next=30;break;case 8:if(i=e.sent){e.next=13;break}return e.abrupt("return",!1);case 13:if(i.hasOwnProperty("status")){if("disauthenticated"==i.status)return logout(),e.abrupt("return","disauthenticated");e.next=19}else e.next=27;break;case 19:if("failed"==i.status)return e.abrupt("return",!1);e.next=23;break;case 23:if("success"==i.status)return console.log("Check user data",i),console.log("must return res"),e.abrupt("return",i);e.next=27;break;case 27:e.next=30;break;case 29:return e.abrupt("return",!1);case 30:return e.abrupt("return",null);case 31:case"end":return e.stop()}},e)}));return function(e,t){return r.apply(this,arguments)}}(),requestSettingsUpdate=exports.requestSettingsUpdate=function(){var n=_asyncToGenerator(_regeneratorRuntime().mark(function e(t,r,n){var o,i,a,u,c,s,l=arguments;return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(o=3<l.length&&void 0!==l[3]?l[3]:{},i=4<l.length?l[4]:void 0,c=5<l.length?l[5]:void 0,e.prev=3,checkSignedIn){if(a=checkSignedIn(),console.log(a),a&&a.identifier&&a.hash&&!c)return i(!0),u=setTimeout(function(){i(!1)},5e3),c={domainKey:r,identifier:a.identifier,hash:a.hash,change:n},console.log("Shoot req",c),e.next=14,(0,_fetch.fetchPost)(t+"/m/settingsupdate",null,null,c);e.next=44}else e.next=47;break;case 14:if(s=e.sent,console.log(s),s){e.next=22;break}return i(!1),clearTimeout(u),e.abrupt("return",!1);case 22:if(s.hasOwnProperty("status")&&"success"!==s.status){if(i(!1),clearTimeout(u),"disauthenticated"==s.status)return logout(),e.abrupt("return","disauthenticated");e.next=30}else e.next=33;break;case 30:return e.abrupt("return",s);case 31:e.next=42;break;case 33:if("success"!==s.status);else if(i(!1),clearTimeout(u),console.log(s),s.user)return updateLocalLoginSession(s.user),o._setLoggedIn(s.user),o._LocalEventEmitter&&o._LocalEventEmitter.dispatch("refetchDefaults",{dispatch:"simple"}),e.abrupt("return",!0);e.next=42;break;case 42:e.next=45;break;case 44:return e.abrupt("return",!1);case 45:e.next=48;break;case 47:return e.abrupt("return",!1);case 48:e.next=54;break;case 50:return e.prev=50,e.t0=e.catch(3),console.log(e.t0),e.abrupt("return",!1);case 54:return e.abrupt("return",!1);case 55:case"end":return e.stop()}},e,null,[[3,50]])}));return function(e,t,r){return n.apply(this,arguments)}}();