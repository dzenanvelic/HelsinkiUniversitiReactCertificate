(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),o=n(16),s=n.n(o),a=(n(21),n(3)),i=(n(22),n(0));var u=function(e){e.persons,e.setPersons;var t=e.phoneServices,n=e.setErrorMessage,r=e.newName,o=e.setNewName,s=Object(c.useState)(""),u=Object(a.a)(s,2),l=u[0],j=u[1],b=Object(c.useState)(""),d=Object(a.a)(b,2),h=d[0],m=d[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{children:Object(i.jsxs)("form",{children:[Object(i.jsxs)("div",{children:["name: ",Object(i.jsx)("input",{value:r,onChange:function(e){o(e.target.value)}})]}),Object(i.jsxs)("div",{children:["mobileNumber: ",Object(i.jsx)("input",{value:l,onChange:function(e){j(e.target.value)}})]}),Object(i.jsxs)("div",{children:["homeNumber: ",Object(i.jsx)("input",{value:h,onChange:function(e){m(e.target.value)}})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault();var c={name:r,mobileNumber:l,homeNumber:h};t.create(c).then((function(e){console.log("response created phonebook contact",e),n("Created new contact "),setTimeout((function(){n(null)}),4e3),o(""),j(""),m("")})).catch((function(e){n(e.response.data.error),setTimeout((function(){n(null)}),5e3)}))},children:"add"})})]})}),Object(i.jsxs)("div",{children:["debugName: ",r,", debugNumber: mobile ",l,",home ",h," "]})]})};var l=function(e){var t=e.errorMessage;return null==t?null:Object(i.jsx)("div",{className:"error",children:t})};var j=function(e){var t=e.persons,n=e.setErrorMessage,c=e.phoneServices;return Object(i.jsx)("div",{className:"personsDiv",children:null===t||void 0===t?void 0:t.map((function(e){return Object(i.jsx)("div",{children:Object(i.jsxs)("p",{children:["name:",Object(i.jsxs)("b",{children:[" ",e.name]}),"  mobile: ",e.mobileNumber," home: ",e.homeNumber," ",Object(i.jsx)("button",{onClick:function(){return t=e.id,void(window.confirm("Do you really want delete this contact?")&&c.deleteNumber(t).then((function(e){n("Contact deleted"),setTimeout((function(){n(null)}),3e3)})).catch((function(e){console.log("Deleted from phonebook error and there is on such contact",e),n("Error deleting ".concat(t," message, ").concat(e))})));var t},children:"delete"})]})},e.name)}))})};var b=function(e){e.persons,e.setPersons;var t=Object(c.useState)(""),n=Object(a.a)(t,2),r=n[0],o=n[1];return Object(i.jsx)("div",{className:"searchDiv",children:Object(i.jsx)("input",{type:"text",value:r,onChange:function(e){return o(e.target.value)},placeholder:"search"})})},d=n(4),h=n.n(d),m="/api/persons",O={getAll:function(){return h.a.get("".concat(m))},create:function(e){return h.a.post("".concat(m),e).then((function(e){return e.data}))},update:function(e,t){return h.a.put("".concat(m,"/").concat(e," "),t)},deleteNumber:function(e){return h.a.delete("".concat(m,"/").concat(e)).then((function(e){return e.data}))}};var v=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)(null),s=Object(a.a)(o,2),d=s[0],h=s[1],m=Object(c.useState)(""),v=Object(a.a)(m,2),p=v[0],f=v[1];return Object(c.useEffect)((function(){O.getAll().then((function(e){console.log("res",e.data),r(e.data)}))}),[]),Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Phonebook"}),Object(i.jsx)(l,{errorMessage:d}),Object(i.jsx)(b,{persons:n,setPersons:r}),Object(i.jsx)("h3",{children:"Add new Person"}),Object(i.jsx)(u,{persons:n,setPersons:r,phoneServices:O,setErrorMessage:h,newName:p,setNewName:f}),Object(i.jsx)("h2",{children:"Numbers"}),Object(i.jsx)(j,{persons:n,setErrorMessage:h,phoneServices:O})]})})};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(v,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.66081097.chunk.js.map