import React from"react";import{v4 as uuidv4}from"uuid";import{useRouter}from"next/router";import{Banner}from"../admin";import lunr from"../utility/utility/elasticlunr";import styles from"./documentation.module.scss";import{fetchPost}from"../utility/fetch";import DOMPurify from"dompurify";import{isObjectEmpty}from"../util";import{CompanyLink}from".";const Module=t=>{const a=useRouter();var{}=a;const[l,r]=React.useState(!1),[,n]=React.useState(null);var[,,]=React.useState(!1);const[c,s]=React.useState(null),[i,m]=React.useState([]),[u,o]=React.useState([]),[,d]=React.useState(-1),[e,f]=React.useState({}),[p,y]=React.useState(0),[R,g]=React.useState([]),[v,E]=React.useState(null);var[,,]=React.useState([]);const[h,N]=React.useState(!1),S=React.useRef(),C=React.useRef(),x=(React.useEffect(()=>{var e;l||(e=uuidv4(),n(e),(async e=>{if(t?.apiUrl){if(e){o(e);const a=e.map(e=>e.menu);e=a.filter((e,t)=>a.indexOf(e)===t);return!g(e)}e=await fetchPost(t.apiUrl+"/m/getdocumentation",null,null,{spec:"all"});if(e.hasOwnProperty("status")&&"success"==e.status&&e.data){o(e.data);const l=e.data.map(e=>e.menu);e=l.filter((e,t)=>l.indexOf(e)===t);g(e)}}})(t?.documentationData),r(!0))},[l]),(e,t)=>{if(c||t){t=(t||c).search(e,{expand:!0});const a=u.map((e,t)=>(e.id=t,e));e=t.map(t=>a.find(e=>e.id==t.ref));m(e),e&&e[0]&&(e[0].menu&&y(R.indexOf(e[0].menu)),f(e[0]))}});React.useEffect(()=>{var e;l&&0<u?.length&&lunr&&u&&!c&&(e=lunr(function(){this.ref("id"),this.field("lead"),this.field("html"),this.field("code"),this.field("response"),this.field("meta"),Array.isArray(u)&&u.forEach((e,t)=>{e.id=t,this.add(e)})}),s(e),a?.query?.q)&&(S.current.value=a.query.q,x(a.query.q,e))},[u,l]),React.useEffect(()=>{var e;l&&0<u?.length&&lunr&&u&&(e=u.filter(e=>e.menu===R[p]),console.log(e),E(e))},[p,R,u,l]);var b=React.useCallback(e=>{d((new Date).getTime());e=e?.currentTarget?.value;null!==e&&""!==e&&c&&u?x(e):k()});React.useEffect(()=>{k()},[c]);const k=()=>{var e;S?.current&&u?.filter&&((e=S.current.value)&&""!==e||0<(e=u?.filter(e=>e.pinned)).length&&m(e))};const A=React.useCallback(e=>{e?.currentTarget?.getAttribute("modif")&&(e=e.currentTarget.getAttribute("modif"))&&-1<(e=R.indexOf(e))&&(f({}),y(e))}),T=React.useCallback(e=>{var t;e?.currentTarget?.getAttribute&&-1<(t=e.currentTarget.getAttribute("modif"))&&(console.log(v,t),e?.currentTarget?.getAttribute("currentresults")?f(i[t]):f(v[t]))});var _=React.useCallback(e=>{C?.current&&clearTimeout(C.current),N(!0)}),M=React.useCallback(e=>{try{C.current=setTimeout(()=>{N(!1)},500)}catch(e){}});const O=t=>{const a={};return console.log(u,t,typeof t),"string"==typeof t&&(t=u.find(e=>e.lead===t)),["manual","simple"].map(e=>{a[e]=-1<t?.meta.indexOf(e)}),a};return console.log("Menu Items",R,e),React.createElement("div",{className:`${t.className} ${styles.container} Documentation_Container`},React.createElement("div",{className:"flex",style:{justifyContent:"space-between",alignContent:"center",margin:".5rem 1.5rem"}},React.createElement("h5",{className:"Misc_Label",style:{fontSize:"1.5rem"}},"Tycoon Documentation"),React.createElement(CompanyLink,t)),React.createElement("div",{style:{position:"sticky",top:".5rem",margin:".5rem 0",marginTop:"0"}},React.createElement("input",{onChange:b,onFocus:_,onBlur:M,className:""+styles.activeSearch,ref:S,style:{border:"0px",borderRadius:".5rem",width:"calc(100% - 1rem)",fontSize:"1.25rem",padding:"0 .5rem",margin:"0 .5rem"},placeholder:"How do I?"}),h?React.createElement("div",{className:""+styles.activeSearchResults},React.createElement("div",{style:{padding:".25rem 0rem",paddingTop:".5rem",display:"grid",gap:".5rem"}},Array.isArray(i)&&0<i.length?i.map((e,t)=>React.createElement("div",{className:"flex gap-p5",style:{marginLeft:".5rem",cursor:"pointer"},key:t},React.createElement("div",{className:"Misc_Item_Container Misc_Item_DarkContainerHover",style:{padding:".5rem"}},React.createElement("div",{className:""+styles.lead,onClick:T,modif:t,currentresults:"true"},e.lead)))):""!==S?.current?.value?React.createElement("div",null):React.createElement("div",{style:{textAlign:"center",fontSize:".95rem"}},"Try Searching for something"))):null),React.createElement("ul",{className:"flex gap-p5 "+styles.menuContainer},Array.isArray(R)&&0<R.length?R.map((e,t)=>React.createElement("li",{key:t,style:{listStyle:"none"},onClick:A,modif:e},React.createElement("div",null,e?.charAt?""+e.charAt(0).toUpperCase()+e.slice(1,e.length):e))):null),React.createElement("div",{className:""+styles.mainContainer},React.createElement("ul",{className:""+styles.menuList},Array.isArray(v)&&0<v.length?v.map((e,t)=>React.createElement("li",{className:"flex gap-p2",onClick:T,modif:t},React.createElement("div",null,e?.lead),O(e)?.manual?React.createElement("div",{className:styles.tagUnmanaged+" "+styles.tagSmall},"m"):null,O(e)?.simple?React.createElement("div",{className:styles.tagSimple+" "+styles.tagSmall},"s"):null)):null),React.createElement("div",{className:""+styles.contentContainer},e&&!isObjectEmpty(e)?React.createElement("div",{className:"flex "+styles.quadrant},React.createElement("div",{className:"Misc_Item_Container Misc_Item_DarkContainerHover",style:{padding:".5rem",width:"100%"}},React.createElement("div",{className:""+styles.lead},e.lead),React.createElement("div",{className:"flex gap-p5"},O(e)?.manual?React.createElement("div",{className:styles.tagUnmanaged+" "+styles.tag},"manual"):null),React.createElement("div",{className:"flex gap-p5"},O(e)?.simple?React.createElement("div",{className:styles.tagSimple+" "+styles.tag},"simple"):null),React.createElement("pre",null,React.createElement("code",null,React.createElement("div",{className:""+styles.htmlParseContainer,dangerouslySetInnerHTML:((e,t)=>{try{return e&&e[t]?{__html:DOMPurify.sanitize(e[t]??"")}:""}catch(e){return""}})(e,"html"),style:{fontSize:".85rem",lineHeight:"normal",lineBreak:"auto",whiteSpace:"pre-wrap"}}))))):null),React.createElement("div",null,e&&!isObjectEmpty(e)?React.createElement("div",{className:"flex "+styles.container},React.createElement("div",{className:""+styles.quadrant2},React.createElement("pre",null,React.createElement("code",null,React.createElement("div",{className:""+styles.codePre},e?.code))),React.createElement("div",null,e.response))):null)))};export default Module;