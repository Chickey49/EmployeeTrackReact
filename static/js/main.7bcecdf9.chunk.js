(this["webpackJsonpemployee-tracker"]=this["webpackJsonpemployee-tracker"]||[]).push([[0],{27:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(21),a=n.n(s),i=(n(27),n.p,n(49)),j=n(1);function l(){return Object(j.jsx)(i.a,{style:{backgroundColor:"#827381"},children:Object(j.jsx)("h1",{className:"d-flex justify-content-center",children:"Employee Directory"})})}var o=n(22),u=n(11),d=n(10),h=n.n(d),b=function(){return h.a.get("https://randomuser.me/api?results=10")},O=n(53),x=n(50),f=n(51),m=n(52);function p(e){return Object(j.jsx)("div",{children:Object(j.jsx)("input",{type:"text",placeholder:"search",onChange:e.handleSearch})})}n(47);function g(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)([]),a=Object(u.a)(s,2),i=a[0],l=a[1];return Object(c.useEffect)((function(){b().then((function(e){l(e.data.results),r(e.data.results)}))}),[]),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(p,{handleSearch:function(e){var t=n.filter((function(t){return(t.name.first.toLowerCase()+t.name.last.toLowerCase()).includes(e.target.value.toLowerCase())}));l(t)}}),Object(j.jsx)(O.a,{onClick:function(){var e=Object(o.a)(i);e.sort((function(e,t){return e.name.last.localeCompare(t.name.last,{ignorePunctuation:!0})})),l(e)},variant:"success",children:"Sort Alphabetically"})," ",Object(j.jsx)(x.a,{children:Object(j.jsx)(f.a,{children:Object(j.jsxs)(m.a,{style:{width:"100%",backgroundColor:"lightgray"},children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Picture"}),Object(j.jsx)("th",{children:"First Name"}),Object(j.jsx)("th",{children:"Last Name"}),Object(j.jsx)("th",{children:"Username"})]})}),Object(j.jsx)("tbody",{children:i.map((function(e){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("img",{src:e.picture.thumbnail}),Object(j.jsx)("td",{children:e.name.first}),Object(j.jsx)("td",{children:e.name.last}),Object(j.jsx)("td",{children:e.login.username})]},e.login.username)}))})]})})})]})}var y=function(){return Object(j.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(j.jsx)(l,{}),Object(j.jsx)(g,{})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root")),v()}},[[48,1,2]]]);
//# sourceMappingURL=main.7bcecdf9.chunk.js.map