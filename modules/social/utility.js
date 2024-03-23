"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.inviteFriend=void 0;var _fetch=require("../utility/fetch/fetch"),_SignIn=require("/modules/utility/onboarding/SignIn.js"),_LocalEventEmitter2=require("/modules/events/LocalEventEmitter");function _regeneratorRuntime(){_regeneratorRuntime=function(){return a};var c,a={},t=Object.prototype,s=t.hasOwnProperty,f=Object.defineProperty||function(t,e,r){t[e]=r.value},e="function"==typeof Symbol?Symbol:{},n=e.iterator||"@@iterator",r=e.asyncIterator||"@@asyncIterator",o=e.toStringTag||"@@toStringTag";function i(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{i({},"")}catch(c){i=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o,i,a,u,e=e&&e.prototype instanceof g?e:g,e=Object.create(e.prototype),n=new O(n||[]);return f(e,"_invoke",{value:(o=t,i=r,a=n,u=h,function(t,e){if(u===y)throw new Error("Generator is already running");if(u===d){if("throw"===t)throw e;return{value:c,done:!0}}for(a.method=t,a.arg=e;;){var r=a.delegate;if(r){r=function t(e,r){var n=r.method,o=e.iterator[n];if(o===c)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=c,t(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;n=l(o,e.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,v;o=n.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=c),r.delegate=null,v):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}(r,a);if(r){if(r===v)continue;return r}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(u===h)throw u=d,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);u=y;r=l(o,i,a);if("normal"===r.type){if(u=a.done?d:p,r.arg===v)continue;return{value:r.arg,done:a.done}}"throw"===r.type&&(u=d,a.method="throw",a.arg=r.arg)}})}),e}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}a.wrap=u;var h="suspendedStart",p="suspendedYield",y="executing",d="completed",v={};function g(){}function m(){}function w(){}var e={},b=(i(e,n,function(){return this}),Object.getPrototypeOf),b=b&&b(b(j([]))),x=(b&&b!==t&&s.call(b,n)&&(e=b),w.prototype=g.prototype=Object.create(e));function _(t){["next","throw","return"].forEach(function(e){i(t,e,function(t){return this._invoke(e,t)})})}function L(a,u){var e;f(this,"_invoke",{value:function(r,n){function t(){return new u(function(t,e){!function e(t,r,n,o){var i,t=l(a[t],a,r);if("throw"!==t.type)return(r=(i=t.arg).value)&&"object"==_typeof(r)&&s.call(r,"__await")?u.resolve(r.__await).then(function(t){e("next",t,n,o)},function(t){e("throw",t,n,o)}):u.resolve(r).then(function(t){i.value=t,n(i)},function(t){return e("throw",t,n,o)});o(t.arg)}(r,n,t,e)})}return e=e?e.then(t,t):t()}})}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function j(e){if(e||""===e){var r,t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length))return r=-1,(t=function t(){for(;++r<e.length;)if(s.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=c,t.done=!0,t}).next=t}throw new TypeError(_typeof(e)+" is not iterable")}return f(x,"constructor",{value:m.prototype=w,configurable:!0}),f(w,"constructor",{value:m,configurable:!0}),m.displayName=i(w,o,"GeneratorFunction"),a.isGeneratorFunction=function(t){t="function"==typeof t&&t.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},a.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,i(t,o,"GeneratorFunction")),t.prototype=Object.create(x),t},a.awrap=function(t){return{__await:t}},_(L.prototype),i(L.prototype,r,function(){return this}),a.AsyncIterator=L,a.async=function(t,e,r,n,o){void 0===o&&(o=Promise);var i=new L(u(t,e,r,n),o);return a.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},_(x),i(x,o,"Generator"),i(x,n,function(){return this}),i(x,"toString",function(){return"[object Generator]"}),a.keys=function(t){var e,r=Object(t),n=[];for(e in r)n.push(e);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},a.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=c,this.done=!1,this.delegate=null,this.method="next",this.arg=c,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&s.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=c)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function t(t,e){return i.type="throw",i.arg=r,n.next=t,e&&(n.method="next",n.arg=c),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=s.call(o,"catchLoc"),u=s.call(o,"finallyLoc");if(a&&u){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&s.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}var i=(o=o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc?null:o)?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r,n,o=this.tryEntries[e];if(o.tryLoc===t)return"throw"===(r=o.completion).type&&(n=r.arg,S(o)),n}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=c),v}},a}function asyncGeneratorStep(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function _asyncToGenerator(u){return function(){var t=this,a=arguments;return new Promise(function(e,r){var n=u.apply(t,a);function o(t){asyncGeneratorStep(n,e,r,o,i,"next",t)}function i(t){asyncGeneratorStep(n,e,r,o,i,"throw",t)}o(void 0)})}}var inviteFriend=exports.inviteFriend=function(){var o=_asyncToGenerator(_regeneratorRuntime().mark(function t(e,r,n,o){var i,a;return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.identifier&&n.hash&&null!=o&&o.email)return i={domainKey:r,data:o,hash:n.hash,identifier:n.identifier},t.next=4,(0,_fetch.fetchPost)(e+"/m/invitefriend",null,null,i);t.next=24;break;case 4:if(a=t.sent){t.next=9;break}return t.abrupt("return",!1);case 9:if(a.hasOwnProperty("status")){if("disauthenticated"==a.status)return(0,_SignIn.logout)(),t.abrupt("return","disauthenticated");t.next=15}else t.next=21;break;case 15:if("failed"==a.status)return t.abrupt("return",!1);t.next=19;break;case 19:if("success"==a.status)return t.abrupt("return",a);t.next=21;break;case 21:case 24:return t.abrupt("return",!1);case 25:case"end":return t.stop()}},t)}));return function(t,e,r,n){return o.apply(this,arguments)}}();