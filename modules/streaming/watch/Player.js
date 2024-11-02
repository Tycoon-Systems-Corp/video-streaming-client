import React from"react";import Script from"next/script";import WatchPageStyles from"./WatchPage.module.scss";import Overlay from"/layout/video/Overlay";import IMALoader from"/modules/advertise/video/ima/IMALoader";const Module=e=>{var[a,t]=React.useState(!1),l=e?.usePlayerHeight??e?.watchUseFullHeight?"calc(100vh - "+e?.menuHeight:"80vh",r=Object.prototype.hasOwnProperty.call(e,"playerVisible")&&e?.playerVisible||!Object.prototype.hasOwnProperty.call(e,"playerVisible");try{a||window?.google?.ima&&t(!0)}catch(e){}return console.log("Player Name",e.playerName,a,e.playerInitialized),React.createElement(React.Fragment,null,React.createElement(Script,{src:"https://d2zsu4v7czjhvo.cloudfront.net/all/videojs/8.9.0/video.min.js"})," ",React.createElement("div",{className:`${e?.className??""} ${WatchPageStyles.videoContainer} ${e?.mobileStyleConfigs?""+WatchPageStyles.mobileVideoPlayer:null} ${r?WatchPageStyles.playerInitialized+" Watch_PlayerInitialized":WatchPageStyles.playerNotInitialized+" Watch_PlayerNotInitialized"} WatchPage_VideoContainer`},React.createElement("div",{className:WatchPageStyles.floatingCoverPlayer+" Watch_FloatingCoverPlayer"},React.createElement(Overlay,e),React.createElement("video",{id:e.playerName??"my-player",class:WatchPageStyles.videoPlayer+" video-js WatchPage_VideoPlayer "+(e?.loadAds?"ad_video_player":""),style:{maxHeight:l},crossOrigin:"anonymous",controls:!0,preload:"auto",playsInline:!0,poster:`${e?.cdn?.static??""}/thumbtrack/`+(e?.watchData?.thumbtrack?.[0]??"")},React.createElement("p",{class:"vjs-no-js"},"To view this video please enable JavaScript, and consider upgrading to a web browser that",React.createElement("a",{href:"https://videojs.com/html5-video-support/",target:"_blank"},"supports HTML5 video"))),React.createElement("div",{id:"ad-container",className:"no_pointer_events"}))),a?React.createElement(IMALoader,{playerName:e.playerName??"my-player"}):null)};export default Module;