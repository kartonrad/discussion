(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[692],{1027:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/modal",function(){return n(447)}])},8137:function(e,r,n){"use strict";n.d(r,{h4:function(){return x},Ov:function(){return b},oh:function(){return g}});var t=n(5893),a=n(8619),i=n.n(a),o=n(1909),c=n.n(o),l=n(7294);var d=n(4916),u=n(344),s=n(5989),h=n(5164),f=n(2611),_=n(1664),v=n(985),m=n(460);function p(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function w(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function y(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){w(e,r,n[r])}))}return e}function j(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,a,i=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(t=n.next()).done)&&(i.push(t.value),!r||i.length!==r);o=!0);}catch(l){c=!0,a=l}finally{try{o||null==n.return||n.return()}finally{if(c)throw a}}return i}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return p(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e){var r=(0,l.useState)(-2),n=r[0],a=r[1],o=(0,l.useState)(void 0),d=o[0],u=o[1],v=e.children||[],m=[];Array.isArray(v)||(v=[v]);var p=v.map((function(r,n){return l.cloneElement(r,{ref:function(e){return m.push(e)},key:n,addDrawer:(t=n,function(e){u(e),a(t)}),removeDrawer:function(){u(void 0),a(-2)},currentDrawer:d,rerender:e.rerenderFunc});var t})),w=n>-1;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("nav",{className:i().header,children:[(0,t.jsxs)("div",{className:i().headerStart,children:[(0,t.jsx)(_.default,{href:"/",children:(0,t.jsx)(f.$W,{size:40,id:"default",onClick:function(){}})}),(0,t.jsx)("div",{className:i().title,children:e.title})]}),(0,t.jsx)("ul",{className:i().headerTray,children:p})]}),(0,t.jsx)("div",{style:{paddingTop:"50px"}}),(0,t.jsx)("div",{className:i().headerDrawerWrap,children:(0,t.jsx)(s.Z,{mode:"out-in",children:(0,t.jsx)(h.Z,{classNames:y({},c()),className:i().headerDrawer,timeout:w?500:0,children:(0,t.jsx)("div",{children:d})},n)})})]})}var b=l.forwardRef((function(e,r){var n,a=(0,l.useState)(!1),o=a[0],c=a[1],s=(0,l.useState)(!1),h=s[0],f=s[1];"object"===typeof e.children&&(e.children.type.name,u.Lt.name);return(0,l.useEffect)((function(){e.currentDrawer||f(!1)}),[e.currentDrawer]),e.drawer&&!Array.isArray(e.drawer)&&(n=l.cloneElement(e.drawer,{close:e.removeDrawer,rerender:e.rerender})),(0,t.jsxs)(d.i,{className:i().headerItem,component:"li",onClickOutside:function(){c(!1)},children:[(0,t.jsxs)("div",{className:i().headerButton,"data-drawer":h,onClick:function(){c(!o),h?e.removeDrawer():e.drawer?(e.addDrawer(n),f(!0)):e.removeDrawer()},ref:r,children:[void 0!==e.imgUrl&&(0,t.jsx)(m.u,{src:e.imgUrl,alt:"image icon"}),e.icon&&void 0===e.imgUrl&&e.icon]}),o?(0,t.jsx)("div",{children:e.children}):void 0]})})),g=l.forwardRef((function(e,r){var n=j((0,v.j)(),2),a=n[0];n[1];return(0,t.jsx)(b,y({ref:r,imgUrl:null!=a.active?a.users[a.active].avatarUrl:void 0},e,{children:e.children}))}))},447:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return h}});var t=n(5893),a=n(9008),i=n(8137),o=n(6064),c=n(7294),l=n(4937),d=n(1941),u=n.n(d),s=n(2611);function h(){var e=(0,c.useState)(),r=e[0],n=(e[1],(0,c.useRef)());return(0,t.jsxs)(s.BE,{children:[(0,t.jsx)(a.default,{children:(0,t.jsx)("title",{children:"Modal"})}),(0,t.jsx)(i.h4,{title:"Fullscreen Modal"}),(0,t.jsxs)(o.W,{children:[(0,t.jsx)("div",{style:{backgroundColor:"#353535",borderRadius:"10px",padding:"20px",display:"inline-block"},onClick:function(e){n.current.toggleModal()},children:"Open Modal"}),(0,t.jsx)(s.$W,{size:40}),(0,t.jsxs)(l.u,{open:r,ref:n,children:[(0,t.jsx)(s.Uh,{size:80,baseColor:"#ac0000",innerColor:"#ffcb00"}),(0,t.jsxs)("h1",{style:{color:"#ac0000"},children:[" ",(0,t.jsx)("span",{className:u().triggered,children:"Fool"})," "]})]})]})]})}},8619:function(e){e.exports={header:"header_header__uGmxy",headerTray:"header_headerTray__esc_i",headerStart:"header_headerStart___2Yp5",title:"header_title__Aos7W",headerItem:"header_headerItem__6s2pg",headerButton:"header_headerButton__l6TCH",headerDrawerWrap:"header_headerDrawerWrap__2eaWI",headerDrawer:"header_headerDrawer__wnyjp"}},1909:function(e){e.exports={enter:"headerDrawer_enter___ffbn",enterActive:"headerDrawer_enterActive__zJr4v",exit:"headerDrawer_exit__W_2YH",exitActive:"headerDrawer_exitActive__Ubf_7"}}},function(e){e.O(0,[445,937,228,249,949,774,888,179],(function(){return r=1027,e(e.s=r);var r}));var r=e.O();_N_E=r}]);