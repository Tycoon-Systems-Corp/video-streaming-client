import{fetchPost}from"../fetch/fetch";import{logout}from"/modules/utility/onboarding/SignIn.js";import userRegistration from"/layout/mail/userRegistration";import apiReq from"/modules/utility/api/apiReq";const sendSurveyEmail=async(e,t,i,s,a)=>{t={domainKey:t,hash:a?.hash,identifier:a?.identifier,answers:i,surveyName:s},console.log(e,t),a=await fetchPost(e+"/m/sendsurveyemail",null,null,t);if(a&&a.hasOwnProperty("status")){if("disauthenticated"==a.status)return logout(),"disauthenticated";if("failed"==a.status)return!1;if("success"==a.status)return a}return!1},handleEventMail=async(e,t)=>{e?.event&&"newUser"===e.event&&(t=userRegistration(t),await apiReq("/email/sendEmail",{toUserId:e?.data?.identifier,content:t.content,subject:t.subject}))};export{sendSurveyEmail,handleEventMail};