(this.webpackJsonpreacttodoappusingfirestore=this.webpackJsonpreacttodoappusingfirestore||[]).push([[0],{148:function(e,t,n){},150:function(e,t,n){},258:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),r=n(47),a=n.n(r),o=(n(148),n(2)),s=n.n(o),d=n(14),j=n(6),l=(n(150),n(134)),u=n(302),h=n(296),b=n(299),p=n(300),m=n(96),x=n(36),O=n(132);Object(O.a)({apiKey:"AIzaSyDqJ-pzrO0n-Vgg7G1GLHCcibUJvIT9bu8",authDomain:"shezi-assignmentstopwatchjs.firebaseapp.com",projectId:"shezi-assignmentstopwatchjs",storageBucket:"shezi-assignmentstopwatchjs.appspot.com",messagingSenderId:"178263916037",appId:"1:178263916037:web:fd8e2dddb2c34b3a4ae66c"});var g=Object(x.e)(),f=n(5),v=Object(x.b)(g,"todos"),I=m.a({todoItem:m.b("add something todo").required("required*")});function w(){return(w=Object(j.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.c)(Object(x.d)(v,t));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],i=t[1];Object(c.useEffect)((function(){var e=Object(x.h)(v,Object(x.g)("timestamp")),t=Object(x.f)(e,(function(e){var t=[];e.forEach((function(e){var n=e.id,c=e.data();t.unshift({id:n,todoItem:c.todoItem})})),i(t)}));return function(){t(),console.log("unsub")}}),[]);var r=Object(l.a)({initialValues:{todoItem:""},onSubmit:function(){var e=Object(j.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(x.a)(v,{timestamp:Object(x.i)(),todoItem:t.todoItem});case 3:n=e.sent,console.log("Document written with ID: ",n.id),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error adding document: ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),validationSchema:I});return Object(f.jsxs)("div",{style:{padding:"1rem"},children:[Object(f.jsx)("h1",{style:{margin:"auto",padding:"1rem",textAlign:"center"},children:"TODO APP"}),Object(f.jsx)("br",{}),Object(f.jsx)("form",{onSubmit:r.handleSubmit,children:Object(f.jsx)("div",{children:Object(f.jsxs)(u.a,{container:!0,spacing:1,sx:{paddingLeft:"10%",paddingRight:"10%"},children:[Object(f.jsx)(u.a,{item:!0,xl:10,lg:10,xs:12,sm:12,md:10,children:Object(f.jsx)(u.a,{children:Object(f.jsx)(h.a,{spacing:3,children:Object(f.jsx)(b.a,{color:"primary",id:"outlined-basic",variant:"standard",placeholder:"Enter text here",name:"todoItem",inputProps:{maxlength:20},value:r.values.todoItem,onChange:r.handleChange,error:r.touched.todoItem&&Boolean(r.errors.todoItem),helperText:r.touched.todoItem&&r.errors.todoItem})})})}),Object(f.jsx)(u.a,{item:!0,xl:2,lg:2,xs:6,sm:6,md:2,children:Object(f.jsx)(u.a,{children:Object(f.jsx)(p.a,{sx:{height:"25px",width:"100%"},variant:"contained",color:"success",type:"submit",children:"Add TODO"})})})]})})}),Object(f.jsxs)("div",{children:[Object(f.jsx)("br",{}),Object(f.jsx)(u.a,{container:!0,spacing:1,sx:{paddingLeft:"10%",paddingRight:"10%"},children:Object(f.jsx)(u.a,{item:!0,xl:12,lg:12,xs:12,sm:12,md:12,sx:{textAlign:"left",margin:"auto"},children:Object(f.jsx)(u.a,{children:Object(f.jsx)(h.a,{spacing:1,children:n.map((function(e,t){return Object(f.jsx)("div",{children:Object(f.jsx)("ul",{children:Object(f.jsxs)("li",{style:{fontSize:"24px"},children:[e.todoItem,"  ",Object(f.jsx)(p.a,{sx:{background:"#c42c2c",color:"white",width:"8%",fontSize:"10px"},variant:"contained",color:"error",onClick:function(){!function(e){w.apply(this,arguments)}(e.id)},children:"delete "}),"\xa0\xa0",Object(f.jsx)(p.a,{sx:{background:"purple",color:"white",width:"8%",fontSize:"10px"},variant:"contained",color:"secondary",onClick:function(){},children:"Edit "}),Object(f.jsx)("hr",{})]})})},t)}))})})})})]})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,303)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),r(e),a(e)}))};a.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(y,{})}),document.getElementById("root")),S()}},[[258,1,2]]]);
//# sourceMappingURL=main.c1dc4c4f.chunk.js.map