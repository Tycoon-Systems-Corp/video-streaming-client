import React from"react";import{fireGlobalEvent}from"/modules/utility/utility";import{fetchPost}from"/modules/utility/fetch";import apiReq from"/modules/utility/api/apiReq";import CreditCard from"/modules/payment/CreditCard";import Close from"@mui/icons-material/Close";const Module=l=>{const[e,t]=React.useState(!1),[a,n]=React.useState(null),[i,s]=React.useState(!1),[o,u]=React.useState({state:""}),[c,d]=React.useState({state:""}),[r,E]=React.useState(!1),[m,_]=React.useState(null);var[,,]=React.useState({});let p=l?.regionsData??a??null;const f=React.useRef(),g=React.useRef();React.useEffect(()=>{e||(!p&&l?.apiUrl&&(async()=>{var e=await fetchPost(l?.apiUrl+"/m/pagedefaults",null,null,{regionsReq:!0});e&&e?.data?.regionsData&&n(e.data.regionsData)})(),t(!0))},[p,l?.regionsData,e]);var R=React.useCallback(e=>{l?.setSingleVideoItemOpen&&l.setSingleVideoItemOpen("donate"),E(!0),d({state:""})}),C=React.useCallback(e=>{l?.setSingleVideoItemOpen&&l.setSingleVideoItemOpen(""),E(!1)});let D=p&&l?._loggedIn?.meta?.location&&p[l._loggedIn.meta.location]?p[l._loggedIn.meta.location]:{code:"US",currency:"USD",currencyName:"US Dollars",name:"United States",payment:"stripe",region:"NORTH AMERICA",symbol:"$"};var v=React.useCallback(async e=>{let t;try{var a,n,o,c,r,m;0<f?.current?.value&&!i&&(t=setTimeout(()=>{s(!1),u({state:""})},35e3),a=g?.current?.clientHeight,_(a),s(!0),u({state:"Sending Donation"}),n=e?.currentTarget?.getAttribute("donateto")??l?.donateTo,o=f?.current?.value,c=e?.currentTarget?.getAttribute("offer")??l?.offer,r=e?.currentTarget?.getAttribute("forlive")??l?.forLive,n&&o&&(m=await apiReq("/ecommerce/donate",{identifier:l._loggedIn.identifier,hash:l._loggedIn.hash,donateTo:n,amount:o,offer:c,location:D,options:{extra:{type:D.payment},forLive:r}}))&&"success"===m.status?(clearTimeout(t),s(!1),d({state:`${D?.symbol??""}${m.data?.totals?.total} ${m.data?.currency} donated to `+(m.data?.meta?.donateToUser??""),href:`https://${l?.domainUrl}/r?o=`+m.data.id}),setTimeout(()=>{d({state:""})},15e3),u({state:""}),E(!1),console.log(m),m?.data?.donation&&e?.currentTarget?.getAttribute("action")&&fireGlobalEvent({action:"donate_complete",donateTo:n,amount:o,offer:c},l._LocalEventEmitter)):(clearTimeout(t),s(!1),u({state:""})))}catch(e){t&&(clearTimeout(t),s(!1),u({state:""}))}}),b=React.useCallback(e=>{e?.currentTarget&&N(e.currentTarget)});const N=e=>{let t=e.value;var a;3<((a=t)%1!=0?a.toString().split(".")[1].length:0)&&(t=Math.floor(Number(t)+1)),e.value=new Intl.NumberFormat("en-US",{minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:!1}).format(t)};var y=React.useCallback(e=>{if(e?.currentTarget?.getAttribute("modif")){e=e.currentTarget.getAttribute("modif");if(e&&f?.current)switch(e){case"add":return f.current.value=Number(f.current.value)+1,N(f.current),1;case"decrease":var t=Number(f.current.value)-1;return f.current.value=t<0?0:t,N(f.current),1}}}),h=React.useCallback(e=>{l?._setOpenMenu&&(e=e?.currentTarget?.getAttribute("modif"))&&(l._setOpenMenu({currentMenu:e}),"cart"===e)&&l._LocalEventEmitter.dispatch("cart_update",{dispatch:"cartMessage",message:"Add a Credit Card to send a donation",type:"prompt"})});return React.createElement(React.Fragment,null,l?._loggedIn&&l?.donateTo&&l?._validCc?React.createElement("div",{className:`Ecommerce_DonationContainer ${r?"Ecommerce_DonateContainerOpen":""} `+l.className,ref:g},React.createElement("div",{className:"Ecommerce_DonateInputExternalContainer "+(r?"Ecommerce_DonateInputExternalContainerOpen":"")},i?React.createElement("div",{className:"Ecommerce_BusyScreen"}):null,React.createElement("div",{className:"Ecommerce_DonateInputContainer "+(r?"Ecommerce_DonateInputContainerOpen":"")},React.createElement("div",{className:"Ecommerce_Donate_CloseIconContainer"},React.createElement(Close,{className:"close",onClick:C,modif:"close",style:{cursor:"pointer",verticalAlign:"middle",marginLeft:".25rem"}})),i?null:React.createElement("div",{className:"Ecommerce_DonateAddDecreaseContainer"},React.createElement("button",{className:"Ecommerce_DonateAdd",onClick:y,modif:"add"},"+"),React.createElement("button",{className:"Ecommerce_DonateDecrease",onClick:y,modif:"decrease"},"-")),React.createElement("div",{className:"Ecommerce_DonateInputInternalContainer"},D?.symbol?React.createElement("span",{className:"Ecommerce_DonateInputSymbol"},D?.symbol):null,React.createElement("input",{className:"Ecommerce_DonateInput",type:"number",defaultValue:l?.defaultRate??"5.00",onChange:b,ref:f,style:{height:"100%",borderRadius:"1rem"}}))),r?o?.state?React.createElement("button",{className:"Ecommerce_CommandPanelButton Ecommerce_DonationButton premBtn Ecommerce_DonationButton_After",disabled:!0},o.state):React.createElement("button",{className:"Ecommerce_CommandPanelButton Ecommerce_DonationButton premBtn Ecommerce_DonationButton_After",onClick:v,action:"donate",donateto:l?.donateTo},"Send Donation"):React.createElement("button",{className:"Ecommerce_CommandPanelButton Ecommerce_DonationButton flex Ecommerce_DonationButton_Pre",onClick:R,action:"donate",donateto:l?.donateTo,offer:l?.offer,forlive:l?.forLive},React.createElement("div",{className:"material-icons Ecommerce_DonationButton_Icon"},"attach_money"),React.createElement("span",null,"Donate"))),c?.state?React.createElement("a",{className:"Ecommerce_CommandPanelButton Ecommerce_DonationButton Ecommerce_DonationButton_After doneLabel",style:{marginLeft:".25rem",padding:"0 .5rem"},href:""+(c?.href??"")},c.state):null,React.createElement("div",{className:"Ecommerce_Spinner "+(i?"Ecommerce_SpinnerVisible":""),style:{maxHeight:m?m+"px":"15px",width:i?"50px":0,position:"relative"}},React.createElement("div",{className:"spinner spinnerSm opacity1",style:{margin:0}}))):l?._loggedIn?l?._validCc?null:React.createElement("div",{className:`Ecommerce_DonationContainer ${r?"Ecommerce_DonateContainerOpen":""} `+l.className},React.createElement("button",{className:"Ecommerce_CommandPanelButton Ecommerce_DonationButton flex Ecommerce_DonationButton_Pre",onClick:h,modif:"cart"},React.createElement("div",{className:"material-icons Ecommerce_DonationButton_Icon"},"attach_money"),React.createElement("span",null,"Donate")),React.createElement("div",{style:{display:"none"}},React.createElement(CreditCard,l))):React.createElement("div",{className:`Ecommerce_DonationContainer ${r?"Ecommerce_DonateContainerOpen":""} `+l.className},React.createElement("button",{className:"Ecommerce_CommandPanelButton Ecommerce_DonationButton flex Ecommerce_DonationButton_Pre",onClick:h,modif:"main_settings"},React.createElement("div",{className:"material-icons Ecommerce_DonationButton_Icon"},"attach_money"),React.createElement("span",null,"Donate"))))};export default Module;