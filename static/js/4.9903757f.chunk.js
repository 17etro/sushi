(this["webpackJsonp24-rols"]=this["webpackJsonp24-rols"]||[]).push([[4],{237:function(t,e,n){"use strict";var c=n(0);n(1),n(238);e.a=function(t){var e=t.title,n=(t.svg,t.h);return Object(c.jsx)("div",{className:"heading-blog",children:"h1"===n?Object(c.jsx)("h1",{children:e}):Object(c.jsx)("h2",{children:e})})}},238:function(t,e,n){},240:function(t,e,n){},253:function(t,e,n){},272:function(t,e,n){"use strict";n.r(e);var c=n(2),i=n(3),r=n(1),a=n.n(r),o=n(0),s=n(13),l=n.n(s),d=n(6),p=n.n(d),u=n(7),j=n(67),f=n(14),m=n(71),h=(n(240),n(73)),b=n(237),O=n(8),y=(n(253),function(t){var e=Object(f.a)(),n=e.state,c=e.dispatch;return Object(o.jsx)("div",{className:"mobile-filters-block-content",children:t.filters&&t.filters.map((function(t){return u.c.includes(t._id)?null:Object(o.jsx)("div",{className:"mobile-filters-block-content__container",style:n.filterMode===t._id?{border:"2px solid #F89F46"}:null,children:Object(o.jsx)("img",{onClick:n.filterMode===t._id?function(){return c({type:O.a.DROP_FILTER})}:function(){return c({type:O.a.SET_FILTER,filterId:t._id})},className:"mobile-filters-block-content__container__item",alt:t.alt||"24rolls",src:u.a+"/"+t.image})},t._id)}))})}),g=n(11),_=n(31),x=a.a.memo((function(t){var e=Object(j.a)().t,n=Object(r.useState)([]),a=Object(i.a)(n,2),s=a[0],d=a[1],O=Object(r.useState)(!1),x=Object(i.a)(O,2),v=x[0],w=x[1],S=Object(r.useState)([]),k=Object(i.a)(S,2),L=k[0],E=k[1],F=Object(r.useState)(!1),N=Object(i.a)(F,2),R=N[0],J=N[1],z=Object(r.useState)(!1),D=Object(i.a)(z,2),I=D[0],P=D[1],A=Object(f.a)().state;Object(r.useEffect)((function(){J(!0),l.a.get(u.a+t.url).then((function(e){console.log(e),"filter"===t.type?E(e.data):E(e.data.products),w(e.data.article),t.setBreadProd(e.data.products),P(!1)})).catch((function(t){P(!0)})).finally((function(){return J(!1)}))}),[]);var M=function(){var e={"@context":"https://schema.org/","@type":"ItemList",description:"".concat(t.title," \u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430. \u0417\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u0439 ").concat(t.title," \u0441 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e\u0439 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u043e\u0439 \u0432 \u0414\u043d\u0435\u043f\u0440\u0435, \u0417\u0430\u043f\u043e\u0440\u043e\u0436\u044c\u0435 \u0438 \u0425\u0430\u0440\u044c\u043a\u043e\u0432\u0435\u2714\ufe0f").concat(t.title," \u043e\u0442 15\u0433\u0440\u043d \u260e 050 719-24-24 \u2714\ufe0f \u041e\u043d\u043b\u0430\u0439\u043d \u0437\u0430\u043a\u0430\u0437 \u0435\u0434\u044b \u043d\u0430 \u0434\u043e\u043c,\u043e\u0444\u0438\u0441."),name:t.title,numberOfItems:s.length,itemListElement:s.map((function(e){return{"@type":"Product",category:t.title,material:t.title,productID:e._id,slogan:e.name_ru,name:e.name_ru,brand:{"@type":"Organization",name:"24ROLLS",address:"\u0414\u043d\u0435\u043f\u0440, \u0417\u0430\u043f\u043e\u0440\u043e\u0436\u044c\u0435",location:"\u0414\u043d\u0435\u043f\u0440, \u0417\u0430\u043f\u043e\u0440\u043e\u0436\u044c\u0435"},description:e.description_ru,image:e.image,offers:{"@type":"Offer",offeredBy:{"@type":"Organization",name:"24ROLLS",address:"\u0414\u043d\u0435\u043f\u0440, \u0417\u0430\u043f\u043e\u0440\u043e\u0436\u044c\u0435",location:"\u0414\u043d\u0435\u043f\u0440, \u0417\u0430\u043f\u043e\u0440\u043e\u0436\u044c\u0435"},seller:{"@type":"Organization",name:"24ROLLS",address:"\u0414\u043d\u0435\u043f\u0440, \u0417\u0430\u043f\u043e\u0440\u043e\u0436\u044c\u0435",location:"\u0414\u043d\u0435\u043f\u0440, \u0417\u0430\u043f\u043e\u0440\u043e\u0436\u044c\u0435"},category:t.title,priceCurrency:"UAH",price:0!==e.percent?e.price*((100-e.percent)/100):e.price}}}))};return JSON.stringify(e)};Object(r.useEffect)((function(){var e=p.a.get("24rolls").customOptions.city;if(L){var n=L.filter((function(t){var n=!1;return"Dnipro"===e?t.shop.map((function(t){"Dp"===t.name&&(n=!0)})):"Zaporijja"===e?t.shop.forEach((function(t){"Zp"===t.name&&(n=!0)})):"Kharkov"===e&&t.shop.forEach((function(t){"Kh"===t.name&&(n=!0)})),n}));d(n),t.setBreadProd(n)}A.filterMode&&(J(!0),l.a.get(u.a+"/products/filter/category/".concat(t.categoryId,"/").concat(A.filterMode)).then((function(e){console.log(e),d(e.data.products),w(e.data.article),t.setBreadProd(e.data.products),P(!1)})).catch((function(t){})).finally((function(){return J(!1)})))}),[A.filterMode,L]);var T=t.city,B=t.type;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"rolls_container",children:[Object(o.jsxs)(m.a,{children:[Object(o.jsx)("script",{async:!0,type:"application/ld+json",children:M()}),Object(o.jsx)("title",{children:3===T||"filter"===B?t.el.seo_title:2===T?t.el.seo_title_zp:t.el.seo_title_dp}),Object(o.jsx)("meta",{name:"description",content:3===T||"filter"===B?t.el.seo_description:2===T?t.el.seo_description_zp:t.el.seo_description_dp}),Object(o.jsx)("meta",{name:"keywords",content:3===T||"filter"===B?t.el.seo_keywords:2===T?t.el.seo_keywords_zp:t.el.seo_keywords_dp}),Object(o.jsx)("script",{async:!0,type:"application/ld+json",children:M()}),Object(o.jsx)("script",{type:"application/ld+json",children:JSON.stringify({"@context":"http://schema.org","@type":"WebSite","@id":"#website",url:"https://24rolls.com.ua/",name:"\u0421\u0443\u0448\u0438 24Rolls Dnepr",potentialAction:{"@type":"SearchAction",target:"https://24rolls.com.ua/?s={search_term_string}","query-input":"required name=search_term_string"}})}),Object(o.jsx)("script",{type:"application/ld+json",children:JSON.stringify({"@context":"http://schema.org","@type":"Organization",url:"https://24rolls.com.ua/",contactPoint:[{"@type":"ContactPoint",telephone:"068 719 24 24",contactType:["customer service","sales"],areaServed:["UA"],contactOption:["TollFree"],availableLanguage:["Russian","Ukrainian"]}],sameAs:["https://www.youtube.com/channel/UCmJwKEidDraJtVdYtpnsJSA","https://www.instagram.com/24rolls.com.ua/"]})})]}),!I&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(b.a,{title:e(t.title),svg:!0,h:"h1"}),Object(o.jsx)(y,{filters:t.filters})]}),R&&Object(o.jsx)(g.a,{}),I&&!R&&Object(o.jsx)(_.a,{}),s&&!R&&!I&&Object(o.jsx)("div",{className:"rolls_container_block",children:s.map((function(e){return Object(r.createElement)(h.a,Object(c.a)(Object(c.a)({},t),{},{style:"open-modal",key:e._id,food:e,width:window.innerWidth<610,smallMode:window.innerWidth<450}))}))}),!s[0]&&!R&&!I&&Object(o.jsxs)("p",{children:[" ","\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445 \u0442\u043e\u0432\u0430\u0440\u043e\u0432..."," "]})]}),v&&Object(o.jsx)("div",{style:{height:"100%"},children:Object(o.jsx)("iframe",{onLoad:function(t){t.target.style.height=300+t.target.contentWindow.document.documentElement.scrollHeight+"px"},style:{width:"100%",border:"none",height:"100%",verflow:"visible",fontFamily:"'Roboto', sans-serif"},srcDoc:v,children:"\u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 Frame"})})]})}));e.default=x}}]);
//# sourceMappingURL=4.9903757f.chunk.js.map