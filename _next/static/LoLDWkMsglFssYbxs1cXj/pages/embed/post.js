(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"2USo":function(t,e,o){"use strict";o.r(e),o.d(e,"default",(function(){return g}));var n=o("q1tI"),r=o.n(n),a=o("8Kt/"),l=o.n(a),s=(o("PmZg"),o("gbgE"),o("q9vl")),u=o("Srb5"),c=o("jxK0"),i=o("s4NR"),m=o("GoMj"),p=o("tQ5z"),d=o("Cu94"),_=o.n(d),b=r.a.createElement,f=[];function g(){var t=b(h,null,b("p",null,"\ud83d\udd04 loading ...")),e=Object(n.useState)(void 0),o=e[0],a=e[1];Object(n.useEffect)((function(){console.log("setting parsed");var t=Object(i.parse)(location.search.substr(1));a(t),t.id&&f.push(t.id)}),[]);var d=Object(m.b)(f);return o&&o.id?(d[0]&&(t="ohjemine"===d[0]?b(h,null,b("h1",null,"Error"),b("p",{style:{color:"rgb(255, 0, 143)"}},"Sowwy >_<")):b(p.a,{post:d[0],embed:!0})),null===d[0]&&(t=b(h,null,b("p",null,"\u26d4 post doesn't exist")))):o&&!o.id&&(t=b(h,null,b("p",null,"\u26a0 please specify ?id=POST_ID_HERE"))),b(r.a.Fragment,null,b(l.a,null,b("title",null,"Civil Discussion")),b(s.a,{disablePopups:!0},b(u.a,null,b("div",{className:_.a.postEmbed,style:o&&o.color&&{color:o.color}},b("div",null,t),b("a",{href:"https://drkslv.github.io/discussion",target:"_blank",style:{position:"absolute",bottom:"0px",right:"0px",display:"block",textDecoration:"none"}},b(c.a,{size:40,grow:!1}))))))}function h(t){return b("div",{className:_.a.card},b("p",null,t.children))}},NQ1Q:function(t,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/embed/post",function(){return o("2USo")}])},O1IP:function(t,e,o){t.exports={form:"postForm_form__Oczvn",postForm:"postForm_postForm__eQJ-A",registerForm:"postForm_registerForm__1bmo3",formElements:"postForm_formElements__7Y7_b",baseButton:"postForm_baseButton__3FQfE",brandButton:"postForm_brandButton__CGJdd",accountFormWrap:"postForm_accountFormWrap__138CC",usernameHighlight:"postForm_usernameHighlight__OITtg",removeButton:"postForm_removeButton__5_hKK",clicked:"postForm_clicked__2ebhs",accountFormsAlign:"postForm_accountFormsAlign__2EQp5",tabWrapper:"postForm_tabWrapper__2wp4y",tabBar:"postForm_tabBar__2RJae",tab:"postForm_tab__1A3gY",submitButton:"postForm_submitButton__WO9kK",postButton:"postForm_postButton__1GP0x",destructiveButton:"postForm_destructiveButton__10KJ-",dull:"postForm_dull__1U2Ij",jumping:"postForm_jumping__3WKtO",rotating:"postForm_rotating__1YuS7",title:"postForm_title__3evoo",titleCounter:"postForm_titleCounter__QnXSx",author:"postForm_author__31Fn5"}},Srb5:function(t,e,o){"use strict";o.d(e,"b",(function(){return i})),o.d(e,"a",(function(){return m}));var n=o("q1tI"),r=o.n(n),a=o("SKjy"),l=o("hKBk"),s=o.n(l),u=o("B68i"),c=r.a.createElement,i=Object(n.createContext)({});function m(t){var e=Object(n.useState)(!1),o=e[0],l=e[1],m=Object(n.useState)([0,0]),p=m[0],d=m[1],_=Object(n.useState)([c(a.b,{text:"Dark Theme"}),c("hr",null),c(a.b,{text:"Privacy Policy"})]),b=_[0],f=_[1];if(o)var g={left:"min( calc( 100vw - 205px ),   "+p[0]+"px  )",top:"min( calc( 100vh + "+document.body.scrollHeight+"px - 205px ),   "+p[1]+"px  )",display:o?"block":"none"};function h(){l(!1)}var v=b.map((function(t,e){return r.a.cloneElement(t,{key:e})}));return c("div",{style:t.style},c(i.Provider,{value:{openMenu:function(t,e,o){o&&(l(!0),d([t,e]),f(o))},removeMenu:h}},t.children),c(u.a,{className:s.a.menuMover,component:"div",onClickOutside:function(){h()},style:g},o&&c(a.a,{small:!0},v)))}},ecW4:function(t,e,o){"use strict";o.d(e,"a",(function(){return d}));var n=o("o0o1"),r=o.n(n),a=o("ODXe"),l=o("q1tI"),s=o.n(l),u=o("q9vl"),c=o("O1IP"),i=o.n(c),m=o("cDhZ"),p=s.a.createElement;Object(m.a)({anchor:!1,embeds:!0,supressHeadings:!0});function d(t){var e=Object(u.b)(),o=Object(a.a)(e,2),n=o[0],c=o[1],m=n.users[n.active],d=Object(l.useState)(t.title||""),b=d[0],f=d[1],g=Object(l.useState)(t.text||""),h=g[0],v=g[1],F=Object(l.useState)(!1),O=F[0],x=F[1],j=Object(l.useState)(!1),k=j[0],w=j[1],y=Object(l.useState)(t.comment?"4em":"8em"),E=y[0],B=y[1],S=Object(l.useRef)();function C(t){switch(t.target.name){case"title":return f(t.target.value);case"text":return B(S.current.scrollHeight),v(t.target.value)}}return console.log(O),Object(l.useEffect)((function(){S&&S.current&&B((function(t){return S.current.scrollHeight}))}),[S]),p(s.a.Fragment,null,p("form",{onSubmit:function(e){return r.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return e.preventDefault(),x(!0),o.next=4,r.a.awrap(_(1e3));case 4:if(console.log("Title:",b),console.log("Text:",h),m){o.next=9;break}return x(!1),o.abrupt("return",n.toggleModal());case 9:if(!t.edit){o.next=16;break}return o.next=12,r.a.awrap(t.onEdit(h));case 12:return o.sent||w(!0),x(!1),o.abrupt("return");case 16:b.length>=1&&b.length<=150||t.comment?c.post(t.comment?"/comment/".concat(t.comment):"/post/",{title:b,text:h}).then((function(e){t.close&&t.close(),t.rerender&&t.rerender(e.data.entityId||e.data.id),x(!1)})).catch((function(e){console.log(e),t.rerender&&t.rerender(),x(!1)})):(x(!1),t.rerender&&t.rerender());case 17:case"end":return o.stop()}}),null,null,null,Promise)},className:i.a.postForm},!t.comment&&p("div",{className:i.a.titleCounter,"data-invalid":b.length<1||b.length>150},p("input",{type:"text",className:i.a.title,value:b,onChange:C,name:"title",placeholder:"The post's title",autoComplete:"off",disabled:O||t.edit||t.locked}),p("p",null,b.length,"/150")),p("textarea",{name:"text",value:h,onChange:C,placeholder:t.locked?"LOCKED, bitch":"Go ahead, unleash your creative Genius!",rows:t.comment?"2":"4",autoComplete:"off",disabled:O||t.locked,ref:S,style:{height:E+3+"px"}}),p("div",{className:"".concat(i.a.postButton," ").concat(t.locked&&i.a.dull)},p("button",{type:"submit",value:"Post!","data-known":!Boolean(m),disabled:O||t.locked},t.locked?"HAHA NO":"Post!")),t.edit&&p("button",{value:"Cancel",disabled:O,onClick:function(){t.onEdit(null,!0)}},"Cancel"),p("div",{className:i.a.author},"as",p("span",{"data-known":Boolean(m)},m?m.username:"<UNKNOWN>"),k&&p("i",{style:{color:"red",marginLeft:"2em"}},"(an error occured)"))))}function _(t){return new Promise((function(e){setTimeout(e,t)}))}}},[["NQ1Q",0,1,4,5,6,11,14,2,3,7,8,9,12,13]]]);