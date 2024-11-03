function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a,l=arguments[t];for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e}).apply(this,arguments)}import React from"react";import{useRouter}from"next/router";import{v4 as uuidv4}from"uuid";import{LoadForums,ThreadPage}from"/modules/comment/forum";import apiReq from"/modules/utility/api/apiReq";import{AddComment}from"/modules/comment/parts";import{submitPost}from"/modules/utility/utility/comment";import middlewareFunctions from"/customModules/middleware/MiddlewareFunctions";const Module=m=>{const{query:e,asPath:a}=useRouter(),[t,l]=React.useState(!1),[,r]=React.useState(null),[n,c]=React.useState(null),[o,i]=React.useState(!1),[u,s]=React.useState([]),[d,R]=React.useState(0),p=(React.useEffect(()=>{var e;t||(e=uuidv4(),r(e),p(),l(!0))},[t]),async()=>{var e=await apiReq("/p/getforum",{goto:a});e?.data&&c(e.data),f(e?.data?.id)}),f=async e=>{e=await apiReq("/p/loadthreads",{par:e??n?.id,parType:"forum",limit:25,offset:d});e?.data&&s(e.data)};console.log(n,u);var g=React.useCallback(e=>{i(!0)}),v=React.useCallback(e=>{i(!1)}),E=React.useCallback((e,t,a,l,r,n,c,o)=>{submitPost(e,m,t,a,l,r,null,null,n,c,o),i(!1),f()});const y=React.useCallback(e=>{e?.currentTarget?.getAttribute&&(e=e.currentTarget.getAttribute("i"),R(Number(e)),p(e*m?.limit??100))});var b=React.useMemo(()=>middlewareFunctions.manualAllowResourceAuth(m,a,e),[m?._loggedIn?.identifier,a,e]),h=[d-2,d-1,d,d+1,d+2];return React.createElement("div",{className:m.className+" GetThread_Container"},React.createElement("div",{className:"PagePadding"},b?e?.q?React.createElement("div",null,React.createElement(ThreadPage,_extends({},m,{q:e.q}))):React.createElement("div",null,a?React.createElement("div",null,React.createElement(LoadForums,_extends({},m,{goto:a})),n&&"url"!==n?.meta?.parentType&&n?.id?React.createElement("div",null,o?React.createElement("div",{className:"Post_ReplyExternalContainer"},React.createElement(AddComment,_extends({},m,{addComment:!0,opId:n.id,opIdType:"forum",handleCancelReply:v,sub:!1,defaultWriting:!0,commentPlaceholder:"Thread...",type:"forum",handlePost:E}))):React.createElement("button",{className:"action_button",style:{marginBottom:".5rem"},onClick:g},"Create",React.createElement("div",{className:"material-icons"},"add"))):null):null,u?.map?u.map((e,t)=>React.createElement("div",{key:t},React.createElement("div",{className:"LoadForums_ThreadLinkContainer"},React.createElement("a",{href:e?.id?a+"?q="+e.id:""},e?.title)))):null,React.createElement("ul",{className:"PaginationContainer"},h.map((e,t)=>-1<e&&e>=d&&100<=u?.length?React.createElement("li",{className:e==d?"ActivePage":"",key:t,i:e,onClick:y},e+1):null))):null))};export default Module;