!function(e){var t={};function n(m){if(t[m])return t[m].exports;var a=t[m]={i:m,l:!1,exports:{}};return e[m].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,m){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:m})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var m=n(1),a=(n.n(m),n(2)),o=(n.n(a),n(3)),l=(n.n(o),n(4));n.n(l)},function(e,t){const n="http://localhost:5000/api/";function m(e,t,n){return new Promise(function(m,a){var o=new XMLHttpRequest;o.onload=function(){m(o.response)},o.onerror=function(){a({status:this.status,statusText:o.statusText})},null!=n?(o.open("POST",t,!0),o.setRequestHeader("Content-type","application/json"),o.send(JSON.stringify(n))):(o.open(e,t),o.send())})}function a(e){let t;if(0!==e.parentCommentId){(t=document.getElementById("comment-"+e.parentCommentId).appendChild(document.createElement("div"))).id="comment-"+e.id,t.className="reply"}else{(t=document.getElementById("brandname-comments-list").appendChild(document.createElement("div"))).id="comment-"+e.id}let a=t.appendChild(document.createElement("div"));a.className="row";let l=a.appendChild(document.createElement("div"));l.className="column column-4 center";let c=l.appendChild(document.createElement("button"));c.id="comment-up-"+e.id,c.className="vote",c.innerHTML="&#9650;",c.onclick=function(){var t;t=e.id,m("POST",n+"comments/"+t+"/up",null),document.getElementById("comment-score-"+t).innerHTML++};let i=l.appendChild(document.createElement("div"));i.id="comment-score-"+e.id,i.className="score",i.innerHTML=e.score;let r=l.appendChild(document.createElement("button"));r.id="comment-down-"+e.id,r.className="vote",r.innerHTML="&#9660;",r.onclick=function(){var t;t=e.id,m("POST",n+"comments/"+t+"/down",null),document.getElementById("comment-score-"+t).innerHTML--};let u=a.appendChild(document.createElement("div"));u.id="comment-text",u.className="column comment-text",u.innerHTML=e.text;let p=t.appendChild(document.createElement("div"));p.id="comment-footer-"+e.id,p.className="footer";let s=p.appendChild(document.createElement("a"));s.className="column column-offset-4",s.innerHTML="Reply",s.onclick=function(){!function(e){if(null!==document.getElementById("comment-"+e+"-parentid"))return;let t=document.getElementById("comment-footer-"+e),n=t.appendChild(document.createElement("div"));n.id="comment-"+e+"-parentid",n.value=e;let m=t.appendChild(document.createElement("div"));m.className="reply";let a=m.appendChild(document.createElement("div"));a.className="wrap";let l=a.appendChild(document.createElement("textarea"));l.id="comment-"+e+"-reply",l.type="text",l.maxLength=5e3,l.onkeypress=function(){d(l.value,l.maxLength,c)};let c=a.appendChild(document.createElement("span")),i=m.appendChild(document.createElement("div"));i.className="float-right";let r=i.appendChild(document.createElement("div"));r.className="row",r.appendChild(document.createElement("label")).innerHTML="Name:";let u=r.appendChild(document.createElement("input"));u.id="comment-"+e+"-name",u.type="text";let p=r.appendChild(document.createElement("input"));p.value="Reply",p.type="submit",p.className="button",p.onclick=function(){!function(e){let t=document.getElementById("comment-"+e+"-reply").value;if(""!==t){let n={text:t,username:document.getElementById("comment-"+e+"-name").value,ipAddress:"string",domain:window.location.hostname.replace("www.",""),url:window.location.pathname,parentCommentId:document.getElementById("comment-"+e+"-parentid").value};o(n)}}(e)}}(e.id)};let f=p.appendChild(document.createElement("div"));f.className="float-right",f.innerHTML="by "+e.username+" - "+function(e){let t=Math.floor((new Date-new Date(e))/1e3),n=Math.floor(t/31536e3);if(n>=1)return n+"y";if((n=Math.floor(t/2592e3))>=1)return n+"mo";if((n=Math.floor(t/86400))>=1)return n+"d";if((n=Math.floor(t/3600))>=1)return n+"h";if((n=Math.floor(t/60))>=1)return n+"m";return Math.floor(t)+"s"}(e.createdTime)+" ago"}function o(e){m("POST",n+"comments",e).then(()=>{document.getElementById("brandname-comment").value="",document.getElementById("brandname-name").value="",document.getElementById("brandname-comments-list").innerHTML="",l()})}function l(){m("GET",n+"comments",null).then(function(e){(e=JSON.parse(e)).forEach(e=>{0===e.parentCommentId&&a(e)}),function(e){let t=e.length;for(let n=0;n<t;n++)e[n]&&0!==e[n].parentCommentId&&(null!==document.getElementById("comment-"+e[n].parentCommentId)?a(e[n]):(e.push(e[n]),t++))}(e)})}function d(e,t,n){n.innerHTML=t-e.length}!function(){let e=document.getElementsByTagName("head")[0].appendChild(document.createElement("link"));e.rel="stylesheet",e.type="text/css",e.href="./dist/output.css"}(),function(){let e=document.getElementById("brandname");e.appendChild(document.createElement("label")).innerHTML="Comment:";let t=e.appendChild(document.createElement("div"));t.className="wrap";let n=t.appendChild(document.createElement("textarea"));n.id="brandname-comment",n.type="text",n.maxLength=5e3,n.onkeypress=function(){d(n.value,n.maxLength,m)};let m=t.appendChild(document.createElement("span")),a=e.appendChild(document.createElement("div"));a.className="float-right";let l=a.appendChild(document.createElement("div"));l.className="row",l.appendChild(document.createElement("label")).innerHTML="Name:";let c=l.appendChild(document.createElement("input"));c.id="brandname-name",c.type="text";let i=l.appendChild(document.createElement("input"));i.value="Post",i.type="submit",i.className="button",i.onclick=function(){!function(){let e=document.getElementById("brandname-comment").value;if(""!==e){let t={text:e,username:document.getElementById("brandname-name").value,ipAddress:"string",domain:window.location.hostname.replace("www.",""),url:window.location.pathname,parentCommentId:0};o(t)}}()},e.appendChild(document.createElement("div")).id="brandname-comments-list"}(),l()},function(e,t){},function(e,t){},function(e,t){}]);