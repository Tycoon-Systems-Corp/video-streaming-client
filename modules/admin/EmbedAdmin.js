function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a,n=arguments[t];for(a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}import React from"react";import{v4 as uuidv4}from"uuid";import EmbedAuthContainer from"/modules/embed/EmbedAuthContainer";import Embed from"/modules/embed/Embed";const Module=e=>{const[t,a]=React.useState(!1),[,n]=React.useState(null);var[d,r]=React.useState(!1);const[i,u]=React.useState(null),[c,o]=React.useState(null);return React.useEffect(()=>{var e;t||(e=uuidv4(),n(e),a(!0))},[t]),React.useEffect(()=>{e?._loggedIn?.identifier&&i!==e._loggedIn.identifier&&(u(null),e._LocalEventEmitter.dispatch(c,{dispatch:"loadDefault"}))},[e?._loggedIn?.identifier,i,c]),React.createElement("div",{className:e.className+" Admin_Embed_Container"},React.createElement("h3",null,"Embed"),d&&e?._loggedIn?React.createElement(Embed,_extends({},e,{adminAuth:d,askEmbed:d?.data?.userid,adminPage:!0})):React.createElement(EmbedAuthContainer,_extends({},e,{adminAuth:d,setAdminAuth:r,setCheckedFor:u,setChildId:o})))};export default Module;