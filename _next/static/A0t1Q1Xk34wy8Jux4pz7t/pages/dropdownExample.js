(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"8GKW":function(e,r,t){e.exports={header:"header_header__2DoTL",headerTray:"header_headerTray__eIMO9",headerStart:"header_headerStart__1ifaZ",title:"header_title__Z_484",headerItem:"header_headerItem__2yi4o",headerButton:"header_headerButton__1wdFQ",headerDrawerWrap:"header_headerDrawerWrap__1WN0J",headerDrawer:"header_headerDrawer__1bBTf"}},"9gON":function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dropdownExample",function(){return t("CW3K")}])},CW3K:function(e,r,t){"use strict";t.r(r),t.d(r,"default",(function(){return f}));var a=t("q1tI"),n=t.n(a),c=t("8Kt/"),o=t.n(c),i=t("FCqg"),d=t("SKjy"),u=t("PmZg"),l=t("NIcq"),s=t("ma3e"),w=t("jxK0"),h=n.a.createElement;function f(){return h(w.d,null,h(o.a,null,h("title",null,"Dropdown Example")),h(i.a,{title:"Multilevel Dropdown Demo"},h(i.b,{icon:h(s.n,null)}),h(i.b,{icon:h(s.q,null)},h(d.a,null,h(d.b,{text:"GAMER"}),h(d.b,{text:"Open scndry"},h(d.b,{text:"lmao"})))),h(i.b,{icon:h(l.c,null)})),h(u.a,null,h(d.a,{style:{position:"relative",zIndex:1}},h(d.b,{text:"GAMER"}),h(d.b,{text:"Open secondary"},h(d.b,{text:"lmao"}),h(d.b,{text:"Open Tertiary"},h(d.b,{text:"CIA Datenbank",link:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}),h(d.b,{text:"No"}))))))}},FCqg:function(e,r,t){"use strict";t.d(r,"a",(function(){return y})),t.d(r,"b",(function(){return O}));var a=t("rePB"),n=t("q1tI"),c=t.n(n),o=t("8GKW"),i=t.n(o),d=t("YuYa"),u=t.n(d);var l=t("B68i"),s=t("SKjy"),w=t("FwEH"),h=t("pQ8y"),f=t("jxK0"),p=t("YFqc"),_=t.n(p),b=c.a.createElement;function m(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function v(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?m(Object(t),!0).forEach((function(r){Object(a.a)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function y(e){var r=Object(n.useState)(-2),t=r[0],a=r[1],o=Object(n.useState)(void 0),d=o[0],l=o[1],s=e.children||[],p=[];Array.isArray(s)||(s=[s]);var m=s.map((function(r,t){return c.a.cloneElement(r,{ref:function(e){return p.push(e)},key:t,addDrawer:(n=t,function(e){l(e),a(n)}),removeDrawer:y(t),currentDrawer:d,rerender:e.rerenderFunc});var n}));function y(e){return function(){l(void 0),a(-2)}}var O=t>-1;return b(c.a.Fragment,null,b("nav",{className:i.a.header},b("div",{className:i.a.headerStart},b(_.a,{href:"/"},b(f.c,{size:40,id:"default",onClick:function(){}})),b("div",{className:i.a.title},e.title)),b("ul",{className:i.a.headerTray},m)),b("div",{style:{paddingTop:"50px"}}),b("div",{className:i.a.headerDrawerWrap},b(w.a,{mode:"out-in"},b(h.a,{classNames:v({},u.a),className:i.a.headerDrawer,timeout:O?500:0,key:t},b("div",null,d)))))}var O=c.a.forwardRef((function(e,r){var t,a=Object(n.useState)(!1),o=a[0],d=a[1],u=Object(n.useState)(!1),w=u[0],h=u[1];"object"===typeof e.children&&(e.children.type.name,s.a.name);return Object(n.useEffect)((function(){e.currentDrawer||h(!1)}),[e.currentDrawer]),e.drawer&&!Array.isArray(e.drawer)&&(t=c.a.cloneElement(e.drawer,{close:e.removeDrawer,rerender:e.rerender})),b(l.a,{className:i.a.headerItem,component:"li",onClickOutside:function(){d(!1)}},b("div",{className:i.a.headerButton,"data-drawer":w,onClick:function(){d(!o),w?e.removeDrawer():e.drawer?(e.addDrawer(t),h(!0)):e.removeDrawer()},ref:r},e.icon&&e.icon),o?b("div",null,e.children):void 0)}))},YuYa:function(e,r,t){e.exports={enter:"headerDrawer_enter__GMMDV",enterActive:"headerDrawer_enterActive__15s34",exit:"headerDrawer_exit__3VPK0",exitActive:"headerDrawer_exitActive__ZzrzJ"}}},[["9gON",0,1,3,5,6,2,4]]]);