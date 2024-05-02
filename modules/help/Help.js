import React from"react";import lunr from"../utility/utility/elasticlunr";import Styles from"../settings/Settings.module.scss";import Close from"@mui/icons-material/Close";const Module=t=>{const[e,a]=React.useState(!1);var[,,]=React.useState(!1),[,,]=React.useState(null),[,,]=React.useState(!0);const[n,r]=React.useState(!1),[l,i]=React.useState(!1),[,s]=React.useState(-1),[c,o]=React.useState(null),[m,u]=React.useState([]),d=React.useRef(),p=React.useRef();React.useEffect(()=>{e||a(!0)},[e]),e&&lunr&&t.helpIndex&&!c&&(g=lunr(function(){this.ref("id"),this.field("question"),this.field("answer"),this.field("a"),this.field("meta"),Array.isArray(t.helpIndex)&&t.helpIndex.forEach((e,t)=>{e.id=t,this.add(e)})}),o(g)),React.useEffect(()=>{var e;t?.open?(r(!0),i(!0),d?.current&&clearTimeout(d.current)):t&&t?.open||(i(!0),r(!1),e=setTimeout(()=>{i(!1),p?.current&&(p.current.value=""),d.current=null},1500),d.current=e)},[l,n,t?.open,d?.current,p?.current]);var g=React.useCallback(e=>{s((new Date).getTime());e=e?.currentTarget?.value;if(console.log(e),null!==e&&""!==e&&c&&t.helpIndex){e=c.search(e,{expand:!0});const a=t.helpIndex.map((e,t)=>(e.id=t,e));console.log(a,e);e=e.map(t=>a.find(e=>e.id==t.ref));u(e)}else f()}),R=React.useCallback(e=>{t?.setHelpOpen&&t.setHelpOpen(!1)});const f=()=>{var e;p?.current&&t?.helpIndex?.filter&&((e=p.current.value)&&""!==e||0<(e=t.helpIndex.filter(e=>e.pinned)).length&&u(e))};return React.useEffect(()=>{f()},[c]),React.useEffect(()=>{console.log(t._openMenu),"main_settings"!==t?._openMenu?.currentMenu&&t?.setHelpOpen&&t.setHelpOpen(!1)},[t?._openMenu?.currentMenu,t?.setHelpOpen]),React.createElement("div",null,React.createElement("div",{className:`Misc_Container ${t.className} `+(n&&l?"Misc_Container_Visible":""),style:{top:t?.menuConfig?.height&&!isNaN(Number(t.menuConfig.height))?Number(t.menuConfig.height)+"px":""}},React.createElement("div",{className:"Misc_Internal_Container",style:{paddingTop:".5rem"}},React.createElement("div",{style:{position:"sticky",top:".5rem",right:0,zIndex:10}},React.createElement(Close,{className:""+Styles.Close,style:{margin:"0rem 0",float:"right"},onClick:R})),React.createElement("h5",{className:"Misc_Label",style:{marginTop:0}},"Help"),React.createElement("div",{style:{position:"sticky",top:".5rem",margin:".5rem 0",marginTop:"0"}},React.createElement("input",{onChange:g,ref:p,style:{border:"0px",borderRadius:".5rem",width:"87.5%",fontSize:"1.25rem",padding:"0 .5rem"},placeholder:"How can we help?"})),React.createElement("div",{style:{padding:".25rem 0rem",display:"grid",gap:".5rem"}},Array.isArray(m)&&0<m.length?m.map((e,t)=>e?.a?React.createElement("a",{href:e.a,style:{cursor:"pointer"},key:t},React.createElement("div",{className:"Misc_Item_Container Misc_Item_DarkContainerHover",style:{padding:".5rem",display:"grid",gap:".25rem"}},React.createElement("div",{style:{fontWeight:"500"}},e.question),React.createElement("div",{style:{fontSize:".85rem",lineHeight:"normal"}},e.answer),e.jsx?React.createElement("div",{className:"Help_JsxContainer"},e.jsx):null)):React.createElement("div",{className:"Misc_Item_Container",style:{padding:".5rem",display:"grid",gap:".25rem"},key:t},React.createElement("div",{style:{fontWeight:"500"}},e.question),React.createElement("div",{style:{fontSize:".85rem",lineHeight:"normal"}},e.answer),e.jsx?React.createElement("div",{className:"Help_JsxContainer"},e.jsx):null)):""!==p?.current?.value?React.createElement("div",null):React.createElement("div",{style:{textAlign:"center",fontSize:".95rem"}},"Try Searching for something")))))};export default Module;