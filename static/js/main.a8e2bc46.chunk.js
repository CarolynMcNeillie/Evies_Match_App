(this.webpackJsonpevies_match_app=this.webpackJsonpevies_match_app||[]).push([[0],{11:function(e,a,t){e.exports={alert:"Alert_alert__2dlD-",winner:"Alert_winner__2_e47",alert__container:"Alert_alert__container__3P3pr","alert--isVisible":"Alert_alert--isVisible__1FIBH"}},12:function(e,a,t){e.exports={card:"Card_card__3I9LM",card__face:"Card_card__face__1Omms","card--face-up":"Card_card--face-up__3kyG_"}},16:function(e,a,t){e.exports={board:"Board_board__1XdY9","board__cards--container":"Board_board__cards--container__lwuDq"}},22:function(e,a,t){},23:function(e,a,t){e.exports={button:"Button_button__1PA_U"}},26:function(e,a,t){e.exports=t(37)},31:function(e,a,t){},37:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(21),i=t.n(r),l=(t(31),t(15)),o=t(22),s=t.n(o),u=t(5),f=t(13),p=t(7),m=t(8),_=t(10),b=t.n(_),d=t(11),O=t.n(d),j=function(e){var a=e.isVisible,t=e.children,n=b()(O.a.alert,Object(m.a)({},O.a["alert--isVisible"],a));return c.a.createElement("aside",{className:n},a?c.a.createElement("div",{className:O.a.alert__container},t):null)};j.defaultProps={isVisible:!1};var E=t(23),v=t.n(E),h=function(e){var a=e.onClick,t=e.children;return c.a.createElement("button",{onClick:a,className:v.a.button},t)},F=t(12),U=t.n(F),y=function(e){var a=e.card,t=e.onClick,n=(e.children,b()(U.a.card,Object(m.a)({},U.a["card--face-up"],a.isFaceUp)));return c.a.createElement("article",{className:n,onClick:t},c.a.createElement("span",{className:U.a.card__face},a.face))};y.defaultProps={isFaceUp:!1};var g=function(e){return e.concat(e)};function P(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function k(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?P(Object(t),!0).forEach((function(a){Object(m.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var w=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:!e.isFaceUp,t=k({},e,{isFaceUp:a});return t},C=function(e){for(var a=e.length,t=0,n=0;0!==a;)n=Math.floor(Math.random()*a),t=e[a-=1],e[a]=e[n],e[n]=t;return e},N=[{name:"tongue",face:"\ud83d\ude1b",isFaceUp:!1},{name:"robot",face:"\ud83e\udd16",isFaceUp:!1},{name:"heart",face:"\u2764\ufe0f",isFaceUp:!1},{name:"family",face:"\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67",isFaceUp:!1},{name:"taco",face:"\ud83c\udf2e",isFaceUp:!1},{name:"bus",face:"\ud83d\ude8c",isFaceUp:!1},{name:"apple",face:"\ud83c\udf4e",isFaceUp:!1},{name:"flower",face:"\ud83c\udf38",isFaceUp:!1},{name:"airplane",face:"\u2708\ufe0f",isFaceUp:!1},{name:"fairy",face:"\ud83e\uddda\ud83c\udffc\u200d\u2642\ufe0f",isFaceUp:!1},{name:"bear",face:"\ud83d\udc3b",isFaceUp:!1},{name:"baby",face:"\ud83d\udc76\ud83c\udffc",isFaceUp:!1},{name:"dog",face:"\ud83d\udc36",isFaceUp:!1},{name:"sheep",face:"\ud83d\udc11",isFaceUp:!1},{name:"icecream",face:"\ud83c\udf66",isFaceUp:!1},{name:"crayon",face:"\ud83d\udd8d",isFaceUp:!1},{name:"butterfly",face:"\ud83e\udd8b",isFaceUp:!1}],S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5;return C(g(C(N).slice(0,e)))},x=t(16),A=t.n(x),D=function(){var e=Object(n.useState)(S(6)),a=Object(p.a)(e,2),t=a[0],r=a[1],i=Object(n.useState)([]),l=Object(p.a)(i,2),o=l[0],s=l[1],u=Object(n.useState)(0),m=Object(p.a)(u,2),_=m[0],b=m[1],d=Object(n.useState)(0),O=Object(p.a)(d,2),E=O[0],v=O[1],F=Object(n.useState)(!1),U=Object(p.a)(F,2),g=U[0],P=U[1],k=Object(n.useState)(!1),C=Object(p.a)(k,2),N=C[0],x=C[1],D=t.length/2,V=function(e,a){if(!a.isFaceUp&&!N){var n=Object(f.a)(t),c=Object(f.a)(o);n[e]=w(a),r(n),void 0===o[_]?c[_]=[e]:(c[_][1]=e,x(!0),b(_+1),i=c[_],t[i[0]].name===t[i[1]].name?(D===E+1&&P(!0),v(E+1),x(!1)):setTimeout((function(){var e=Object(f.a)(t);i.forEach((function(a){e[a]=w(e[a],!1)})),r(e),x(!1)}),1e3)),s(c)}var i};return c.a.createElement("div",{className:A.a.board},c.a.createElement(j,{isVisible:g},c.a.createElement("h1",null," Winner! "),c.a.createElement("p",null,"It took you ",c.a.createElement("strong",null," ",_," ")," tries to find",c.a.createElement("strong",null," ",E," ")," pairs"),c.a.createElement(h,{onClick:function(){r(S(6)),s([]),b(0),v(0),P(!1)}}," Play again! ")),g?null:c.a.createElement("div",{className:A.a["board__cards--container"]},t.map((function(e,a){return c.a.createElement(y,{card:e,key:a,onClick:function(){V(a,e)}})}))))},V=function(){return c.a.createElement(u.c,null,c.a.createElement(u.a,{exact:!0,path:"/"},c.a.createElement(D,null)),c.a.createElement(u.a,{exact:!0,path:"/Evies_Match_App/"},c.a.createElement(D,null)))};i.a.render(c.a.createElement((function(){return c.a.createElement(l.a,null,c.a.createElement("main",{className:s.a.app},c.a.createElement(V,null)))}),null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.a8e2bc46.chunk.js.map