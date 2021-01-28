(this["webpackJsonp24-rols"]=this["webpackJsonp24-rols"]||[]).push([[10],{252:function(e,t,n){},253:function(e,t,n){},265:function(e,t,n){"use strict";n.r(t);var i=n(2),r=n(3),a=n(0),o=n(1),c=n.n(o),s=n(10),l=n.n(s),u=n(5),d=n(71),p=n(7),h=n.n(p),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},m=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var O=function(e){function t(){var e;b(this,t);for(var n=arguments.length,i=Array(n),r=0;r<n;r++)i[r]=arguments[r];var a=j(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i)));return a.state={},a.styles={ellipsis:{position:"fixed",visibility:"hidden",top:0,left:0}},a.elements={},a.onResize=a.onResize.bind(a),a.onTruncate=a.onTruncate.bind(a),a.calcTargetWidth=a.calcTargetWidth.bind(a),a.measureWidth=a.measureWidth.bind(a),a.getLines=a.getLines.bind(a),a.renderLine=a.renderLine.bind(a),a}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),m(t,[{key:"componentDidMount",value:function(){var e=this.elements.text,t=this.calcTargetWidth,n=this.onResize,i=document.createElement("canvas");this.canvasContext=i.getContext("2d"),t((function(){e&&e.parentNode.removeChild(e)})),window.addEventListener("resize",n)}},{key:"componentDidUpdate",value:function(e){this.props.children!==e.children&&this.forceUpdate(),this.props.width!==e.width&&this.calcTargetWidth()}},{key:"componentWillUnmount",value:function(){var e=this.elements.ellipsis,t=this.onResize,n=this.timeout;e.parentNode.removeChild(e),window.removeEventListener("resize",t),window.cancelAnimationFrame(n)}},{key:"innerText",value:function(e){var t=document.createElement("div"),n="innerText"in window.HTMLElement.prototype?"innerText":"textContent";t.innerHTML=e.innerHTML.replace(/\r\n|\r|\n/g," ");var i=t[n],r=document.createElement("div");return r.innerHTML="foo<br/>bar","foo\nbar"!==r[n].replace(/\r\n|\r/g,"\n")&&(t.innerHTML=t.innerHTML.replace(/<br.*?[\/]?>/gi,"\n"),i=t[n]),i}},{key:"onResize",value:function(){this.calcTargetWidth()}},{key:"onTruncate",value:function(e){var t=this.props.onTruncate;"function"===typeof t&&(this.timeout=window.requestAnimationFrame((function(){t(e)})))}},{key:"calcTargetWidth",value:function(e){var t=this.elements.target,n=this.calcTargetWidth,i=this.canvasContext,r=this.props.width;if(t){var a=r||Math.floor(t.parentNode.getBoundingClientRect().width);if(!a)return window.requestAnimationFrame((function(){return n(e)}));var o=window.getComputedStyle(t),c=[o["font-weight"],o["font-style"],o["font-size"],o["font-family"]].join(" ");i.font=c,this.setState({targetWidth:a},e)}}},{key:"measureWidth",value:function(e){return this.canvasContext.measureText(e).width}},{key:"ellipsisWidth",value:function(e){return e.offsetWidth}},{key:"trimRight",value:function(e){return e.replace(/\s+$/,"")}},{key:"getLines",value:function(){for(var e=this.elements,t=this.props,n=t.lines,i=t.ellipsis,r=t.trimWhitespace,a=this.state.targetWidth,o=this.innerText,s=this.measureWidth,l=this.onTruncate,u=this.trimRight,d=[],p=o(e.text).split("\n").map((function(e){return e.split(" ")})),h=!0,f=this.ellipsisWidth(this.elements.ellipsis),m=1;m<=n;m++){var b=p[0];if(0!==b.length){var j=b.join(" ");if(s(j)<=a&&1===p.length){h=!1,d.push(j);break}if(m===n){for(var O=b.join(" "),v=0,y=O.length-1;v<=y;){var g=Math.floor((v+y)/2);s(O.slice(0,g+1))+f<=a?v=g+1:y=g-1}var x=O.slice(0,v);if(r)for(x=u(x);!x.length&&d.length;){x=u(d.pop())}j=c.a.createElement("span",null,x,i)}else{for(var w=0,_=b.length-1;w<=_;){var k=Math.floor((w+_)/2);s(b.slice(0,k+1).join(" "))<=a?w=k+1:_=k-1}if(0===w){m=n-1;continue}j=b.slice(0,w).join(" "),p[0].splice(0,w)}d.push(j)}else d.push(),p.shift(),m--}return l(h),d}},{key:"renderLine",value:function(e,t,n){if(t===n.length-1)return c.a.createElement("span",{key:t},e);var i=c.a.createElement("br",{key:t+"br"});return e?[c.a.createElement("span",{key:t},e),i]:i}},{key:"render",value:function(){var e=this,t=this.elements.target,n=this.props,i=n.children,r=n.ellipsis,a=n.lines,o=function(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}(n,["children","ellipsis","lines"]),s=this.state.targetWidth,l=this.getLines,u=this.renderLine,d=this.onTruncate,p=void 0;return"undefined"!==typeof window&&!(!t||!s)&&(a>0?p=l().map(u):(p=i,d(!1))),delete o.onTruncate,delete o.trimWhitespace,c.a.createElement("span",f({},o,{ref:function(t){e.elements.target=t}}),c.a.createElement("span",null,p),c.a.createElement("span",{ref:function(t){e.elements.text=t}},i),c.a.createElement("span",{ref:function(t){e.elements.ellipsis=t},style:this.styles.ellipsis},r))}}]),t}(o.Component);O.propTypes={children:h.a.node,ellipsis:h.a.node,lines:h.a.oneOfType([h.a.oneOf([!1]),h.a.number]),trimWhitespace:h.a.bool,width:h.a.number,onTruncate:h.a.func},O.defaultProps={children:"",ellipsis:"\u2026",lines:1,trimWhitespace:!1,width:0};n(252);var v=n(49),y=n(50),g=n(8),x=n(15),w=n(37),_=function(e){var t=Object(x.a)(),n=t.state,r=t.dispatch;return console.log(e.food),Object(a.jsxs)("div",{className:"header-slider",children:[Object(a.jsx)("div",{className:"header-slider_list-block",children:Object(a.jsxs)("div",{className:"list-content",children:[Object(a.jsxs)("div",{className:"list-content_header",children:[Object(a.jsx)("h1",{children:e.food.name_ru}),Object(a.jsxs)("p",{children:["(",void 0!==n.cart.basket&&n.cart.basket.find((function(t){return t.id===e.food._id}))?n.cart.basket.map((function(t){if(t.id===e.food._id)return t.countBasket})):1," \u0448\u0442.) \u0412\u0435\u0441 ",e.food.weight," \u0433."]}),Object(a.jsxs)("span",{children:[" ",e.food.description_ru]})]}),Object(a.jsxs)("div",{className:"list-content_center",children:[Object(a.jsx)("amp-img",{src:v.a,alt:"-",onClick:function(){return r({type:g.a.REMOVE_TO_BASKET,payload:e.food._id})},width:"12",height:"62"}),Object(a.jsx)("span",{children:Object(a.jsx)("p",{children:void 0!==n.cart.basket&&n.cart.basket.find((function(t){return t.id===e.food._id}))?n.cart.basket.map((function(t){if(t.id===e.food._id)return t.countBasket})):1})}),Object(a.jsx)("amp-img",{src:y.a,alt:"+",onClick:function(){return r({type:g.a.ADD_TO_BASKET,payload:e.food})},width:"12",height:"62"})]}),Object(a.jsxs)("div",{className:"list-content_footer",children:[Object(a.jsxs)("div",{className:"price",children:[Object(a.jsxs)("h2",{children:[0!==e.food.percent?(e.food.price*((100-e.food.percent)/100)).toFixed(1):e.food.price,"\u0433\u0440\u043d."]}),0!==e.food.percent&&Object(a.jsxs)("p",{children:[e.food.price," \u0433\u0440\u043d."]})]}),Object(a.jsx)(w.a,Object(i.a)(Object(i.a)({},e),{},{title:"button.toOrder",style:"open-modalTwo"}))]})]})}),Object(a.jsx)("div",{className:"header-slider_image-block",children:Object(a.jsx)("img",{src:u.a+"/".concat(e.food.image),alt:e.food.name})})]},e.food._id)},k=n(90),T=(n(253),n(11)),W=n(22);t.default=function(e){var t=Object(o.useState)(!1),n=Object(r.a)(t,2),c=n[0],s=n[1],p=Object(o.useState)(!1),h=Object(r.a)(p,2),f=h[0],m=h[1],b=Object(o.useState)(!1),j=Object(r.a)(b,2),O=j[0],v=j[1],y=Object(o.useState)([]),g=Object(r.a)(y,2),x=g[0],w=g[1];Object(o.useEffect)((function(){var t=e.match.params.route,n=e.match.params.catRoute;s(!0),l.a.post(u.a+"/products/by/route",{route:t}).then((function(e){v(e.data.products[0]),s(!1)})).catch((function(e){m(!0),s(!1)})),l.a.post(u.a+"/products/category/by/routes",{routes:n}).then((function(e){w(e.data.products),m(!1),s(!1)})).catch((function(e){console.log(e),m(!0),s(!1)}))}),[e]);return console.log(O),Object(a.jsxs)("div",{className:"card-product",children:[c&&Object(a.jsx)(T.a,{}),f&&Object(a.jsx)(W.a,{}),O&&x&&!f&&!c&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(d.b,{children:[Object(a.jsxs)("title",{children:["24ROLLS | ",O.name_ru]}),Object(a.jsx)("meta",{name:"description",content:"".concat(O.name_ru," \u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430. \u0417\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u0439 ").concat(O.name_ru," \u0441 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e\u0439 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u043e\u0439 \u0432 \u0414\u043d\u0435\u043f\u0440\u0435, \u0417\u0430\u043f\u043e\u0440\u043e\u0436\u044c\u0435, \u0425\u0430\u0440\u044c\u043a\u043e\u0432\u0435\u2714\ufe0f\u0421\u0443\u0448\u0438 \u043e\u0442 15\u0433\u0440\u043d \u260e 050 719-24-24 \u2714\ufe0f\u0420\u043e\u043b\u043b\u044b \u2714\ufe0f\u0421\u0435\u0442\u044b \u2714\ufe0fWok \u2714\u041e\u043d\u043b\u0430\u0439\u043d \u0437\u0430\u043a\u0430\u0437 ").concat(O.name_ru," \u043d\u0430 \u0434\u043e\u043c,\u043e\u0444\u0438\u0441.")}),Object(a.jsx)("meta",{name:"keywords",content:"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u0441\u0443\u0448\u0438, \u0440\u043e\u043b\u043b\u044b, wok, \u043f\u0430\u0441\u0442\u0443, \u0441\u0430\u043b\u0430\u0442\u044b, \u0441\u0443\u043f\u044b, \u043d\u0430\u043f\u0438\u0442\u043a\u0438, \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430, \u0414\u043d\u0435\u043f\u0440, \u0417\u0430\u043f\u043e\u0440\u043e\u0436\u044c\u0435, \u0425\u0430\u0440\u044c\u043a\u043e\u0432, \u0432\u043a\u0443\u0441\u043d\u043e, \u0431\u044b\u0441\u0442\u0440\u0430\u044f \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430, \u0430\u043a\u0446\u0438\u0438, \u0441\u043a\u0438\u0434\u043a\u0438, \u0432\u044b\u0433\u043e\u0434\u043d\u044b\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f, \u043f\u043e\u0434\u0430\u0440\u043a\u0438, \u0437\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u0421\u0443\u0448\u0438 \u0414\u043d\u0435\u043f\u0440, \u0437\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u0421\u0443\u0448\u0438 \u0417\u0430\u043f\u043e\u0440\u043e\u0436\u044c\u0435, \u0437\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u0421\u0443\u0448\u0438 \u0425\u0430\u0440\u044c\u043a\u043e\u0432, \u043a\u0440\u0443\u0433\u043b\u043e\u0441\u0443\u0442\u043e\u0447\u043d\u0430\u044f \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u0441\u0443\u0448\u0438, 24ROLLS, rolls, 24rolls.com.ua"}),Object(a.jsx)("meta",{property:"twitter:title",content:"ROLLS24"}),Object(a.jsx)("meta",{property:"og:title",content:"ROLLS24"}),Object(a.jsx)("meta",{name:"twitter:description",content:"".concat(O.name_ru," \u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430. \u0417\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u0439 ").concat(O.name_ru," \u0441 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e\u0439 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u043e\u0439 \u0432 \u0414\u043d\u0435\u043f\u0440\u0435 \u0438 \u0417\u0430\u043f\u043e\u0440\u043e\u0436\u044c\u0435\u2714\ufe0f\u0421\u0443\u0448\u0438 \u043e\u0442 15\u0433\u0440\u043d \u260e 050 719-24-24 \u2714\ufe0f\u0420\u043e\u043b\u043b\u044b \u2714\ufe0f\u0421\u0435\u0442\u044b \u2714\ufe0fWok \u2714\u041e\u043d\u043b\u0430\u0439\u043d \u0437\u0430\u043a\u0430\u0437 ").concat(O.name_ru," \u043d\u0430 \u0434\u043e\u043c,\u043e\u0444\u0438\u0441.")}),Object(a.jsx)("meta",{name:"og:description",content:"".concat(O.name_ru," \u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430. \u0417\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u0439 ").concat(O.name_ru," \u0441 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e\u0439 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u043e\u0439 \u0432 \u0414\u043d\u0435\u043f\u0440\u0435 \u0438 \u0417\u0430\u043f\u043e\u0440\u043e\u0436\u044c\u0435\u2714\ufe0f\u0421\u0443\u0448\u0438 \u043e\u0442 15\u0433\u0440\u043d \u260e 050 719-24-24 \u2714\ufe0f\u0420\u043e\u043b\u043b\u044b \u2714\ufe0f\u0421\u0435\u0442\u044b \u2714\ufe0fWok \u2714\u041e\u043d\u043b\u0430\u0439\u043d \u0437\u0430\u043a\u0430\u0437 ").concat(O.name_ru," \u043d\u0430 \u0434\u043e\u043c,\u043e\u0444\u0438\u0441.")}),Object(a.jsx)("script",{async:!0,type:"application/ld+json",children:function(){if(O){var e={"@context":"https://schema.org","@type":"Product",description:O.name_ru+"| "+"".concat(O.name_ru," \u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430. \u0417\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u0439 ").concat(O.name_ru," \u0441 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e\u0439 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u043e\u0439 \u0432 \u0414\u043d\u0435\u043f\u0440\u0435, \u0417\u0430\u043f\u043e\u0440\u043e\u0436\u044c\u0435, \u0425\u0430\u0440\u044c\u043a\u043e\u0432\u0435\u2714\ufe0f\u0421\u0443\u0448\u0438 \u043e\u0442 15\u0433\u0440\u043d \u260e 050 719-24-24 \u2714\ufe0f\u0420\u043e\u043b\u043b\u044b \u2714\ufe0f\u0421\u0435\u0442\u044b \u2714\ufe0fWok \u2714\u041e\u043d\u043b\u0430\u0439\u043d \u0437\u0430\u043a\u0430\u0437 ").concat(O.name_ru," \u043d\u0430 \u0434\u043e\u043c,\u043e\u0444\u0438\u0441."),name:O.name_ru,image:u.a+"/"+O.image,offers:{"@type":"Offer",availability:"https://schema.org/InStock",price:0!==O.percent?O.price*((100-O.percent)/100):O.price,priceCurrency:"UAH"}};return JSON.stringify(e)}}()}),Object(a.jsx)("script",{type:"application/ld+json",children:JSON.stringify({"@context":"http://schema.org","@type":"WebSite","@id":"#website",url:"https://24rolls.zp.ua/",name:"\u0421\u0443\u0448\u0438 24Rolls Dnepr",potentialAction:{"@type":"SearchAction",target:"https://24rolls.zp.ua/?s={search_term_string}","query-input":"required name=search_term_string"}})}),Object(a.jsx)("script",{type:"application/ld+json",children:JSON.stringify({"@context":"http://schema.org","@type":"Organization",url:"https://24rolls.zp.ua/",contactPoint:[{"@type":"ContactPoint",telephone:"068 719 24 24",contactType:["customer service","sales"],areaServed:["UA"],contactOption:["TollFree"],availableLanguage:["Russian","Ukrainian"]}],sameAs:["https://www.youtube.com/channel/UCmJwKEidDraJtVdYtpnsJSA","https://www.instagram.com/24rolls.com.ua/"]})})]}),Object(a.jsx)(_,Object(i.a)(Object(i.a)({},e),{},{food:O})),Object(a.jsx)(k.a,Object(i.a)(Object(i.a)({},e),{},{list:x,title:!0}))]})]})}}}]);
//# sourceMappingURL=10.e5a88caa.chunk.js.map