!function(e){var t={};function n(o){if(t[o])return t[o].exports;var m=t[o]={i:o,l:!1,exports:{}};return e[o].call(m.exports,m,m.exports,n),m.l=!0,m.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),m=(n.n(o),n(2)),l=(n.n(m),n(3)),d=(n.n(l),n(4));n.n(d)},function(e,t){const n="http://localhost:49737/api/",o="./dist/output.css";function m(e,t,n){return new Promise((o,m)=>{let l=new XMLHttpRequest;l.onload=(()=>o(l.response)),l.onerror=(()=>m(l.statusText)),null!=n?(l.open("POST",t,!0),l.setRequestHeader("Content-type","application/json"),l.send(JSON.stringify(n))):(l.open(e,t),l.send())})}function l(e){let t;if(0!==e.parentCommentId){(t=document.getElementById("comment-"+e.parentCommentId).appendChild(document.createElement("div"))).id="comment-"+e.id,t.className="reply"}else{(t=document.getElementById("brandname-comments-list").appendChild(document.createElement("div"))).id="comment-"+e.id}let n=t.appendChild(document.createElement("div"));n.className="row";let o=n.appendChild(document.createElement("div"));o.className="column column-4 center";let m=o.appendChild(document.createElement("button"));m.id="comment-up-"+e.id,m.className="vote",m.innerHTML="&#9650;",m.onclick=function(){!function(e){let t=document.getElementById("comment-score-"+e),n=t.getAttribute("voted");"none"===n?(t.setAttribute("voted","up"),c(t,e)):"up"===n?(t.setAttribute("voted","none"),a(t,e)):"down"===n&&(t.setAttribute("voted","none"),c(t,e))}(e.id)};let l=o.appendChild(document.createElement("div"));l.id="comment-score-"+e.id,l.className="score",l.setAttribute("voted","none"),l.innerHTML=e.score;let i=o.appendChild(document.createElement("button"));i.id="comment-down-"+e.id,i.className="vote",i.innerHTML="&#9660;",i.onclick=function(){!function(e){let t=document.getElementById("comment-score-"+e),n=t.getAttribute("voted");"none"===n?(t.setAttribute("voted","down"),a(t,e)):"down"===n?(t.setAttribute("voted","none"),c(t,e)):"up"===n&&(t.setAttribute("voted","none"),a(t,e))}(e.id)};let s=n.appendChild(document.createElement("div"));s.className="column comment-text",s.innerHTML=e.text;let f=t.appendChild(document.createElement("div"));f.id="comment-footer-"+e.id,f.className="footer";let h=f.appendChild(document.createElement("a"));h.className="column column-offset-4",h.innerHTML="Reply",h.onclick=function(){!function(e){if(null!==document.getElementById("comment-"+e+"-parentid"))return;let t=document.getElementById("comment-footer-"+e),n=t.appendChild(document.createElement("div"));n.id="comment-"+e+"-parentid",n.value=e;let o=t.appendChild(document.createElement("div"));o.className="reply";let m=o.appendChild(document.createElement("div"));m.className="wrap";let l=m.appendChild(document.createElement("textarea"));l.id="comment-"+e+"-reply",l.type="text",l.maxLength=5e3,l.onkeypress=function(){p(l.value,l.maxLength,a)};let a=m.appendChild(document.createElement("span")),c=o.appendChild(document.createElement("div"));c.className="float-right";let i=c.appendChild(document.createElement("div"));i.className="row",i.appendChild(document.createElement("label")).innerHTML="Name:";let s=i.appendChild(document.createElement("input"));s.id="comment-"+e+"-name",s.type="text";let f=i.appendChild(document.createElement("input"));f.value="Reply",f.type="submit",f.className="button",f.onclick=function(){!function(e){let t=document.getElementById("comment-"+e+"-reply").value;if(""!==t){let n={text:t,username:document.getElementById("comment-"+e+"-name").value,domain:r(),url:u(),parentCommentId:document.getElementById("comment-"+e+"-parentid").value};d(n)}}(e)}}(e.id)};let E=f.appendChild(document.createElement("div"));E.className="float-right",E.innerHTML="by "+e.username+" - "+function(e){let t=Math.floor((new Date-new Date(e))/1e3),n=Math.floor(t/31536e3);if(n>=1)return n+"y";if((n=Math.floor(t/2592e3))>=1)return n+"mo";if((n=Math.floor(t/86400))>=1)return n+"d";if((n=Math.floor(t/3600))>=1)return n+"h";if((n=Math.floor(t/60))>=1)return n+"m";return Math.floor(t)+"s"}(e.createdTime)+" ago"}function d(e){m("POST",n+"comments",e).then(()=>{document.getElementById("brandname-comment").value="",document.getElementById("brandname-name").value="",document.getElementById("brandname-comments-list").innerHTML="",i()})}function a(e,t){m("POST",n+"comments/"+t+"/down",null),e.innerHTML--}function c(e,t){m("POST",n+"comments/"+t+"/up",null),e.innerHTML++}function i(){m("GET",n+"comments/"+r()+"/"+u(),null).then(function(e){(e=JSON.parse(e)).forEach(e=>{0===e.parentCommentId&&l(e)}),function(e){let t=e.length;for(let n=0;n<t;n++)e[n]&&0!==e[n].parentCommentId&&(null!==document.getElementById("comment-"+e[n].parentCommentId)?l(e[n]):(e.push(e[n]),t++))}(e)})}function r(){var e=window.location.hostname.replace("www.","");return""==e?"localhost":e}function u(){let e=window.location.pathname.substring(1).replace(/\//g,"-");return e=e.substring(0,e.indexOf("."))}function p(e,t,n){n.innerHTML=t-e.length}!function(){let e=document.getElementsByTagName("head")[0].appendChild(document.createElement("link"));e.rel="stylesheet",e.type="text/css",e.href=o}(),function(){let e=document.getElementById("brandname");e.appendChild(document.createElement("label")).innerHTML="Comment:";let t=e.appendChild(document.createElement("div"));t.className="wrap";let n=t.appendChild(document.createElement("textarea"));n.id="brandname-comment",n.type="text",n.maxLength=5e3,n.onkeypress=function(){p(n.value,n.maxLength,o)};let o=t.appendChild(document.createElement("span")),m=e.appendChild(document.createElement("div"));m.className="float-right";let l=m.appendChild(document.createElement("div"));l.className="row",l.appendChild(document.createElement("label")).innerHTML="Name:";let a=l.appendChild(document.createElement("input"));a.id="brandname-name",a.type="text";let c=l.appendChild(document.createElement("input"));c.value="Post",c.type="submit",c.className="button",c.onclick=function(){!function(){let e=document.getElementById("brandname-comment").value;if(""!==e){let t={text:e,username:document.getElementById("brandname-name").value,domain:r(),url:u(),parentCommentId:0};d(t)}}()},e.appendChild(document.createElement("div")).id="brandname-comments-list"}(),i()},function(e,t){},function(e,t){},function(e,t){}]);