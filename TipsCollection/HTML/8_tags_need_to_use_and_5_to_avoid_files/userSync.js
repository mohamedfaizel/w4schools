(function(){var f=window,r="//ads.pubmatic.com/AdServer/js/showad.js#PIX&kdntuid=1&SPug=true",a=function(A){return typeof A==="function"},v=console.log.bind(console,"PubMatic:"),l=function(E,D){var B=0,A=E.length,C=false;for(;B<A;B++){if(E[B]===D){C=true;break}}return C},n=function(){return"https:"},d=function(B){var C="";for(var A in B){if(B.hasOwnProperty(A)){C+=A+"="+encodeURIComponent(B[A])+"&"}}return C},p=function(B){var A=f.document.createElement("iframe");A.src=B;A.style.height="0px";A.style.width="0px";A.style.display="none";A.height=0;A.width=0;A.border="0px";A.hspace="0";A.vspace="0";A.marginWidth="0";A.marginHeight="0";A.style.border="0";A.scrolling="no";A.frameBorder="0";f.document.getElementsByTagName("script")[0].parentNode.appendChild(A)},k=function(A,D){var C=document.createElement("script");C.type="text/javascript";C.src=A;if(a(D)){C.onload=C.onreadystatechange=D}var B=document.getElementsByTagName("script")[0];B&&B.parentNode&&a(B.parentNode.appendChild)&&B.parentNode.appendChild(C)},u=function(B){var D={},G=B.split("?")[1];if(G){var F=G.split("&");for(var C=0,A=F.length;C<A;C++){var E=F[C].split("=");if(E.length==2){D[E[0]]=E[1]}}}return D},b="PubMatic",i="PubMatic_USP",h=(function(){try{return f.localStorage&&a(f.localStorage.getItem)&&a(f.localStorage.setItem)}catch(A){return false}})(),j=function(A,B){function E(){var M={};function N(){if(M.getConsentData&&M.getVendorConsents){A(M)}}return{consentDataCallback:function(O){M.getConsentData=O;N()},vendorConsentsCallback:function(O){M.getVendorConsents=O;N()}}}function L(){window.__cmp("getConsentData",null,C.consentDataCallback);window.__cmp("getVendorConsents",null,C.vendorConsentsCallback)}var C=E();var J={};if(window.__cmp){if(typeof window.__cmp==="function"){L()}else{setTimeout(function(){if(typeof window.__cmp==="function"){L()}},500)}}else{if(window!==top){if(F()&&typeof window.$sf.ext.cmp==="function"){K("getConsentData",C.consentDataCallback);K("getVendorConsents",C.vendorConsentsCallback)}else{var H=window;var G;while(!G){try{if(H.frames.__cmpLocator){G=H}}catch(I){}if(H===window.top){break}H=H.parent}D("getConsentData",G,C.consentDataCallback);D("getVendorConsents",G,C.vendorConsentsCallback)}}else{setTimeout(function(){if(typeof window.__cmp==="function"){L()}},500)}}function F(){return !!(window.$sf&&window.$sf.ext)}function K(N,O){function M(R,Q){if(R==="cmpReturn"){var P=(N==="getConsentData")?Q.vendorConsentData:Q.vendorConsents;O(P)}}window.$sf.ext.register(1,1,M);window.$sf.ext.cmp(N)}function D(O,R,Q){window.__cmp=function(U,S,X){if(!R){P();var W="CMP not found";return B(W)}var T=Math.random()+"";var V={__cmpCall:{command:U,parameter:S,callId:T}};J[T]=X;R.postMessage(V,"*")};window.addEventListener("message",N,false);window.__cmp(O,null,M);function N(U){var T=(typeof U.data==="string"&&l(U.data,"cmpReturn"))?JSON.parse(U.data):U.data;if(T.__cmpReturn&&T.__cmpReturn.callId){var S=T.__cmpReturn;if(typeof J[S.callId]!=="undefined"){J[S.callId](S.returnValue,S.success);delete J[S.callId]}}}function P(){window.removeEventListener("message",N,false)}function M(S){P();Q(S)}}},y=function(B){function C(D){if(D){if(D.getConsentData&&D.getConsentData.consentData){w(B,"c",D.getConsentData.consentData)}else{if(D.getVendorConsents&&D.getVendorConsents.metadata){w(B,"c",D.getVendorConsents.metadata)}}}}function A(){}j(C,A)},w=function(D,A,C){var B;if(!h){return}try{B=f.localStorage.getItem(b)}catch(E){}if(B&&typeof B==="string"){try{B=JSON.parse(B)}catch(E){B={}}}else{B={}}if(B){if(!B.hasOwnProperty(D)){B[D]={}}B[D].t=(new Date()).getTime();B[D][A]=C;if(A=="c"){B[D]["g"]=1}}try{f.localStorage.setItem(b,JSON.stringify(B))}catch(E){}},m=function(D){var C={c:""};if(!h){return C}var B;try{B=f.localStorage.getItem(b)}catch(E){}if(B&&typeof B==="string"){try{B=JSON.parse(B)}catch(E){B={}}if(B.hasOwnProperty(D)){var A=B[D];if(A&&A.c&&A.t){if(A.t&&parseInt(A.t)>((new Date()).getTime()-(24*60*60*1000))){C.c=A.c}else{}}}}return C},c=function(C,D){var A=1;function J(){var K={};function L(){if(K.usPrivacy){C(K)}else{}}return{consentDataCallback:function(M,N){if(N&&M.uspString){K.usPrivacy=M.uspString}L()}}}var B=J();var I={};try{window.__uspapi("getUSPData",A,B.consentDataCallback)}catch(H){var G=window;var F;while(!F){try{if(G.frames.__uspapiLocator){F=G}}catch(H){}if(G===window.top){break}G=G.parent}if(!F){return D("USP CMP not found.")}E("getUSPData",F,B.consentDataCallback)}function E(M,L,O){window.__uspapi=function(R,P,T){var Q=Math.random()+"";var S={__uspapiCall:{command:R,version:P,callId:Q}};I[Q]=T;L.postMessage(S,"*")};window.addEventListener("message",K,false);window.__uspapi(M,A,N);function K(Q){var P=Q&&Q.data&&Q.data.__uspapiReturn;if(P&&P.callId){if(typeof I[P.callId]!=="undefined"){I[P.callId](P.returnValue,P.success);delete I[P.callId]}}}function N(P,Q){window.removeEventListener("message",K,false);O(P,Q)}}},e=function(B){function C(E){var D=!!(E&&E.usPrivacy);if(!D){return}g(B,"c",E.usPrivacy)}function A(){}c(C,A)},g=function(D,A,C){var B;if(!h){return}try{B=f.localStorage.getItem(i)}catch(E){}if(B&&typeof B==="string"){try{B=JSON.parse(B)}catch(E){B={}}}else{B={}}if(B){if(!B.hasOwnProperty(D)){B[D]={}}B[D].t=(new Date()).getTime();B[D][A]=C}try{f.localStorage.setItem(i,JSON.stringify(B))}catch(E){}},o=function(D){var C={c:""};if(!h){return C}var B;try{B=f.localStorage.getItem(i)}catch(E){}if(B&&typeof B==="string"){try{B=JSON.parse(B)}catch(E){B={}}if(B.hasOwnProperty(D)){var A=B[D];if(A&&A.c&&A.t){if(A.t&&parseInt(A.t)>((new Date()).getTime()-(24*60*60*1000))){C.c=A.c}else{}}}}return C},q="nFIn8aLzbd",k=function(A,D){var C=document.createElement("script");C.type="text/javascript";C.src=A;if(a(D)){C.onload=C.onreadystatechange=D}var B=document.getElementsByTagName("script")[0];B&&B.parentNode&&a(B.parentNode.appendChild)&&B.parentNode.appendChild(C)},z=function(A){if(typeof A!=="function"){return}var B=false;k("https://cdn.digitru.st/prod/1/digitrust.min.js",function(){if(!B&&(!this.readyState||this.readyState=="complete")){B=true;DigiTrust&&a(DigiTrust.initialize)&&DigiTrust.initialize({member:q},A)}})},t=function(D,F){if(!a(D)){return}function B(){var G=window.DigiTrust&&a(window.DigiTrust.getUser)&&window.DigiTrust.getUser({member:q});return(G&&G.success&&G.identity)||null}function A(H,G){if(!H||(H.privacy&&H.privacy.optout)){G(null)}else{G({source:"digitru.st",uids:[{id:H.id||"",atype:1,ext:{keyv:parseInt(H.keyv)||0}}]})}}if(F!==true){var E=B();A(E,D)}else{function C(K){function J(){var M=window;var L=null;while(!L){try{if(M.frames.__dtLocator){L=M}}catch(N){}if(M===window.top){break}M=M.parent}return L}function G(L){if(L.data.type==="Digitrust.shareIdToIframe.response"){delete L.data.type;window.removeEventListener("message",G,false);K(L.data)}}var I=J();var H={type:"Digitrust.shareIdToIframe.request"};window.addEventListener("message",G,false);if(I&&a(I.postMessage)){I.postMessage(H,"*")}}C(function(G){A(G.identity||{},D)})}},s=function(A){var B=[];t(function(C){if(C!==null){B.push(C)}});if(B.length>0){A.eids=JSON.stringify(B)}},x=(function(){var D="PM-UL-Sync",C=2,B=[],G=function(M){var P="",O,J,L=0,K;try{P=document.cookie}catch(N){}O=P.split("; ");J=O.length;for(;L<J;L++){K=O[L].split("=");if(K[0]===M){return K[1]}}return""},I=function(K,Q,R,S,M,J){var L,P,N=function(){var U="Chrome/",T=U.length;ua=navigator.userAgent,chromePatternIndex=ua.indexOf(U),chromeVersion=0;if(chromePatternIndex>-1){chromeVersion=parseInt(ua.substr(chromePatternIndex+T,3));if(chromeVersion>=67){return true}}return false};L=new Date(new Date().getTime()+R*86400000);P=K+"="+Q+";expires="+L.toGMTString()+";path="+S+";domain="+M;if(J){P+=";secure"}if(N()){P+=";SameSite=None"}try{document.cookie=P}catch(O){}},E=function(){var J={};try{J=JSON.parse(G(D))}catch(K){}return J},H=function(J,K){if(J.pubs.hasOwnProperty(K)){if(J.pubs[K]==1){return true}else{if(J.pubs[K]==0){return false}}}else{if(J.pubs.hasOwnProperty("*")){if(J.pubs["*"]==1){return true}else{if(J.pubs["*"]==0){return false}}}else{return false}}},A=function(J){return function(){var K=E(),L=(new Date()).getTime(),M=J.fH||24;K[J.id]=L+J.fH*60*60*1000;I(D,JSON.stringify(K),30,"/","",true)}},F=function(Q,J){if(navigator.cookieEnabled===false){return}var L=E(),O=(new Date()).getTime();for(var M=0,K=B.length;M<K;M++){var N=B[M];if(a(N.name)){if(N.fileList&&N.fileList[J]!==1){continue}if(a(N.prefilter)){if(N.prefilter(Q)===false){continue}}var P=false;P=H(N,Q.p);if(!P){continue}if(!L.hasOwnProperty(N.id)||(L.hasOwnProperty(N.id)&&L[N.id]<O)){setTimeout((function(R){return function(){R.name(Q,A(R))}})(N),N.iDM||0);C--;if(C==0){break}}else{}}}};B.push({name:function(N,J){var M=false;var L;var K=3;var O=function(Q){if(M){return}var S=[];if(Q!==null){S.push(Q);try{var P=n()+"//image2.pubmatic.com/AdServer/Pug?vcode=bz0yJnR5cGU9MSZqcz0xJmNvZGU9MzQwMCZ0bD00MzIwMA==";P+=N.hasOwnProperty("p")?("&p="+N.p):"";P+="&eids="+encodeURIComponent(JSON.stringify(S));P+="&gdpr="+(N.hasOwnProperty("gdpr")?N.gdpr||"0":"0");P+="&gdpr_consent="+(N.hasOwnProperty("gdpr_consent")?encodeURIComponent(N.gdpr_consent||""):"");k(P);J();M=true;clearInterval(L)}catch(R){}}else{}if(--K===0){clearInterval(L);J()}};if(window.DigiTrust&&a(window.DigiTrust.getUser)){L=setInterval(function(){t(O)},300)}else{if(window===top){z(function(){L=setInterval(function(){t(O)},300)})}else{if(window!==top){L=setInterval(function(){t(O,true)},300)}}}},id:2,fH:24,iDM:0,pubs:{"*":1,157741:0},fileList:{"userSync.js":1,"user_sync.html":1,"showad.js":1,"mshowad.js":1},prefilter:function(J){return window.location.protocol==="https:"}});return F})();f.PubMaticSync=f.PubMaticSync||{};f.PubMaticSync.sync=function(A){var B={};A.delay=A.delay||0;B.p=A.pubId||"";B.s=A.siteId||"";B.predirect=A.url||"";B.userIdMacro=A.macro||"";setTimeout(function(){var D=f.__cmp?1:0;y(A.pubId);var E=m(A.pubId);D=(D?D:(A.gdpr?A.gdpr:0));B.gdpr_consent=E&&E.c?E.c:(A.gdprConsent||"");B.gdpr=B.gdpr_consent?1:(D||"0");e(A.pubId);var C=o(A.pubId);B.us_privacy=C&&C.c?C.c:A.us_privacy||"";p(n()+r+"&"+d(B));x(B,"userSync.js")},A.delay)}})();