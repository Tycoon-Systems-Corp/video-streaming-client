import{handleInteractMedia}from"/modules/util";import{HMSDurationToSeconds}from"/modules/utility/utility/date";const disposePlayer=e=>{try{var t;window?.videojs?.players&&(t=window.videojs.players)&&Object.keys(t).length&&t[e]&&t[e].dispose()}catch(e){}},setTimeline=(o,e)=>{console.log(o,e,window?.VTTCue);try{if(o&&e?.timeline&&window?.VTTCue){const a=o.addRemoteTextTrack({kind:"metadata",mode:"showing"},!1).track,d=e.timeline.filter(e=>"clip"===e.type),r=e?.duration?HMSDurationToSeconds(e.duration):0,l=o?.controlBar?.progressControl?.el();d.forEach((e,t)=>{var n=e.startOffset,i=e?.endOffset??(d[t+1]&&d[t+1].startOffset)?d[t+1].startOffset-1:r??0,e=e.name,i=new window.VTTCue(n,i,e);a.addCue(i),l&&o?.id_&&(0===t&&((e=document.createElement("div")).className="segmentContainer",e.id=o.id_+"_segmentContainer",l.appendChild(e)),(i=document.getElementById(o.id_+"_segmentContainer"))&&((t=document.createElement("div")).classList.add("vjs-segment-square"),e=n/r*100,t.style.left=e+"%",i.appendChild(t)),console.log("Seek",l))}),o.on("timeupdate",function(){})}}catch(e){}},initButtons=async(t,n)=>{for(let e=0;e<n.length;e++){var i,o;n[e]?.id&&!document.getElementById(n[e].id)&&((o=(i=t.current.controlBar.addChild("button")).el()).innerHTML=n[e].innerHTML??"",n[e].className&&i.addClass(n[e].className),o.id=n[e].id,n[e].btnEvent)&&(o.removeEventListener("click",n[e].btnEvent),o.addEventListener("click",n[e].btnEvent))}},initializePlayer=(t,n,i,o,e,a,d=[],r,l,s,c,y,m,u)=>{try{if(window.videojs){if(console.log("Run Init",o,document.getElementById(o)),!window.videojs.players[o]||e.force)return window.videojs(o,e,async function(){a?.current&&(s&&s(!0),window.videojs.log(`Your player ${o} is ready!`),console.log(a.current),initButtons(a,d),this.on("error",e=>{console.log("Error",o),r&&r(e)}),this.on("ready",e=>{n?.id&&t&&i?.trying&&(handleInteractMedia(t,t.watchData,i.trying),setTimeline(this,n)),c&&c(e?.target?.player??this,n)}),this.on("play",e=>{u&&u(e),y&&y(!0)}),this.on("ended",e=>{console.log("Ended",o),l&&l()}))});if(document.getElementById(o)){var p=document.getElementById(o);if(console.log(`Player ${o} already initialized`,p,p?.player.hasStarted(),m),!p?.player?.hasStarted())try{try{window?.userInteracted||p.player.muted(!0)}catch(e){}p.player.play()}catch(e){console.log("Failed to play",e)}}}}catch(e){}};export{disposePlayer,initializePlayer,initButtons};