!function(e){var t={};function n(m){if(t[m])return t[m].exports;var a=t[m]={i:m,l:!1,exports:{}};return e[m].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,m){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:m})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var m=n(1),a=(n.n(m),n(2)),l=(n.n(a),n(3)),o=(n.n(l),n(4));n.n(o)},function(e,t){const n="http://localhost:5000/api/";function m(e,t){return new Promise((n,m)=>{let a=new XMLHttpRequest;a.open("POST",e,!0),a.onload=n,a.onerror=m,a.setRequestHeader("Content-type","application/json"),a.onreadystatechange=function(){4===a.readyState&&200===a.status&&JSON.parse(a.responseText)},a.send(JSON.stringify(t))})}function a(e){let t;if(0!==e.parentCommentId){(t=document.getElementById("comment-"+e.parentCommentId).appendChild(document.createElement("div"))).id="comment-"+e.id,t.className="reply"}else{(t=document.getElementById("brandname-comments-list").appendChild(document.createElement("div"))).id="comment-"+e.id}let a=t.appendChild(document.createElement("div"));a.className="row";let i=a.appendChild(document.createElement("div"));i.className="column column-4 center";let r=i.appendChild(document.createElement("button"));r.id="comment-up-"+e.id,r.className="vote",r.innerHTML="&#9650;",r.onclick=function(){var t;t=e.id,m(n+"comments/"+t+"/up",null),document.getElementById("comment-score-"+t).innerHTML++};let u=i.appendChild(document.createElement("div"));u.id="comment-score-"+e.id,u.className="score",u.innerHTML=e.score;let p=i.appendChild(document.createElement("button"));p.id="comment-down-"+e.id,p.className="vote",p.innerHTML="&#9660;",p.onclick=function(){var t;t=e.id,m(n+"comments/"+t+"/down",null),document.getElementById("comment-score-"+t).innerHTML--};let s=a.appendChild(document.createElement("div"));s.id="comment-text",s.className="column comment-text",s.innerHTML=e.text;let f=t.appendChild(document.createElement("div"));f.id="comment-footer-"+e.id,f.className="footer";let h=f.appendChild(document.createElement("a"));h.className="column column-offset-4 inline",h.innerHTML="Reply",h.onclick=function(){!function(e){if(null!==document.getElementById("comment-"+e+"-parentid"))return;let t=document.getElementById("comment-footer-"+e),a=t.appendChild(document.createElement("div"));a.id="comment-"+e+"-parentid",a.value=e;let i=t.appendChild(document.createElement("div"));i.className="reply";let r=i.appendChild(document.createElement("div"));r.className="wrap";let u=r.appendChild(document.createElement("textarea"));u.id="comment-"+e+"-reply",u.type="text",u.maxLength=5e3,u.onkeypress=function(){c(u.value,u.maxLength,p)};let p=r.appendChild(document.createElement("span")),s=i.appendChild(document.createElement("div"));s.className="float-right";let f=s.appendChild(document.createElement("div"));f.className="row",f.appendChild(document.createElement("label")).innerHTML="Name:";let h=f.appendChild(document.createElement("input"));h.id="comment-"+e+"-name",h.type="text";let E=f.appendChild(document.createElement("input"));E.value="Reply",E.type="submit",E.className="button",E.onclick=function(){!function(e){let t=document.getElementById("comment-"+e+"-reply").value;if(""!==t){let a={text:t,username:document.getElementById("comment-"+e+"-name").value,ipAddress:"string",domain:window.location.hostname.replace("www.",""),url:window.location.pathname,parentCommentId:document.getElementById("comment-"+e+"-parentid").value};m(n+"comments",a).then(()=>{d(),o(),l()})}}(e)}}(e.id)};let E=f.appendChild(document.createElement("div"));E.className="float-right inline",E.innerHTML="by "+e.username+" - "+function(e){let t=Math.floor((new Date-new Date(e))/1e3),n=Math.floor(t/31536e3);if(n>=1)return n+"y";if((n=Math.floor(t/2592e3))>=1)return n+"mo";if((n=Math.floor(t/86400))>=1)return n+"d";if((n=Math.floor(t/3600))>=1)return n+"h";if((n=Math.floor(t/60))>=1)return n+"m";return Math.floor(t)+"s"}(e.createdTime)+" ago"}function l(){let e=function(e){let t=new XMLHttpRequest;return t.open("Get",e,!1),t.send(null),t.responseText}(n+"comments");(e=JSON.parse(e)).forEach(e=>{0===e.parentCommentId&&a(e)}),function(e){let t=e.length;for(let n=0;n<t;n++)e[n]&&0!==e[n].parentCommentId&&(null!==document.getElementById("comment-"+e[n].parentCommentId)?a(e[n]):(e.push(e[n]),t++))}(e)}function o(){document.getElementById("brandname-comments-list").innerHTML=""}function d(){document.getElementById("brandname-comment").value="",document.getElementById("brandname-name").value=""}function c(e,t,n){n.innerHTML=t-e.length}!function(){let e=document.getElementsByTagName("head")[0].appendChild(document.createElement("link"));e.rel="stylesheet",e.type="text/css",e.href="./dist/output.css",e.media="all"}(),function(){let e=document.getElementById("brandname");e.appendChild(document.createElement("label")).innerHTML="Comment:";let t=e.appendChild(document.createElement("div"));t.className="wrap";let a=t.appendChild(document.createElement("textarea"));a.id="brandname-comment",a.type="text",a.maxLength=5e3,a.onkeypress=function(){c(a.value,a.maxLength,i)};let i=t.appendChild(document.createElement("span")),r=e.appendChild(document.createElement("div"));r.className="float-right";let u=r.appendChild(document.createElement("div"));u.className="row",u.appendChild(document.createElement("label")).innerHTML="Name:";let p=u.appendChild(document.createElement("input"));p.id="brandname-name",p.type="text";let s=u.appendChild(document.createElement("input"));s.value="Post",s.type="submit",s.className="button",s.onclick=function(){!function(){let e=document.getElementById("brandname-comment").value;if(""!==e){let t={text:e,username:document.getElementById("brandname-name").value,ipAddress:"string",domain:window.location.hostname.replace("www.",""),url:window.location.pathname,parentCommentId:0};m(n+"comments",t).then(()=>{d(),o(),l()})}}()},e.appendChild(document.createElement("div")).id="brandname-comments-list"}(),l()},function(e,t){},function(e,t){},function(e,t){}]);