(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),u=n.n(c),l=(n(15),n(9)),o=n(2),i=function(e){var t=e.value,n=e.onClick,a=t||"empty";return r.a.createElement("button",{className:a,onClick:n},t)},s=function(e){var t=e.squares,n=e.onClick;return r.a.createElement("div",{className:"board"},t.map((function(e,t){return r.a.createElement(i,{key:t,value:e,onClick:function(){return n(t)}})})))},m=n(4),f=n.n(m);var b=function(){var e=Object(a.useState)(new Array(9).fill(null)),t=Object(o.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(0),i=Object(o.a)(u,2),m=i[0],b=i[1],p=Object(a.useState)(!0),v=Object(o.a)(p,2),y=v[0],w=v[1],d=y?"X":"O",E=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var a=Object(o.a)(t[n],3),r=a[0],c=a[1],u=a[2];if(e[r]&&e[r]===e[c]&&e[r]===e[u])return e[r]}return null}(n);return E&&setTimeout((function(){f()("The winner is ".concat(E,"!"),"You can play a new round :)","success",{button:"Start a new game"}),c(new Array(9).fill(null)),w(!0),b(0)}),500),9===m&&(setTimeout((function(){f()("It is a tie!","You can play a new round :)","info",{button:"Start a new game"}),c(new Array(9).fill(null)),w(!0)}),500),b(0)),r.a.createElement("div",{className:"game"},r.a.createElement("h1",null,"Tic Tac Toe Game"),r.a.createElement(s,{squares:n,onClick:function(e){if(n[e])f()("The square is already occupied!","Please choose an empty square :)","error",{button:"Continue"});else{var t=Object(l.a)(n);t[e]=d,c(t),w(!y),b(m+1)}}}),r.a.createElement("h2",null,"Now playing as ",r.a.createElement("span",{style:{color:"#ac0808"}},d)))};u.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.4ca9d31a.chunk.js.map