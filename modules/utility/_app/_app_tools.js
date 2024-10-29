import{addToCartGlobal,calculateTotal,updateCart,performPurchase,getUseCartOfCurrency}from"../../utility/ecommerce";import{isObjectEmpty}from"/modules/util";import{handleEventMail}from"../mail";const handleSetLoggedIn=(e,t,a)=>{e._loggedIn?a(e._loggedIn):(e=t())&&a(e)},toggleSingleOpenMenu=(e,t,a,o,r)=>{!r&&a&&a.currentMenu&&a.currentMenu==t?o({}):o({currentMenu:t})},handleCheckUserData=async(e,a)=>{if(e&&a){var o={ip:!(!a.meta||isObjectEmpty(a.meta)||"::ffff:127.0.0.1"!=(a.meta.ip&&a.meta.ip)),location:!(!a.meta||isObjectEmpty(a.meta)||a.meta.location)};let t=!1;for(let e=0;e<Object.entries(o).length;e++)if(Object.entries(o)[e][1]){t=!0;break}if(t)return o}return!1},handleSetCart=(e,t)=>{var a=JSON.parse(localStorage.getItem("cart"));a?a.user||((a=a).user=e,localStorage.setItem("cart",JSON.stringify(a)),t(a)):e&&(a={user:e,cart:[]},localStorage.setItem("cart",JSON.stringify(a)),t(a))},forceUpdateProps=(e,t)=>{try{e&&"_cart"===e.dispatch&&t(JSON.parse(window.localStorage.getItem("cart")))}catch(e){}},registerSocket=(e,t,a,o,r,l)=>{t||o||(t={reconnectAttempts:1,transports:["polling","websocket"],withCredentials:!0},r.socketpath&&(t.path=r.socketpath,t.port=r.socketPort),a(e(r.socketUrl,t)),o=setTimeout(()=>{l(null)},2e4),l(o))},handleGlobalEvent=async(e,t,a,o)=>{var r,l;e&&("buy"===e.action?(t._setPageError(null),!a&&e.item&&e.style&&e.option&&(l=JSON.parse(localStorage.getItem("cart")),r=await addToCartGlobal(t.apiUrl,t.domainKey,t._loggedIn,l,e.item,{style:e.style,option:e.option,context:e?.context??null},o),t._LocalEventEmitter.dispatch("cart_update",{dispatch:"flashCart"}),r)&&"success"===r.status&&(updateCart(l,r.cart),l=JSON.parse(localStorage.getItem("cart")),r=calculateTotal(l,null,{object:!0}),console.log("snapshot",r),(r=await performPurchase(t.apiUrl,t.domainKey,t._loggedIn,l,o,{snapshot:r}))?"success"===r.status?(r.data&&r.data.cart&&updateCart(l,r.data.cart),r?.data?.order?.id&&(t._LocalEventEmitter.dispatch("cart_update",{dispatch:"purchase",id:r.data.order.id}),console.log("Purchase Success",r),handleEventMail(e,t))):t._setPageError({message:"Purchase failed",placement:"purchase"}):(console.log(r),t._setPageError({message:"Purchase failed",placement:"purchase"})),o(!1))):"checkout"===e.action?(t._setPageError(null),a||(l=JSON.parse(localStorage.getItem("cart")),t._LocalEventEmitter.dispatch("cart_update",{dispatch:"flashCart"}),r=getUseCartOfCurrency(t,l),l=calculateTotal(r,null,{region:r?.currency??null,object:!0},t),console.log("snapshot",l),console.log(r,o,t._log),(l=await performPurchase(t.apiUrl,t.domainKey,t._loggedIn,r,o,{snapshot:l,extra:{type:t?._solution?.payment??"stripe"}}))?"success"===l.status?(l.data&&l.data.cart&&updateCart(r,l.data.cart),l?.data?.order?.id&&(t._LocalEventEmitter.dispatch("cart_update",{dispatch:"purchase",id:l.data.order.id}),console.log("Purchase Success",l),handleEventMail(e,t))):t._setPageError({message:"Purchase failed",placement:"purchase"}):(console.log(l),t._setPageError({message:"Purchase failed",placement:"purchase"})),o(!1))):"add_to_cart"===e.action?(t._setPageError(null),!a&&e.item&&(r=JSON.parse(localStorage.getItem("cart")),l=await addToCartGlobal(t.apiUrl,t.domainKey,t._loggedIn,r,e.item,{style:e.style??null,option:e.option??null,context:e?.context??null},o),t._LocalEventEmitter.dispatch("cart_update",{dispatch:"flashCart"}),l?"success"===l.status&&(updateCart(r,l.cart),handleEventMail(e,t)):t._setPageError({message:"Add to cart failed",placement:"add_to_cart"}))):"add_to_cart_subscribe"===e.action?(t._setPageError(null),!a&&e.item&&e.style&&e.option&&(r=JSON.parse(localStorage.getItem("cart")),l=await addToCartGlobal(t.apiUrl,t.domainKey,t._loggedIn,r,e.item,{style:e.style,option:e.option,context:e?.context??null},o,{subscribe:"monthly"}),t._LocalEventEmitter.dispatch("cart_update",{dispatch:"flashCart"}),l?"success"===l.status&&(updateCart(r,l.cart),handleEventMail(e,t)):t._setPageError({message:"Add to cart failed",placement:"add_to_cart"}))):("logout"===e.action&&(t._setLoggedIn&&t._setLoggedIn(!1),t._setStripeSecret)&&t._setStripeSecret(!1),handleEventMail(e,t)))},registerGoogleSignIn=e=>`// Register google one tap sign in event to pass data to registration/login function
        const onOneTapSignedInGoogle = data => {
            let event = new CustomEvent("thirdparty-signin", { "detail": data });
            document.dispatchEvent(event);
        }
        const doGoogleInit = (delay = 250) => {
            try {
                if (!window || (window && !window.googleInitialized)) {
                    google.accounts.id.initialize({
                        client_id: '${e}',
                        callback: onOneTapSignedInGoogle,
                        use_fedcm_for_prompt: true
                    })
                    window.googleInitialized = true
                    console.log('Google Loaded')
                }
                return true
            } catch (err) {
                // fail silently
                setTimeout(() => {
                    doGoogleInit(delay * 2)
                }, delay)
            }
        }
        try {
            let createdScripts = document.getElementsByClassName("lazyOnload");
            if (createdScripts && createdScripts.length > 1) { // Remove duplicate scripts
                for (let i = 1; i < createdScripts.length; i++) {
                    createdScripts[i].remove();
                }
            }
            doGoogleInit()
        } catch (err) {
            // fail silently
            setTimeout(() => {
                doGoogleInit(500)
            }, 250)
        }`;export{handleSetLoggedIn,toggleSingleOpenMenu,handleCheckUserData,handleSetCart,forceUpdateProps,registerSocket,handleGlobalEvent,registerGoogleSignIn};