const getTimeRemaining=(e,t)=>{return t&&e?(e=e-t,{days:Math.floor(e/864e5),hours:Math.floor(e%864e5/36e5),minutes:Math.floor(e%36e5/6e4),seconds:Math.floor(e%6e4/1e3)}):null},MONTHS=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],MONTHS_PRETTY=["January","February","March","April","May","June","July","August","September","October","November","December"],DAYS=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],retrieveMonth=(e,t)=>e<=MONTHS.length?MONTHS[e]:"",retrieveDay=(e,t)=>e<=DAYS.length?DAYS[e]:"",HMSTDurationToSeconds=e=>{try{var t,r,a,o,n;if(e)return[t,r,a]="00:01:15.05".split(":"),[o,n]=a.split("."),3600*parseInt(t,10)+60*parseInt(r,10)+parseInt(o,10)+parseFloat("0."+n)}catch(e){return!1}},HMSDurationToSeconds=e=>{let a=0;if(e?.toString){let r=e.toString().split(":");if(r){r=[(r=3<r?.length?r.slice(r.length-2,r.length):r)[r.length-3]??"00",r[r.length-2]??"00",r[r.length-1]];for(let t=0;t<r.length;t++){let e=0;0===t?e=3600*Number(r[t]):1===t?e=60*Number(r[t]):2===t&&(e=Number(r[t])),a+=e}}}return a},setDefaultDateTime=e=>{e=e??new Date;return e.getFullYear()+`-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}T${String(e.getHours()).padStart(2,"0")}:${String(e.getMinutes()).padStart(2,"0")}:`+String(e.getSeconds()).padStart(2,"0")},resolveSimpleTimeAgo=e=>{var t,r,a,e=isNaN(Number(e))?e:Number(e);return console.log(e),isNaN(new Date(e).getTime())?"":(t=new Date,e=new Date(e),a=2592e6,(r=31536e6)<=(t=t.getTime()-e.getTime())?Math.floor(t/r)+" years ago":a<=t?Math.floor(t/a)+" months ago":864e5<=t?Math.floor(t/864e5)+" days ago":36e5<=t?Math.floor(t/36e5)+" hours ago":6e4<=t?Math.floor(t/6e4)+" minutes ago":"a few seconds ago")};function formatAMPM(e){var t,r;return e?.getHours?(r=12<=(t=e.getHours())?"PM":"AM",(t=(t%=12)||12)+":"+(t=(t=e.getMinutes())<10?"0"+t:t)+" "+r):""}function formatDateWithSuffix(e){e=e.getDate();return e%10==1&&11!==e?"st":e%10==2&&12!==e?"nd":e%10==3&&13!==e?"rd":"th"}const resolveContentDate=e=>{if(!isNaN(Number(e))){e=Number(e),e=new Date(e);if(e)return{month:MONTHS_PRETTY[e.getMonth()],year:e.getFullYear(),date:e.getDate(),time:formatAMPM(e),suffix:formatDateWithSuffix(e)}}return{}},secondsToHMSString=e=>{e={hours:Math.floor(e/3600),minutes:Math.floor(e%3600/60),seconds:e%60};return(0<e.hours?String(e.hours).padStart(2,"0")+":":"")+String(e.minutes).padStart(2,"0")+":"+String(e.seconds).padStart(2,"0")};export{getTimeRemaining,MONTHS,MONTHS_PRETTY,DAYS,retrieveMonth,retrieveDay,HMSTDurationToSeconds,HMSDurationToSeconds,setDefaultDateTime,resolveSimpleTimeAgo,resolveContentDate,secondsToHMSString};