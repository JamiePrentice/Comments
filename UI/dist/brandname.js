!function(e){var t={};function n(m){if(t[m])return t[m].exports;var o=t[m]={i:m,l:!1,exports:{}};return e[m].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,m){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:m})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var m=n(1),o=(n.n(m),n(2)),a=(n.n(o),n(3)),l=(n.n(a),n(4));n.n(l)},function(e,t){const n="http://localhost:5000/api/",m="https://brandname.ams3.digitaloceanspaces.com/brandname_latest.css";function o(e,t,n){return new Promise((m,o)=>{let a=new XMLHttpRequest;a.onload=(()=>m(a.response)),a.onerror=(()=>o(a.statusText)),null!=n?(a.open("POST",t,!0),a.setRequestHeader("Content-type","application/json"),a.send(JSON.stringify(n))):(a.open(e,t),a.send())})}function a(e){let t;if(0!==e.parentCommentId){(t=document.getElementById("comment-"+e.parentCommentId).appendChild(document.createElement("div"))).id="comment-"+e.id,t.className="reply"}else{(t=document.getElementById("brandname-comments-list").appendChild(document.createElement("div"))).id="comment-"+e.id}let n=t.appendChild(document.createElement("div"));n.className="row";let m=n.appendChild(document.createElement("div"));m.className="column column-4 center";let o=m.appendChild(document.createElement("button"));o.id="comment-up-"+e.id,o.className="vote",o.innerHTML="&#9650;",o.onclick=function(){!function(e){let t=document.getElementById("comment-score-"+e),n=t.getAttribute("voted");"none"===n?(t.setAttribute("voted","up"),c(t,e)):"up"===n?(t.setAttribute("voted","none"),d(t,e)):"down"===n&&(t.setAttribute("voted","none"),c(t,e))}(e.id)};let a=m.appendChild(document.createElement("div"));a.id="comment-score-"+e.id,a.className="score",a.setAttribute("voted","none"),a.innerHTML=e.score;let r=m.appendChild(document.createElement("button"));r.id="comment-down-"+e.id,r.className="vote",r.innerHTML="&#9660;",r.onclick=function(){!function(e){let t=document.getElementById("comment-score-"+e),n=t.getAttribute("voted");"none"===n?(t.setAttribute("voted","down"),d(t,e)):"down"===n?(t.setAttribute("voted","none"),c(t,e)):"up"===n&&(t.setAttribute("voted","none"),d(t,e))}(e.id)};let s=n.appendChild(document.createElement("div"));s.className="column comment-text",s.innerHTML=e.text;let f=t.appendChild(document.createElement("div"));f.id="comment-footer-"+e.id,f.className="footer";let h=f.appendChild(document.createElement("a"));h.className="column column-offset-4",h.innerHTML="Reply",h.onclick=function(){!function(e){if(null!==document.getElementById("comment-"+e+"-parentid"))return;let t=document.getElementById("comment-footer-"+e),n=t.appendChild(document.createElement("div"));n.id="comment-"+e+"-parentid",n.value=e;let m=t.appendChild(document.createElement("div"));m.className="reply";let o=m.appendChild(document.createElement("div"));o.className="wrap";let a=o.appendChild(document.createElement("textarea"));a.id="comment-"+e+"-reply",a.type="text",a.maxLength=5e3,a.onkeypress=function(){p(a.value,a.maxLength,d)};let d=o.appendChild(document.createElement("span")),c=m.appendChild(document.createElement("div"));c.className="float-right";let r=c.appendChild(document.createElement("div"));r.className="row",r.appendChild(document.createElement("label")).innerHTML="Name:";let s=r.appendChild(document.createElement("input"));s.id="comment-"+e+"-name",s.type="text";let f=r.appendChild(document.createElement("input"));f.value="Reply",f.type="submit",f.className="button",f.onclick=function(){!function(e){let t=document.getElementById("comment-"+e+"-reply").value;if(""!==t){let n={text:t,username:document.getElementById("comment-"+e+"-name").value,domain:i(),url:u(),parentCommentId:document.getElementById("comment-"+e+"-parentid").value};l(n)}}(e)}}(e.id)};let E=f.appendChild(document.createElement("div"));E.className="float-right",E.innerHTML="by "+e.username+" - "+function(e){let t=Math.floor((new Date-new Date(e))/1e3),n=Math.floor(t/31536e3);if(n>=1)return n+"y";if((n=Math.floor(t/2592e3))>=1)return n+"mo";if((n=Math.floor(t/86400))>=1)return n+"d";if((n=Math.floor(t/3600))>=1)return n+"h";if((n=Math.floor(t/60))>=1)return n+"m";return Math.floor(t)+"s"}(e.createdTime)+" ago"}function l(e){o("POST",n+"comments",e).then(()=>{document.getElementById("brandname-comment").value="",document.getElementById("brandname-name").value="",document.getElementById("brandname-comments-list").innerHTML="",r()})}function d(e,t){o("POST",n+"comments/"+t+"/down",null),e.innerHTML--}function c(e,t){o("POST",n+"comments/"+t+"/up",null),e.innerHTML++}function r(){o("GET",n+"comments/"+i()+"/"+u(),null).then(function(e){(e=JSON.parse(e)).forEach(e=>{0===e.parentCommentId&&a(e)}),function(e){let t=e.length;for(let n=0;n<t;n++)e[n]&&0!==e[n].parentCommentId&&(null!==document.getElementById("comment-"+e[n].parentCommentId)?a(e[n]):(e.push(e[n]),t++))}(e)})}function i(){var e=window.location.hostname.replace("www.","");return""==e?"localhost":e}function u(){let e=window.location.pathname.substring(1).replace(/\//g,"-");return e=e.substring(0,e.indexOf("."))}function p(e,t,n){n.innerHTML=t-e.length}!function(){let e=document.getElementsByTagName("head")[0].appendChild(document.createElement("link"));e.rel="stylesheet",e.type="text/css",e.href=m}(),function(){let e=document.getElementById("brandname"),t=e.appendChild(document.createElement("label"));t.innerHTML="Comment:",t.className="header";let n=e.appendChild(document.createElement("a"));n.setAttribute("href","https://github.com/JamiePrentice/Comments"),n.innerHTML="Powered by: Brandname",n.className="brand";let m=e.appendChild(document.createElement("div"));m.className="wrap";let o=m.appendChild(document.createElement("textarea"));o.id="brandname-comment",o.type="text",o.maxLength=5e3,o.onkeypress=function(){p(o.value,o.maxLength,a)};let a=m.appendChild(document.createElement("span")),d=e.appendChild(document.createElement("div"));d.className="float-right";let c=d.appendChild(document.createElement("div"));c.className="row",c.appendChild(document.createElement("label")).innerHTML="Name:";let r=c.appendChild(document.createElement("input"));r.id="brandname-name",r.type="text";let s=c.appendChild(document.createElement("input"));s.value="Post",s.type="submit",s.className="button",s.onclick=function(){!function(){let e=document.getElementById("brandname-comment").value;if(""!==e){let t={text:e,username:document.getElementById("brandname-name").value,domain:i(),url:u(),parentCommentId:0};l(t)}}()},e.appendChild(document.createElement("div")).id="brandname-comments-list"}(),r()},function(e,t){},function(e,t){},function(e,t){}]);