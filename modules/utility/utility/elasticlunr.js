"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(){function c(e){var t=new c.Index;return t.pipeline.add(c.trimmer,c.stopWordFilter,c.stemmer),e&&e.call(t,t),t}var h,l,e,t,p,d,f,m,y,g,v,S,w,x,k,_,b,E,F,O,P,N,$,T,n;c.version="0.5.10",(c.utils={}).warn=(n=this,function(e){n.console&&console.warn&&console.warn(e)}),(c.EventEmitter=function(){this.events={}}).prototype.addListener=function(){var e=Array.prototype.slice.call(arguments),t=e.pop();if("function"!=typeof t)throw new TypeError("last argument must be a function");e.forEach(function(e){this.hasHandler(e)||(this.events[e]=[]),this.events[e].push(t)},this)},c.EventEmitter.prototype.removeListener=function(e,t){this.hasHandler(e)&&(t=this.events[e].indexOf(t),this.events[e].splice(t,1),this.events[e].length||delete this.events[e])},c.EventEmitter.prototype.emit=function(e){var t;this.hasHandler(e)&&(t=Array.prototype.slice.call(arguments,1),this.events[e].forEach(function(e){e.apply(void 0,t)}))},c.EventEmitter.prototype.hasHandler=function(e){return e in this.events},c.tokenizer=function(e){return arguments.length&&null!=e?Array.isArray(e)?e.map(function(e){return e.toLowerCase()}):e.toString().trim().toLowerCase().split(/[\s\-]+/):[]},(c.Pipeline=function(){this._stack=[]}).registeredFunctions={},c.Pipeline.registerFunction=function(e,t){t in this.registeredFunctions&&c.utils.warn("Overwriting existing registered function: "+t),e.label=t,c.Pipeline.registeredFunctions[e.label]=e},c.Pipeline.warnIfFunctionNotRegistered=function(e){e.label&&e.label in this.registeredFunctions||c.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n",e)},c.Pipeline.load=function(e){var n=new c.Pipeline;return e.forEach(function(e){var t=c.Pipeline.registeredFunctions[e];if(!t)throw new Error("Cannot load un-registered function: "+e);n.add(t)}),n},c.Pipeline.prototype.add=function(){Array.prototype.slice.call(arguments).forEach(function(e){c.Pipeline.warnIfFunctionNotRegistered(e),this._stack.push(e)},this)},c.Pipeline.prototype.after=function(e,t){c.Pipeline.warnIfFunctionNotRegistered(t);e=this._stack.indexOf(e);if(-1==e)throw new Error("Cannot find existingFn");this._stack.splice(e+=1,0,t)},c.Pipeline.prototype.before=function(e,t){c.Pipeline.warnIfFunctionNotRegistered(t);e=this._stack.indexOf(e);if(-1==e)throw new Error("Cannot find existingFn");this._stack.splice(e,0,t)},c.Pipeline.prototype.remove=function(e){e=this._stack.indexOf(e);-1!=e&&this._stack.splice(e,1)},c.Pipeline.prototype.run=function(e){for(var t=[],n=e.length,o=this._stack.length,i=0;i<n;i++){for(var r=e[i],s=0;s<o&&void 0!==(r=this._stack[s](r,i,e));s++);void 0!==r&&t.push(r)}return t},c.Pipeline.prototype.reset=function(){this._stack=[]},c.Pipeline.prototype.toJSON=function(){return this._stack.map(function(e){return c.Pipeline.warnIfFunctionNotRegistered(e),e.label})},(c.Vector=function(){this._magnitude=null,this.list=void 0,this.length=0}).Node=function(e,t,n){this.idx=e,this.val=t,this.next=n},c.Vector.prototype.insert=function(e,t){this._magnitude=void 0;var n=this.list;if(n)if(e<n.idx)this.list=new c.Vector.Node(e,t,n);else{for(var o=n,i=n.next;null!=i;){if(e<i.idx)return o.next=new c.Vector.Node(e,t,i),this.length++;i=(o=i).next}o.next=new c.Vector.Node(e,t,i)}else this.list=new c.Vector.Node(e,t,n);return this.length++},c.Vector.prototype.magnitude=function(){if(this._magnitude)return this._magnitude;for(var e,t=this.list,n=0;t;)n+=(e=t.val)*e,t=t.next;return this._magnitude=Math.sqrt(n)},c.Vector.prototype.dot=function(e){for(var t=this.list,n=e.list,o=0;t&&n;)t.idx<n.idx?t=t.next:n=(t.idx>n.idx||(o+=t.val*n.val,t=t.next),n.next);return o},c.Vector.prototype.similarity=function(e){return this.dot(e)/(this.magnitude()*e.magnitude())},(c.SortedSet=function(){this.length=0,this.elements=[]}).load=function(e){var t=new this;return t.elements=e,t.length=e.length,t},c.SortedSet.prototype.add=function(){for(var e,t=0;t<arguments.length;t++)~this.indexOf(e=arguments[t])||this.elements.splice(this.locationFor(e),0,e);this.length=this.elements.length},c.SortedSet.prototype.toArray=function(){return this.elements.slice()},c.SortedSet.prototype.map=function(e,t){return this.elements.map(e,t)},c.SortedSet.prototype.forEach=function(e,t){return this.elements.forEach(e,t)},c.SortedSet.prototype.indexOf=function(e){for(var t=0,n=this.elements.length-1;t<=n;){var o=t+Math.floor((n-t+1)/2),i=this.elements[o];if(i===e)return o;i<e?t=o+1:n=o-1}return-1},c.SortedSet.prototype.locationFor=function(e){for(var t=0,n=this.elements.length-1;t<=n;){var o=t+Math.floor((n-t+1)/2),i=this.elements[o];if(i===e)return o;i<e?t=o+1:n=o-1}return e<i?o:i<e?o+1:void 0},c.SortedSet.prototype.intersect=function(e){for(var t=new c.SortedSet,n=0,o=0,i=this.length,r=e.length,s=this.elements,u=e.elements;!(i-1<n||r-1<o);)s[n]!==u[o]?s[n]<u[o]?n++:s[n]>u[o]&&o++:(t.add(s[n]),n++,o++);return t},c.SortedSet.prototype.clone=function(){var e=new c.SortedSet;return e.elements=this.toArray(),e.length=e.elements.length,e},c.SortedSet.prototype.union=function(e){var e=this.length>=e.length?(t=this,e):(t=e,this),t=t.clone();return t.add.apply(t,e.toArray()),t},c.SortedSet.prototype.toJSON=function(){return this.toArray()},(c.Index=function(){this._fields=[],this._ref="id",this.pipeline=new c.Pipeline,this.documentStore=new c.DocumentStore,this.tokenStore=new c.TokenStore,this.corpusTokens=new c.SortedSet,this.eventEmitter=new c.EventEmitter,this._idfCache={},this.on("add","remove","update",function(){this._idfCache={}}.bind(this))}).prototype.on=function(){var e=Array.prototype.slice.call(arguments);return this.eventEmitter.addListener.apply(this.eventEmitter,e)},c.Index.prototype.off=function(e,t){return this.eventEmitter.removeListener(e,t)},c.Index.load=function(e){e.version!==c.version&&c.utils.warn("version mismatch: current "+c.version+" importing "+e.version);var t=new this;return t._fields=e.fields,t._ref=e.ref,t.documentStore=c.DocumentStore.load(e.documentStore),t.tokenStore=c.TokenStore.load(e.tokenStore),t.corpusTokens=c.SortedSet.load(e.corpusTokens),t.pipeline=c.Pipeline.load(e.pipeline),t},c.Index.prototype.field=function(e,t){e={name:e,boost:(t=t||{}).boost||1};return this._fields.push(e),this},c.Index.prototype.ref=function(e){return this._ref=e,this},c.Index.prototype.add=function(n,e){var o={},i=new c.SortedSet,t=n[this._ref],e=void 0===e||e;this._fields.forEach(function(e){var t=this.pipeline.run(c.tokenizer(n[e.name]));o[e.name]=t,c.SortedSet.prototype.add.apply(i,t)},this),this.documentStore.set(t,i),c.SortedSet.prototype.add.apply(this.corpusTokens,i.toArray());for(var r=0;r<i.length;r++){var s=i.elements[r],u=this._fields.reduce(function(e,t){var n=o[t.name].length;return n?e+o[t.name].filter(function(e){return e===s}).length/n*t.boost:e},0);this.tokenStore.add(s,{ref:t,tf:u})}e&&this.eventEmitter.emit("add",n,this)},c.Index.prototype.remove=function(e,t){var n,o=e[this._ref],t=void 0===t||t;this.documentStore.has(o)&&(n=this.documentStore.get(o),this.documentStore.remove(o),n.forEach(function(e){this.tokenStore.remove(e,o)},this),t)&&this.eventEmitter.emit("remove",e,this)},c.Index.prototype.update=function(e,t){t=void 0===t||t;this.remove(e,!1),this.add(e,!1),t&&this.eventEmitter.emit("update",e,this)},c.Index.prototype.idf=function(e){var t,n="@"+e;return Object.prototype.hasOwnProperty.call(this._idfCache,n)?this._idfCache[n]:(t=1,0<(e=this.tokenStore.count(e))&&(t=1+Math.log(this.documentStore.length/e)),this._idfCache[n]=t)},c.Index.prototype.search=function(e){var e=this.pipeline.run(c.tokenizer(e)),l=new c.Vector,n=[],o=this._fields.reduce(function(e,t){return e+t.boost},0);return e.some(function(e){return this.tokenStore.has(e)},this)?(e.forEach(function(u,e,t){var a=t.filter(function(e){return e===u}).length/t.length*this._fields.length*o,h=this,t=this.tokenStore.expand(u).reduce(function(e,t){var n,o=h.corpusTokens.indexOf(t),i=h.idf(t),r=1,s=new c.SortedSet;return t!==u&&(n=Math.max(3,t.length-u.length),r=1/Math.log(n)),-1<o&&l.insert(o,a*i*r),Object.keys(h.tokenStore.get(t)).forEach(function(e){s.add(e)}),e.union(s)},new c.SortedSet);n.push(t)},this),n.reduce(function(e,t){return e.intersect(t)}).map(function(e){return{ref:e,score:l.similarity(this.documentVector(e))}},this).sort(function(e,t){return t.score-e.score})):[]},c.Index.prototype.documentVector=function(e){for(var t=this.documentStore.get(e),n=t.length,o=new c.Vector,i=0;i<n;i++){var r=t.elements[i],s=this.tokenStore.get(r)[e].tf,u=this.idf(r);o.insert(this.corpusTokens.indexOf(r),s*u)}return o},c.Index.prototype.toJSON=function(){return{version:c.version,fields:this._fields,ref:this._ref,documentStore:this.documentStore.toJSON(),tokenStore:this.tokenStore.toJSON(),corpusTokens:this.corpusTokens.toJSON(),pipeline:this.pipeline.toJSON()}},c.Index.prototype.use=function(e){var t=Array.prototype.slice.call(arguments,1);t.unshift(this),e.apply(this,t)},(c.DocumentStore=function(){this.document_store={},this.length=0}).load=function(n){var e=new this;return e.length=n.length,e.document_store=Object.keys(n.document_store).reduce(function(e,t){return e[t]=c.SortedSet.load(n.document_store[t]),e},{}),e},c.DocumentStore.prototype.set=function(e,t){this.has(e)||this.length++,this.document_store[e]=t},c.DocumentStore.prototype.get=function(e){return this.document_store[e]},c.DocumentStore.prototype.has=function(e){return e in this.document_store},c.DocumentStore.prototype.remove=function(e){this.has(e)&&(delete this.document_store[e],this.length--)},c.DocumentStore.prototype.toJSON=function(){return{document_store:this.document_store,length:this.length}},h={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},l={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},e="[aeiouy]",t="[^aeiou][^aeiouy]*",p=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),d=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),f=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*([aeiouy][aeiou]*)?$"),m=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy]"),y=/^(.+?)(ss|i)es$/,g=/^(.+?)([^s])s$/,v=/^(.+?)eed$/,S=/^(.+?)(ed|ing)$/,w=/.$/,x=/(at|bl|iz)$/,k=new RegExp("([^aeiouylsz])\\1$"),_=new RegExp("^"+t+e+"[^aeiouwxy]$"),b=/^(.+?[^aeiou])y$/,E=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,F=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,O=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,P=/^(.+?)(s|t)(ion)$/,N=/^(.+?)e$/,$=/ll$/,T=new RegExp("^"+t+e+"[^aeiouwxy]$"),c.Pipeline.registerFunction(c.stemmer=function(e){var t,n,o,i,r,s,u,a;return e.length<3||("y"==(n=e.substr(0,1))&&(e=n.toUpperCase()+e.substr(1)),u=g,(r=y).test(e)?e=e.replace(r,"$1$2"):u.test(e)&&(e=e.replace(u,"$1$2")),u=S,(r=v).test(e)?(a=r.exec(e),(r=p).test(a[1])&&(e=e.replace(r=w,""))):u.test(e)&&(s=(a=u.exec(e))[1],(u=m).test(s))&&(e=s,o=k,i=_,(u=x).test(e)?e+="e":o.test(e)?e=e.replace(r=w,""):i.test(e)&&(e+="e")),(r=b).test(e)&&(e=(s=(a=r.exec(e))[1])+"i"),(r=E).test(e)&&(s=(a=r.exec(e))[1],t=a[2],(r=p).test(s))&&(e=s+h[t]),(r=F).test(e)&&(s=(a=r.exec(e))[1],t=a[2],(r=p).test(s))&&(e=s+l[t]),u=P,(r=O).test(e)?(s=(a=r.exec(e))[1],(r=d).test(s)&&(e=s)):u.test(e)&&(s=(a=u.exec(e))[1]+a[2],(u=d).test(s))&&(e=s),(r=N).test(e)&&(s=(a=r.exec(e))[1],u=f,o=T,(r=d).test(s)||u.test(s)&&!o.test(s))&&(e=s),u=d,(r=$).test(e)&&u.test(e)&&(e=e.replace(r=w,"")),"y"==n&&(e=n.toLowerCase()+e.substr(1))),e},"stemmer"),(c.stopWordFilter=function(e){return-1===c.stopWordFilter.stopWords.indexOf(e)?e:void 0}).stopWords=new c.SortedSet,c.stopWordFilter.stopWords.length=119,c.stopWordFilter.stopWords.elements=["","a","able","about","across","after","all","almost","also","am","among","an","and","any","are","as","at","be","because","been","but","by","can","cannot","could","dear","did","do","does","either","else","ever","every","for","from","get","got","had","has","have","he","her","hers","him","his","how","however","i","if","in","into","is","it","its","just","least","let","like","likely","may","me","might","most","must","my","neither","no","nor","not","of","off","often","on","only","or","other","our","own","rather","said","say","says","she","should","since","so","some","than","that","the","their","them","then","there","these","they","this","tis","to","too","twas","us","wants","was","we","were","what","when","where","which","while","who","whom","why","will","with","would","yet","you","your"],c.Pipeline.registerFunction(c.stopWordFilter,"stopWordFilter"),c.Pipeline.registerFunction(c.trimmer=function(e){return e.replace(/^\W+/,"").replace(/\W+$/,"")},"trimmer"),(c.TokenStore=function(){this.root={docs:{}},this.length=0}).load=function(e){var t=new this;return t.root=e.root,t.length=e.length,t},c.TokenStore.prototype.add=function(e,t,n){for(var o,n=n||this.root,i=0;i<=e.length-1;)(o=e[i])in n||(n[o]={docs:{}}),i+=1,n=n[o];n.docs[t.ref]=t,this.length+=1},c.TokenStore.prototype.has=function(e){if(!e)return!1;for(var t=this.root,n=0;n<e.length;n++){if(!t[e[n]])return!1;t=t[e[n]]}return!0},c.TokenStore.prototype.getNode=function(e){if(!e)return{};for(var t=this.root,n=0;n<e.length;n++){if(!t[e[n]])return{};t=t[e[n]]}return t},c.TokenStore.prototype.get=function(e,t){return this.getNode(e,t).docs||{}},c.TokenStore.prototype.count=function(e,t){return Object.keys(this.get(e,t)).length},c.TokenStore.prototype.remove=function(e,t){if(e){for(var n=this.root,o=0;o<e.length;o++){if(!(e[o]in n))return;n=n[e[o]]}delete n.docs[t]}},c.TokenStore.prototype.expand=function(t,n,o){var e=(o=null==o?this.getNode(t):o).docs||{},n=n||[];return Object.keys(e).length&&n.push(t),Object.keys(o).forEach(function(e){"docs"!==e&&n.concat(this.expand(t+e,n,o[e]))},this),n},c.TokenStore.prototype.toJSON=function(){return{root:this.root,length:this.length}},t=this,e=function(){return c},"function"==typeof define&&define.amd?define(e):"object"==("undefined"==typeof exports?"undefined":_typeof(exports))?module.exports=c:t.lunr=c}();