function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a,l=arguments[t];for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e}).apply(this,arguments)}import React from"react";import{v4 as uuidv4}from"uuid";import{checkiOS,debounce,isObjectEmpty}from"../util";import{fetchPost}from"../utility/fetch";import WatchPageStyles from"/modules/streaming/watch/WatchPage.module.scss";import apiReq from"/modules/utility/api/apiReq";import{HMSTDurationToSeconds,setDefaultDateTime}from"/modules/utility/utility/date";import{Player}from"/modules/streaming/watch";import{initializePlayer,disposePlayer}from"/modules/streaming/watch/runtime/initialize";import{setAndPlay}from"/modules/video/player/utility";import{CreditCard}from"../payment";const Module=n=>{const[r,c]=React.useState(!1),[l,t]=React.useState(!1),[s,a]=React.useState(null),[i,o]=React.useState({}),[e,,]=React.useState(!1),[m,u]=React.useState({}),[d,p]=React.useState({}),[g,y]=React.useState({time:"now"}),[f,R]=React.useState({lastSearch:-1,media:[]}),[v,b]=React.useState(null),[h,E]=React.useState({}),[S,_]=React.useState({}),[,N]=React.useState(!1),C=React.useRef(),T=React.useRef(),w=React.useRef(),O=React.useRef(),P=(React.useEffect(()=>{var e;l||(e=uuidv4(),a(e),t(!0))},[l]),React.useEffect(()=>{l&&n?._loggedIn&&!e&&n?.apiUrl&&P()},[n?._loggedIn,n?.apiUrl,e,l]),async()=>{var e={hash:n?._loggedIn.hash,identifier:n?._loggedIn.identifier},e=await fetchPost(n.apiUrl+"/m/floodapisupport",null,null,e);return!!e&&(e.hasOwnProperty("status")?"disauthenticated"==e.status?(logout(),"disauthenticated"):"failed"!=e.status&&void("success"==e.status&&e.data&&o(e.data)):void 0)}),j=React.useCallback(e=>{var t=e?.currentTarget?.getAttribute("modif"),e=e?.currentTarget?.getAttribute("modif2"),a={...m};a[t]||(a[t]={}),a[t][e]||(a[t][e]={}),a[t][e].activated=!a[t][e].activated,u(a)}),k=(React.useEffect(()=>{let a={};d;let l=!1,t=(m&&Object.entries(m).map(t=>{t[1]&&Object.entries(t[1])&&Object.entries(t[1]).map(e=>{e[1]?.activated&&i[t[0]]&&i[t[0]]?.allowedJobs&&Object.entries(i[t[0]].allowedJobs).map(t=>{t[1]&&t[1]?.input&&Object.entries(t[1].input).map(e=>{(a=a||{})[e[0]]||(l=!0,a[e[0]]={label:e[0],type:t[1].body[e[1]],value:d&&d[e[0]]?d[e[0]].value:"",useType:d&&d[e[0]]?d[e[0]].useType:""})})})})}),!1);Object.entries(m).map(e=>{Object.entries(e[0]).map(e=>{e[1]?.activated&&(t=!0)})}),(l||!t&&d&&!l)&&p(a)},[m,i]),React.useCallback(e=>{var t,a=e?.currentTarget?.getAttribute("modif"),e=e?.currentTarget?.getAttribute("modif2");a&&e&&((t={...d})[a].useType=e,p(t))}));var x=React.useCallback(e=>{var t,e=e?.currentTarget?.getAttribute("modif");e&&((t={...g}).time=e,y(t))});var A=React.useCallback(e=>{console.log("Send Job",d,S,h,v,g,C?.current),d&&g&&(async()=>{var e;try{r||(c("submit"),setTimeout(()=>{c(!1)},35e3),(e=await apiReq("/p/submitfloodjob",{user:n?._loggedIn,currentJob:m,contentInput:d,mediaInput:S,apiKeys:h,useMedia:v,runJob:g,scheduleJobDate:C?.current?.value,options:{extra:{type:n?._solution?.payment}}}))?.data?(c(!1),console.log("Res",e.data)):c(!1))}catch(e){c(!1)}})()});const J=React.useCallback(e=>{var t=e?.currentTarget?.getAttribute("modif"),e=e?.currentTarget?.value,a={...d};t&&a&&"media"!==t&&(a[t].value=e,p(a))}),M=React.useCallback(debounce(async e=>{V(e?.target.value)},500),[]),V=async e=>{let t;try{if(e&&!r){var a=`%${e}%`,l=(c("videos"),t=setTimeout(()=>{c(!1)},35e3),e=>F?e:Object.assign(e,{where:{id:n?._loggedIn?.identifier}})),i=await apiReq("/fetch/fetchhandler",{handlerArgs:[{videoReq:l([{title:a,limit:40,offset:0,sortField:"creation",sort:"desc"}])},{videoReq:l([{description:a,limit:40,offset:0,sortField:"creation",sort:"desc"}])}]});if(i?.data?.fetchedData&&i.data.fetchedData[0]&&i.data.fetchedData[0]){c(!1);let a=[];i.data.fetchedData.map(e=>{Object.entries(e).map(e=>{e&&e[1]&&e[1].map(e=>{e?.map&&e.map(t=>{-1===a.findIndex(e=>e.id===t.id)&&a.push(t)})})})}),R({lastSearch:(new Date).getTime(),media:a})}else c(!1)}}catch(e){clearTimeout(t)}},q=React.useCallback(e=>{var t=e?.currentTarget?.getAttribute("modif");const a=e?.currentTarget?.getAttribute("item");if(t&&a){const l=f?.media.find(e=>e.id===a);if(l){const i={...d};i&&(i[t].value=a,disposePlayer("player-"+s),b(null),setTimeout(()=>{b(l),setTimeout(()=>{T.current=initializePlayer(n,l,null,"player-"+s,{},T,[],null,null,N,z)},250),p(i)},250))}}}),z=(e,t)=>{var a=t??videoDocument;const l=checkiOS()?"hls":"mpd";if(t&&t[l]){const i=n.cdn.static+"/video/"+a[l];console.log(i,window.videojs,t),console.log("Player",T.current,e),T.current?setAndPlay(i,l,T.current):setTimeout(()=>{setAndPlay(i,l,T.current)},5e3)}};const I=React.useMemo(()=>{let t={};try{if(l&&window?.localStorage){var e=window?.localStorage.getItem("flood_api_keys");const a=e&&JSON.parse(e)?JSON.parse(e):{};i&&Object.entries(i)&&Object.entries(i).map(e=>{e[1]?.key&&Object.entries(e[1].key).map(e=>{t[e[0]]=a[e[0]]??""})}),!isObjectEmpty(a)&&!isObjectEmpty(h)||isObjectEmpty(t)||E(t)}}catch(e){}return t},[l,i,h]),B=React.useCallback(e=>{var t,a=e?.currentTarget?.getAttribute("modif"),e=e?.currentTarget?.value;null!==e&&((t=(t=localStorage.getItem("flood_api_keys"))&&JSON.parse(t)?JSON.parse(t):{})[a]=e,localStorage.setItem("flood_api_keys",JSON.stringify(t)),E(t))});var W=React.useCallback(e=>{var t,a,l,i,n=e?.currentTarget?.getAttribute("modif");n&&-1<["snip_start","snip_end"].indexOf(n)&&(i=w?.current?.value,l=O?.current?.value,(t={...S}).snipStart||(t.snipStart={}),t.snipEnd||(t.snipEnd={}),"snip_start"===n?Number(i)>=Number(l)&&(a=-1<Number(l)-10?Number(l)-10:0,e.currentTarget.value=a):"snip_end"===n&&Number(l)<=Number(i)&&(a=Number(i)+10<101?Number(i)+10:100,e.currentTarget.value=a),l="snip_start"===n?e?.currentTarget?.value:w.current.value,i="snip_end"===n?e?.currentTarget?.value:O.current.value,t.snipStart.value=l,T?.current&&T.current.currentTime(l),t.snipStart.time=Math.floor(D*(l/100)),t.snipEnd.value=i,t.snipEnd.time=Math.floor(D*(i/100)),_(t))}),$=React.useMemo(()=>{var e=new Date;return e.setDate(e.getDate()+1),setDefaultDateTime(e)});const D=(()=>{if(d?.media?.value&&v){var e=HMSTDurationToSeconds(v?.duration);if(e)return e}return null})(),F=n?._loggedIn?.admin?.adminc?.admin;return console.log("Supported",i,m,d,f,D,I,h,S),React.createElement(React.Fragment,null,React.createElement("div",null,React.createElement("h2",{className:"flex",style:{marginBottom:".25rem"}},"Flood",React.createElement("span",{className:"api_label"},"API")),React.createElement("p",{style:{marginTop:".25rem"}},"Schedule your content for distribution across the web"),React.createElement("div",null,!isObjectEmpty(d)&&n?._validCc?React.createElement("div",null,React.createElement("div",null,Object.entries(d).map((a,e)=>React.createElement("div",{className:"label_input"},React.createElement("div",{className:"label_data"},React.createElement("h4",{style:{margin:".25rem 0"}},a[1].label),"string"===a[1].type?React.createElement("input",{type:"text",selectelement:s+"-"+a[0],modif:a[0],onChange:J}):"image/video"===a[1].type?React.createElement("div",{style:{overflowX:"auto",overflowY:"clip",width:"100%"}},React.createElement("div",{style:{marginBottom:".5rem"}},React.createElement("button",{className:"video"===a[1].useType?"api_option api_option_selected":"api_option",onClick:k,modif:a[0],modif2:"video"},"Video")),React.createElement("div",{className:"flex gap-p5"},React.createElement("h4",{style:{margin:".25rem 0"}},"Search"),React.createElement("input",{type:"text",placeholder:"Search media",modif:a[0],onChange:M})),React.createElement("div",{style:{overflow:"auto"}},f?.media?React.createElement("div",{className:`${WatchPageStyles.thumbnailsContainer} ${"videos"===r?WatchPageStyles.thumbnailsContainerBusy:""} Thumbnails_Container tinyBar`},f.media.map((e,t)=>React.createElement("div",{key:t,className:WatchPageStyles.thumbnailContainer+" Thumbnail_Container"},React.createElement("div",{className:`${WatchPageStyles.thumbnail} ${d[a[0]]&&e?.id&&d[a[0]].value===e.id?WatchPageStyles.thumbnailSelecting:""} Thumbnail_Thumbnail`,style:{background:"url("+(n?.cdn?.static&&e?.thumbtrack[0]?n.cdn.static+"/thumbtrack/"+e.thumbtrack[0]:"img/default/greythumb.jpg")},onClick:q,item:e?.id,modif:a[0]}),React.createElement("h4",{className:""+WatchPageStyles.thumbnailTitle},e?.title??"")))):null)):null)))),v?React.createElement("div",null,React.createElement("div",{className:"flex gap-p5",style:{alignItems:"center"}},React.createElement("h4",{style:{margin:0}},"Using media"),React.createElement("h4",{className:"api_option api_option_selected",style:{margin:0}},v?.title)),React.createElement("div",{className:""+WatchPageStyles.floodMediaContainer},React.createElement("div",null,React.createElement("div",{className:"flex gap-p10",style:{marginTop:".5rem"}},React.createElement("h4",{style:{margin:0}},"Snip Section"),React.createElement("div",null,React.createElement("div",{className:""+WatchPageStyles.snipMediaContainer,style:{position:"absolute"}},React.createElement("div",{className:"flex gap-p10",style:{position:"relative",justifyContent:"space-between"}},React.createElement("div",null,"0:00"),React.createElement("div",null,D?""+D:"",React.createElement("div",{style:{position:"absolute",bottom:"25px",right:"0",color:"grey",fontSize:".85rem"}},D?"duration":"")))),React.createElement("section",{class:"range-slider"},React.createElement("span",{class:"rangeValues"}),React.createElement("input",{min:"0",max:"100",defaultValue:"25",step:"0.5",type:"range",onChange:W,onInput:W,modif:"snip_start",ref:w}),React.createElement("input",{min:"0",max:"100",defaultValue:"75",step:"0.5",type:"range",onChange:W,onInput:W,modif:"snip_end",ref:O})),React.createElement("div",{className:""+WatchPageStyles.snipMediaContainer},React.createElement("div",{className:"flex gap-p10",style:{position:"relative",justifyContent:"space-between"}},React.createElement("div",null,S?.snipStart?.time??"0"),React.createElement("div",null,S?.snipEnd?.time??"0"))),S?.snipStart&&null!==S?.snipStart.time&&S?.snipEnd?.time&&60<S.snipEnd.time-S.snipStart.time?React.createElement("div",{style:{fontSize:".9rem",marginTop:"2rem",color:"grey",maxWidth:"200px"}},React.createElement("p",null,"Posting to most GIF focused platforms requires a playtime of 60 seconds or less. Currently your selected snippet is larger than 60 seconds.")):null))),React.createElement("div",{className:`${WatchPageStyles.videoQuadrant} shortVideo ${WatchPageStyles.videoQuadrantSimple} WatchPage_VideoQuadrant`,style:{width:"100%"}},React.createElement(Player,_extends({},n,{className:"shortVideo roundedPlayer borderedPlayer",playerName:s?"player-"+s:null,playerInitialized:!0,usePlayerHeight:"50vh",playerVisible:!0}))))):null):null),React.createElement("div",{className:WatchPageStyles.leadContentContainer},n?._validCc?React.createElement("div",{className:"flex gap-p5",style:{justifyContent:"space-between",marginTop:".5rem"}},React.createElement("div",null,React.createElement("div",{className:"flex gap-p5"},React.createElement("button",{className:"now"===g.time?"api_option api_option_selected":"api_option",onClick:x,modif:"now"},"Now"),React.createElement("button",{className:"schedule"===g.time?"api_option api_option_selected":"api_option",onClick:x,modif:"schedule"},"Schedule")),"schedule"===g?.time?React.createElement("div",{style:{alignContent:"center",display:"flex",margin:".5rem 0",gap:".5rem"}},React.createElement("label",null,"Schedule"),React.createElement("input",{type:"datetime-local",defaultValue:$,ref:C,style:{fontSize:"1.125rem"}})):React.createElement("div",{style:{margin:".5rem 0"}},React.createElement("label",null,"Your job will run immediately")),React.createElement("button",{onClick:A,style:{marginBottom:".5rem"}},"Run"))):null,React.createElement("div",{style:{width:"100%",maxWidth:"400px"}},React.createElement("div",{style:{marginBottom:".5rem"}},n?._validCc?null:React.createElement("label",null,"You require a valid form of payment to use flood"),React.createElement(CreditCard,n)))),i&&n?._validCc?React.createElement("div",{className:"simpleOptions label_input",style:{border:"2px solid #696969",borderRadius:"1rem"}},Object.entries(i).map((n,e)=>React.createElement("div",{className:"flex gap-p10",key:e,style:{padding:".5rem",justifyContent:"space-between"}},React.createElement("div",null,React.createElement("h4",{style:{marginBottom:".25rem",marginTop:0}},n[0]),n[1]&&n[1]?.allowedJobs&&Object.entries(n[1].allowedJobs)?React.createElement("div",{className:"flex gap-p5"},Object.entries(n[1].allowedJobs).map((e,t)=>{a=n[0],l=e[0];var a,l,i=!!((i={...m})[a]&&i[a][l]&&i[a][l].activated);return React.createElement("div",{key:t},e[1]&&e[1].label?React.createElement("button",{className:i?"api_option api_option_selected":"api_option",style:{margin:".25rem 0"},onClick:j,modif:n[0],modif2:e[0]},e[1].label):null)})):null),React.createElement("div",{className:"label_data"},n[1]?.key?Object.entries(n[1].key).map((e,t)=>React.createElement("div",{className:"flex gap-p5",style:{alignItems:"center",height:"min-content"}},React.createElement("h4",{style:{margin:"0"}},e[1]),React.createElement("input",{key:t,type:"text",defaultValue:I[e[0]],modif:e[0],onChange:B}))):null)))):null))};export default Module;