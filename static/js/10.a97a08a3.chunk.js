(this["webpackJsonp24-rols"]=this["webpackJsonp24-rols"]||[]).push([[10],{254:function(t,e,c){},255:function(t,e,c){},273:function(t,e,c){"use strict";c.r(e);var n=c(2),s=c(3),a=c(0),o=c(1),i=c(10),r=c.n(i),l=c(4),d=c(71),j=c(7),u=c.n(j),b=c(11),p=c(22),h=c(24),O=(c(254),c(14)),m=c(48),f=c(72),x=function(t){var e=Object(O.a)().state,c=Object(o.useState)(""),i=Object(s.a)(c,2),d=i[0],j=i[1],x=Object(o.useState)(0),y=Object(s.a)(x,2),g=y[0],v=y[1],_=Object(o.useState)(!1),w=Object(s.a)(_,2),S=w[0],k=w[1],N=Object(o.useState)(!1),A=Object(s.a)(N,2),C=A[0],J=A[1],F=Object(o.useState)(!1),z=Object(s.a)(F,2),E=z[0],R=z[1];Object(o.useEffect)((function(){v(void 0!==e.cart.basket&&e.cart.basket.find((function(e){return e.id===t.food._id}))?e.cart.basket.filter((function(e){return e.id===t.food._id}))[0].countBasket:1)}),[]);var U=Object(a.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"},children:Object(a.jsx)("p",{style:{color:"green",textAlign:"center",fontWeight:"700",fontSize:"24px"},children:"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0432 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0435"})});return Object(a.jsxs)("div",{className:"header-slider",children:[Object(a.jsx)(h.a,{show:S,modalClosed:function(){return k(!1)},children:U}),C&&Object(a.jsx)(b.a,{}),E&&Object(a.jsx)(p.a,{}),!C&&!E&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"header-slider_list-block",children:Object(a.jsxs)("div",{className:"list-content",children:[Object(a.jsxs)("div",{className:"list-content_header",children:[Object(a.jsx)("h1",{children:t.food.name_ru}),Object(a.jsxs)("p",{children:["\u0412\u0435\u0441 ",t.food.weight," \u0433."]}),Object(a.jsx)("span",{children:t.food.description_ru})]}),Object(a.jsxs)("div",{className:"list-content_center",children:[Object(a.jsx)("button",{onClick:function(){return v(1===g?1:g-1)},children:"-"}),Object(a.jsx)("span",{children:Object(a.jsxs)("p",{children:[" ",g," "]})}),Object(a.jsx)("button",{onClick:function(){return v(g+1)},children:"+"})]}),Object(a.jsxs)("div",{className:"list-content_footer",children:[Object(a.jsxs)("div",{className:"price",children:[Object(a.jsxs)("h2",{children:[0!==t.food.percent?(t.food.price*((100-t.food.percent)/100)).toFixed(1):t.food.price,"\u0433\u0440\u043d."]}),0!==t.food.percent&&Object(a.jsxs)("p",{children:[t.food.price," \u0433\u0440\u043d."]})]}),Object(a.jsx)(m.a,Object(n.a)(Object(n.a)({},t),{},{count:g,food:t.food,title:"button.toOrder",style:"open-modalTwo"})),Object(a.jsxs)("div",{className:"phone-input",children:[Object(a.jsx)(f.a,{format:"+38(0##) ### ## ##",mask:"_",allowEmptyFormatting:!0,value:d,onChange:function(t){return j(t.target.value)}}),Object(a.jsx)("button",{onClick:function(){J(!0);var e=[{product:t.food._id,quantity:g}];r.a.post(l.a+"/order/notAuth",{oplata:{type:"cash",status:"not-paid"},delivery:{status:"courier"},city:u.a.get("24rolls").customOptions.city,address:{text:"_",city:u.a.get("24rolls").customOptions.city},name:"-",phone:d,comment:"",sdachaS:"",cutlery:0,items:e,email:"",bonus:0}).then((function(t){j(""),k(!0),v(1),J(!1),R(!1)})).catch((function(t){J(!1),R(!0)}))},className:"price-button",children:"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u0432 1 \u043a\u043b\u0438\u043a"})]})]})]})}),Object(a.jsx)("div",{className:"header-slider_image-block",children:Object(a.jsx)("img",{src:l.a+"/".concat(t.food.image),alt:t.food.name})})]})]},t.food._id)},y=c(90),g=(c(255),function(t){console.log(t),t.target.style.height=t.target.contentWindow.document.documentElement.scrollHeight+"px"});e.default=function(t){var e=Object(o.useState)(!1),c=Object(s.a)(e,2),i=c[0],j=c[1],u=Object(o.useState)(!1),h=Object(s.a)(u,2),O=h[0],m=h[1],f=Object(o.useState)(!1),v=Object(s.a)(f,2),_=v[0],w=v[1],S=Object(o.useState)([]),k=Object(s.a)(S,2),N=k[0],A=k[1];Object(o.useEffect)((function(){var e=t.match.params.route,c=t.match.params.catRoute;j(!0),r.a.post(l.a+"/products/by/route",{route:e}).then((function(t){w(t.data.products[0]),j(!1)})).catch((function(t){m(!0),j(!1)})),r.a.post(l.a+"/products/category/by/routes",{routes:c}).then((function(t){A(t.data.products),m(!1),j(!1)})).catch((function(t){m(!0),j(!1)}))}),[t]);return Object(a.jsxs)("div",{className:"card-product",children:[i&&Object(a.jsx)(b.a,{}),O&&Object(a.jsx)(p.a,{}),_&&N&&!O&&!i&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(d.b,{children:[Object(a.jsx)("title",{children:_.seo_title}),Object(a.jsx)("meta",{name:"description",content:_.seo_description}),Object(a.jsx)("meta",{name:"keywords",content:_.seo_keywords}),Object(a.jsx)("script",{async:!0,type:"application/ld+json",children:function(){if(_){var t={"@context":"https://schema.org","@type":"Product",description:_.name_ru+"| "+"".concat(_.name_ru," \u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430. \u0417\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u0439 ").concat(_.name_ru," \u0441 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e\u0439 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u043e\u0439 \u0432 \u0414\u043d\u0435\u043f\u0440\u0435, \u0417\u0430\u043f\u043e\u0440\u043e\u0436\u044c\u0435, \u0425\u0430\u0440\u044c\u043a\u043e\u0432\u0435\u2714\ufe0f\u0421\u0443\u0448\u0438 \u043e\u0442 15\u0433\u0440\u043d \u260e 050 719-24-24 \u2714\ufe0f\u0420\u043e\u043b\u043b\u044b \u2714\ufe0f\u0421\u0435\u0442\u044b \u2714\ufe0fWok \u2714\u041e\u043d\u043b\u0430\u0439\u043d \u0437\u0430\u043a\u0430\u0437 ").concat(_.name_ru," \u043d\u0430 \u0434\u043e\u043c,\u043e\u0444\u0438\u0441."),name:_.name_ru,image:l.a+"/"+_.image,offers:{"@type":"Offer",availability:"https://schema.org/InStock",price:0!==_.percent?_.price*((100-_.percent)/100):_.price,priceCurrency:"UAH"}};return JSON.stringify(t)}}()}),Object(a.jsx)("script",{type:"application/ld+json",children:JSON.stringify({"@context":"http://schema.org","@type":"WebSite","@id":"#website",url:"https://24rolls.zp.ua/",name:"\u0421\u0443\u0448\u0438 24Rolls Dnepr",potentialAction:{"@type":"SearchAction",target:"https://24rolls.zp.ua/?s={search_term_string}","query-input":"required name=search_term_string"}})}),Object(a.jsx)("script",{type:"application/ld+json",children:JSON.stringify({"@context":"http://schema.org","@type":"Organization",url:"https://24rolls.zp.ua/",contactPoint:[{"@type":"ContactPoint",telephone:"068 719 24 24",contactType:["customer service","sales"],areaServed:["UA"],contactOption:["TollFree"],availableLanguage:["Russian","Ukrainian"]}],sameAs:["https://www.youtube.com/channel/UCmJwKEidDraJtVdYtpnsJSA","https://www.instagram.com/24rolls.com.ua/"]})})]}),Object(a.jsx)(x,Object(n.a)(Object(n.a)({},t),{},{food:_})),Object(a.jsx)(y.a,Object(n.a)(Object(n.a)({},t),{},{list:N,title:!0,links:!0})),Object(a.jsx)("div",{children:Object(a.jsx)("iframe",{onLoad:g,style:{width:"100%",border:"none",height:"100%",verflow:"visible",fontFamily:"'Roboto', sans-serif"},srcDoc:_.article,children:"\u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 Frame"})})]})]})}}}]);
//# sourceMappingURL=10.a97a08a3.chunk.js.map