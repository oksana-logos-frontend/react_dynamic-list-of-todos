(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s=c(5),a=c.n(s),n=c(2),l=c(1),r=(c(12),c(13),c(6)),i=c.n(r),d=c(0),o=function(e){var t=e.todo,c=e.selectedTodoId,s=e.selectedTodo,a=e.selectedUserId;return Object(d.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"#"}),Object(d.jsx)("th",{children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:"fas fa-check"})})}),Object(d.jsx)("th",{children:"Title"}),Object(d.jsx)("th",{children:" "})]})}),Object(d.jsx)("tbody",{children:t.map((function(e){var t=e.id,n=e.userId,l=e.completed,r=e.title;return Object(d.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(d.jsx)("td",{className:"is-vcentered",children:t}),Object(d.jsx)("td",{className:"is-vcentered",children:l&&Object(d.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(d.jsx)("i",{className:"fas fa-check"})})}),Object(d.jsx)("td",{className:i()("is-vcentered",{"is-expanded":!1===l}),children:Object(d.jsx)("p",{className:!1===l?"has-text-danger":"has-text-success",children:r})}),Object(d.jsx)("td",{className:"has-text-right is-vcentered",children:c===t?Object(d.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){s(0),a(0)},children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:"far fa-eye-slash"})})}):Object(d.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){s(t),a(n)},children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:"far fa-eye"})})})})]},t)}))})]})},j=function(e){var t=e.setFilteredBy,c=e.filteredBy,s=e.setQuery,a=e.query;return Object(d.jsxs)("form",{className:"field has-addons",children:[Object(d.jsx)("p",{className:"control",children:Object(d.jsx)("span",{className:"select",children:Object(d.jsxs)("select",{"data-cy":"statusSelect",value:c,onChange:function(e){return t(e.target.value)},children:[Object(d.jsx)("option",{value:"all",children:"All"}),Object(d.jsx)("option",{value:"active",children:"Active"}),Object(d.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(d.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(d.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:a,onChange:function(e){return s(e.target.value)}}),Object(d.jsx)("span",{className:"icon is-left",children:Object(d.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(d.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:a.length>0&&Object(d.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){s("")}})})]})]})},u=c(7),b=c(4),h=c.n(b),m=(c(16),function(){return Object(d.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(d.jsx)("div",{className:"Loader__content"})})});function O(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var x=function(){return O("/todos")},f=function(e){return O("/users/".concat(e))},p=function(e){var t=e.userId,c=e.selectedTodoId,s=e.selectedTodo,a=e.selectedUserId,r=Object(l.useState)(),i=Object(n.a)(r,2),o=i[0],j=i[1],b=Object(l.useState)([]),O=Object(n.a)(b,2),p=O[0],N=O[1];Object(l.useEffect)((function(){var e=function(){var e=Object(u.a)(h.a.mark((function e(){var c,s,a,l;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([f(t),x()]);case 2:c=e.sent,s=Object(n.a)(c,2),a=s[0],l=s[1],j(a),N(l);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[c]);var v=p.filter((function(e){return e.id===c})),y=function(){s(0),a(0)};return Object(d.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(d.jsx)("div",{className:"modal-background"}),o?Object(d.jsx)("div",{className:"modal-card",children:v.map((function(e){var t=e.id,c=e.title,s=e.completed;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("header",{className:"modal-card-head",children:[Object(d.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t)}),Object(d.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:y})]}),Object(d.jsxs)("div",{className:"modal-card-body",children:[Object(d.jsx)("p",{className:"block","data-cy":"modal-title",children:c}),Object(d.jsxs)("p",{className:"block","data-cy":"modal-user",children:[!0===s?Object(d.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(d.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(d.jsx)("a",{href:"mailto:Sincere@april.biz",children:o.name})]})]})]})}))}):Object(d.jsx)(m,{})]})};var N=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)(0),r=Object(n.a)(a,2),i=r[0],u=r[1],b=Object(l.useState)(0),h=Object(n.a)(b,2),O=h[0],f=h[1],N=Object(l.useState)(!1),v=Object(n.a)(N,2),y=v[0],g=v[1],k=Object(l.useState)("all"),I=Object(n.a)(k,2),S=I[0],T=I[1],w=Object(l.useState)(""),C=Object(n.a)(w,2),B=C[0],L=C[1];Object(l.useEffect)((function(){g(!0),x().then((function(e){return s(e)})).finally((function(){return g(!1)}))}),[]);var _=function(e,t,c){return e.filter((function(e){switch(t){case"all":return e;case"completed":return!0===e.completed;case"active":return!1===e.completed;default:return 0}})).filter((function(e){return e.title.toLocaleLowerCase().includes(c.toLocaleLowerCase())}))}(c,S,B);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"box",children:[Object(d.jsx)("h1",{className:"title",children:"Todos:"}),Object(d.jsx)("div",{className:"block",children:Object(d.jsx)(j,{setFilteredBy:T,setQuery:function(e){L(e)},filteredBy:S,query:B})}),Object(d.jsx)("div",{className:"block",children:y?Object(d.jsx)(m,{}):Object(d.jsx)(o,{todo:_,selectedTodoId:O,selectedTodo:function(e){f(e)},selectedUserId:function(e){u(e)}})})]})})}),0!==O&&Object(d.jsx)(p,{userId:i,selectedTodoId:O,selectedTodo:function(e){f(e)},selectedUserId:function(e){u(e)}})]})};a.a.render(Object(d.jsx)(N,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.81aed389.chunk.js.map