function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a,r=arguments[t];for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}import React from"react";import Script from"next/script";import WatchPageStyles from"../WatchPage.module.scss";import{checkPlayerIsPlaying,checkAuthorization}from"/modules/utility/streaming";import{v4 as uuidv4}from"uuid";import{ensureAutoPlay}from"/modules/video/player/utility";import Player from"/modules/streaming/watch/Player";import{initializePlayer}from"/modules/streaming/watch/runtime/initialize";const Module=t=>{const[e,a]=React.useState(!1),[r,l]=React.useState(null),[c,i]=React.useState(null),[n,s]=React.useState(!1),[o,u]=React.useState(!1),[m,p]=React.useState({});var[,,]=React.useState(null);const[d,y]=React.useState(!1);let h=React.useRef();const v=t?.useWatchDataPreview??null,f=(t._LocalEventEmitter.unsubscribe(r),t._LocalEventEmitter.subscribe(r,e=>{if(e&&"loadDefault"===e.dispatch&&h?.current){e=checkPlayerIsPlaying(h)&&!h.current.paused();if(v&&(!n||!e||d)){e=checkAuthorization(v,null,t,null);if(e&&v?.meta?.channel?.playbackUrl&&(s(e),e)){console.log(v.meta.channel.playbackUrl),h.current.src({src:v.meta.channel.playbackUrl,type:"application/x-mpegURL"});try{h.current.muted(!0),h.current.play(),ensureAutoPlay(h.current.play,h.current),y(!1)}catch(e){console.log("err",e)}}}}}),()=>{a((new Date).getTime());var e=uuidv4();l(e);const t="preview-player-"+e;i(t);e=Object.assign(m,{autoplay:!0,playerName:t,id:e});p(e),setTimeout(()=>{try{R(m,t)}catch(e){}},150)}),P=(React.useEffect(()=>{!e&&window?.videojs&&f()},[e,h.current,window?.videojs]),e=>{t._LocalEventEmitter.dispatch(r,{dispatch:"loadDefault"}),setInterval(()=>{t._LocalEventEmitter.dispatch(r,{dispatch:"loadDefault"})},7500)}),R=e=>{try{var t;window.videojs&&(t=window.videojs.players)&&Object.keys(t).length&&t[e.playerName]&&t[e.playerName].dispose()}catch(e){}};return React.useEffect(()=>{!o&&m?.playerName&&document.getElementById(c)&&(h.current=initializePlayer(t,v,null,m?.playerName,m,h,[],null,null,u,P,null))},[o,c,m]),React.createElement("div",null,React.createElement(Script,{src:"https://d2zsu4v7czjhvo.cloudfront.net/all/videojs/8.9.0/video.min.js",onLoad:f}),React.createElement("div",{className:"Watch_PreviewExternalContainer"},React.createElement("h4",{className:"Watch_PreviewLabel"},"Preview"),c?React.createElement(Player,_extends({},t,{className:"Watch_PreviewContainer",playerName:c,playerInitialized:o,usePlayerHeight:"auto",playerVisible:!0})):null))};export default Module;