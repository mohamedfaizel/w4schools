(window.hawkWebpackJsonP=window.hawkWebpackJsonP||[]).push([[62],{246:function(e,n,t){"use strict";t.r(n);var a=t(16),i=t.n(a),r=t(17),s=t.n(r),p=t(48),c=t.n(p),l=t(49),u=t.n(l),d=t(50),o=t.n(d),y=t(43),v=t.n(y),f=t(44),k=t.n(f),h=t(55),w=t(95),m=function(){return v.a.createElement(h.a,null,(function(e){var n=e.data,t=e.clickLink,a=e.translate;return n=n||{},v.a.createElement("li",null,v.a.createElement(w.a,{trackLinkClick:t,attributes:{href:n.url}},v.a.createElement("span",null,a(n.link_text))))}))},b=function(){return v.a.createElement("ul",null,v.a.createElement(m,null))},A=t(418),g=function(e){function n(){return i()(this,n),c()(this,u()(n).apply(this,arguments))}return o()(n,e),s()(n,[{key:"sendAppeared",value:function(){var e=this.props,n=e.sendAnalytics,t=e.data;t=t||{},n&&n({gaData:{eventCategory:"Navigation",eventLabel:t.link_text,dimension76:t.url},type:"appeared"})}},{key:"sendViewed",value:function(){var e=this.props,n=e.data;(0,e.sendAnalytics)({gaData:{eventCategory:"Navigation",eventLabel:n.link_text,dimension76:n.url},type:"viewed"})}},{key:"clickLink",value:function(e){var n=this.props,t=n.sendAnalytics,a=n.data;a=a||{},t&&t({gaData:{eventCategory:"Navigation",eventLabel:a.link_text,dimension76:a.url,dimension115:"Deals page"},prefix:"Click from",event:e})}},{key:"render",value:function(){return v.a.createElement(A.a,Object.assign({},this.props,{clickLink:this.clickLink.bind(this),sendAppeared:this.sendAppeared.bind(this),sendViewed:this.sendViewed.bind(this)}),v.a.createElement(b,null))}}]),n}(v.a.Component);g.propTypes={data:k.a.object,sendViewedEvent:k.a.bool,sendAnalytics:k.a.func,startViewportTracking:k.a.func};n.default=g},418:function(e,n,t){"use strict";var a=t(0),i=t.n(a),r=t(1),s=t.n(r),p=t(16),c=t.n(p),l=t(17),u=t.n(l),d=t(48),o=t.n(d),y=t(49),v=t.n(y),f=t(50),k=t.n(f),h=t(43),w=t.n(h),m=t(44),b=t.n(m),A=t(55),g=function(e){function n(e){var t;c()(this,n);var a=(t=o()(this,v()(n).call(this,e))).getDisplayType();return e.setAnalyticsAttribute&&e.setAnalyticsAttribute("displayType",a),t.state={displayType:a},t}var t,a;return k()(n,e),u()(n,[{key:"componentDidMount",value:(a=s()(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=this.props.startViewportTracking)&&n(),e.next=4,this.sendAppeared();case 4:case"end":return e.stop()}}),e,this)}))),function(){return a.apply(this,arguments)})},{key:"componentDidUpdate",value:function(){var e=this.props,n=e.sendViewedEvent,t=e.sendAnalytics;n&&t&&this.sendViewed()}},{key:"sendAppeared",value:(t=s()(i.a.mark((function e(){var n,t,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,t=n.sendAnalytics,a=n.loadTime,r=n.sendAppeared,!t){e.next=8;break}if(!r){e.next=7;break}return e.next=5,r();case 5:e.next=8;break;case 7:t({gaData:{metric1:a},type:"appeared"});case 8:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"sendViewed",value:function(){var e=this.props,n=e.sendViewed,t=e.sendAnalytics;n?n():t({type:"viewed"})}},{key:"getDisplayType",value:function(){var e=this.props.getDisplayType;return e?e():""}},{key:"render",value:function(){var e=this.state.displayType;return w.a.createElement(A.c,Object.assign({},this.props,{displayType:e}))}}]),n}(w.a.Component);g.propTypes={sendAnalytics:b.a.func,startViewportTracking:b.a.func,setAnalyticsAttribute:b.a.func,sendViewedEvent:b.a.bool,loadTime:b.a.number,getDisplayType:b.a.func,sendAppeared:b.a.func,sendViewed:b.a.func},n.a=g}}]);