(this["webpackJsonpemployee-registration-form"]=this["webpackJsonpemployee-registration-form"]||[]).push([[0],{156:function(e,t,c){},157:function(e,t,c){},483:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),l=c(19),o=c.n(l),s=(c(156),c.p,c(157),c(484)),r=c(485),i=c(3);var j=function(){return Object(i.jsx)("div",{children:Object(i.jsx)(s.a,{className:"my-2 bg-warning",children:Object(i.jsx)(r.a,{children:Object(i.jsx)("h1",{className:"text-center my-2",children:"Welcome to Employee Registration Screen"})})})})},b=c(490),d=c(496),m=c(497),O=(c(97),c(20)),h=c(486),u=function(){return Object(n.useEffect)((function(){document.title="Home"}),[]),Object(i.jsx)("div",{children:Object(i.jsx)(h.a,{children:Object(i.jsx)("h1",{className:"text-center my-5",children:"Welcome"})})})},x=c(48),p=c.n(x),g="http://localhost:9090",y=c(487),f=c(488),v=c(489),N=c(491),E=function(e){var t=e.employee,c=e.update;return Object(i.jsx)("div",{children:Object(i.jsx)(s.a,{className:"text-center",children:Object(i.jsxs)(r.a,{children:[Object(i.jsx)(y.a,{children:t.employeeNo}),Object(i.jsx)(f.a,{tag:"h6",className:"font-weight-bold",children:t.employeeName}),Object(i.jsx)(v.a,{children:t.department}),Object(i.jsxs)(b.a,{className:"text-center",children:[Object(i.jsx)(N.a,{color:"danger",onClick:function(){var e;e=t.employeeNo,p.a.delete("".concat(g,"/employee/").concat(e)).then((function(t){O.b.success("Employee Deleted"),c(e)}),(function(e){console.log(e),console.log("error"),O.b.error("Employee not deleted ! Server problem")}))},children:"Delete"}),"\xa0\xa0"]})]})})})},S=c(29),w=c(28),A=c(22),D=(c(178),c(492)),L=c(493),C=c(494),J=function(){var e,t,c;Object(n.useEffect)((function(){document.title="Add Employee"}),[]);var l=a.a.useState({}),o=Object(A.a)(l,2),s=o[0],r=o[1],j=a.a.useState(""),d=Object(A.a)(j,2),m=d[0],h=d[1],u=a.a.useState(""),x=Object(A.a)(u,2),y=x[0],f=x[1],v=a.a.useState(""),E=Object(A.a)(v,2),J=E[0],F=E[1],H=a.a.useState(""),k=Object(A.a)(H,2),I=k[0],T=k[1],B=a.a.useState(""),P=Object(A.a)(B,2),R=P[0],W=P[1],M=a.a.useState(""),Q=Object(A.a)(M,2),U=Q[0],V=Q[1],$=a.a.useState(""),q=Object(A.a)($,2),z=q[0],G=q[1],K=a.a.useState(""),X=Object(A.a)(K,2),Y=X[0],Z=X[1],_=function(){V(""),G(""),Z("")},ee=function(e){p.a.post("".concat(g,"/employee"),e).then((function(e){console.log(e),console.log("success"),O.b.success("Employee has been added successfully")}),(function(e){console.log(e),console.log("error"),O.b.error("Error ! Something went wrong")}))};return Object(i.jsxs)(n.Fragment,{children:[Object(i.jsx)("h1",{className:"text-center my-3",children:"Fill the Employee Details"}),Object(i.jsxs)(D.a,{onSubmit:function(e){console.log(s);var t=/^[0-9\b]+$/;m&&y&&J&&I&&R?t.test(m)?t.test(R)?ee(s):Z("Employee Salary must contain Numbers Only"):G("Employee Number must contain Numbers Only"):V("All fields are mandatory"),e.preventDefault()},children:[Object(i.jsxs)(L.a,{children:[Object(i.jsx)("label",{for:"employeeNo",children:Object(i.jsx)("b",{children:"Employee No"})}),Object(i.jsx)(C.a,{type:"text",name:"employeeNo",placeholder:"Employee No",maxLength:"10",onChange:function(e){_(),r(Object(w.a)(Object(w.a)({},s),{},{employeeNo:e.target.value})),h(e.target.value)}}),Object(i.jsx)("div",{style:{color:"red"},children:z})]}),Object(i.jsxs)(L.a,{children:[Object(i.jsx)("label",{for:"employeeName",children:Object(i.jsx)("b",{children:"Employee Name"})}),Object(i.jsx)(C.a,(e={type:"text",maxLength:"100",name:"employeeName",placeholder:"Employee Name"},Object(S.a)(e,"maxLength","100"),Object(S.a)(e,"onChange",(function(e){_(),r(Object(w.a)(Object(w.a)({},s),{},{employeeName:e.target.value})),f(e.target.value)})),e))]}),Object(i.jsxs)(L.a,{children:[Object(i.jsx)("label",{for:"dateOfJoining",children:Object(i.jsx)("b",{children:"Date of Joining"})}),Object(i.jsx)(C.a,(t={type:"date",maxLength:"10",name:"dateOfJoining",placeholder:"Date Of Joining"},Object(S.a)(t,"maxLength","10"),Object(S.a)(t,"onChange",(function(e){_(),r(Object(w.a)(Object(w.a)({},s),{},{dateOfJoining:e.target.value})),F(e.target.value)})),t))]}),Object(i.jsxs)(L.a,{children:[Object(i.jsx)("label",{for:"department",children:Object(i.jsx)("b",{children:"Department"})}),Object(i.jsxs)(C.a,(c={type:"select",name:"department",maxLength:"2"},Object(S.a)(c,"maxLength","2"),Object(S.a)(c,"onChange",(function(e){_(),r(Object(w.a)(Object(w.a)({},s),{},{department:e.target.value})),T(e.target.value)})),Object(S.a)(c,"children",[Object(i.jsx)("option",{value:"AD",children:"Administration"}),Object(i.jsx)("option",{value:"IT",children:"Inforamtion Technology"}),Object(i.jsx)("option",{value:"HD",children:"Help Desk"}),Object(i.jsx)("option",{value:"HR",children:"Human Resource"}),Object(i.jsx)("option",{value:"OP",children:"Operation"})]),c))]}),Object(i.jsxs)(L.a,{children:[Object(i.jsx)("label",{for:"salary",children:Object(i.jsx)("b",{children:"Salary"})}),Object(i.jsx)(C.a,{type:"numer",name:"salary",placeholder:"salary",maxLength:"10",onChange:function(e){_(),r(Object(w.a)(Object(w.a)({},s),{},{salary:e.target.value})),W(e.target.value)}}),Object(i.jsx)("div",{style:{color:"red"},children:Y})]}),Object(i.jsx)("div",{style:{color:"red"},children:U}),Object(i.jsxs)(b.a,{className:"text-center my-5",children:[Object(i.jsx)(N.a,{type:"submit",color:"success mr-3",children:"save"}),"\xa0",Object(i.jsx)(N.a,{type:"reset",color:"warning ml-10",children:"clear"})]})]})]})},F=c(37),H=c(495),k=function(){return Object(i.jsxs)(H.a,{children:[Object(i.jsx)(F.b,{className:"list-group-item list-group-item-action",tag:"a",to:"/",children:"Home"}),Object(i.jsx)(F.b,{className:"list-group-item list-group-item-action",tag:"a",to:"/add-employee",children:"Add Employee"}),Object(i.jsx)(F.b,{className:"list-group-item list-group-item-action",tag:"a",to:"/view-employee",children:"View Employee"}),Object(i.jsx)(F.b,{className:"list-group-item list-group-item-action",tag:"a",to:"/about",children:"About"}),Object(i.jsx)(F.b,{className:"list-group-item list-group-item-action",tag:"a",to:"/contact",children:"Contact"})]})},I=c(9),T=function(){Object(n.useEffect)((function(){document.title="All Employees"}),[]);var e=function(e){l(a.filter((function(t){return t.employeeNo!=e})))};Object(n.useEffect)((function(){p.a.get("".concat(g,"/employees")).then((function(e){console.log(e.data),O.b.success("Employees has been loaded",{position:"bottom-center"}),l(e.data)}),(function(e){console.log(e),O.b.error("Something went wrong")}))}),[]);var t=Object(n.useState)([{employeeNo:"123",employeeName:"abc"},{employeeNo:"456",employeeName:"abcwe"}]),c=Object(A.a)(t,2),a=c[0],l=c[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"All Employees"}),Object(i.jsx)("p",{children:"List of employees are as follows"}),a.length>0?a.map((function(t){return Object(i.jsx)(E,{employee:t,update:e},t.employeeNo)})):"No Employees"]})},B=function(){return Object(n.useEffect)((function(){document.title="About"}),[]),Object(i.jsx)("div",{children:Object(i.jsx)(h.a,{children:Object(i.jsxs)("ul",{className:"my-5",children:[Object(i.jsx)("li",{children:Object(i.jsx)("b",{children:"Frontend : REACT JS"})}),Object(i.jsx)("li",{children:Object(i.jsx)("b",{children:"Backend : Spring Boot "})}),Object(i.jsx)("li",{children:Object(i.jsx)("b",{children:"Database integration : Hibernate/JPA "})}),Object(i.jsx)("li",{children:Object(i.jsx)("b",{children:"Open source database : MySQL"})})]})})})},P=function(){return Object(n.useEffect)((function(){document.title="About"}),[]),Object(i.jsx)("div",{children:Object(i.jsx)(h.a,{children:Object(i.jsxs)("ul",{className:"my-5",children:[Object(i.jsx)("li",{children:Object(i.jsx)("b",{children:"Ushma Joshi : +971 509074803"})}),Object(i.jsx)("li",{children:Object(i.jsx)("b",{children:"I really enjoyed while developing this Web Application"})}),Object(i.jsx)("li",{children:Object(i.jsx)("b",{children:"I liked to learn new technolgies"})})]})})})};var R=function(){return Object(i.jsx)("div",{children:Object(i.jsxs)(F.a,{children:[Object(i.jsx)(O.a,{}),Object(i.jsxs)(b.a,{children:[Object(i.jsx)(j,{}),Object(i.jsxs)(d.a,{children:[Object(i.jsx)(m.a,{md:4,children:Object(i.jsx)(k,{})}),Object(i.jsxs)(m.a,{md:8,children:[Object(i.jsx)(I.a,{path:"/",component:u,exact:!0}),Object(i.jsx)(I.a,{path:"/add-employee",component:J,exact:!0}),Object(i.jsx)(I.a,{path:"/view-employee",component:T,exact:!0}),Object(i.jsx)(I.a,{path:"/about",component:B,exact:!0}),Object(i.jsx)(I.a,{path:"/contact",component:P,exact:!0})]})]})]})]})})},W=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,498)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,l=t.getLCP,o=t.getTTFB;c(e),n(e),a(e),l(e),o(e)}))};c(482);o.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(R,{})}),document.getElementById("root")),W()}},[[483,1,2]]]);
//# sourceMappingURL=main.d62cdb5a.chunk.js.map