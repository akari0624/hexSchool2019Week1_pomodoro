(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(t,e,n){t.exports=n(25)},25:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n(0),c=n.n(a),i=n(6),u=n(2);function o(){var t=Object(r.a)(["\n  position: absolute;\n  z-index:1;\n"]);return o=function(){return t},t}function l(){var t=Object(r.a)(["\n  position: absolute;\n  z-index:300;\n"]);return l=function(){return t},t}function s(){var t=Object(r.a)(["\n  width: 100%;\n  height: 100%;\n  position: relative;\n"]);return s=function(){return t},t}var f=u.b.div(s()),h=u.b.canvas(l()),d=u.b.canvas(o()),b=function(t){var e=t.outterCanvasColor,n=void 0===e?"#000000":e,r=t.width,i=t.height,u=t.passedSeconds,o=t.isPaused,l=Object(a.useRef)(0),s=Object(a.useRef)(null),b=Object(a.useRef)(null),v=Object(a.useRef)(null),F=Object(a.useCallback)(function(t,e,r){return function(a){t.clearRect(0,0,e,r),t.translate(e/2,r/2),t.rotate(-Math.PI/2),t.lineWidth=4,t.beginPath(),t.arc(0,0,(e+r)/4,0*Math.PI,l.current/1500*2*Math.PI),t.strokeStyle=n,t.stroke(),t.fillStyle=n,t.lineTo(0,0),t.closePath(),t.fill(),t.beginPath(),t.arc(0,0,(e+r)/4,0,2*Math.PI),t.strokeStyle=n,t.stroke(),t.closePath(),t.setTransform(1,0,0,1,0,0),v.current&&requestAnimationFrame(v.current)}},[1500,v,n]),g=Object(a.useCallback)(function(t,e,n,r){var a=(e+n)/20;t.translate(e/2,n/2),t.lineWidth=4,t.beginPath(),t.arc(0,0,a,0,2*Math.PI),t.strokeStyle=r?"#FFFFFF":"#FF4384",t.stroke(),t.fillStyle=r?"#FFFFFF":"#FF4384",t.fill(),t.closePath(),t.setTransform(1,0,0,1,0,0)},[o]),m=Object(a.useCallback)(function(t,e,n,r){t.translate(e/2,n/2),t.lineWidth=4,t.beginPath(),t.arc(0,0,(e+n)/4-30,0,2*Math.PI),t.strokeStyle=r?"#FFFFFF":"#FF4384",t.stroke(),t.fillStyle=r?"#FF4384":"#FFFFFF",t.fill(),t.closePath(),t.setTransform(1,0,0,1,0,0),g(t,e,n,r)},[]);return Object(a.useLayoutEffect)(function(){if(b.current){var t=b.current.offsetWidth,e=b.current.offsetHeight;b.current.width=t,b.current.height=e;var n=b.current.getContext("2d"),r=b.current.width,a=b.current.height;v.current=F(n,r,a),v.current(Date.now())}},[b,F]),Object(a.useLayoutEffect)(function(){if(s.current){var t=s.current.getContext("2d"),e=s.current.offsetWidth,n=s.current.offsetHeight;s.current.width=e,s.current.height=n,m(t,e,n,o)}},[s,m,o]),l.current=u,c.a.createElement(f,null,c.a.createElement(d,{ref:b,width:r,height:i,"data-testid":"PomodoroClock"}),c.a.createElement(h,{ref:s,width:r,height:i,"data-testid":"PomodoroClock"}))};function v(){var t=Object(r.a)(["\n  width: 30%;\n  height: 100%;\n  background-color: #003164;\n  position: relative;\n"]);return v=function(){return t},t}function F(){var t=Object(r.a)(["\n  width: 70%;\n  height: 100%;\n  background-color: #FFEDF7;\n"]);return F=function(){return t},t}function g(){var t=Object(r.a)(["\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n"]);return g=function(){return t},t}var m=u.b.main(g()),j=u.b.section(F()),O=u.b.div(v());function p(){var t=Object(r.a)(["\n  position: absolute;\n  width: 550px;\n  height:550px;\n  z-index: 3000;\n  margin-left: -275px;\n  margin-top: calc(50vh - 540px / 2);\n"]);return p=function(){return t},t}var w=u.b.div(p());var k=function(){var t=Object(a.useState)(!0),e=Object(i.a)(t,2),n=e[0],r=e[1],u=Object(a.useState)(0),o=Object(i.a)(u,2),l=o[0],s=o[1],f=Object(a.useCallback)(function(t){r(function(t){return!t})},[]);return Object(a.useEffect)(function(){var t=setInterval(function(){n||s(function(t){return t+1})},1e3);return function(){clearInterval(t)}},[n]),c.a.createElement(m,null,c.a.createElement(j,null,c.a.createElement("div",null," \u904e\u4e86",l,"\u79d2")),c.a.createElement(O,null,c.a.createElement(w,{onClick:f},c.a.createElement(b,{width:"540px",height:"540px",outterCanvasColor:"#FF4384",isPaused:n,passedSeconds:l}))))},P=n(10);function x(){var t=Object(r.a)(["\n\n  html, body {\n    width: 100vw;\n    height: 100vh;\n  }\n\n  * {\n    margin: 0px;\n    padding: 0px;\n    box-sizing: border-box;\n  }\n"]);return x=function(){return t},t}var E=Object(u.a)(x()),C=document.getElementById("root");Object(P.render)(c.a.createElement(c.a.Fragment,null,c.a.createElement(E,null),c.a.createElement(k,null)),C)}},[[13,2,1]]]);
//# sourceMappingURL=main.23eba06a.chunk.js.map