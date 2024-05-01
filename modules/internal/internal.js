function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o,n=arguments[t];for(o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}import React from"react";import io from"socket.io-client";import{SocketContainer}from"/modules/socket";import{resolveVariables}from"/app.config";import{checkSignedIn,checkUserData,updateLocalLoginSession}from"/modules/utility/onboarding/SignIn";import{_LocalEventEmitter}from"/modules/events/LocalEventEmitter";import{handleRouteChange,registerCheckLocalStorageSize,registerCheckMobile,registerProxyConsoleLog}from"/modules/util";import{useRouter}from"next/router";import{forceUpdateProps,handleCheckUserData,handleGlobalEvent,handleSetCart,handleSetLoggedIn,registerSocket,toggleSingleOpenMenu}from"/modules/utility/_app";import{UseMiddleware}from"../../customModules/middleware";import{DeveloperHelp}from".";import{GoogleGsiClient,GoogleSignInRegister}from"/modules/internal/localImports";const DEFAULT_SOLUTION={payment:"stripe"},CHECK_HANDLE_USER_DATA_THRESHOLD=18e5,Internal=e=>{const[t,o]=React.useState(!1),[n,i]=React.useState(!1);var[a,r]=React.useState(!1);const[l,s]=React.useState(!1);var[c,g]=React.useState(null);const[d,u]=React.useState({}),[m,_]=React.useState({}),[p,f]=React.useState(!1);var[E,S]=React.useState({});const[h,v]=React.useState(!1),[R,b]=React.useState(null);var[I,C]=React.useState(!1),[L,w]=React.useState(!1);const[y,k]=React.useState(-1);var[O,U]=React.useState(DEFAULT_SOLUTION);let D=Object.assign({},e);const M=useRouter();try{registerCheckLocalStorageSize(window),registerCheckMobile(window),registerProxyConsoleLog(window)}catch(e){}React.useEffect(()=>{var e;t?(e=window.mobileCheck(),v(e)):o(!0)},[t]),React.useEffect(()=>{document.addEventListener("mute-login-error",()=>{s(null)},{once:!0})},[]);const H=async()=>{handleSetLoggedIn(D,checkSignedIn,i);var e=await handleCheckUserData(D,n);D&&n&&y<(new Date).getTime()-CHECK_HANDLE_USER_DATA_THRESHOLD&&e&&(k((new Date).getTime()),(async(e,t)=>{e=await checkUserData(e,t);if(e){t=Object.assign({},n);if(console.log(e,t),e.identifier&&e.username&&e.hash)return t.username=e.username,t.hash=e.hash,t.identifier=e.identifier,t.ip=e.ip,t.meta||(t.meta={}),e.ip&&(t.meta.ip=e.ip),e.location&&(t.meta.location=e.location),e.locationMeta&&(t.meta.locationMeta=e.locationMeta),console.log(t),updateLocalLoginSession(t),!i(t)}})(D,e))};React.useEffect(()=>{H()},[n,D._loggedIn]);React.useEffect(()=>{handleSetCart(n,_)},[n]),D._LocalEventEmitter=_LocalEventEmitter,D._loggedIn=n,D._setLoggedIn=i,D._stripeSecret=a,D._setStripeSecret=r,D._loginError=l,D._setLoginError=s,D._pageError=c,D._setPageError=g,D._toggleSingleOpenMenu=(e,t,o)=>{toggleSingleOpenMenu(e,t,d,u,o)},D._openMenu=d,D._setOpenMenu=u,D._cart=m,D._rooms=E,D._isMobile=h,D._adminAuth=R,D._setAdminAuth=b,D._managerOpen=I,D._setManagerOpen=C,D._currentlyStreaming=L,D._setCurrentlyStreaming=w,D._solution=O,D._setSolution=U,D.fetchBusy=p,D.setFetchBusy=f;e=resolveVariables();D._configVariables=e,D=Object.assign(resolveVariables(),D),_LocalEventEmitter.unsubscribe("forceUpdateProps"),_LocalEventEmitter.subscribe("forceUpdateProps",e=>{forceUpdateProps(e,_)}),_LocalEventEmitter.unsubscribe("global_event"),_LocalEventEmitter.subscribe("global_event",async e=>{handleGlobalEvent(e,D,p,f);try{window&&window.dispatchEvent(new CustomEvent("global_event",{detail:Object.assign({},e)}))}catch(e){}}),_LocalEventEmitter.unsubscribe("attemptInitializeGoogle"),_LocalEventEmitter.subscribe("attemptInitializeGoogle",async e=>{A()});const x=e=>{e=new CustomEvent("thirdparty-signin",{detail:e});document.dispatchEvent(e)},A=(t=250)=>{try{return(!window||window&&!window.googleInitialized)&&D.googleClientId&&(google.accounts.id.initialize({client_id:D.googleClientId,callback:x,use_fedcm_for_prompt:!0}),window.googleInitialized=!0,console.log("Google Loaded")),!0}catch(e){setTimeout(()=>{A(2*t)},t)}},[T,P]=(React.useEffect(()=>{console.log,D?._loggedIn?.admin&&!R&&D?.dborigin&&D?._loggedIn?.admin.origin&&D.dborigin===D._loggedIn.admin.origin&&D._loggedIn.admin?.userid&&D?._loggedIn?.identifier&&D._loggedIn.admin.userid===D._loggedIn.identifier?b(D._loggedIn.admin):(!R?.userid||!D?._loggedIn||D?._loggedIn&&!D._loggedIn.identifier||R?.userid&&D?._loggedIn?.identifier&&R.userid!==D._loggedIn.identifier||!D?._adminAuth?.origin||!D?.dborigin||D?._adminAuth?.origin&&D.dborigin&&D._adminAuth.origin!==D.dborigin)&&b(null)},[D._loggedIn,R]),React.useState(null)),[G,j]=React.useState(null);return React.useEffect(()=>{registerSocket(io,T,P,G,D,j)},[T,G]),React.useEffect(()=>{const e=(e,t)=>{handleRouteChange(D,e,t)};return M.events.on("routeChangeComplete",e),()=>{M.events.off("routeChangeComplete",e)}},[M.events,D._loggedIn,D.apiUrl,D.domainKey]),D._socket=T,console.log("Socket",T,D),React.createElement("div",null,React.createElement("div",{version:"0.5.97",system:"Tycoon Systems Corp.",style:{display:"none"}}),D?.googleClientId?React.createElement("div",null,GoogleGsiClient,GoogleSignInRegister(D.googleClientId)):null,React.createElement(SocketContainer,_extends({_socket:T,setRooms:S},D)),React.createElement("div",{className:p?"fetchNotBusy fetchBusy":"fetchNotBusy"}),React.createElement(UseMiddleware,_extends({},D,{_socket:T})),D?.dev?React.createElement(DeveloperHelp,D):null)};export default Internal;