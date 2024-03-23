"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireDefault(require("react")),_router=require("next/router"),_reactSlick=_interopRequireDefault(require("react-slick")),_PresentationModule=_interopRequireDefault(require("../../Presentation.module.scss")),_uuid=require("uuid"),_utility=require("../../../utility/utility"),_image=_interopRequireDefault(require("next/image")),_link=_interopRequireDefault(require("next/link")),_fetch=require("../../../utility/fetch"),_utility2=require("../../utility"),_date=require("../../../utility/utility/date"),_iconsMaterial=require("@mui/icons-material");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function _regeneratorRuntime(){_regeneratorRuntime=function(){return l};var c,l={},e=Object.prototype,u=e.hasOwnProperty,s=Object.defineProperty||function(e,t,n){e[t]=n.value},t="function"==typeof Symbol?Symbol:{},r=t.iterator||"@@iterator",n=t.asyncIterator||"@@asyncIterator",a=t.toStringTag||"@@toStringTag";function o(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{o({},"")}catch(c){o=function(e,t,n){return e[t]=n}}function i(e,t,n,r){var a,o,l,i,t=t&&t.prototype instanceof y?t:y,t=Object.create(t.prototype),r=new S(r||[]);return s(t,"_invoke",{value:(a=e,o=n,l=r,i=f,function(e,t){if(i===h)throw new Error("Generator is already running");if(i===_){if("throw"===e)throw t;return{value:c,done:!0}}for(l.method=e,l.arg=t;;){var n=l.delegate;if(n){n=function e(t,n){var r=n.method,a=t.iterator[r];if(a===c)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=c,e(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;r=d(a,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,p;a=r.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=c),n.delegate=null,p):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}(n,l);if(n){if(n===p)continue;return n}}if("next"===l.method)l.sent=l._sent=l.arg;else if("throw"===l.method){if(i===f)throw i=_,l.arg;l.dispatchException(l.arg)}else"return"===l.method&&l.abrupt("return",l.arg);i=h;n=d(a,o,l);if("normal"===n.type){if(i=l.done?_:m,n.arg===p)continue;return{value:n.arg,done:l.done}}"throw"===n.type&&(i=_,l.method="throw",l.arg=n.arg)}})}),t}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}l.wrap=i;var f="suspendedStart",m="suspendedYield",h="executing",_="completed",p={};function y(){}function g(){}function v(){}var t={},b=(o(t,r,function(){return this}),Object.getPrototypeOf),b=b&&b(b(L([]))),w=(b&&b!==e&&u.call(b,r)&&(t=b),v.prototype=y.prototype=Object.create(t));function N(e){["next","throw","return"].forEach(function(t){o(e,t,function(e){return this._invoke(t,e)})})}function E(l,i){var t;s(this,"_invoke",{value:function(n,r){function e(){return new i(function(e,t){!function t(e,n,r,a){var o,e=d(l[e],l,n);if("throw"!==e.type)return(n=(o=e.arg).value)&&"object"==_typeof(n)&&u.call(n,"__await")?i.resolve(n.__await).then(function(e){t("next",e,r,a)},function(e){t("throw",e,r,a)}):i.resolve(n).then(function(e){o.value=e,r(o)},function(e){return t("throw",e,r,a)});a(e.arg)}(n,r,e,t)})}return t=t?t.then(e,e):e()}})}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function L(t){if(t||""===t){var n,e=t[r];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length))return n=-1,(e=function e(){for(;++n<t.length;)if(u.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=c,e.done=!0,e}).next=e}throw new TypeError(_typeof(t)+" is not iterable")}return s(w,"constructor",{value:g.prototype=v,configurable:!0}),s(v,"constructor",{value:g,configurable:!0}),g.displayName=o(v,a,"GeneratorFunction"),l.isGeneratorFunction=function(e){e="function"==typeof e&&e.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,o(e,a,"GeneratorFunction")),e.prototype=Object.create(w),e},l.awrap=function(e){return{__await:e}},N(E.prototype),o(E.prototype,n,function(){return this}),l.AsyncIterator=E,l.async=function(e,t,n,r,a){void 0===a&&(a=Promise);var o=new E(i(e,t,n,r),a);return l.isGeneratorFunction(t)?o:o.next().then(function(e){return e.done?e.value:o.next()})},N(w),o(w,a,"Generator"),o(w,r,function(){return this}),o(w,"toString",function(){return"[object Generator]"}),l.keys=function(e){var t,n=Object(e),r=[];for(t in n)r.push(t);return r.reverse(),function e(){for(;r.length;){var t=r.pop();if(t in n)return e.value=t,e.done=!1,e}return e.done=!0,e}},l.values=L,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=c,this.done=!1,this.delegate=null,this.method="next",this.arg=c,this.tryEntries.forEach(T),!e)for(var t in this)"t"===t.charAt(0)&&u.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=c)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var r=this;function e(e,t){return o.type="throw",o.arg=n,r.next=e,t&&(r.method="next",r.arg=c),!!t}for(var t=this.tryEntries.length-1;0<=t;--t){var a=this.tryEntries[t],o=a.completion;if("root"===a.tryLoc)return e("end");if(a.tryLoc<=this.prev){var l=u.call(a,"catchLoc"),i=u.call(a,"finallyLoc");if(l&&i){if(this.prev<a.catchLoc)return e(a.catchLoc,!0);if(this.prev<a.finallyLoc)return e(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return e(a.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return e(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;0<=n;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&u.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}var o=(a=a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc?null:a)?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),T(n),p}},catch:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var n,r,a=this.tryEntries[t];if(a.tryLoc===e)return"throw"===(n=a.completion).type&&(r=n.arg,T(a)),r}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:L(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=c),p}},l}function asyncGeneratorStep(e,t,n,r,a,o,l){try{var i=e[o](l),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,a)}function _asyncToGenerator(i){return function(){var e=this,l=arguments;return new Promise(function(t,n){var r=i.apply(e,l);function a(e){asyncGeneratorStep(r,t,n,a,o,"next",e)}function o(e){asyncGeneratorStep(r,t,n,a,o,"throw",e)}a(void 0)})}}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){var n;if(e)return"string"==typeof e?_arrayLikeToArray(e,t):"Map"===(n="Object"===(n=Object.prototype.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _iterableToArrayLimit(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,l,i=[],c=!0,u=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=o.call(n)).done)&&(i.push(r.value),i.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(u)throw a}}return i}}function _arrayWithHoles(e){if(Array.isArray(e))return e}var moduleName="IndexHello",RESET_CTA_TIMER=18e4,Module=function(o){function r(e,t,n){return null!=e&&e.rawBg&&"bg"===n||null!=e&&e.raw&&"icon"===n?t:o.cdn&&o.cdn.static&&0<o.cdn.static.length&&t?"".concat(o.cdn.static,"/").concat(t):"img/default/greythumb.jpg"}var t=(0,_router.useRouter)(),e=_slicedToArray(_react.default.useState(!1),2),a=e[0],l=e[1],e=_slicedToArray(_react.default.useState(null),2),i=e[0],c=e[1],e=_slicedToArray(_react.default.useState(null),2),n=(e[0],e[1]),e=_slicedToArray(_react.default.useState(0),2),u=e[0],e=(e[1],_slicedToArray(_react.default.useState(!1),2)),s=(e[0],e[1]),e=_slicedToArray(_react.default.useState(!1),2),d=e[0],f=e[1],e=_slicedToArray(_react.default.useState(null),2),m=e[0],h=e[1],_=_react.default.useRef(),e=(_react.default.useRef(),_react.default.useRef()),p=(o._LocalEventEmitter.unsubscribe(i),o._LocalEventEmitter.subscribe(i,function(e){e&&e.dispatch&&"updateCountdown"===e.dispatch&&null!==(e=o.items&&o.items[u]?o.items[u].date:null)&&(e="string"==typeof e?new Date(Number(e)):(_typeof(e),new Date(e)),isNaN(e)||(e=(0,_utility.getTimeRemaining)(e,new Date))&&n(e))}),_react.default.useEffect(function(){var n;a||(n=(0,_uuid.v4)(),c(n),o.request&&f(!0),setInterval(function(){o._LocalEventEmitter.dispatch(n,{dispatch:"updateCountdown"})},1e3),setTimeout(function(){var e,t=document.getElementsByClassName("slider_slides_".concat(n));t&&t[0]&&t[0].childNodes&&t[0].childNodes[0]&&t[0].childNodes[0].childNodes&&t[0].childNodes[0].childNodes[0]&&((e=t[0].childNodes[0].childNodes[0]).style.transition="500ms",e.style.left="-25px",setTimeout(function(){e&&(e.style.left="0")},2e3))},2e3),l(!0))},[a,o.request]),_react.default.useCallback(function(){var t=_asyncToGenerator(_regeneratorRuntime().mark(function e(t){var n,r,a;return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:s(!0),null!=t&&null!=(n=t.currentTarget)&&n.getAttribute("ctaAfter")&&(t.currentTarget.innerHTML=t.currentTarget.getAttribute("ctaAfter"),r=t.currentTarget.getAttribute("cta"),a=t.currentTarget,setTimeout(function(){try{a.innerHTML=r}catch(e){}},RESET_CTA_TIMER)),(0,_utility.fireGlobalEvent)(t,o._LocalEventEmitter);case 3:case"end":return e.stop()}},e)}));return function(e){return t.apply(this,arguments)}}())),y=_react.default.useMemo(function(){var e;return m&&d?(0,_utility2.normalizeData)(m):null!=o&&null!=(e=o.items)&&e.map?(0,_utility2.normalizeData)(o.items):[{},{},{},{},{},{}]},[m,d,null==o?void 0:o.items]),g=_react.default.useCallback(function(e){(0,_utility2.handleSliderLinkClickUp)(e,t)});return _react.default.createElement("div",{className:"".concat(_PresentationModule.default.IndexHelloContainer," sliderContainer_").concat(i," ").concat(moduleName,"_IndexHelloContainer ").concat(o.className),ref:e},o.groupLabel?_react.default.createElement("div",{className:"".concat(_PresentationModule.default.GroupLabelContainer," ").concat(moduleName,"_groupLabelContainer ").concat(o.groupLabelContainerClassName)},_react.default.createElement("div",{className:"".concat(_PresentationModule.default.GroupLabel," ").concat(moduleName,"_groupLabel ").concat(o.groupLabelClassName)},o.groupLabel)):null,d&&null!=o&&null!=(e=o.request)&&e.handlerArgs?_react.default.createElement(_fetch.FetchHandler,_extends({handlerArgs:o.request.handlerArgs,receiveData:function(e){var t,n;null!=e&&null!=(n=e.data)&&n.fetchedData&&(t=[],n=e.data.fetchedData.map(function(e){return Object.entries(e).map(function(e){return e[1].map(function(e){return Array.isArray(e)?e.map(function(e){return e.id?(t.push(e),e):null}):e.id?(t.push(e),e):null})})}).flat(3))&&(e=n.filter(Boolean),h(e))}},o)):null,_react.default.createElement("div",{className:"swipe slider_".concat(i)},_react.default.createElement(_reactSlick.default,_extends({},{infinite:!1,speed:500,swipeToSlide:!0,slidesToScroll:1,arrows:!1,responsive:[{breakpoint:4e3,settings:{slidesToShow:6,touchThreshold:120}},{breakpoint:1920,settings:{slidesToShow:5,touchThreshold:100}},{breakpoint:1680,settings:{slidesToShow:4,touchThreshold:80}},{breakpoint:1280,settings:{slidesToShow:3,touchThreshold:60}},{breakpoint:900,settings:{slidesToShow:2,touchThreshold:40}},{breakpoint:570,settings:{slidesToShow:1,touchThreshold:20}}]},{className:"".concat(_PresentationModule.default.IndexItemsContainer," swiper-wrapper slider_slides ").concat(moduleName,"_IndexItemsContainer slider_slides_").concat(i," ").concat(o.IndexItemsContainerClassName)}),null!=y&&y.map?y.map(function(t,e){var n=null!=t&&t.date&&!isNaN(new Date(t.date))?new Date(t.date):"";return console.log(n,n.getMonth,t),_react.default.createElement("div",{className:"swiper-slide ".concat(_PresentationModule.default.IndexItemUpperContainer," ").concat(o.tall?"".concat(_PresentationModule.default.IndexItemsUpperContainerTall):null," ").concat(moduleName,"_Container ").concat(i,"_IndexItemUpperContainer ").concat(t.important?"slider_item_important":""),key:e},_react.default.createElement(_link.default,{href:(0,_utility2.resolveMainLink)(t),onClick:_utility2.handleSliderLinkClick,onMouseDown:_utility2.handleSliderLinkClickDown,onMouseUp:g,draggable:!1,style:{alignSelf:"center"}},_react.default.createElement("div",{className:"".concat(_PresentationModule.default.BgContainer," ").concat(o.tall?"".concat(_PresentationModule.default.BgContainerTall):null," ").concat(moduleName,"_BgContainer ").concat(o.bgClassName),style:{backgroundImage:"url(".concat(r(t,null!=(e=null==t?void 0:t.leadBg)?e:null,"bg"),")"),position:"relative"}},o.children,_react.default.createElement("div",{className:"".concat(_PresentationModule.default.FillPageContainer," ").concat(moduleName,"_FillPageContainer")},_react.default.createElement("div",{className:"".concat(_PresentationModule.default.TimeContainer," ").concat(moduleName,"_TimeContainer ").concat(o.timeContainerClassName)},null!=t&&t.showSimpleDate&&null!=n&&n.getMonth&&null!=n&&n.getDate?_react.default.createElement("div",{className:"".concat(_PresentationModule.default.TimeSimple," ").concat(moduleName,"_TimeSimple ").concat(o.timeSimpleClassName," ").concat((0,_utility2.datePassed)(t.date)?"".concat(_PresentationModule.default.DatePassed):"")},_react.default.createElement("div",{className:"".concat(_PresentationModule.default.TimeShowContainer," flex gap-p5")},_react.default.createElement("div",{className:"".concat(_PresentationModule.default.dateIconContainer)},_react.default.createElement("div",{className:"".concat(_PresentationModule.default.dateIconMonth)},(0,_date.retrieveMonth)(n.getMonth())),_react.default.createElement("div",{className:"".concat(_PresentationModule.default.dateIconDate)},n.getDate())),_react.default.createElement("div",{className:"".concat(_PresentationModule.default.dateMetaContainer)},_react.default.createElement("div",{className:"".concat(_PresentationModule.default.dateText)},(0,_date.retrieveDay)(n.getDay()),", ",n.toLocaleString("en-US",{month:"long"})," ",n.toLocaleDateString("en-US",{day:"2-digit"})),_react.default.createElement("div",{className:"".concat(_PresentationModule.default.timeMeta," flex gap-p2"),style:{alignContent:"center"}},t.created&&!isNaN(new Date(t.created))&&new Date(t.created).getTime()>(new Date).getTime()-1296e6?_react.default.createElement("div",{className:"newItem",style:{fontSize:".7rem"}},_react.default.createElement("span",null,"New"),_react.default.createElement("span",{style:{fontSize:".7rem"},className:"star material-icons"},"star")):null,_react.default.createElement("div",{className:"".concat(_PresentationModule.default.timeText)},n.toLocaleString("en-US",{hour12:!0,hour:"2-digit",minute:"2-digit"})),"ticket"===(null==t||null==(e=t.item)?void 0:e.type)?_react.default.createElement("div",{className:"".concat(_PresentationModule.default.ticketIcon),style:{height:"1rem"}},_react.default.createElement(_iconsMaterial.ConfirmationNumber,{style:{fontSize:"1rem",height:"1rem"}})):null)))):null)))),_react.default.createElement("div",null,_react.default.createElement("div",{className:"".concat(_PresentationModule.default.MetaContainer," ").concat(moduleName,"_MetaContainer ").concat(o.metaContainerClassName)},""!==(null==t?void 0:t.icon)?_react.default.createElement("div",{className:"".concat(_PresentationModule.default.IconContainer," ").concat(moduleName,"_IconContainer ").concat(o.iconContainerClassName)},_react.default.createElement(_link.default,{href:"/p?u=".concat(null!=(n=null==t?void 0:t.author)?n:""),onClick:_utility2.handleSliderLinkClick,onMouseDown:_utility2.handleSliderLinkClickDown,onMouseUp:g,draggable:!1,style:{alignSelf:"center"}},_react.default.createElement(_image.default,{loader:function(){var e;return r(t,null!=(e=null==t?void 0:t.icon)?e:null,"icon")},src:r(t,null!=(e=null==t?void 0:t.icon)?e:null,"icon"),style:{maxWidth:"60px",borderRadius:"4rem",minHeight:"50px"},alt:null!=(n=null==t?void 0:t.author)?n:"",width:null!=(e=null==t?void 0:t.iconWidth)?e:"50",height:null!=(n=null==t?void 0:t.iconHeight)?n:"50",layout:"responsive"}))):null,_react.default.createElement("div",{className:"".concat(_PresentationModule.default.DataContainer," ").concat(moduleName,"_DataContainer ").concat(o.DataContainerClassName)},_react.default.createElement(_link.default,{href:(0,_utility2.resolveMainLink)(t),onClick:_utility2.handleSliderLinkClick,onMouseDown:_utility2.handleSliderLinkClickDown,onMouseUp:g,draggable:!1,style:{alignSelf:"center"}},_react.default.createElement("div",{className:"".concat(_PresentationModule.default.Lead," ").concat(moduleName,"_Lead ").concat(o.leadClassName)},null!=(e=null==t?void 0:t.title)?e:"")),_react.default.createElement("div",{className:"".concat(_PresentationModule.default.CtaHolder," ").concat(moduleName,"_CtaHolder ").concat(o.CtaHolderClassName)},_react.default.createElement(_link.default,{href:"/p?u=".concat(null==t?void 0:t.author),onClick:_utility2.handleSliderLinkClick,onMouseDown:_utility2.handleSliderLinkClickDown,onMouseUp:g,draggable:!1,style:{alignSelf:"center"}},_react.default.createElement("div",{className:"".concat(_PresentationModule.default.Author," ").concat(moduleName,"_Author ").concat(o.authorClassName)},null!=(n=null==t?void 0:t.author)?n:"")),null!=t&&null!=(e=t.item)&&e.id&&null!=t&&null!=(n=t.item)&&n.style&&null!=t&&null!=(e=t.item)&&e.option?_react.default.createElement("button",{className:"".concat(_PresentationModule.default.CtaButton," ").concat(moduleName,"_Cta ").concat(o.ctaClassName),onClick:p,action:-1<["add_to_cart","buy"].indexOf(null==t?void 0:t.action)?t.action:"add_to_cart",item:null==t||null==(n=t.item)?void 0:n.id,selectedstyle:null==t||null==(e=t.item)?void 0:e.style,currentoption:null==t||null==(n=t.item)?void 0:n.option,ref:_,ctaAfter:t.ctaAfter,cta:t.cta},t.cta):null)))))}):null)))},_default=exports.default=Module;