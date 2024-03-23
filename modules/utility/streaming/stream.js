"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.updateStreamConfigRequest=exports.requestStreamingPermissions=exports.endStream=exports.doFetchAuthForStream=exports.beginStream=void 0;var _fetch=require("/modules/utility/fetch/fetch.js"),_SignIn=require("/modules/utility/onboarding/SignIn.js");function _regeneratorRuntime(){_regeneratorRuntime=function(){return o};var s,o={},t=Object.prototype,c=t.hasOwnProperty,f=Object.defineProperty||function(t,e,r){t[e]=r.value},e="function"==typeof Symbol?Symbol:{},n=e.iterator||"@@iterator",r=e.asyncIterator||"@@asyncIterator",a=e.toStringTag||"@@toStringTag";function i(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{i({},"")}catch(s){i=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var a,i,o,u,e=e&&e.prototype instanceof g?e:g,e=Object.create(e.prototype),n=new E(n||[]);return f(e,"_invoke",{value:(a=t,i=r,o=n,u=l,function(t,e){if(u===d)throw new Error("Generator is already running");if(u===y){if("throw"===t)throw e;return{value:s,done:!0}}for(o.method=t,o.arg=e;;){var r=o.delegate;if(r){r=function t(e,r){var n=r.method,a=e.iterator[n];if(a===s)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=s,t(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;n=h(a,e.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,m;a=n.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=s),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}(r,o);if(r){if(r===m)continue;return r}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if(u===l)throw u=y,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);u=d;r=h(a,i,o);if("normal"===r.type){if(u=o.done?y:p,r.arg===m)continue;return{value:r.arg,done:o.done}}"throw"===r.type&&(u=y,o.method="throw",o.arg=r.arg)}})}),e}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}o.wrap=u;var l="suspendedStart",p="suspendedYield",d="executing",y="completed",m={};function g(){}function b(){}function v(){}var e={},x=(i(e,n,function(){return this}),Object.getPrototypeOf),x=x&&x(x(P([]))),w=(x&&x!==t&&c.call(x,n)&&(e=x),v.prototype=g.prototype=Object.create(e));function _(t){["next","throw","return"].forEach(function(e){i(t,e,function(t){return this._invoke(e,t)})})}function k(o,u){var e;f(this,"_invoke",{value:function(r,n){function t(){return new u(function(t,e){!function e(t,r,n,a){var i,t=h(o[t],o,r);if("throw"!==t.type)return(r=(i=t.arg).value)&&"object"==_typeof(r)&&c.call(r,"__await")?u.resolve(r.__await).then(function(t){e("next",t,n,a)},function(t){e("throw",t,n,a)}):u.resolve(r).then(function(t){i.value=t,n(i)},function(t){return e("throw",t,n,a)});a(t.arg)}(r,n,t,e)})}return e=e?e.then(t,t):t()}})}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function P(e){if(e||""===e){var r,t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length))return r=-1,(t=function t(){for(;++r<e.length;)if(c.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=s,t.done=!0,t}).next=t}throw new TypeError(_typeof(e)+" is not iterable")}return f(w,"constructor",{value:b.prototype=v,configurable:!0}),f(v,"constructor",{value:b,configurable:!0}),b.displayName=i(v,a,"GeneratorFunction"),o.isGeneratorFunction=function(t){t="function"==typeof t&&t.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},o.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,i(t,a,"GeneratorFunction")),t.prototype=Object.create(w),t},o.awrap=function(t){return{__await:t}},_(k.prototype),i(k.prototype,r,function(){return this}),o.AsyncIterator=k,o.async=function(t,e,r,n,a){void 0===a&&(a=Promise);var i=new k(u(t,e,r,n),a);return o.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},_(w),i(w,a,"Generator"),i(w,n,function(){return this}),i(w,"toString",function(){return"[object Generator]"}),o.keys=function(t){var e,r=Object(t),n=[];for(e in r)n.push(e);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},o.values=P,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=s,this.done=!1,this.delegate=null,this.method="next",this.arg=s,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&c.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=s)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function t(t,e){return i.type="throw",i.arg=r,n.next=t,e&&(n.method="next",n.arg=s),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var a=this.tryEntries[e],i=a.completion;if("root"===a.tryLoc)return t("end");if(a.tryLoc<=this.prev){var o=c.call(a,"catchLoc"),u=c.call(a,"finallyLoc");if(o&&u){if(this.prev<a.catchLoc)return t(a.catchLoc,!0);if(this.prev<a.finallyLoc)return t(a.finallyLoc)}else if(o){if(this.prev<a.catchLoc)return t(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return t(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&c.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}var i=(a=a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc?null:a)?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r,n,a=this.tryEntries[e];if(a.tryLoc===t)return"throw"===(r=a.completion).type&&(n=r.arg,L(a)),n}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=s),m}},o}function asyncGeneratorStep(t,e,r,n,a,i,o){try{var u=t[i](o),s=u.value}catch(t){return void r(t)}u.done?e(s):Promise.resolve(s).then(n,a)}function _asyncToGenerator(u){return function(){var t=this,o=arguments;return new Promise(function(e,r){var n=u.apply(t,o);function a(t){asyncGeneratorStep(n,e,r,a,i,"next",t)}function i(t){asyncGeneratorStep(n,e,r,a,i,"throw",t)}a(void 0)})}}var beginStream=exports.beginStream=function(){var a=_asyncToGenerator(_regeneratorRuntime().mark(function t(e,r,n,a){var i,o;return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(i=a()){if(i.identifier&&i.hash)return i={cus_id:n.stripeSecret.user,dontForce:n.dontForce,streamSettings:n.streamSettings,domainKey:r,hash:i.hash,identifier:i.identifier},t.next=6,(0,_fetch.fetchPost)(e+"/m/beginstream",null,null,i);t.next=26}else t.next=29;break;case 6:if(o=t.sent){t.next=11;break}return t.abrupt("return",!1);case 11:if(o.hasOwnProperty("status")){if("disauthenticated"==o.status)return(0,_SignIn.logout)(),t.abrupt("return","disauthenticated");t.next=17}else t.next=23;break;case 17:if("failed"==o.status)return t.abrupt("return",!1);t.next=21;break;case 21:if("success"==o.status)return t.abrupt("return",o);t.next=23;break;case 23:case 26:return t.abrupt("return",!1);case 27:t.next=30;break;case 29:return t.abrupt("return",!1);case 30:case"end":return t.stop()}},t)}));return function(t,e,r,n){return a.apply(this,arguments)}}(),endStream=exports.endStream=function(){var a=_asyncToGenerator(_regeneratorRuntime().mark(function t(e,r,n,a){var i,o;return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(i=a()){if(i.identifier&&i.hash)return i={stream:n.stream,domainKey:r,hash:i.hash,identifier:i.identifier},t.next=6,(0,_fetch.fetchPost)(e+"/m/endstream",null,null,i);t.next=26}else t.next=29;break;case 6:if(o=t.sent){t.next=11;break}return t.abrupt("return",!1);case 11:if(o.hasOwnProperty("status")){if("disauthenticated"==o.status)return(0,_SignIn.logout)(),t.abrupt("return","disauthenticated");t.next=17}else t.next=23;break;case 17:if("failed"==o.status)return t.abrupt("return",!1);t.next=21;break;case 21:if("success"==o.status)return t.abrupt("return",o);t.next=23;break;case 23:case 26:return t.abrupt("return",!1);case 27:t.next=30;break;case 29:return t.abrupt("return",!1);case 30:case"end":return t.stop()}},t)}));return function(t,e,r,n){return a.apply(this,arguments)}}(),doFetchAuthForStream=exports.doFetchAuthForStream=function(){var a=_asyncToGenerator(_regeneratorRuntime().mark(function t(e,r,n,a){var i,o;return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(i=a()){if(i.identifier&&i.hash)return i={stream:n,domainKey:r,hash:i.hash,identifier:i.identifier},t.next=6,(0,_fetch.fetchPost)(e+"/m/getauthforstream",null,null,i);t.next=26}else t.next=29;break;case 6:if(o=t.sent){t.next=11;break}return t.abrupt("return",!1);case 11:if(o.hasOwnProperty("status")){if("disauthenticated"==o.status)return(0,_SignIn.logout)(),t.abrupt("return","disauthenticated");t.next=17}else t.next=23;break;case 17:if("failed"==o.status)return t.abrupt("return",!1);t.next=21;break;case 21:if("success"==o.status)return t.abrupt("return",o);t.next=23;break;case 23:case 26:return t.abrupt("return",!1);case 27:t.next=30;break;case 29:return t.abrupt("return",!1);case 30:case"end":return t.stop()}},t)}));return function(t,e,r,n){return a.apply(this,arguments)}}(),updateStreamConfigRequest=exports.updateStreamConfigRequest=function(){var a=_asyncToGenerator(_regeneratorRuntime().mark(function t(e,r,n,a){var i,o;return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(i=a()){if(i.identifier&&i.hash)return i={stream:n.stream,streamData:n.streamData,streamSettings:n.streamSettings,domainKey:r,hash:i.hash,identifier:i.identifier},console.log(i),t.next=7,(0,_fetch.fetchPost)(e+"/m/updatestreamconfig",null,null,i);t.next=27}else t.next=30;break;case 7:if(o=t.sent){t.next=12;break}return t.abrupt("return",!1);case 12:if(o.hasOwnProperty("status")){if("disauthenticated"==o.status)return(0,_SignIn.logout)(),t.abrupt("return","disauthenticated");t.next=18}else t.next=24;break;case 18:if("failed"==o.status)return t.abrupt("return",!1);t.next=22;break;case 22:if("success"==o.status)return t.abrupt("return",o);t.next=24;break;case 24:case 27:return t.abrupt("return",!1);case 28:t.next=31;break;case 30:return t.abrupt("return",!1);case 31:case"end":return t.stop()}},t)}));return function(t,e,r,n){return a.apply(this,arguments)}}(),requestStreamingPermissions=exports.requestStreamingPermissions=function(){var n=_asyncToGenerator(_regeneratorRuntime().mark(function t(e,r,n){var a,i;return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=n()){if(a.identifier&&a.hash)return a={domainKey:r,hash:a.hash,identifier:a.identifier},console.log(a),t.next=7,(0,_fetch.fetchPost)(e+"/m/requeststreamingpermissions",null,null,a);t.next=27}else t.next=30;break;case 7:if(i=t.sent){t.next=12;break}return t.abrupt("return",!1);case 12:if(i.hasOwnProperty("status")){if("disauthenticated"==i.status)return(0,_SignIn.logout)(),t.abrupt("return","disauthenticated");t.next=18}else t.next=24;break;case 18:if("failed"==i.status)return t.abrupt("return",!1);t.next=22;break;case 22:if("success"==i.status)return t.abrupt("return",i);t.next=24;break;case 24:case 27:return t.abrupt("return",!1);case 28:t.next=31;break;case 30:return t.abrupt("return",!1);case 31:case"end":return t.stop()}},t)}));return function(t,e,r){return n.apply(this,arguments)}}();