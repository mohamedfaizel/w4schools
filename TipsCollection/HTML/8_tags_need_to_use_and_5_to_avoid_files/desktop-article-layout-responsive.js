(window.bordeauxJsonP=window.bordeauxJsonP||[]).push([[5],{321:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return c}));var i=n(10),o=n(102),a=function(t,e,n){return Object(o.a)(window.document,t).map((function(t,o){return{slotify:{name:"".concat(e).concat(o+1),hook:t,type:i.c.BLOCK,align:i.a.CENTER,fluid:!0,whitelist:["sponsored-post"],position:n}}}))},r=a(".sponsored-post","sponsored",i.b.PREPEND),c=a(".article-sponsored-post","article-sponsored",i.b.APPEND)},325:function(t,e,n){"use strict";n.d(e,"h",(function(){return r})),n.d(e,"f",(function(){return c})),n.d(e,"g",(function(){return l})),n.d(e,"i",(function(){return p})),n.d(e,"d",(function(){return u})),n.d(e,"a",(function(){return d})),n.d(e,"c",(function(){return b})),n.d(e,"b",(function(){return f})),n.d(e,"e",(function(){return g}));var i=n(16),o=n(10),a=n(24),r={slotify:{name:"leaderboard",hook:Object(a.u)("#main"),type:o.c.BLOCK,position:o.b.BEFORE,align:o.a.CENTER,width:a.l,height:a.k,fixed:!1,preactivated:!0},boilerplate:!1,style:{marginTop:"20px",marginBottom:"20px"}},c={slotify:{name:"leaderboard",hook:Object(a.u)("#main"),type:o.c.BLOCK,position:o.b.BEFORE,align:o.a.CENTER,width:a.e,height:a.d,fixed:!1,preactivated:!0},boilerplate:!1,style:{marginTop:"20px",marginBottom:"20px"}},l={slotify:{name:"skyscrapers",hook:Object(a.u)("#main"),type:o.c.BLOCK,position:o.b.BEFORE,align:o.a.CENTER,width:0,height:0,fixed:!1,preactivated:!0},boilerplate:!1},p={slotify:{name:"topOfSidebar",hook:Object(a.u)("#sidebar"),type:o.c.BLOCK,position:o.b.PREPEND,align:o.a.CENTER,width:a.i,height:a.c,fixed:!0,preactivated:!0},backgroundColor:a.a,boilerplate:!0,style:{marginBottom:"20px"}},u={slotify:{name:"beforePopularBox",hook:Object(a.u)("#sidebar .popular-box","#newsletter section"),type:o.c.BLOCK,position:o.b.BEFORE,align:o.a.CENTER,width:a.i,height:a.c,fixed:!0,preactivated:!0},backgroundColor:a.a,boilerplate:!0},d={slotify:{name:"afterPopularBox",hook:Object(a.u)("#sidebar .popular-box","#newsletter section"),type:o.c.BLOCK,position:o.b.AFTER,align:o.a.CENTER,width:a.i,height:a.c,fixed:!0,preactivated:!0},backgroundColor:a.a,boilerplate:!0,style:{marginBottom:"20px"}},b=function(t){return[{slotify:{name:"beforeArticleComments",hook:t,type:o.c.INLINE_RIGHT,position:o.b.BEFORE,align:o.a.CENTER,width:a.i,height:a.c,fixed:!0,preactivated:!1},backgroundColor:a.a,boilerplate:!0,style:{margin:"5px -325px 10px 25px"}}]},f=function(t){return Object(i.a)(document.querySelectorAll(t)).map((function(t,e){return{slotify:{name:"article comments ".concat(e),hook:t,type:o.c.INLINE_RIGHT,position:o.b.BEFORE,align:o.a.CENTER,width:a.i,height:a.c,preactivated:!1},backgroundColor:a.a,boilerplate:!0,style:{margin:"5px -325px 10px 25px"}}}))},g=(Object(a.u)("#wrapper-gallery"),o.c.BLOCK,o.b.BEFORE,o.a.CENTER,a.l,a.k,{slotify:{name:"belowGallery",hook:Object(a.u)("#wrapper-gallery"),type:o.c.BLOCK,position:o.b.AFTER,align:o.a.CENTER,width:a.l,height:a.k,fixed:!1,preactivated:!0},boilerplate:!1,style:{marginTop:"20px",marginBottom:"20px"}})},339:function(t,e,n){"use strict";n.d(e,"c",(function(){return u})),n.d(e,"b",(function(){return d})),n.d(e,"a",(function(){return b}));var i=n(21),o=n(16),a=n(10),r=n(24),c=n(102),l=n(104),p=function(){return{type:a.c.INLINE_RIGHT,margin:"-30px -325px 10px 25px"}},u=function(t){return Object(c.a)(window.document,t).filter((function(t,e,n){var i=e===n.length-1,o=t.getBoundingClientRect().top+window.pageYOffset>3500;return o&&i?function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=e.getBoundingClientRect().height+n;if(i<r.c){var o=e.nextElementSibling;return!(!o||"P"!==e.nextElementSibling.nodeName)&&t(o,i)}return!0}(t):o})).map((function(t,e){var n=t.nextElementSibling,i=n&&Object(l.a)(3,r.q,n),o=i?"single":"double",c=i?r.j:r.c;return{slotify:{name:"".concat(o,"-height-image-").concat(e),hook:t,specifyInline:p,type:a.c.INLINE,position:a.b.BEFORE,align:a.a.CENTER,width:r.i,height:c,preactivated:!1},boilerplate:!0,backgroundColor:r.a}}))},d=function(){var t=Object(c.a)(window.document,"#article-body > .fancy-box"),e=Object(c.a)(window.document,"#article-body > FIGURE").filter((function(t){return t.firstChild&&"BLOCKQUOTE"===t.firstChild.tagName}));return[].concat(Object(o.a)(t),Object(o.a)(e)).filter((function(t){return t.getBoundingClientRect().top+window.pageYOffset>3500})).map((function(t,e){return{slotify:{name:"double-height-furniture-".concat(e),hook:t,specifyInline:p,type:a.c.INLINE,position:a.b.BEFORE,align:a.a.CENTER,width:r.i,height:r.c,preactivated:!1},boilerplate:!0,backgroundColor:r.a}}))},b=function(t,e){var n,c=arguments.length>2&&void 0!==arguments[2]&&arguments[2],l=Object(r.n)(),p=Object(r.t)([500,1e3,1/0],t,e,l),u=Object(i.a)(p,3),d=(u[0],u[1]),b=u[2],f=Object(r.s)([175,350,1/0],t,"#article-body [data-bordeaux-image-check]",l),g=Object(i.a)(f,3),s=(g[0],g[1]),h=g[2],m={type:a.c.INLINE_RIGHT,margin:"5px ".concat(c?"-325px":"0px"," 10px 25px")},E=!1,O=function(){return E=!E,m},y=function(){return O()},C=!1,x=window.pageYOffset,R=!1,j=h.concat(b),w=s.concat(d),N=(n=[]).concat.apply(n,Object(o.a)(j.filter((function(t){return t.element.getBoundingClientRect().top+x>3500})).map((function(t,e){return[{slotify:{name:"double-height-".concat(e,"-").concat(t.approximateHeight),specifyInline:y,hook:t.element,type:a.c.INLINE,position:a.b.BEFORE,align:a.a.CENTER,width:r.i,height:r.c,preactivated:!1},boilerplate:!0,backgroundColor:r.a}].concat(Object(o.a)(C&&Object(r.m)(l,t.element,(function(t){return"P"===t.nodeName&&t.textContent.length}),!1)>300&&t.element.getBoundingClientRect().top+x>3500?[{slotify:{name:"mid-leaderboard-".concat(t.approximateHeight),hook:t.element,specifyInline:y,type:a.c.BLOCK,position:a.b.AFTER,align:a.a.CENTER,width:r.e,height:r.j,preactivated:!1},boilerplate:!0,backgroundColor:r.a}]:[]))})))),B=w.filter((function(t){return t.element.getBoundingClientRect().top+x>3500})).map((function(t,e,n){return R&&e===n.length-1&&t.element.getBoundingClientRect().top+x>3500?{slotify:{name:"final-leaderboard",hook:t.element,type:a.c.BLOCK,position:a.b.BEFORE,align:a.a.CENTER,width:r.e,height:r.j,preactivated:!1},boilerplate:!0,backgroundColor:r.a}:{slotify:{name:"single-height-".concat(e,"-").concat(t.approximateHeight),hook:t.element,specifyInline:y,type:a.c.INLINE,position:a.b.BEFORE,align:a.a.CENTER,width:r.i,height:r.j,preactivated:!1},boilerplate:!0,backgroundColor:r.a}}));return[].concat(Object(o.a)(B),Object(o.a)(N))}},399:function(t,e,n){"use strict";n.r(e),n.d(e,"statics",(function(){return p})),n.d(e,"slots",(function(){return u}));var i=n(16),o=n(24),a=n(325),r=n(339),c=n(321),l=n(27),p=[a.f,a.i,a.d,a.a,a.g],u=function(t,e){var n=e.site,u=e.locale,d=Object(o.v)(n),b=t.dfpConfig.incremental||l.e.includes(u),f=window.document.querySelector("#article-comments"),g=Object(a.b)(".xenforo-comment"),s=[].concat(p,Object(i.a)(g),Object(i.a)(f?Object(a.c)(f):[]),Object(i.a)(Object(r.a)(n,"#article-body > p",b)),Object(i.a)(b?Object(r.c)("#article-body > [data-bordeaux-image-check]"):[]),Object(i.a)(Object(r.b)()),Object(i.a)(d?c.a:c.b));return{slots:s}}}}]);