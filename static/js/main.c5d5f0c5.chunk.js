(this["webpackJsonpfind-flats"]=this["webpackJsonpfind-flats"]||[]).push([[0],{19:function(t,e,n){},26:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(7),i=n.n(c),s=(n(19),n(6)),o=n(9),u=n(2),l=n(3),p=n.n(l),h=n(4),d=n(5),b=n(8);function f(t){return j.apply(this,arguments)}function j(){return(j=Object(h.a)(p.a.mark((function t(e){var n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=null,r=null,t.prev=1,t.next=4,fetch(e.url,e);case 4:n=t.sent,t.next=10;break;case 7:throw t.prev=7,t.t0=t.catch(1),new Error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430");case 10:return t.prev=10,t.next=13,n.json();case 13:r=t.sent,t.next=19;break;case 16:throw t.prev=16,t.t1=t.catch(10),new Error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445");case 19:if(n.ok){t.next=21;break}throw new Error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430");case 21:return console.log("API:",r),t.abrupt("return",r);case 23:case"end":return t.stop()}}),t,null,[[1,7],[10,16]])})))).apply(this,arguments)}var O={"Content-Type":"application/json",Accept:"*/*"},v=new(function(){function t(){Object(d.a)(this,t)}return Object(b.a)(t,[{key:"generateUrl",value:function(t){return"https://rickandmortyapi.com/api/character/".concat(t)}},{key:"getRickAndMorty",value:function(){var t=Object(h.a)(p.a.mark((function t(e){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f({url:this.generateUrl(e),method:"GET",headers:O});case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()}]),t}()),E=new function t(){var e=this;Object(d.a)(this,t),this.GET_CARD="GET_CARD",this.GET_CARD_OK="GET_CARD_OK",this.GET_CARD_ERROR="GET_CARD_ERROR",this.CHANGE_FILTER_STATE="CHANGE_FILTER_STATE",this.changeFilterState=function(t){return{type:e.CHANGE_FILTER_STATE,payload:t}},this.getCard=function(t){return function(){var n=Object(h.a)(p.a.mark((function n(r){var a;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=function(t){return{image:t.image,liked:!1,id:t.id}},r({type:e.GET_CARD}),n.prev=2,n.t0=r,n.t1=e.GET_CARD_OK,n.t2=a,n.next=8,v.getRickAndMorty(t);case 8:n.t3=n.sent,n.t4=(0,n.t2)(n.t3),n.t5={type:n.t1,payload:n.t4},(0,n.t0)(n.t5),n.next=17;break;case 14:n.prev=14,n.t6=n.catch(2),r({type:e.GET_CARD_ERROR,payload:n.t6});case 17:case"end":return n.stop()}}),n,null,[[2,14]])})));return function(t){return n.apply(this,arguments)}}()}},_={filter:!1,loading:!1};var R=Object(s.b)({sidebar:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case E.CHANGE_FILTER_STATE:return Object(u.a)(Object(u.a)({},t),{},{filter:e.payload});case E.GET_CARD:return Object(u.a)(Object(u.a)({},t),{},{loading:!0});case E.GET_CARD_OK:case E.GET_CARD_ERROR:return Object(u.a)(Object(u.a)({},t),{},{loading:!1});default:return Object(u.a)({},t)}}});var y=n(14),T=n(13),g=n(1),k=function(t){Object(y.a)(n,t);var e=Object(T.a)(n);function n(){return Object(d.a)(this,n),e.apply(this,arguments)}return Object(b.a)(n,[{key:"addDog",value:function(){var t,e,n=(t=1,e=671,Math.floor(Math.random()*(e-t+1))+t);this.props.dispatch(E.getCard(n))}},{key:"changeFilter",value:function(){this.props.dispatch(E.changeFilterState(!this.props.filter))}},{key:"render",value:function(){var t=this;return Object(g.jsxs)("div",{className:"sidebar",children:[Object(g.jsxs)("div",{className:"sidebar__filter",children:[Object(g.jsx)("h5",{className:"filter__title",children:"\u041e\u0442\u0444\u0438\u043b\u044c\u0442\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438"}),Object(g.jsx)("input",{className:"filter-input",id:"checkbox",type:"checkbox"}),Object(g.jsx)("label",{onClick:function(){return t.changeFilter()},className:"filter-label",htmlFor:"checkbox"})]}),Object(g.jsx)("button",{className:"sidebar__btn",onClick:function(){return t.addDog()},children:this.props.loading?"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u044e...":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443"})]})}}]),n}(a.a.PureComponent),A=Object(o.b)((function(t){return Object(u.a)({},t.sidebar)}))(k);var x=Object(s.a)((function(t){var e=t.dispatch,n=t.getState;return function(t){return function(r){return r instanceof Function?r(e,n):t(r)}}}))(s.c)(R);document.getElementById("sidebar")&&i.a.render(Object(g.jsx)(o.a,{store:x,children:Object(g.jsx)(A,{})}),document.getElementById("sidebar"))}},[[26,1,2]]]);
//# sourceMappingURL=main.c5d5f0c5.chunk.js.map