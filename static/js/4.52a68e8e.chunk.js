(this["webpackJsonp24-rols"]=this["webpackJsonp24-rols"]||[]).push([[4],{241:function(e,t,n){"use strict";var c=n(0);n(1),n(242);t.a=function(e){var t=e.title;e.svg;return Object(c.jsx)("div",{className:"heading-blog",children:Object(c.jsx)("h1",{children:t})})}},242:function(e,t,n){},244:function(e,t,n){},257:function(e,t,n){},273:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(3),r=n(1),i=n.n(r),o=n(0),s=n(10),l=n.n(s),f=n(4),d=n.n(f),u=n(8),j=n(70),b=n(15),O=n(73),p=(n(244),n(74)),m=n(241),h=n(7),g=(n(257),function(e){var t=Object(b.a)(),n=t.state,c=t.dispatch;return Object(o.jsx)("div",{className:"mobile-filters-block-content",children:e.filters&&e.filters.map((function(e){return Object(o.jsx)("div",{className:"mobile-filters-block-content__container",style:n.filterMode===e._id?{border:"2px solid #F89F46"}:null,children:Object(o.jsx)("img",{onClick:n.filterMode===e._id?function(){return c({type:h.a.DROP_FILTER})}:function(){return c({type:h.a.SET_FILTER,filterId:e._id})},className:"mobile-filters-block-content__container__item",alt:e.alt,src:u.a+"/"+e.image})})}))})}),y=n(107),_=n(12),x=n(30),v=i.a.memo((function(e){var t=Object(j.a)().t,n=Object(y.a)(e.url),i=Object(a.a)(n,3),s=i[0],f=i[1],h=i[2],v=Object(r.useState)([]),k=Object(a.a)(v,2),L=k[0],S=k[1],E=Object(r.useState)(!1),N=Object(a.a)(E,2),R=N[0],F=N[1],I=Object(r.useState)(!1),M=Object(a.a)(I,2),w=M[0],D=M[1],z=Object(b.a)(),J=z.state;z.dispatch;return Object(r.useEffect)((function(){var t=d.a.get("24rolls").customOptions.city;if(console.log(t),s){var n=s.filter((function(e){var n=!1;return"Dnipro"===t?e.shop.map((function(e){"Dp"===e.name&&(n=!0)})):"Zaporijja"===t?e.shop.forEach((function(e){"Zp"===e.name&&(n=!0)})):"Kharkov"===t&&e.shop.forEach((function(e){"Kh"===e.name&&(n=!0)})),n}));S(n)}J.filterMode&&(F(!0),l.a.get(u.a+"/products/filter/category/".concat(e.categoryId,"/").concat(J.filterMode)).then((function(e){console.log(e),S(e.data),D(!1)})).catch((function(e){console.log(e,e.reponse)})).finally((function(){return F(!1)})))}),[J.filterMode,s]),Object(o.jsxs)("div",{className:"rolls_container",children:[Object(o.jsxs)(O.a,{children:[Object(o.jsx)("meta",{name:"keywords",content:"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u0441\u0443\u0448\u0438, \u0440\u043e\u043b\u043b\u044b, wok, \u043f\u0430\u0441\u0442\u0443, \u0441\u0430\u043b\u0430\u0442\u044b, \u0441\u0443\u043f\u044b, \u043d\u0430\u043f\u0438\u0442\u043a\u0438, \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430, \u0414\u043d\u0435\u043f\u0440, \u0417\u0430\u043f\u043e\u0440\u043e\u0436\u044c\u0435, \u0425\u0430\u0440\u044c\u043a\u043e\u0432, \u0432\u043a\u0443\u0441\u043d\u043e,  \u0431\u044b\u0441\u0442\u0440\u0430\u044f \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430"}),Object(o.jsx)("script",{async:!0,type:"application/ld+json",children:function(){var t={"@context":"https://schema.org/","@type":"Offer",category:e.title,brand:"24ROLLS",name:e.title,itemOffered:L.map((function(t){return{"@type":"Product",category:e.title,material:e.title,productID:t._id,slogan:t.name_ru,name:t.name_ru,brand:{"@type":"Organization",name:"24ROLLS",address:"\u0414\u043d\u0435\u043f\u0440, \u0417\u0430\u043f\u043e\u0440\u043e\u0436\u044c\u0435",location:"\u0414\u043d\u0435\u043f\u0440, \u0417\u0430\u043f\u043e\u0440\u043e\u0436\u044c\u0435"},description:t.description_ru,image:t.image,offers:{"@type":"Offer",offeredBy:{"@type":"Organization",name:"24ROLLS",address:"\u0414\u043d\u0435\u043f\u0440, \u0417\u0430\u043f\u043e\u0440\u043e\u0436\u044c\u0435",location:"\u0414\u043d\u0435\u043f\u0440, \u0417\u0430\u043f\u043e\u0440\u043e\u0436\u044c\u0435"},seller:{"@type":"Organization",name:"24ROLLS",address:"\u0414\u043d\u0435\u043f\u0440, \u0417\u0430\u043f\u043e\u0440\u043e\u0436\u044c\u0435",location:"\u0414\u043d\u0435\u043f\u0440, \u0417\u0430\u043f\u043e\u0440\u043e\u0436\u044c\u0435"},category:e.title,priceCurrency:"UAH",price:t.price}}}))};return JSON.stringify(t)}()})]}),!w&&!f&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(m.a,{title:t(e.title),svg:!0}),Object(o.jsx)(g,{filters:e.filters})]}),(h||R)&&Object(o.jsx)(_.a,{}),(f||w)&&!h&&!R&&Object(o.jsx)(x.a,{}),L&&!h&&!R&&!w&&!f&&Object(o.jsx)("div",{className:"rolls_container_block",children:L.map((function(t){return Object(r.createElement)(p.a,Object(c.a)(Object(c.a)({},e),{},{style:"open-modal",key:t._id,food:t}))}))}),!L[0]&&!h&&!R&&!w&&!f&&Object(o.jsxs)("p",{children:[" ","\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445 \u0442\u043e\u0432\u0430\u0440\u043e\u0432..."," "]})]})}));t.default=v}}]);
//# sourceMappingURL=4.52a68e8e.chunk.js.map