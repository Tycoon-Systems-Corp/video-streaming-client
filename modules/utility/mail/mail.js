import{fetchPost}from"../fetch/fetch";import{logout}from"/modules/utility/onboarding/SignIn.js";import newUser from"/layout/mail/newUser";import mails from"/layout/mail";import apiReq from"/modules/utility/api/apiReq";const sendSurveyEmail=async(e,t,i,a,s)=>{t={domainKey:t,hash:s?.hash,identifier:s?.identifier,answers:i,surveyName:a},s=await fetchPost(e+"/m/sendsurveyemail",null,null,t);if(s&&s.hasOwnProperty("status")){if("disauthenticated"==s.status)return logout(),"disauthenticated";if("failed"==s.status)return!1;if("success"==s.status)return s}return!1},handleEventMail=async(e,t)=>{var i,a,s=e?.event??e?.action??null;if(s){"newUser"===s&&(i=newUser(t),await apiReq("/email/sendEmail",{toUserId:e?.data?.identifier,content:i.content,subject:i.subject}));try{mails&&mails[s]&&(a=mails[s](t),await apiReq("/email/sendEmail",{toUserId:e?.data?.identifier,content:a.content,subject:a.subject}))}catch(e){}}};export{sendSurveyEmail,handleEventMail};