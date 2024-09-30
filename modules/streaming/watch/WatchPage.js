function _extends(){return(_extends=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var a,c=arguments[e];for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a])}return t}).apply(this,arguments)}import React from"react";import WatchPageStyles from"./WatchPage.module.scss";import{useRouter}from"next/router";import{checkSignedIn}from"../../utility/onboarding";import{doFetchAuthForStream,checkAuthorization}from"../../utility/streaming";import{ensureAutoPlay}from"../../video/player/utility";import{v4 as uuidv4}from"uuid";import{handleInteractMedia,isObjectEmpty}from"../../util";import{initializePlayer}from"/modules/streaming/watch/runtime/initialize";import{checkiOS}from"/modules/util";import{Watch}from"/layout";const defaultPoster="img/internal/videoposter.png";let options={autoplay:!0};const Module=r=>{const s=useRouter()["query"],[a,c]=React.useState(!1),[i,o]=React.useState(null),[e,n]=React.useState(!1),[l,u]=React.useState({action:"page_loaded",trying:"play_video",src:""}),[h,m]=React.useState(""),[d,p]=React.useState(!1),[g,y]=React.useState({}),[t,w]=React.useState({});var[,,]=React.useState(null);const[f,v]=React.useState({}),[R,D]=React.useState(defaultPoster),[_,E]=React.useState(!1),[S,b]=React.useState(!1),[P,L]=React.useState(!1),[,k]=React.useState(!1);var[,,]=React.useState([]);let A=React.useRef();React.useRef(),React.useRef(),React.useRef();const O=React.useRef(),x=(i&&(r._LocalEventEmitter.unsubscribe(i),r._LocalEventEmitter.subscribe(i,t=>{if(t&&t.dispatch)if("updateAuth"===t.dispatch){if(!r?.watchData||isObjectEmpty(r.watchData))return null;var e;!d&&O.current&&(e={type:"auth",lead:"Not Authorized",description:"You have not been authorized to watch the stream"},console.log("auth req",g),g&&(g.password&&(e.password="The stream requires a password"),g.tags)&&g.dates&&(0<g.tags.length||0<g.dates.length)&&(e.tags="The stream has tags that authorize viewership of the stream. Please purchase tickets from the users shop to watch",e.tagsList=g.tags.map(t=>t)+" "+g.dates.map(t=>t)),w(e))}else"attemptAutoPlay"===t.dispatch?A?.current&&(console.log("Attempt Play",A.current,l),A.current.play().catch(t=>{console.log(t,t.message),/failed because the user didn\'t interact with the document first/.test(t.toString())&&(A.current.muted(!0),console.log("Attemt play muted",A.current),A.current.play().catch(t=>{console.log(t)}))})):"ensurePosterUpdated"===t.dispatch&&(console.log("ensurePosterUpdated"),console.log(A?.current),A?.current||(console.log("Reloading Player"),x(!0)))})),t=>{var e=[{innerHTML:"chat",className:"material-icons VideoPlayer_ChatBtn",btnEvent:U}],t=Object.assign(options,{force:t});A.current=initializePlayer(r,r.watchData,l,"player-"+i,t,A,e,null,null,L,T,k)}),T=(React.useEffect(()=>{r?._LocalEventEmitter&&(r._LocalEventEmitter.unsubscribe("video_set_chat_state"),r._LocalEventEmitter.subscribe("video_set_chat_state",t=>{console.log("Open",_),E(!_)}))},[r._LocalEventEmitter,_]),React.useEffect(()=>{(async()=>{var t;e||r.watchData&&r.watchData.id&&(!f.stream||f.stream&&f.stream!==r.watchData.id)&&(n(!0),t=await doFetchAuthForStream(r.apiUrl,r.domainKey,r.watchData.id,checkSignedIn),console.log("do fetch auth",t),t)&&v({stream:r.watchData.id,allowed:t.allowed||!1,meta:t.meta,products:t?.products??[]})})()},[r.watchData,f,e]),async(t,e)=>{a={},s?.time&&(a.time=s.time);a?.time&&t?.currentTime&&t.currentTime(a.time);var a=e??r?.watchData,c="Live"==a?.__typename||checkiOS()?"hls":"mpd";a&&a[c]&&r?.cdn?.static&&(a=r.cdn.static+"/video/"+a[c],console.log(a,window.videojs,e),console.log("Player Auto Play",t),t.src({src:a,type:"hls"==c?"application/x-mpegURL":"application/dash+xml"}),console.log(t.play),await ensureAutoPlay(t.play,t),setTimeout(()=>{r._LocalEventEmitter.dispatch(i,{dispatch:"attemptAutoPlay"})},1))}),U=()=>{r._LocalEventEmitter.dispatch("video_set_chat_state",{})},z=(React.useEffect(()=>{if(console.log(a,P,i),!a&&window.videojs){c((new Date).getTime());const e=uuidv4();o(e),setTimeout(()=>{r._LocalEventEmitter.dispatch(e,{dispatch:"updateAuth"})},2500)}else{var t;a&&!P&&i&&r?.cdn?.static&&(t=[{innerHTML:"chat",className:"material-icons VideoPlayer_ChatBtn",btnEvent:U}],A.current=initializePlayer(r,r.watchData,l,"player-"+i,options,A,t,null,null,L,T,k))}},[a,A.current,l,r.cdn,r.watchData,P,i]),()=>{t&&t.type&&["prompt","auth"].indexOf(t.type)&&w({})}),C=r.watchData;React.useEffect(()=>{let t;var e;"Live"==C?.__typename&&C?.id&&A.current&&A.current.paused()?(E(!0),C?.meta?.channel?.playbackUrl&&l.src!==C.meta.channel.playbackUrl&&(t=C.meta.channel.playbackUrl)):"Video"==C?.__typename&&(E(!1),e=checkiOS()?"hls":"mpd",C)&&C[e]&&r?.cdn?.static&&(e=r.cdn.static+"/video/"+C[e],l.src!==e)&&(t=e),t&&l.src!==t&&A?.current?.play&&((e={...l}).src=t,u(e),handleInteractMedia(r,r.watchData,l.trying))},[r.watchData,A.current,l?.src,C]),React.useEffect(()=>{var t;l?.src&&d&&h!==l.src&&(t="hls"==("Live"==C?.__typename||checkiOS()?"hls":"mpd")?"application/x-mpegURL":"application/dash+xml",m(l.src),A?.current)&&A.current.src({src:l.src,type:t})},[A?.current,l?.src,d,h,C]),React.useEffect(()=>{var t,e,a;r.watchData&&(t=checkAuthorization(r.watchData,f,r,z),r.watchData.meta&&r.watchData.meta.streamSettings&&y(r.watchData.meta.streamSettings),console.log(d,t),d!==t)&&(e=r.watchData?.meta?.channel&&r.watchData.meta?.channel?.playbackUrl&&l?.src===r.watchData.meta.channel.playbackUrl,a=r?.watchData?.hls||r?.watchData?.mpd,e||a)&&(p(t),console.log("Auth",t))},[l,d,r.watchData,A.current,f,r?._loggedIn?.identifier]);React.useEffect(()=>{r?.watchData&&r?.watchData?.thumbtrack&&r?.watchData?.thumbtrack[0]&&r?.cdn?.static&&(D(r.cdn.static+"/thumbtrack/"+r.watchData.thumbtrack[0]),setTimeout(()=>{console.log(r._LocalEventEmitter,i),r?._LocalEventEmitter&&r._LocalEventEmitter.dispatch(i,{dispatch:"ensurePosterUpdated"})},250))},[r?.watchData,r?.cdn?.static,i]);var M={id:r?.watchData?.id,authorData:r?.watchData?.authorData??{},donateTo:r?.watchData?.author??"",title:r?.watchData?.title??"",description:r?.watchData?.description??"",tags:r?.watchData?.tags??[],relevantTicket:f},j=r.menuConfig&&r.menuConfig.height?r.menuConfig.height+2+"px":"35px";return React.createElement("div",{className:r.className+" WatchPage_Container"},React.createElement(Watch,_extends({},r,{chatState:_,handleSetMobileStyleConfigs:t=>{S!==t&&b(t)},menuHeight:j,currentPoster:R,streamLeadPrompt:t,authContainer:O,WatchPageStyles:WatchPageStyles,watchMeta:M,playerInitialized:P,playerName:i?"player-"+i:null,setMobileStyleConfigs:b})))};export default Module;