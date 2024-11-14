function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a,r=arguments[t];for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}import React from"react";import{useRouter}from"next/router";import{v4 as uuidv4}from"uuid";import Tooltip from"@mui/material/Tooltip";import Close from"@mui/icons-material/Close";import{beginStream,endStream,updateStreamConfigRequest,requestStreamingPermissions}from"/modules/utility/streaming";import{CurrentlyStreaming,PermissionsModule,StreamUpdateSettings,TerminateStream,NowStreaming,StreamSettings,StreamTitleInput,UpcomingStreams}from"/modules/streaming/manager/parts";import menuStyle from"/modules/menu/Menu.module.scss";import{selectThisText}from"/modules/utility/utility/event";import Preview from"/modules/streaming/watch/preview/Preview";const generateBackground=(e={})=>{var t=e?.palette??["#39e662","#71d1ff","#f371ff","#ee5252","#9a74ff","#4defc9"],a=Math.floor(Math.random()*t.length);let r=0;for(;a==(r=Math.floor(Math.random()*t.length)););return`linear-gradient(${Math.floor(360*Math.random())}deg, ${t[a]} 0%, ${t[r]} 100%)`},Module=c=>{useRouter();const[t,W]=React.useState(!1),[e,U]=React.useState(null),[a,V]=React.useState(!1),[r,z]=React.useState(!1),[n,i]=React.useState(!1),[,s]=React.useState(!1),[m,l]=React.useState(!1),[o,D]=React.useState(null),[j,d]=React.useState(null),[u,I]=React.useState([]),[$,q]=React.useState(Array.from(Array(100).keys()).map(e=>generateBackground(c))),[p,O]=React.useState(!1),[g,R]=React.useState(!1),[K,v]=React.useState(!1),[,E]=React.useState(!1),[f,h]=React.useState(!1),[J,y]=React.useState(null),[H,S]=React.useState(null),[_,b]=React.useState(null),[N,w]=React.useState([]),[k,T]=React.useState({password:null,private:!1,dates:[],tags:[],input:[]}),x=React.useRef();var Y=React.useRef();const G=React.useRef(),C=React.useRef(),P=React.useRef(),A=React.useRef(),B=React.useRef();var Q=React.useRef(),X=React.useRef(),Z=(c._LocalEventEmitter.unsubscribe(e),c._LocalEventEmitter.subscribe(e,e=>{e&&"loadDefault"===e.dispatch&&F()}),c._LocalEventEmitter.unsubscribe("incoming_authorization_ask"),c._LocalEventEmitter.subscribe("incoming_authorization_ask",t=>{if(t&&t?.username){const e=N;e.find(e=>e.username===t.username)||e.push(t),w([]),setTimeout(()=>{w(e)},1)}}),React.useEffect(()=>{var e;!t&&c?._loggedIn?.identifier&&(e=uuidv4(),U(e),F(),W(!0))},[t,c?._loggedIn?.identifier]),React.useState(()=>{!c?.adminAuth||r||n||F()},[c?.adminAuth,r,n]),React.useCallback(e=>{M()},[o,m]));async function M(e=!1,t=!1){try{var a,r,l;V(!0),n||(i(!0),s(!0),x.current=setTimeout(()=>{i(!1),s(!1)},1e4),a={stripeSecret:c._stripeSecret,dontForce:e,streamSettings:k,streamingFor:o?.id??null,record:m,admin:c?.adminAuth,askEmbed:c?.askEmbed},r=await beginStream(c.apiUrl,c.domainKey,a),x.current&&clearTimeout(x.current),s(!1),i(!1),r?"disauthenticated"==r?logout():"success"==r.status&&(console.log(r),O(r.canStream),r?.canStreamEmbed?b(r.canStreamEmbed):b(null),r.askStream&&v(!0),r.upcomingEvents&&(I(r.upcomingEvents),q(r.upcomingEvents.map(e=>generateBackground(c)))),r?.waitingAuth&&w(r.waitingAuth),r?.data?.streamForProduct?d(r.data.streamForProduct):d(null),t?c._LocalEventEmitter&&c._LocalEventEmitter.dispatch("refetchDefaults",{dispatch:"simple"}):r.data&&"streaming"==r.data.status&&r.data.stream&&(h(r.data.stream),c?._setCurrentlyStreaming&&c._setCurrentlyStreaming(r.data.stream),ee(r.data.stream),r.data.key&&y(r.data.key),r.data.streamTo&&S(""+r.data.streamTo),r.data.stream.meta&&r.data.stream.meta.streamSettings&&(l=r.data.stream.meta.streamSettings,T(l)),c._LocalEventEmitter)&&c._LocalEventEmitter.dispatch("refetchDefaults",{dispatch:"simple"})):e||c._setPageError("Failed to save begin stream"))}catch(e){console.log(e),x.current&&clearTimeout(x.current),i(!1),s(!1)}}const ee=e=>{try{e&&(P.current.value=e.title,A.current.value=e.description,B.current.value=e.tags)}catch(e){}};function F(){z(!0),M(!0)}var L=React.useCallback(e=>{if(e.currentTarget.getAttribute("modif"))if("yes"==e.currentTarget.getAttribute("modif"))try{(async()=>{var e;n||(i(!0),x.current=setTimeout(()=>{i(!1)},1e4),e={stream:f.id},e=await endStream(c.apiUrl,c.domainKey,e),x.current&&clearTimeout(x.current),R(!1),i(!1),e?"disauthenticated"==e?logout():"success"==e.status&&(h(!1),c?._setCurrentlyStreaming&&c._setCurrentlyStreaming(!1),y(null),S(null),T({password:null,private:!1,dates:[],tags:[],input:[]}),M(!0),c._LocalEventEmitter)&&c._LocalEventEmitter.dispatch("refetchDefaults",{dispatch:"simple"}):c._setPageError("Failed to end stream"))})()}catch(e){R(!1),x.current&&clearTimeout(x.current),i(!1)}else R(!1);else g||R(!0)}),te=React.useCallback(e=>{e?.currentTarget?.checked?l(!0):l(!1)}),ae=React.useCallback(e=>{var t={...k};t.private=e.currentTarget.checked,T(t)}),re=React.useCallback(e=>{var t={...k};t.password=e.currentTarget.value,T(t)}),le=React.useCallback(e=>{var t,a=e?.currentTarget?.getAttribute("modif")??"";a&&((t=k)[a]=e.currentTarget.value,T(t))});const ce=e=>{P?.current&&e.title&&(P.current.value=e?.title),A?.current&&e?.description&&(A.current.value=e.description),B?.current&&(e?.input?.join&&0<e.input.length?B.current.value=e.input.join(" "):e?.tags?.join&&e.dates?.join&&(B.current.value=e.tags.join(" ")+" "+e.dates.join(" ")),e.streamForProduct)&&!B?.current?.value.match(e.streamForProduct)&&(B.current.value+=" "+e.streamForProduct),C?.current&&e.password&&(C.current.value=e.password)};var ne=React.useCallback(e=>{const t=e?.currentTarget?.getAttribute("modif")??null;var a;t&&(e=u.find(e=>e.id===t))&&((a=JSON.parse(JSON.stringify(k))).private=!0,T(a),G.current.checked=!0,D(e),e={title:e?.name,description:e?.detailmeta?.description},T(Object.assign(a,e)))}),ie=(React.useMemo(()=>{ce(k)},[k,P?.current,A?.current,B?.current,n]),React.useCallback(e=>{var e=e?.currentTarget?.getAttribute("modif");e&&(e=document.getElementById("modal_"+e))&&(e?.classList?.contains("simple_modal_visible")?e.classList.remove("simple_modal_visible"):e.classList.add("simple_modal_visible"))})),se=React.useMemo(()=>React.createElement(React.Fragment,null,N?.map?N.filter(e=>e?.username??e?.id).map((e,t)=>React.createElement("div",{key:t,className:"simple_item_selector simple_item_selector_active flex gap-p5",style:{width:"100%"}},React.createElement("div",null,e?.username??e?.id),React.createElement("div",{className:"flex gap-p5",style:{width:"100%"}},React.createElement("button",{style:{width:"100%"}},"Allow"),React.createElement("button",{style:{width:"100%"}},"Deny")))):null),[N]);return console.log(f,p,a,c.adminAuth,c),React.createElement("div",{className:""+(c.className??"")},React.createElement("style",null,`
.container1 {
    max-width: 400px;
}
.WatchPage_VideoPlayer {
    border: 1px solid grey;
}
.Watch_PreviewContainer .Watch_FloatingCoverPlayer .WatchPage_VideoPlayer, .Watch_PreviewContainer .Watch_FloatingCoverPlayer .WatchPage_VideoPlayer video {
    height: 225px;
}
.timer {
    font-size: 1rem;
}

.simple_modal {
    top: 25vh;
    height: 50vh;
    width: 60vw;
    left: 20vw;
    overflow-y: auto;
}

.simple_collapse {
    > div {
        width: 50%;
    }
}

@media (max-width: 720px) {
    .simple_collapse {
        flex-direction: column;
        > div {
            width: 100%;
        }
    }
}

.minifiedwindow {
    .simple_modal {
        left: 1rem;
        width: calc(100% - 2rem);
        top: 10vh;
    }
    .simple_collapse {
        flex-direction: column;
        > div {
            width: 100%;
        }
    }
}
                `),React.createElement("div",{className:c?.minifiedwindow?"minifiedwindow":""},React.createElement("div",{className:"modal_container"},React.createElement("div",{id:"modal_collab",className:"simple_modal",style:{background:"black",padding:"1rem",borderRadius:"1rem",border:"1px solid grey",height:"min-content"}},React.createElement(Close,{className:"close pointer",style:{position:"sticky",right:"1rem",top:"1rem",float:"right",margin:"0rem 0"},onClick:ie,modif:"collab"}),React.createElement("div",{className:"flex gap-p5 al-cen",style:{marginBottom:"1rem"}},React.createElement("h3",{className:"header1",modif:"collab",style:{fontWeight:600,margin:0}},"Collaborate"),React.createElement("div",{className:"material-icons"},"work")),React.createElement("div",null,React.createElement("p",{style:{fontSize:"1rem",marginBottom:".5rem"}},"Share this link with collaborators to control and manage your content"),React.createElement("div",null,React.createElement("div",{className:"selectThisText"},React.createElement("div",{onClick:selectThisText,selectValue:(c?.devAddress?c.devAddress+"/":`https://${c.domainUrl}/`)+(c?.askEmbed?`${c?.adminPage?"admin/embed":"embed/admin"}?foruser=${c?._loggedIn?.identifier}&cus=`+c?.adminAuth?.data?.userid:"p?foruser="+c?._loggedIn?.identifier),style:{marginBottom:"1rem"},selectdir:"bottom"},React.createElement("input",{type:"text",value:"***********************************************",style:{fontSize:"1rem",width:"100%",background:"white",borderRadius:".25rem",padding:".25rem .5rem",borderWidth:0}})),React.createElement("div",{className:"flex gap-p10 simple_collapse",style:{marginBottom:"1rem"}},React.createElement("div",null,React.createElement("p",{className:"header1",style:{fontSize:"1rem",fontWeight:600,color:"grey",marginBottom:".5rem"}},"People with this link can:"),React.createElement("div",{className:"simple_item_selector simple_item_selector_active",style:{width:"100%"}},React.createElement("div",{style:{display:"block"}},React.createElement("div",{className:"flex gap-p5"},React.createElement("div",{className:"material-icons"},"check"),React.createElement("p",{className:"header1",style:{textAlign:"left"}},"Start and stop your livestreams")),React.createElement("div",{className:"flex gap-p5"},React.createElement("div",{className:"material-icons"},"check"),React.createElement("p",{className:"header1",style:{textAlign:"left"}},"Moderate your live chat via bans and quarantines")),React.createElement("div",{className:"flex gap-p5"},React.createElement("div",{className:"material-icons"},"check"),React.createElement("p",{className:"header1",style:{textAlign:"left"}},"Present information and products")),React.createElement("div",{className:"flex gap-p5"},React.createElement("div",{className:"material-icons"},"check"),React.createElement("p",{className:"header1",style:{textAlign:"left"}},"Update stream timelines")),React.createElement("div",{className:"flex gap-p5"},React.createElement("div",{className:"material-icons"},"check"),React.createElement("p",{className:"header1",style:{textAlign:"left"}},"Update realtime stream feeds")),React.createElement("div",{className:"flex gap-p5"},React.createElement("div",{className:"material-icons"},"check"),React.createElement("p",{className:"header1",style:{textAlign:"left"}},"Configure stream meta data and paywall options"))))),React.createElement("div",null,React.createElement("p",{style:{fontSize:".9rem",marginBottom:"1rem"}},"Only recipients of this link will be given the ability to request control of your sharable content."),React.createElement("div",{className:"importantPrompt Manager_NowStreamingButton",style:{marginBottom:".5rem"}},React.createElement("span",null,"This will apply to current and future livestreams")),React.createElement("div",null,React.createElement("p",{style:{fontSize:".9rem",fontWeight:600,color:"grey",marginBottom:".5rem"}},"Incoming Requests:"),se))),React.createElement("div",null,React.createElement("div",{className:"flex gap-p5 al-cen selectThisText",style:{justifyContent:"flex-end"}},React.createElement("p",{style:{fontSize:".9rem"}},"Keep your team synchronized"),React.createElement("div",{className:"simple_item_selector simple_item_selector_active pointer",onClick:selectThisText,selectValue:(c?.devAddress?c.devAddress+"/":`https://${c.domainUrl}/`)+(c?.askEmbed?`${c?.adminPage?"admin/embed":"embed/admin"}?foruser=${c?._loggedIn?.identifier}&cus=`+c?.adminAuth?.data?.userid:"p?foruser="+c?._loggedIn?.identifier),selectdir:"top"},React.createElement("div",null,React.createElement("p",{className:"header1"},"Copy"),React.createElement("div",{className:"material-icons"},"content_copy")))))))))),"Controller"===c?.currentView?React.createElement("div",null,React.createElement("div",{className:"container1"},React.createElement("div",{className:"flex gap-p5",style:{marginBottom:".5rem"}},f?React.createElement(React.Fragment,null,c?.askEmbed&&_?React.createElement(Tooltip,{title:"Copy embed link for your website",placement:"bottom"},React.createElement("div",{className:"simple_item_selector pointer",onClick:selectThisText,selectValue:""+f?.id},React.createElement("div",null,React.createElement("p",{className:"header1"},"Embed"),React.createElement("div",{className:"material-icons"},"folder")))):null,React.createElement(Tooltip,{title:"Share player page",placement:"bottom"},React.createElement("div",{className:"simple_item_selector pointer",onClick:selectThisText,selectValue:""+(f?.id?c?.devAddress?c.devAddress+"/w?v="+f.id:`https://${c.domainUrl}/w?v=`+f.id:null)},React.createElement("div",null,React.createElement("p",{className:"header1"},"Share"),React.createElement("div",{className:"material-icons"},"tv"))))):null,React.createElement(Tooltip,{title:"Collaborate with others",placement:"bottom"},React.createElement("div",{className:"simple_item_selector pointer"},React.createElement("div",null,React.createElement("p",{className:"header1",onClick:ie,modif:"collab"},"Collaborate"),React.createElement("div",{className:"material-icons"},"work"))))),React.createElement("div",{style:{marginBottom:".5rem"}},React.createElement(NowStreaming,_extends({},c,{currentlyStreaming:f})),React.createElement(Preview,_extends({},c,{useWatchDataPreview:f,noAds:!0,usePoster:"/img/default/videoposter-blank.png"}))),React.createElement("div",{className:"flex al-cen gap-p5",style:{marginBottom:".5rem"}},f?React.createElement(Tooltip,{title:"Stream is currently playing",placement:"bottom"},React.createElement("div",{className:"simple_item_selector simple_item_selector_active pointer"},React.createElement("div",null,React.createElement("p",{className:"header1"},"Playing"),React.createElement("div",{className:"material-icons"},"play_arrow")))):React.createElement(Tooltip,{title:p?"Start Stream":"Permissions required to stream",placement:"bottom"},React.createElement("div",{className:"simple_item_selector pointer greenHover",onClick:Z},React.createElement("div",null,React.createElement("p",{className:"header1"},p?"Start Stream":"Cannot Stream"),React.createElement("div",{className:"material-icons"},"play_arrow")))),React.createElement("div",{className:"timer",ref:Y},"0:00:00.0")),React.createElement("div",{style:{marginBottom:".5rem"}},React.createElement(CurrentlyStreaming,_extends({},c,{currentlyStreaming:f,ongoingStreamFor:j,streamTo:H,streamKey:J}))),React.createElement("div",null,p?null:React.createElement("div",{style:{marginBottom:".5rem"}},React.createElement(PermissionsModule,_extends({},c,{handleAskForStreamingPermissions:()=>{try{(async()=>{var e;n||(i(!0),x.current=setTimeout(()=>{i(!1)},1e4),e=await requestStreamingPermissions(c.apiUrl,c.domainKey),x.current&&clearTimeout(x.current),console.log(e),e?"disauthenticated"==e?logout():"success"==e.status&&(i(!1),e?.data?.created&&v(!0),c._LocalEventEmitter)&&c._LocalEventEmitter.dispatch("refetchDefaults",{dispatch:"simple"}):i(!1))})()}catch(e){x.current&&clearTimeout(x.current),i(!1)}},canStream:p,didCheckStream:a,didAskStream:K,fetchBusy:n})))),React.createElement("div",{style:{marginBottom:".5rem"}},React.createElement("div",{style:{marginBottom:".25rem"}},React.createElement("div",{style:{marginBottom:".25rem"}},React.createElement("label",{style:{fontWeight:600}},"Stream")),React.createElement("div",{className:"Manager_SettingsContainer flex gap-p5"},React.createElement(StreamTitleInput,_extends({},c,{fetchBusy:n,streamSettings:k,updateStreamData:le,titleRef:P})))),React.createElement("div",{className:"Manager_MoreSettingsContainer ",ref:X},React.createElement("div",{className:"Manager_MoreSettingsInternalContainer",note:"This controls height of open settings"},React.createElement(StreamSettings,_extends({},c,c,{fetchBusy:n,descriptionRef:A,myTagsRef:B,updateStreamData:le,updateTags:e=>{if(e){var t={...k},e=e.currentTarget.value.split(" ");const a=[],r=[];e.map(e=>{isNaN(new Date(e))?r.push(e):a.push(new Date(e))}),t.dates=a,t.tags=r,t.input=e,T(t)}},setPrivate:ae,privateRef:G,streamSettings:k,setPassword:re,passwordRef:C,currentlyStreaming:f,recordStream:m,recordStreamRef:Q,handleSetRecordingStream:te})))),React.createElement("div",null,React.createElement(UpcomingStreams,_extends({},c,{backgrounds:$,fetchBusy:n,currentlyStreaming:f,upcomingStreams:u,setNextStream:ne})))),React.createElement("div",{style:{marginBottom:".5rem"}},f?g?React.createElement(TerminateStream,_extends({},c,{handleAskEndStream:L})):React.createElement("div",{className:"flex gap-p5"},React.createElement("div",null,React.createElement(StreamUpdateSettings,_extends({},c,{currentlyStreaming:f,updateStreamConfigFn:async()=>{try{if(!n){i(!0),E(!0),x.current=setTimeout(()=>{i(!1),E(!1)},1e4);var e={title:P.current&&P.current.value?P.current.value:null,description:A.current&&A.current.value?A.current.value:null,tags:B.current&&B.current.value?B.current.value:null},t={stream:f.id,streamData:e,streamSettings:k},a=await updateStreamConfigRequest(c.apiUrl,c.domainKey,t);if(x.current&&clearTimeout(x.current),i(!1),E(!1),a){if("disauthenticated"==a)logout();else if("success"==a.status&&a.data&&"streaming"==a.data.status&&(h(a.data.stream),c?._setCurrentlyStreaming&&c._setCurrentlyStreaming(a.data.stream),a.data.key&&y(a.data.key),a.data.streamTo&&S(a.data.streamTo),a.data.stream)&&a.data.stream.meta&&a.data.stream.meta.streamSettings){const r=a.data.stream.meta.streamSettings;T(r),setTimeout(()=>{ce(r)},150)}}else c._setPageError("Failed to save begin stream")}}catch(e){console.log(e),x.current&&clearTimeout(x.current),i(!1),E(!1)}}}))),React.createElement(Tooltip,{title:"End stream",placement:"bottom"},React.createElement("div",{className:"simple_item_selector pointer red_button",onClick:L},React.createElement("div",null,React.createElement("p",{className:"header1"},"End Stream"),React.createElement("div",{className:"material-icons"},"stop"))))):null),_?f?React.createElement(Tooltip,{title:"You are currently streaming to platform origin "+_,placement:"bottom"},React.createElement("div",{className:"simple_item_selector pointer",onClick:L},React.createElement("div",null,React.createElement("p",{className:"header1",style:{fontSize:".75rem"}},"Streaming to platform ",_),React.createElement("div",{className:"material-icons"},"business")))):React.createElement(Tooltip,{title:"When you start a stream it will run under platform "+_,placement:"bottom"},React.createElement("div",{className:"simple_item_selector pointer",onClick:L},React.createElement("div",null,React.createElement("p",{className:"header1",style:{fontSize:".75rem"}},"Streaming platform ",_),React.createElement("div",{className:"material-icons"},"business")))):null)):"Viewer"===c?.currentView?React.createElement("div",null,React.createElement("h3",null,"Viewer")):"Feed"===c?.currentView?React.createElement("div",null,React.createElement("h3",null,"Feed")):"Moderator"===c?.currentView?React.createElement("div",null,React.createElement("h3",null,"Moderator")):null))};export default Module;