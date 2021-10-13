(this["webpackJsonpmemory-card-game"]=this["webpackJsonpmemory-card-game"]||[]).push([[0],{33:function(n,e,t){"use strict";t.r(e);var r,i,c,a,o,s,l,d=t(1),u=t.n(d),h=t(14),b=t.n(h),p=t(2),f=t(3),m=Object(f.a)(r||(r=Object(p.a)(["\n    /* Box sizing rules */\n    *,\n    *::before,\n    *::after {\n        box-sizing: border-box;\n    }\n\n    /* Remove default padding */\n    ul[class],\n    ol[class] {\n        padding: 0;\n    }\n\n    /* Remove default margin */\n    body,\n    h1,\n    h2,\n    h3,\n    h4,\n    p,\n    ul[class],\n    ol[class],\n    li,\n    figure,\n    figcaption,\n    blockquote,\n    dl,\n    dd {\n        margin: 0;\n    }\n\n    /* Set core body defaults */\n    body {\n        min-height: 100vh;\n        scroll-behavior: smooth;\n        text-rendering: optimizeSpeed;\n        line-height: 1.5;\n    }\n\n    /* Remove list styles on ul, ol elements with a class attribute */\n    ul[class],\n    ol[class] {\n        list-style: none;\n    }\n\n    /* A elements that don't have a class get default styles */\n    a:not([class]) {\n        text-decoration-skip-ink: auto;\n    }\n\n    /* Make images easier to work with */\n    img {\n        max-width: 100%;\n        display: block;\n    }\n\n    /* Natural flow and rhythm in articles by default */\n    article > * + * {\n        margin-top: 1em;\n    }\n\n    /* Inherit fonts for inputs and buttons */\n    input,\n    button,\n    textarea,\n    select {\n        font: inherit;\n    }\n\n    /* Remove all animations and transitions for people that prefer not to see them */\n    @media (prefers-reduced-motion: reduce) {\n        html:focus-within {\n            scroll-behavior: auto;\n        }\n        \n        * {\n            animation-duration: 0.01ms !important;\n            animation-iteration-count: 1 !important;\n            transition-duration: 0.01ms !important;\n            scroll-behavior: auto !important;\n        }\n    }\n"]))),g=Object(f.a)(i||(i=Object(p.a)(["\n    body {\n        background-color: rgb(204, 204, 204);\n        font-family: 'Lato', sans-serif;\n    }\n\n    #root {\n        width: 100%;\n        height: 100vh;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: space-between;\n    }\n"]))),j=t(6),x=t.n(j),O=t(18),v=t(10),w=t(4),y=t(5),k=t.n(y),S=t.p+"static/media/League-of-Legends-Logo.82127146.png",z=t(0),E=f.b.div(c||(c=Object(p.a)(["\n    width: 100%;\n    height: 70px;\n    background-color: blue;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    background-color: #111111;\n\n    @media (max-width: 850px) {\n        height: max-content;\n    }\n\n    @media (max-width: 600px) {\n        flex-direction: column;\n    }\n"]))),L=f.b.h1(a||(a=Object(p.a)(["\n    font-size: 24px;\n    color: rgb(255, 255, 255);\n\n    @media (max-width: 850px) {\n        margin-left: 30px;\n    }\n\n    @media (max-width: 600px) {\n        margin-left: 0px;\n        margin-bottom: 10px;\n    }\n"]))),M=f.b.img.attrs((function(n){return{src:S,alt:"league of legends logo"}}))(o||(o=Object(p.a)(["\n    height: 80px;\n    width: 160px;\n    margin-left: 30px;\n\n    @media (max-width: 600px) {\n        margin-left: 0px;\n    }\n"]))),C=f.b.div(s||(s=Object(p.a)(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n\n    @media (max-width: 850px) {\n        flex-direction: column;\n    }\n"]))),G=f.b.p(l||(l=Object(p.a)(["\n    font-size: 20px;\n    color: rgb(255, 255, 255);\n    margin-right: 50px;\n\n    @media (max-width: 600px) {\n        margin-right: 0px;\n        margin-bottom: 5px;\n    }\n"])));function R(n){var e=n.currScore,t=n.highScore,r=n.level;return Object(z.jsxs)(E,{id:"navbar",children:[Object(z.jsxs)(C,{children:[Object(z.jsx)(M,{}),Object(z.jsx)(L,{children:"Memory Game"})]}),Object(z.jsx)(C,{children:Object(z.jsxs)(G,{children:["LEVEL ",r]})}),Object(z.jsxs)(C,{children:[Object(z.jsxs)(G,{children:["Score: ",e]}),Object(z.jsxs)(G,{children:["Best Score: ",t]})]})]})}R.defaultProps={currScore:0,highScore:0};var F,N,B,A=R,I=f.b.div(F||(F=Object(p.a)(["\n    width: 100%;\n    background-color: #111111;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n"]))),J=f.b.p(N||(N=Object(p.a)(["\n    font-size: 16px;\n    color: white;\n    text-align: center;\n"]))),T=f.b.a(B||(B=Object(p.a)(["\n    &:visited {\n        color: white;\n    }\n"])));var V,_,q=function(){return Object(z.jsxs)(I,{id:"footer",children:[Object(z.jsxs)(J,{children:["Made by ",Object(z.jsx)(T,{href:"https://github.com/fwendeburg",children:"Francisco Wendeburg"})]}),Object(z.jsx)(J,{children:"This web site is not affiliated in any way with with Riot Games. This is just a personal project."})]})},P=t.p+"static/media/loading.6782897e.svg",U=f.b.div(V||(V=Object(p.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 5px;\n"]))),W=f.b.p(_||(_=Object(p.a)(["\n    font-size: 30px;\n    color: #000000;\n"])));var Y,D=function(){return Object(z.jsxs)(U,{children:[Object(z.jsx)(W,{children:"Loading"}),Object(z.jsx)("img",{src:P,alt:"loading spinner"})]})},H=f.b.div(Y||(Y=Object(p.a)(["\n    height: 150px;\n    width: 150px;\n    background: url(",");\n    background-size: contain;\n    border: 6px solid #caaf6a;\n\n    &:hover { \n        background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url(",");\n        background-size: contain;\n        cursor: pointer;\n    }\n"])),(function(n){return n.image}),(function(n){return n.image}));var K,Q=function(n){var e=n.image,t=n.whenClicked,r=n.champion;return Object(z.jsx)(H,{image:e,onClick:t,id:r})},X=function(n){for(var e=n.length-1;e>0;e--){var t=Math.floor(Math.random()*(e+1)),r=n[e];n[e]=n[t],n[t]=r}},Z=f.b.div(K||(K=Object(p.a)(["\n    margin-top: 30px;\n    margin-bottom: 30px;\n    padding-left: 50px;\n    padding-right: 50px;\n    max-width: 100%;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n    justify-items: center;\n    align-content: center;\n    gap: 30px;\n"])));var $,nn,en,tn,rn=function(n){var e=n.champions,t=n.handleCardCLick,r=Object(d.useState)([]),i=Object(w.a)(r,2),c=i[0],a=i[1];return Object(d.useEffect)((function(){X(c)})),Object(d.useEffect)((function(){var n=[],r=0;e.forEach((function(e){var i;n.push(Object(z.jsx)(Q,{image:(i=e.champion,"https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/".concat(i,"_0.jpg")),whenClicked:t,champion:e.champion},r)),r++})),X(n),a(n)}),[e]),Object(z.jsx)(Z,{children:c.map((function(n){return n}))})},cn=f.b.div($||($=Object(p.a)(["\n    width: 100vw;\n    height: 100vh;\n    background-color: rgb(40 44 52);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n"]))),an=f.b.p(nn||(nn=Object(p.a)(["\n    font-size: 40px;\n    font-weight: 700;\n    color: white;\n"]))),on=f.b.p(en||(en=Object(p.a)(["\n    margin-top: 10px;\n    font-size: 30px;\n    color: white;\n"]))),sn=f.b.button(tn||(tn=Object(p.a)(["\n    margin-top: 30px;\n    border: none;\n    background-color: rgb(62, 68, 81);\n    color: white;\n    border-radius: 5px;\n    height: 50px;\n    width: 150px;\n    font-size: 20px;\n    cursor: pointer;\n\n    &:hover {\n        background-color: #4F5665;\n    }\n"])));var ln=function(n){var e=n.score,t=n.handleNewGame;return Object(z.jsxs)(cn,{children:[Object(z.jsx)(an,{children:"GAME OVER"}),Object(z.jsxs)(on,{children:["Your score is ",e]}),Object(z.jsx)(sn,{onClick:t,children:"New Game"})]})};var dn=function(){var n=k()(!1),e=Object(w.a)(n,2),t=e[0],r=e[1],i=k()(0),c=Object(w.a)(i,3),a=c[0],o=c[1],s=c[2],l=k()(0),u=Object(w.a)(l,3),h=u[0],b=u[1],p=u[2],f=k()([]),m=Object(w.a)(f,2),g=m[0],j=m[1],y=k()([]),S=Object(w.a)(y,3),E=S[0],L=S[1],M=S[2],C=k()(1),G=Object(w.a)(C,2),R=G[0],F=G[1],N=k()(!1),B=Object(w.a)(N,2),I=B[0],J=B[1];function T(){return V.apply(this,arguments)}function V(){return(V=Object(v.a)(x.a.mark((function n(){var e,t;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://ddragon.leagueoflegends.com/cdn/11.16.1/data/en_US/champion.json");case 2:return e=n.sent,n.next=5,e.json();case 5:t=n.sent,j(Object.keys(t.data));case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function _(n,e){for(var t=0;t<n.length;t++)if(n[t]===e)return!0;return!1}function P(){!function(n){var e=[];n.forEach((function(n){e.push({champion:g[n],clicked:!1})})),L([].concat(Object(O.a)(M.current),e))}(function(){for(var n,e=[];e.length<5;)_(e,n=Math.floor(Math.random()*g.length))||U(g[n])||e.push(n);return e}())}function U(n){for(var e=0;e<E.length;e++)if(E[e].champion===n)return!0;return!1}function W(){return(W=Object(v.a)(x.a.mark((function n(){return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:L([]),Y(!0),J(!1),F(1),P();case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function Y(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];o(n?0:function(n){return n+1}),s.current>p.current&&b(s.current)}return Object(d.useEffect)((function(){Object(v.a)(x.a.mark((function n(){return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(!0),n.next=3,T();case 3:r(!1);case 4:case"end":return n.stop()}}),n)})))()}),[]),Object(d.useEffect)((function(){1===R&&0!==g.length&&P()}),[g,R]),Object(z.jsx)(z.Fragment,{children:I?Object(z.jsx)(ln,{handleNewGame:function(){return W.apply(this,arguments)},score:a}):Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(A,{currScore:a,highScore:h,level:R}),t?Object(z.jsx)(D,{}):Object(z.jsx)(rn,{champions:E,handleCardCLick:function(n){var e=function(n){for(var e=0;e<E.length;e++)if(E[e].champion===n)return E[e]}(n.target.id);e.clicked?J(!0):(Y(),!function(n){for(var e=0;e<E.length;e++)if(!E[e].clicked&&E[e].champion!==n)return!1;return!0}(e.champion)?e.clicked=!0:(e.clicked=!0,F(R+1),P()))}}),Object(z.jsx)(q,{})]})})};b.a.render(Object(z.jsxs)(u.a.StrictMode,{children:[Object(z.jsx)(m,{}),Object(z.jsx)(g,{}),Object(z.jsx)(dn,{})]}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.38cb6f9e.chunk.js.map