function _extends(){return(_extends=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var a,c=arguments[e];for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a])}return t}).apply(this,arguments)}import React from"react";import dynamic from"next/dynamic";import WatchPageStyles from"./WatchPage.module.scss";import{useRouter}from"next/router";import{checkSignedIn}from"../../utility/onboarding";import{doFetchAuthForStream,checkAuthorization}from"../../utility/streaming";import{ensureAutoPlay,ensureSetSource}from"../../video/player/utility";import{v4 as uuidv4}from"uuid";import{handleInteractMedia,isObjectEmpty}from"../../util";import{initializePlayer,disposePlayer}from"/modules/streaming/watch/runtime/initialize";import{checkiOS}from"/modules/util";import{resolveContentDate}from"../../utility/utility/date";import{timelineItemIsExpired}from"./utility";import{buildChapters}from"/modules/streaming/watch/utility";import{resolveRegionBasedPrice,westernMoneyFormat}from"/modules/utility/ecommerce";const Watch=dynamic(()=>import("/layout/Watch"),{ssr:!1}),defaultPoster="img/internal/videoposter.png";let options={autoplay:!0,html5:{vhs:{lowLatency:!0,minPlaylistRefreshIntervalMs:1500}}};const setWindowAuthOnResource=(t,e)=>{try{var a=e||t;console.log("Is Auth",a),window.isAuthorized!==a&&(window.isAuthorized=a)}catch(t){console.log(t)}},defaultOverlayMatrix={q1:[],q2:[],q3:[],q4:[],n:[],s:[],w:[],e:[],np:[],sp:[],wp:[],ep:[],cp:[]},ERROR_ORDER=["src","auth","prompt"],Module=h=>{const r=useRouter()["query"],[m,u]=React.useState(!1),[y,,]=React.useState("main-player"),[e,U]=React.useState(!1),[g,j]=React.useState({action:"page_loaded",trying:"play_video",src:""}),[t,N]=React.useState(""),[a,F]=React.useState(!1);var[c,H]=React.useState(!1);const[s,W]=React.useState({}),[w,B]=React.useState({});var[,,]=React.useState(null);const[v,q]=React.useState({}),[R,f]=React.useState(defaultPoster),[i,o]=React.useState(!1),[V,n]=React.useState(!1),[b,E]=React.useState(!1),[l,_]=React.useState(!1),[D,k]=React.useState(!1);var[,,]=React.useState([]);const[J,S]=React.useState(!1),[P,L]=React.useState(null),[A,O]=React.useState(!1),[$,K]=React.useState({}),[T,Y]=React.useState(defaultOverlayMatrix),[G,Q]=React.useState({offset:0});let x=React.useRef();React.useRef(),React.useRef(),React.useRef();const I=a||c,M=(setWindowAuthOnResource(null,I),h.watchData),X=()=>{h._LocalEventEmitter.dispatch("video_set_chat_state",{})},[Z,tt]=React.useState([{innerHTML:"chat",className:"material-icons VideoPlayer_ChatBtn",id:"player-btn-chat",btnEvent:X}]),et=(React.useEffect(()=>{let t=[{innerHTML:"chat",className:"material-icons VideoPlayer_ChatBtn",id:"player-btn-chat",btnEvent:X}];t=h?.appendButtons?t.push(h.appendButtons):h.overrideButtons??t,tt(t)},[h?.appendButtons,h?.overrideButtons]),t=>{Y(t);var e="overlay-"+(y?"player-"+y:null);console.log("Channel",e),h._LocalEventEmitter.dispatch(e,{dispatch:"update",data:t})}),C=(h._LocalEventEmitter.unsubscribe("watch_overlay_events"),h._LocalEventEmitter.subscribe("watch_overlay_events",a=>{if("update"===a?.dispatch&&a?.data?.section){let e=T;if("set"===a.operation&&a?.where){let t;e[a.data.section]&&-1<(c=e[a.data.section].findIndex(t=>t[a.where]==a.value))&&(t=!0,e[a.data.section][c]=a.data),t||e[a.data.section].push(a.data)}else{var c;"del"===a.operation&&a?.where?e[a.data.section]&&-1<(c=e[a.data.section].findIndex(t=>t[a.where]==a.value))&&e[a.data.section].splice(c,1):"reset"===a.operation&&(e=defaultOverlayMatrix)}et(e)}}),t=>{B(t),console.log("Prompt",t);var e=h?.useMatrixSection??"np";h._LocalEventEmitter.dispatch("watch_overlay_events",{dispatch:"update",operation:isObjectEmpty(t)?"del":"set",data:Object.assign({section:e,domain:"streamLeadPrompt",sectionType:"text"},t),where:"domain",value:"streamLeadPrompt"})}),z=(y&&(h._LocalEventEmitter.unsubscribe(y),h._LocalEventEmitter.subscribe(y,t=>{if(t&&t.dispatch)if(x?.current?.muted&&x?.current?.muted()!==A&&O(x.current.muted()),"processError"===t.dispatch)console.log("Handle Process Error",t),"no_video"===t?.event?w.lead&&"No video"===w?.lead||x?.current&&x.current.src&&C(t.prompt):"progress_good"===t?.event&&w?.type&&-1<["src"].indexOf(w.type)&&C({});else if("updateAuth"===t.dispatch){if(nt(),!h?.watchData||isObjectEmpty(h.watchData))return null;!I&&x?.current?(p={type:"auth",lead:"Not Authorized",description:"You have not been authorized to watch the stream"},console.log("auth req",s,v),x.current.pause(),v?.products?.[0]&&(d={product:v.products[0],section:"cp",type:"display",sectionType:"product",domain:"authProduct",lead:`Purchase ticket to watch "${h?.watchData?.title??"Stream"}"`,description:""+h?.watchData?.description,ticketLead:""+(v.products[0]?.name??"Ticket"),ticketDescription:v.products[0]?.detailmeta?.description??null,media:v.products[0]?.images?.[0]?.name?h.cdn.static+"/"+v.products[0].images[0].name:"",price:resolveRegionBasedPrice(h,v.products[0]?.styles?.[0]??null)},h._LocalEventEmitter.dispatch("watch_overlay_events",{dispatch:"update",operation:"set",data:d,where:"streamAuthorizationProduct",value:"product"})),s&&(s.password&&(p.password="The stream requires a password"),s.tags)&&s.dates&&(0<s.tags.length||0<s.dates.length)&&(p.tags="The stream has tags that authorize viewership of the stream. Please purchase tickets from the users shop to watch",p.tagsList=s.tags.map(t=>t)+" "+s.dates.map(t=>t)),(!w?.type||w?.type&&ERROR_ORDER.indexOf(w.type)>ERROR_ORDER.indexOf(p.type))&&C(p)):I||C({})}else if("attemptAutoPlay"===t.dispatch){if(I&&x?.current&&""!==x?.current.src()){console.log("Attempt Play",x.current,g,"Authorized",I);try{window?.userInteracted||x.current.muted(!0)}catch(t){}window?.imaPlaying||x.current.play().catch(t=>{console.log(t,t.message)})}}else if("ensurePosterUpdated"===t.dispatch)h?.watchData&&h?.watchData?.thumbtrack&&h?.watchData?.thumbtrack[0]&&h?.cdn?.static&&(d=h.cdn.static+"/thumbtrack/"+h.watchData.thumbtrack[0],R!==d)&&f(d);else if("playerHealth"===t.dispatch)console.log("Player Health",h.cdn,x.current,x.current?.paused(),P),!window?.imaAdManagerDidLoad&&h?.noAds||(P?.message?.match("Playback cannot continue")&&x?.current?.paused()||x?.current?.errorDisplay?.el()?.innerHTML.match("Playback cannot continue")||x?.current?.errorDisplay?.el()?.innerHTML.match("The media could not be loaded")&&D?(L(null),x.current.src({}),ensureSetSource(x.current,g,M,h.cdn.static,!0,()=>{try{window?.userInteracted||x.current.muted(!0)}catch(t){}!window?.imaPlaying&&I&&(console.log("Attempting to play! Player Health Check"),x.current.play())})):x?.current&&h?.cdn?.static?ensureSetSource(x.current,g,M,h.cdn.static):x.current||J||((p=z("player-"+y))?(E(!0),x.current=p):(disposePlayer("player-"+y),S(!0),setTimeout(()=>{console.log("Fire Reload"),h._LocalEventEmitter.dispatch(y,{dispatch:"rebuildPlayer"})},50))));else if("rebuildPlayer"===t.dispatch)console.log("Reload Player"),S(!1),st();else if("timelineHealth"===t.dispatch){var e,a,c,i,o,n,l,d=x?.current?.tech_?.hasStarted_&&2<x?.current?.readyState,p=(console.log(x?.current,d),m&&!b&&y&&h?.cdn?.static&&window?.videojs&&(window?.imaAdManagerDidLoad||!h?.noAds)&&!d&&(_(!0),x.current=initializePlayer(h,h.watchData,g,"player-"+y,options,x,Z,at,ct,E,it,k,D,rt)),G);(!p?.lastUpdate||p.lastUpdate&&p.lastUpdate<(new Date).getTime()-15e3)&&(p.lastUpdate=(new Date).getTime(),p.offset=null==p.offset?p.offset=0:p.offset+1,Q(p));const u=z("player-"+y)?.currentTime();let r=T,s=!1;u&&(Object.entries(p).map(a=>{a?.[1]?.map&&a[1].map((t,e)=>{timelineItemIsExpired(t,u)&&(s=!0,r[a[0]].splice(e,1))})}),h?.watchData?.timeline?.map)&&buildChapters(h.watchData).map(e=>{var t,a=e,a=("clip"===a.type&&(a.sectionType="img",a.media=h?.cdn?.static+"/thumbtrack/"+a.media,a.expiry=a.startOffset+10),timelineItemIsExpired(a,u)),c=e.section;c&&(t=r[c].findIndex(t=>t.id===e.id),a&&-1<t?(s=!0,r[c].splice(t,1)):a||-1!==t||(s=!0,r[c].push(e)))}),s&&et(r),"Live"===M?.__typename&&(t=z("player-"+y),d=document.getElementById(`player-${y}_html5_api`),console.log(d),t)&&(p=structuredClone($),console.log("P",t),console.log("Tech",t.tech(),"Vhs",t.tech().vhs),e=t?.currentTime(),(!p.lastTime||e&&p?.lastTime&&p.lastTime!=e)&&(p.lastTime=e),a=t.tech().vhs,c=(t?.tech()?.vhs?.playlists?.media_)?.segments,Array.isArray(c)&&(o=(i=c.reduce((t,e)=>e?.end??t+(e?.duration??0),0))<e+8,n=i<e+4,l=c?.[2]?.end&&e<c[2].end-22,console.log("Current Time",e,"Near End",o,"Near End Critical",n,"Falling Behind",l,"Available Segment",i,"Playback Rate",d?.playbackRate,"Segments",c),d)&&(o?n?(.8<d.playbackRate&&(console.log("Slowing down critical playback rate",d.playbackRate),d.playbackRate=d.playbackRate-.05),(!p.lastFetch||p?.lastFetch&&p.lastFetch+3<(new Date).getTime())&&(console.log("Fetching more stream",a,t,t.seekable()),p.lastFetch=(new Date).getTime())):.9<d.playbackRate&&(console.log("Slowing down playback rate",d.playbackRate),d.playbackRate=d.playbackRate-.05):(d.playbackRate<1&&(console.log("Speeding up playback rate",d.playbackRate),d.playbackRate=d.playbackRate+.025),l?d.playbackRate<1.25&&(d.playbackRate=d.playbackRate+.025):1<d.playbackRate&&(d.playbackRate=d.playbackRate-.025)),1!==d.playbackRate)&&.98<d.playbackRate&&d.playbackRate<1.02&&(d.playbackRate=1),K(p))}})),t=>{try{if(window?.videojs?.players[t])return window.videojs.players[t]}catch(t){}return null}),at=(t,e,a)=>{"update"===e?"progress"!==a||t?.target?.player?.error_&&null!=t?.target?.player?.error_&&t?.target?.player?.error_?.message||h._LocalEventEmitter.dispatch(y,{dispatch:"processError",event:"progress_good",prompt:{}}):t?.target?.player?.error_&&(console.log("Incoming error state",t.target.player.error_,w),t.target.player.error_?.message.match(/No compatible source/))&&h._LocalEventEmitter.dispatch(y,{dispatch:"processError",event:"no_video",prompt:{type:"src",lead:"No video",description:"This stream is unavailable right now"}}),L({time:(new Date).getTime(),message:t?.message??""})},ct=t=>{console.log("Ended",t)},rt=t=>{console.log("Played",t)},st=t=>{t=Object.assign(options,{force:t,html5:{vhs:{lowLatency:!0,minPlaylistRefreshIntervalMs:1500}}});!window?.imaAdManagerDidLoad&&h?.noAds||(x.current=initializePlayer(h,h.watchData,g,"player-"+y,t,x,Z,at,ct,E,it,k,D,rt))},it=(React.useEffect(()=>{h?._LocalEventEmitter&&(h._LocalEventEmitter.unsubscribe("video_set_chat_state"),h._LocalEventEmitter.subscribe("video_set_chat_state",t=>{console.log("Open",i),o(!i)}))},[h._LocalEventEmitter,i]),React.useEffect(()=>{(async()=>{var t;e||h.watchData&&h.watchData.id&&(!v.stream||v.stream&&v.stream!==h.watchData.id)&&(U(!0),t=await doFetchAuthForStream(h.apiUrl,h.domainKey,h.watchData.id,checkSignedIn),console.log("do fetch auth",t),t)&&q({stream:h.watchData.id,allowed:t.allowed||!1,meta:t.meta,products:t?.products??[]})})()},[h.watchData,v,e]),async(t,e)=>{var a,c;I&&(c={},r?.time&&(c.time=r.time),c?.time&&t?.currentTime&&t.currentTime(c.time),a="live"==(e="Live"==(c=e??h?.watchData)?.__typename?"live":"static")||checkiOS()?"hls":"mpd",c)&&h?.cdn?.static&&(e="static"==e?h.cdn.static+"/video/"+c[a]:""+c?.meta?.channel?.playbackUrl)&&(t.src({src:e,type:"hls"==a?"application/x-mpegURL":"application/dash+xml"}),await ensureAutoPlay(t.play,t),setTimeout(()=>{h._LocalEventEmitter.dispatch(y,{dispatch:"attemptAutoPlay"})},1))});let d=y;React.useEffect(()=>{console.log("did mount",m,b,y,window.videojs);try{disposePlayer("player-"+y)}catch(t){}const t=d;let e=[setInterval(()=>{h._LocalEventEmitter.dispatch(t,{dispatch:"updateAuth"})},2e3),setInterval(()=>{h._LocalEventEmitter.dispatch(t,{dispatch:"playerHealth"})},15e3),setInterval(()=>{h._LocalEventEmitter.dispatch(t,{dispatch:"timelineHealth"})},1500)];return()=>{e.forEach(clearInterval)}},[]),React.useEffect(()=>{m||u((new Date).getTime())},[m]);const ot=()=>{w?.type&&-1<["prompt","auth"].indexOf(w.type)&&(console.log("Reset prompt"),C({}))},nt=(React.useEffect(()=>{let t;var e;"Live"==M?.__typename&&M?.id?(o(!0),M?.meta?.channel?.playbackUrl&&g.src!==M.meta.channel.playbackUrl&&(t=M.meta.channel.playbackUrl)):"Video"==M?.__typename&&(o(!1),e=checkiOS()?"hls":"mpd",M)&&M[e]&&h?.cdn?.static&&(e=h.cdn.static+"/video/"+M[e],g.src!==e)&&(t=e),t&&g.src!==t&&((e={...g}).src=t,j(e),handleInteractMedia(h,h.watchData,e.trying))},[h.watchData,x.current,g?.src,M]),React.useEffect(()=>{g?.src&&t!==g.src&&N(g.src)},[x?.current,g?.src,I,a,t,M,w]),x?.current&&x?.current.src()!==g?.src&&M&&(p="live"==("Live"==M?.__typename?"live":"static")||checkiOS()?"hls":"mpd",x.current.src({src:t,type:"hls"==p?"application/x-mpegURL":"application/dash+xml"})),()=>{var t,e,a;h.watchData&&(t=checkAuthorization(h.watchData,v,h,ot,I),console.log("Auth!",t),(e=h?.watchData?.meta?.streamSettings??h?.watchData?.meta)&&JSON.stringify(e)!==JSON.stringify(s)&&W(e),console.log("Auth",t,"Is Auth",I),I!==t)&&(e=h.watchData?.meta?.channel&&h.watchData.meta?.channel?.playbackUrl&&g?.src===h.watchData.meta.channel.playbackUrl,a=h?.watchData?.hls||h?.watchData?.mpd,e||a)&&(F(t),t&&ot(),setWindowAuthOnResource(t,I),console.log("Auth",t))});React.useEffect(()=>{nt()},[g,I,a,h?.watchData,x?.current,v,h?._loggedIn?.identifier]);React.useEffect(()=>{var t;h?.watchData&&h?.watchData?.thumbtrack&&h?.watchData?.thumbtrack[0]&&h?.cdn?.static&&(t=h.cdn.static+"/thumbtrack/"+h.watchData.thumbtrack[0],R!==t)&&(f(t),setTimeout(()=>{h?._LocalEventEmitter&&h._LocalEventEmitter.dispatch(y,{dispatch:"ensurePosterUpdated"})},250))},[h?.watchData,h?.cdn?.static,y,R]);var p={id:h?.watchData?.id,authorData:h?.watchData?.authorData??{},donateTo:h?.watchData?.author??"",date:h?.watchData?.publish?resolveContentDate(h.watchData.publish):"",title:h?.watchData?.title??"",description:h?.watchData?.description??"",tags:h?.watchData?.tags??[],relevantTicket:v},lt=(x?.current&&(b||E(!0),l||_(!0)),h.menuConfig&&h.menuConfig.height?h.menuConfig.height+2+"px":"35px");return console.log("WatchPage",x?.current,I,g,"Relevant Data",h.watchData,v,T,w),React.createElement("div",{className:h.className+" WatchPage_Container"},React.createElement(Watch,_extends({},h,{chatState:i,handleSetMobileStyleConfigs:t=>{V!==t&&n(t)},menuHeight:lt,currentPoster:R,streamLeadPrompt:w,WatchPageStyles:WatchPageStyles,watchMeta:p,playerInitialized:b,playerVisible:l,playerName:d?"player-"+d:null,setMobileStyleConfigs:n,enforceAuth:c,setEnforceAuth:H,muted:A,handleSetMuted:t=>{x?.current?.muted&&(t=!!t,x.current.muted(t),O(t))},intent:g,overlayMatrix:T,overlayMatrixState:G,isAuthorized:I})))};export default Module;