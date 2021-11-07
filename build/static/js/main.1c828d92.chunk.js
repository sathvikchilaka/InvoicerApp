(this.webpackJsonpinvoicer_v2=this.webpackJsonpinvoicer_v2||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),l=c(7),s=c.n(l),r=(c(13),c(2)),i=c(0);function o(e){var t=e.clientName,c=e.clientAddress;return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("section",{className:"mt-10",children:[Object(i.jsx)("h2",{className:"text-2xl uppercase font-bold mb-1",children:t}),Object(i.jsx)("p",{children:c})]})})}function d(e){var t=e.invoiceNumber,c=e.invoiceDate,n=e.dueDate;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("article",{className:"mt-10 mb-14 flex items-end justify-end",children:Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{className:"p-1 ",children:[Object(i.jsx)("span",{className:"font-bold",children:"Invoicer number:"})," ",t]}),Object(i.jsxs)("li",{className:"p-1 bg-gray-100",children:[Object(i.jsx)("span",{className:"font-bold",children:"Invoice date:"})," ",c]}),Object(i.jsxs)("li",{className:"p-1 ",children:[Object(i.jsx)("span",{className:"font-bold",children:"Due date:"})," ",n]})]})})})}function j(e){var t=e.name,c=e.email,n=e.website,a=e.phone,l=e.bankAccount,s=e.bankName;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("footer",{className:"footer border-t-2 border-gray-300 pt-5",children:Object(i.jsxs)("ul",{className:"flex flex-wrap items-center justify-center",children:[Object(i.jsxs)("li",{children:[Object(i.jsx)("span",{className:"font-bold",children:"Your name:"})," ",t]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("span",{className:"font-bold",children:"Your email:"})," ",c]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("span",{className:"font-bold",children:"Phone number:"})," ",a]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("span",{className:"font-bold",children:"Bank:"})," ",s]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("span",{className:"font-bold",children:"Account holder:"})," ",t]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("span",{className:"font-bold",children:"Account number:"})," ",l]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("span",{className:"font-bold",children:"Website:"})," ",Object(i.jsx)("a",{href:n,target:"_blank",rel:"noopenner noreferrer",children:n})]})]})})})}function b(e){var t=e.handlePrint;return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("header",{className:"flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between",children:[Object(i.jsx)("div",{children:Object(i.jsx)("h1",{className:"font-bold uppercase tracking-wide text-4xl mb-3",children:"Invoicer"})}),Object(i.jsx)("div",{children:Object(i.jsxs)("ul",{className:"flex items-center justify-between flex-wrap",children:[Object(i.jsx)("li",{children:Object(i.jsx)("button",{onClick:t,className:"bg-gray-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-gray-500 hover:bg-transparent hover:text-red-500 transition-all duration-300",children:"Print"})}),Object(i.jsx)("li",{className:"mx-2",children:Object(i.jsx)("button",{className:"bg-gray-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-gray-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300",children:"Download"})}),Object(i.jsx)("li",{children:Object(i.jsx)("button",{className:"bg-gray-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-gray-500 hover:bg-transparent hover:text-green-500 transition-all duration-300",children:"Send"})})]})})]})})}function u(e){var t=e.name,c=e.address;return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("section",{className:"flex flex-col items-end justify-end",children:[Object(i.jsx)("h2",{className:"font-bold text-xl uppercase mb-1 md:text-4xl",children:t}),Object(i.jsx)("p",{children:c})]})})}function x(e){var t=e.notes;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("section",{className:"mt-10 mb-5",children:Object(i.jsx)("p",{className:"lg:w-1/2 text-justify",children:t})})})}function m(e){var t=e.list,c=e.total;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("table",{width:"100%",className:"mb-10",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{className:"bg-gray-100 p-1",children:[Object(i.jsx)("td",{className:"font-bold",children:"Description"}),Object(i.jsx)("td",{className:"font-bold",children:"Quantity"}),Object(i.jsx)("td",{className:"font-bold",children:"Price"}),Object(i.jsx)("td",{className:"font-bold",children:"Amount"})]})}),t.map((function(e){var t=e.id,c=e.description,n=e.quantity,l=e.price,s=e.amount;return Object(i.jsx)(a.a.Fragment,{children:Object(i.jsx)("tbody",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:c}),Object(i.jsx)("td",{children:n}),Object(i.jsx)("td",{children:l}),Object(i.jsx)("td",{children:s})]})})},t)}))]}),Object(i.jsx)("div",{children:Object(i.jsxs)("h2",{className:"flex items-end justify-end text-gray-800 text-4xl font-bold",children:["Rs. ",c.toLocaleString()]})})]})}var h=c(8),O=c(6),f=c(17);function p(e){var t=e.description,c=e.setDescription,l=e.quantity,s=e.setQuantity,o=e.price,d=e.setPrice,j=e.amount,b=e.setAmount,u=e.list,x=e.setList,m=e.total,p=e.setTotal,v=Object(n.useState)(!1),g=Object(r.a)(v,2),N=g[0],y=g[1];Object(n.useEffect)((function(){b(l*o)}),[j,o,l,b]),Object(n.useEffect)((function(){for(var e=document.querySelectorAll(".amount"),t=0,c=0;c<e.length;c++)"amount"===e[c].className&&(t+=isNaN(e[c].innerHTML)?0:parseInt(e[c].innerHTML),p(t))}));return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n={id:Object(f.a)(),description:t,quantity:l,price:o,amount:j};c(""),s(""),d(""),b(""),x([].concat(Object(h.a)(u),[n])),y(!1)},children:[Object(i.jsxs)("div",{className:"flex flex-col md:mt-16",children:[Object(i.jsx)("label",{htmlFor:"description",children:"Item description"}),Object(i.jsx)("input",{type:"text",name:"description",id:"description",placeholder:"Item Name",value:t,onChange:function(e){return c(e.target.value)}})]}),Object(i.jsxs)("div",{className:"md:grid grid-cols-3 gap-10",children:[Object(i.jsxs)("div",{className:"flex flex-col",children:[Object(i.jsx)("label",{htmlFor:"quantity",children:"Quantity"}),Object(i.jsx)("input",{type:"text",name:"quantity",id:"quantity",placeholder:"Quantity",value:l,onChange:function(e){return s(e.target.value)}})]}),Object(i.jsxs)("div",{className:"flex flex-col",children:[Object(i.jsx)("label",{htmlFor:"price",children:"Price (Rupees.)"}),Object(i.jsx)("input",{type:"text",name:"price",id:"price",placeholder:"Price",value:o,onChange:function(e){return d(e.target.value)}})]}),Object(i.jsxs)("div",{className:"flex flex-col",children:[Object(i.jsx)("label",{htmlFor:"amount",children:"Amount (Rupees.)"}),Object(i.jsx)("p",{children:j})]})]}),Object(i.jsx)("button",{type:"submit",className:"mb-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300",children:N?"Editing Row Item":"Editing Item Info"})]}),Object(i.jsxs)("table",{width:"100%",className:"mb-10",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{className:"bg-gray-100 p-1",children:[Object(i.jsx)("td",{className:"font-bold",children:"Description"}),Object(i.jsx)("td",{className:"font-bold",children:"Quantity"}),Object(i.jsx)("td",{className:"font-bold",children:"Price"}),Object(i.jsx)("td",{className:"font-bold",children:"Amount"})]})}),u.map((function(e){var t=e.id,n=e.description,l=e.quantity,r=e.price,o=e.amount;return Object(i.jsx)(a.a.Fragment,{children:Object(i.jsx)("tbody",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:n}),Object(i.jsx)("td",{children:l}),Object(i.jsx)("td",{children:r}),Object(i.jsx)("td",{className:"amount",children:o}),Object(i.jsx)("td",{children:Object(i.jsx)("button",{onClick:function(){return function(e){return x(u.filter((function(t){return t.id!==e})))}(t)},children:Object(i.jsx)(O.a,{className:"text-red-500 font-bold text-xl"})})}),Object(i.jsx)("td",{children:Object(i.jsx)("button",{onClick:function(){return function(e){var t=u.find((function(t){return t.id===e}));x(u.filter((function(t){return t.id!==e}))),y(!0),c(t.description),s(t.quantity),d(t.price)}(t)},children:Object(i.jsx)(O.b,{className:"text-green-500 font-bold text-xl"})})})]})})},t)}))]}),Object(i.jsx)("div",{children:Object(i.jsxs)("h2",{className:"flex items-end justify-end text-gray-800 text-4xl font-bold",children:["Rs. ",m.toLocaleString()]})})]})}var v=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),c=t[0],a=t[1],l=Object(n.useState)(""),s=Object(r.a)(l,2),h=s[0],O=s[1],f=Object(n.useState)(""),v=Object(r.a)(f,2),g=v[0],N=v[1],y=Object(n.useState)(""),w=Object(r.a)(y,2),C=w[0],F=w[1],S=Object(n.useState)(""),k=Object(r.a)(S,2),D=k[0],A=k[1],I=Object(n.useState)(""),E=Object(r.a)(I,2),P=E[0],q=E[1],L=Object(n.useState)(""),Q=Object(r.a)(L,2),R=Q[0],T=Q[1],B=Object(n.useState)(""),M=Object(r.a)(B,2),Y=M[0],_=M[1],H=Object(n.useState)(""),J=Object(r.a)(H,2),V=J[0],W=J[1],z=Object(n.useState)(""),G=Object(r.a)(z,2),K=G[0],U=G[1],X=Object(n.useState)(""),Z=Object(r.a)(X,2),$=Z[0],ee=Z[1],te=Object(n.useState)(""),ce=Object(r.a)(te,2),ne=ce[0],ae=ce[1],le=Object(n.useState)(""),se=Object(r.a)(le,2),re=se[0],ie=se[1],oe=Object(n.useState)(""),de=Object(r.a)(oe,2),je=de[0],be=de[1],ue=Object(n.useState)(""),xe=Object(r.a)(ue,2),me=xe[0],he=xe[1],Oe=Object(n.useState)(""),fe=Object(r.a)(Oe,2),pe=fe[0],ve=fe[1],ge=Object(n.useState)(""),Ne=Object(r.a)(ge,2),ye=Ne[0],we=Ne[1],Ce=Object(n.useState)(""),Fe=Object(r.a)(Ce,2),Se=Fe[0],ke=Fe[1],De=Object(n.useState)([]),Ae=Object(r.a)(De,2),Ie=Ae[0],Ee=Ae[1],Pe=Object(n.useState)(0),qe=Object(r.a)(Pe,2),Le=qe[0],Qe=qe[1];return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("main",{className:"m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow",children:c?Object(i.jsxs)("div",{children:[Object(i.jsx)(b,{handlePrint:function(){window.print()}}),Object(i.jsx)(u,{name:h,address:g}),Object(i.jsx)(o,{clientName:V,clientAddress:K}),Object(i.jsx)(d,{invoiceNumber:$,invoiceDate:ne,dueDate:re}),Object(i.jsx)(m,{description:me,quantity:pe,price:ye,amount:Se,list:Ie,setList:Ee,total:Le,setTotal:Qe}),Object(i.jsx)(x,{notes:je}),Object(i.jsx)(j,{name:h,address:g,website:Y,email:C,phone:D,bankAccount:R,bankName:P}),Object(i.jsx)("button",{onClick:function(){return a(!1)},className:"mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300",children:"Edit Information"})]}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h2",{className:"font-bold text-blue uppercase tracking-wide text-4xl pb-5 mb-3",children:"Invoice Details Form"}),Object(i.jsxs)("div",{className:"flex flex-col justify-center",children:[Object(i.jsxs)("article",{className:"md:grid grid-cols-2 gap-10",children:[Object(i.jsxs)("div",{className:"flex flex-col",children:[Object(i.jsx)("label",{htmlFor:"name",children:"Your full name"}),Object(i.jsx)("input",{type:"text",name:"text",id:"name",placeholder:"FirstName LastName",autoComplete:"off",value:h,onChange:function(e){return O(e.target.value)}})]}),Object(i.jsxs)("div",{className:"flex flex-col",children:[Object(i.jsx)("label",{htmlFor:"address",children:"Enter your address"}),Object(i.jsx)("input",{type:"text",name:"address",id:"address",placeholder:"Permanent address",autoComplete:"off",value:g,onChange:function(e){return N(e.target.value)}})]})]}),Object(i.jsxs)("article",{className:"md:grid grid-cols-3 gap-10",children:[Object(i.jsxs)("div",{className:"flex flex-col",children:[Object(i.jsx)("label",{htmlFor:"email",children:"Enter your email"}),Object(i.jsx)("input",{type:"email",name:"email",id:"email",placeholder:"Email ID",autoComplete:"off",value:C,onChange:function(e){return F(e.target.value)}})]}),Object(i.jsxs)("div",{className:"flex flex-col",children:[Object(i.jsx)("label",{htmlFor:"website",children:"Enter your website"}),Object(i.jsx)("input",{type:"url",name:"website",id:"website",placeholder:"Valid website",autoComplete:"off",value:Y,onChange:function(e){return _(e.target.value)}})]}),Object(i.jsxs)("div",{className:"flex flex-col",children:[Object(i.jsx)("label",{htmlFor:"phone",children:"Enter your phone"}),Object(i.jsx)("input",{type:"text",name:"phone",id:"phone",placeholder:"(+91)",autoComplete:"off",value:D,onChange:function(e){return A(e.target.value)}})]})]}),Object(i.jsxs)("article",{className:"md:grid grid-cols-2 gap-10",children:[Object(i.jsxs)("div",{className:"flex flex-col",children:[Object(i.jsx)("label",{htmlFor:"bankName",children:"Enter your bank name"}),Object(i.jsx)("input",{type:"text",name:"bankName",id:"bankName",placeholder:"Full Bank Name",autoComplete:"off",value:P,onChange:function(e){return q(e.target.value)}})]}),Object(i.jsxs)("div",{className:"flex flex-col",children:[Object(i.jsx)("label",{htmlFor:"bankAccount",children:"Enter your bank account number"}),Object(i.jsx)("input",{type:"text",name:"bankAccount",id:"bankAccount",placeholder:"Bank Account Number",autoComplete:"off",value:R,onChange:function(e){return T(e.target.value)}})]})]}),Object(i.jsxs)("article",{className:"md:grid grid-cols-2 gap-10 md:mt-16",children:[Object(i.jsxs)("div",{className:"flex flex-col",children:[Object(i.jsx)("label",{htmlFor:"clientName",children:"Enter your client's name"}),Object(i.jsx)("input",{type:"text",name:"clientName",id:"clientName",placeholder:"FirstName LastName",autoComplete:"off",value:V,onChange:function(e){return W(e.target.value)}})]}),Object(i.jsxs)("div",{className:"flex flex-col",children:[Object(i.jsx)("label",{htmlFor:"clientAddress",children:"Enter your client's address"}),Object(i.jsx)("input",{type:"text",name:"clientAddress",id:"clientAddress",placeholder:"Client's Permanent address",autoComplete:"off",value:K,onChange:function(e){return U(e.target.value)}})]})]}),Object(i.jsxs)("article",{className:"md:grid grid-cols-3 gap-10",children:[Object(i.jsxs)("div",{className:"flex flex-col",children:[Object(i.jsx)("label",{htmlFor:"invoiceNumber",children:"Invoice Number"}),Object(i.jsx)("input",{type:"text",name:"invoiceNumber",id:"invoiceNumber",placeholder:"Valid Number",autoComplete:"off",value:$,onChange:function(e){return ee(e.target.value)}})]}),Object(i.jsxs)("div",{className:"flex flex-col",children:[Object(i.jsx)("label",{htmlFor:"invoiceDate",children:"Invoice Date"}),Object(i.jsx)("input",{type:"date",name:"invoiceDate",id:"invoiceDate",placeholder:"Invoice Date",autoComplete:"off",value:ne,onChange:function(e){return ae(e.target.value)}})]}),Object(i.jsxs)("div",{className:"flex flex-col",children:[Object(i.jsx)("label",{htmlFor:"dueDate",children:"Due Date"}),Object(i.jsx)("input",{type:"date",name:"dueDate",id:"dueDate",placeholder:"Invoice Date",autoComplete:"off",value:re,onChange:function(e){return ie(e.target.value)}})]})]}),Object(i.jsx)("article",{children:Object(i.jsx)(p,{description:me,setDescription:he,quantity:pe,setQuantity:ve,price:ye,setPrice:we,amount:Se,setAmount:ke,list:Ie,setList:Ee,total:Le,setTotal:Qe})}),Object(i.jsx)("label",{htmlFor:"notes",children:"Additional Notes"}),Object(i.jsx)("textarea",{name:"notes",id:"notes",cols:"30",rows:"10",placeholder:"Additional notes to the client",value:je,onChange:function(e){return be(e.target.value)}}),Object(i.jsx)("button",{onClick:function(){return a(!0)},className:"bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300",children:"Preview Invoice"})]})]})})})};s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(v,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.1c828d92.chunk.js.map