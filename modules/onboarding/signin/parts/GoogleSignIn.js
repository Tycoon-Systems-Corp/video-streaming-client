import React from"react";const Module=e=>{var{hideOAuthSignIn:e,hideGoogleSignIn:n,googleSignInIsLoaded:a,maxWidth:t,googleSignInRendered:o,googleSignIn:i}=e;return console.log(n,a,o,i),React.createElement(React.Fragment,null,e?"":React.createElement("div",{className:"SignIn_OauthContainer"},React.createElement("div",{className:n||!a?"display-none":null,style:{maxWidth:t??"200px"}},React.createElement("div",{className:o?"googleSignInContainer googleSignInContainer-padding":"googleSignInContainer"},React.createElement("div",{className:"g_id_signin google-sign-in-btn",ref:i,"data-size":"medium","data-logo_alignment":"center","data-theme":"outline"})))))};export default Module;