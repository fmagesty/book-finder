(this["webpackJsonpbook-finder"]=this["webpackJsonpbook-finder"]||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(8),s=n.n(r),o=(n(26),n(16),n(27),n(11)),A=n.n(o),i=n(13),l=n(10),j=n(46),u=n(47),d=n(51),m=n(45),b=n(48),x=n(49),g=n(12),p=n(41),v=n(42),w=n(43),f=n(44),h=n(50),O=n(3),D=function(e){var t=e.thumbnail,n=e.title,c=e.description,r=e.publishedDate,s=e.id,o=Object(a.useState)(!1),A=Object(l.a)(o,2),i=A[0],j=A[1],u=function(){return j(!i)};return Object(O.jsxs)(p.a,{style:{width:"233px"},className:"m-auto ",children:[Object(O.jsx)(v.a,{top:!0,style:{width:"100%",height:"233px"},src:t,alt:n}),Object(O.jsxs)(w.a,{children:[Object(O.jsx)(f.a,{className:"card-title",children:n}),Object(O.jsx)(m.a,{onClick:u,children:"Detalhes"}),Object(O.jsx)(m.a,{onClick:function(){console.log("id ".concat(s," favoritado")),window.localStorage.setItem(n,s)},style:{backgroundColor:"yellow",color:"black",marginLeft:"0.5rem"},children:"+Favoritos"})]}),Object(O.jsxs)(h.a,{isOpen:i,toggle:u,children:[Object(O.jsxs)("div",{className:"modal-header d-flex justify-content-center",children:[Object(O.jsx)("h5",{className:"modal-title text-center",id:"exampleModalLabel",children:n}),Object(O.jsx)("button",{"aria-label":"Close",className:"close",type:"button",onClick:u,children:Object(O.jsx)("span",{"aria-hidden":!0,children:"x"})})]}),Object(O.jsxs)("div",{className:"modal-body",children:[Object(O.jsxs)("div",{className:"d-flex justify-content-between ml-3",children:[Object(O.jsx)("img",{src:t,alt:n,style:{height:"233px"}}),Object(O.jsx)("div",{children:Object(O.jsxs)("p",{children:[Object(O.jsx)("strong",{children:"Data de publica\xe7\xe3o:"})," ",Object(O.jsx)("br",{}),r]})})]}),Object(O.jsxs)("div",{className:"mt-3",children:[Object(O.jsx)("strong",{children:"Descri\xe7\xe3o:"})," ",Object(O.jsx)("br",{}),c]})]})]})]})},B=n.p+"static/media/bg.52ec43a1.jpg";var X=function(e){e.id;var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(!1),o=Object(l.a)(s,2),p=o[0],v=o[1],w=Object(a.useState)([]),f=Object(l.a)(w,2),h=f[0],X=f[1],C=Object(a.useState)(40),G=Object(l.a)(C,2),M=G[0],Z=G[1],N=function(){X([])},y=function(e){13===e.charCode&&z()},P=function(){console.log(window.localStorage)},K=function(){var e=Object(i.a)(A.a.mark((function e(){var t,n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(c,"&maxResults=40&startIndex=0"));case 2:return t=e.sent,e.next=5,t.json();case 5:return(n=e.sent).items||g.b.error("N\xe3o foram encontrados livros com este t\xedtulo. Por favor tente novamente com outro t\xedtulo."),e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(i.a)(A.a.mark((function e(){var t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.next=3,K();case 3:t=e.sent,v(!1),console.log(t.items),X(t.items);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(i.a)(A.a.mark((function e(){var t,n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.next=3,fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(c,"&maxResults=40&startIndex=").concat(M));case 3:return t=e.sent,Z((function(e){return e+40})),e.next=7,t.json();case 7:0===(n=e.sent).totalItems&&g.b.error("N\xe3o existem mais livros com este t\xedtulo. Por favor tente novamente com outro t\xedtulo."),n.items?n.items.length>0&&(v(!1),X(n.items)):g.b.error("N\xe3o foram encontrados livros com este t\xedtulo. Por favor tente novamente com outro t\xedtulo.");case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"w-100 h-100",children:[Object(O.jsxs)("div",{className:"main-image d-flex justify-content-center align-items-center flex-column",style:{backgroundImage:"url(".concat(B,")")},children:[Object(O.jsx)("h1",{className:"display-2 text-center text-white mb-3",style:{zIndex:2},children:"Encontre seu livro"}),Object(O.jsxs)("div",{style:{width:"60%",zIndex:2},children:[Object(O.jsxs)(j.a,{size:"lg",className:"mb-3",children:[Object(O.jsx)(u.a,{placeholder:"Digite o t\xedtulo do livro",value:c,onChange:function(e){return r(e.target.value)},type:"input",onKeyPress:y}),Object(O.jsx)(d.a,{addonType:"append",children:Object(O.jsx)(m.a,{color:"secondary",onClick:z,children:Object(O.jsx)("i",{className:"fas fa-search"})})})]}),Object(O.jsxs)("div",{className:"btns d-flex text-white justify-content-center",children:[Object(O.jsx)(b.a,{children:Object(O.jsx)(m.a,{color:"primary",onClick:N,children:"Homepage"})}),Object(O.jsx)(b.a,{className:"ml-5",children:Object(O.jsx)(m.a,{color:"warning",onClick:P,children:"Favoritos"})})]})]})]}),function(){if(p)return Object(O.jsx)("div",{className:"d-flex justify-content-center mt-3",children:Object(O.jsx)(x.a,{style:{width:"3rem",height:"3rem"}})});var e=h.map((function(e){var t="data:image/png;base64,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";return e.volumeInfo.imageLinks&&(t=e.volumeInfo.imageLinks.thumbnail),Object(O.jsx)("div",{className:"col-lg-4 mb-3",children:Object(O.jsx)(D,{thumbnail:t,title:e.volumeInfo.title,description:e.volumeInfo.description,publishedDate:e.volumeInfo.publishedDate,id:e.id})},e.id)}));return Object(O.jsxs)("div",{className:"container my-5",children:[Object(O.jsx)("div",{className:"row",children:e}),Object(O.jsx)(m.a,{onClick:function(){return L()},children:"Pr\xf3xima p\xe1gina"})]})}(),Object(O.jsx)(g.a,{})]})};var C=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(X,{})})};n(39);s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(C,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.d199482b.chunk.js.map