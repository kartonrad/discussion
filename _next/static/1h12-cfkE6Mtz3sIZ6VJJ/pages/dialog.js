(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"/sRa":function(n){n.exports=JSON.parse('{"options":[{"condition":true,"question":"Who are you?","answer":"I am the Weatherman. "},{"condition":true,"question":"Where are we?","answer":"I don\'t know."},{"condition":true,"question":"How\'s the weather??","answer":["Hmpf.","It\'s storming outside. STORMING! The audacity!","damn, i HATE my job."]},{"condition":true,"question":"TEST","answer":{"text":"YES TEST WORKING IDIOT","effect":"yitter","stayInOptions":false,"options":[{"condition":true,"question":"NICE","answer":["IKR!!",{"text":"We could be friends!","options":[{"question":"ACCEPT","answer":"YeSS! We\'re besties !!! :)"},{"question":"DECLINE","answer":"just joking"}]}]},{"condition":true,"question":"WOW FUCK YOU","answer":"bruh fuck urself >:("}]}},{"condition":true,"question":"How are you??","answer":[]}]}')},YUBe:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dialog",function(){return e("lBlV")}])},lBlV:function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return l}));var o=e("q1tI"),i=e.n(o),r=e("80PL"),s=e("/sRa"),a=e("zsrE"),u=e.n(a),c=i.a.createElement;function l(){return console.log(s),c(r.a,{title:"Dialog test"},c(f,{dialog:s}))}function f(n){var t=n.dialog,e=Object(o.useState)(-1),i=e[0],r=e[1],s=Object(o.useState)(0),a=s[0],l=s[1],f=Object(o.useRef)();function w(n){console.log("key down"),f.current&&!0!==f.current.keyDwn()||l((function(n){return-1===i?n:n+1}))}function O(n){r(n),l(0)}return c("div",{className:u.a.dialogBox,onKeyDown:w,onClick:w,tabIndex:"0"},-1===i?c(p,{dia:t,setOpt:O}):"",-1!==i?c(d,{line:t.options[i].answer,idx:a,setOpt:O,ref:f}):"")}var d=Object(o.forwardRef)((function(n,t){var e=n.line,r=void 0===e?"...":e,s=n.idx,a=n.setOpt,u=null,l=Object(o.useState)(-1),f=l[0],w=l[1],O=Object(o.useState)(0),g=O[0],y=O[1],h=Object(o.useRef)();function b(n){w(n),y(0)}Array.isArray(r)?(r.length<1&&(r=["..."]),u=r[Math.min(s,r.length-1)]):u=r,Object(o.useImperativeHandle)(t,(function(){return{keyDwn:function(){if(!h.current||!0===h.current.keyDwn()){if(u.options){if(!u.stayInOptions&&-1!==f){var n=u.options[f].answer;if(g>=(Array.isArray(n)?n.length-1:0))return!0}return y((function(n){return-1===f?n:n+1})),!1}return!0}}}}),[u,f,r,g,h]),Object(o.useEffect)((function(){(Array.isArray(r)&&s>=r.length||!Array.isArray(r)&&s>0)&&a&&a(-1)}),[s,r]);var E="object"!==typeof u?u||"...":-1===f?u.text:"";return c(i.a.Fragment,null,E,u.options&&-1===f&&c(p,{dia:u,setOpt:b})||-1!==f&&c(d,{line:u.options[f].answer,idx:g,setOpt:b,ref:h}))}));function p(n){var t=n.dia,e=n.setOpt,o=[];return t.options.forEach((function(n,t){o.push(c("li",{className:u.a.dialogOption,onClick:function(n){return function(n,t){return"function"===typeof e&&e(n),t.preventDefault(),t.stopPropagation(),!1}(t,n)},key:t},n.question))})),(!t.options||t.options.length<1)&&(o=[c("li",null,"+ There was nothing to say")]),c("ol",null,o)}},zsrE:function(n,t,e){n.exports={dialogBox:"dialog_dialogBox__3i0kF",dialogOption:"dialog_dialogOption__3qL55"}}},[["YUBe",0,1,3,4,6,2,5,7,8,9,10]]]);