(this["webpackJsonpalbums-app"]=this["webpackJsonpalbums-app"]||[]).push([[0],{49:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),r=n(21),c=n.n(r),l=(n(49),n(14)),o=n(28),s=n(38),d=n(10),u="FETCH_ALBUMS_REQUEST",j="FETCH_SUCCESS_LIST",p="FETCH_SUCCESS_LIST_ITEM",b="FETCH_ERROR_LIST_ITEM",f="FETCH_ERROR_LIST",m={loading:!1,list:[],listItems:[],error:""},h=Object(o.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(d.a)(Object(d.a)({},e),{},{loading:!0});case j:return Object(d.a)(Object(d.a)({},e),{},{loading:!1,list:t.payload.list,error:""});case p:return Object(d.a)(Object(d.a)({},e),{},{loading:!1,listItems:t.payload.listItem,error:""});case f:return Object(d.a)(Object(d.a)({},e),{},{loading:!1,list:[],error:t.payload.error});case b:return Object(d.a)(Object(d.a)({},e),{},{loading:!1,listItem:[],error:t.payload.error});default:return e}}),Object(o.a)(s.a)),x=n(20),O=n(89),g=n(94),v=n(91),y=n(92),C=n(3),I=Object(O.a)((function(e){return{root:{display:"flex",padding:"0px 20px",width:"100%"},details:{display:"flex",justifyContent:"space-between",width:"100%"},content:{display:"flex",justifyContent:"center",flexDirection:"column",width:450},url:{textAlign:"left",color:"#9292A0",margin:"0px",marginTop:"5px"},cover:{width:50,height:50},title:{margin:"0px"},price:{display:"flex",justifyContent:"center",alignItems:"flex-end",flexDirection:"column"},amount:{margin:"0px",marginTop:"10px",fontSize:"14px",color:"#88C488"},time:{margin:"0px",marginTop:"10px",color:"#B6B6BF",fontSize:"14px"},imageContainer:{display:"flex",alignItems:"center",justifyContent:"center"},fix:{width:100}}}));var E=function(e){var t=e.item,n=I();return Object(C.jsxs)(g.a,{className:n.root,children:[Object(C.jsx)("div",{className:n.imageContainer,children:Object(C.jsx)(v.a,{className:n.cover,image:t.url})}),Object(C.jsxs)("div",{className:n.details,children:[Object(C.jsxs)(y.a,{className:n.content,children:[Object(C.jsx)("p",{className:n.title,children:t.title}),Object(C.jsx)("p",{className:n.url,children:t.thumbnailUrl})]}),Object(C.jsx)("div",{className:n.price,children:Object(C.jsxs)("div",{className:n.fix,children:[Object(C.jsx)("p",{className:n.amount,children:"$ 209"}),Object(C.jsx)("p",{className:n.time,children:"10:00 AM"})]})})]})]})};var S=function(e){var t=e.item,n=Object(l.d)((function(e){return{listItem:e.listItems,state:e}}),l.b),a=n.listItem,r=(n.state,Object(i.useState)([])),c=Object(x.a)(r,2),o=c[0],s=c[1];return Object(i.useEffect)((function(){var e=(null===a||void 0===a?void 0:a.filter((function(e){return e.albumId===t.userId}))).slice(0,10);s(e)}),[t]),Object(C.jsxs)("div",{children:[Object(C.jsx)("h2",{style:{paddingLeft:"20px"},children:null===t||void 0===t?void 0:t.title}),null===o||void 0===o?void 0:o.map((function(e){return Object(C.jsx)(E,{item:e},1e3*Math.random())}))]})},F=n(95),T=n(93),w=n(96),N=n(4),_=Object(O.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",outline:"none"},margin:{margin:e.spacing(1)},withoutLabel:{marginTop:e.spacing(3)},textField:{width:"100%",backgroundColor:"#EEE5FF",outline:"none"},color:{color:"#8B50FF"},arrow:{color:"#8B50FF"}}}));var L=function(e){var t=_();return Object(C.jsx)("div",{style:{width:"95%"},children:Object(C.jsx)(F.a,{className:Object(N.a)(t.margin,t.textField),variant:"outlined",children:Object(C.jsx)(T.a,{value:e.value,onChange:e.handleChange,endAdornment:Object(C.jsx)(w.a,{className:t.color,position:"end",children:Object(C.jsx)("h4",{className:t.arrow,children:">"})}),labelWidth:0,placeholder:"See your financial report"})})})},B=n(27),R=n.n(B);function A(){return{type:u}}function M(){return function(e){e(A()),R.a.get("https://jsonplaceholder.typicode.com/albums").then((function(t){var n=t.data;e(function(e){return{type:j,payload:{list:e}}}(n))})).catch((function(t){var n=t.message;e(function(e){return{type:f,payload:{error:e}}}(n))}))}}function H(){return function(e){e(A()),R.a.get("https://jsonplaceholder.typicode.com/photos").then((function(t){var n=t.data;e({type:p,payload:{listItem:n}})})).catch((function(t){var n=t.message;e(function(e){return{type:b,payload:{error:e}}}(n))}))}}var U=function(){var e=Object(l.c)(),t=Object(l.d)((function(e){return{list:e.list}})).list,n=Object(i.useState)([]),a=Object(x.a)(n,2),r=a[0],c=a[1],o=Object(i.useState)(""),s=Object(x.a)(o,2),d=s[0],u=s[1];return Object(i.useEffect)((function(){e(M()),e(H())}),[e]),Object(i.useEffect)((function(){var e=t.slice(0,5);c(e)}),[t]),Object(C.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",width:"100%"},children:[Object(C.jsx)(L,{handleChange:function(e){if(""!==e.target.value){var n=r.filter((function(t){return t.title.includes(e.target.value)}));c(n)}else{var i=t.slice(0,5);c(i)}u(e.target.value)},value:d}),Object(C.jsxs)("div",{style:{width:"100%"},children:[null===r||void 0===r?void 0:r.map((function(e){return Object(C.jsx)(S,{item:e},1e3*Math.random())})),0===(null===r||void 0===r?void 0:r.length)&&Object(C.jsx)("div",{style:{padding:"10px 10px",textAlign:"center"},children:"No Records Found"})]})]})};var D=function(){return Object(C.jsx)("div",{className:"App",children:Object(C.jsx)(l.a,{store:h,children:Object(C.jsx)(U,{})})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,98)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),i(e),a(e),r(e),c(e)}))};c.a.render(Object(C.jsx)(a.a.StrictMode,{children:Object(C.jsx)(D,{})}),document.getElementById("root")),k()}},[[72,1,2]]]);
//# sourceMappingURL=main.10b156da.chunk.js.map