!function(n){var e={};function t(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return n[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var a in n)t.d(r,a,function(e){return n[e]}.bind(null,a));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){"use strict";t.r(e);var r=()=>'\n    <div class="Header-main">\n      <div class="Header-logo">\n        <h1>\n          <a href="/">\n            Marca\n          </a>\n        </h1>\n      </div>\n      <div class="Header-nav">\n        <a href="#/about/">\n          About\n        </a>\n      </div>\n    </div>\n  ';var a=()=>'\n    <div class="notFound">\n      Error 404\n    </div>\n\n  ';var o=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/";var i=n=>{if(n.length<=3){return"/"===n?n:"/:id"}return`/${n}`};const c={"/":()=>'\n    <div class="characters">\n      <article class="character-item">\n        <a href="#/1/">\n          <h2>name</h2> \n        </a>\n      </article>  \n    </div> \n  ',"/:id":()=>'\n    <div class="Characters-inner">\n      <article>hellouuuu</article>\n    </div>\n  ',"/contact":"Contacto"};var l=async()=>{const n=document.getElementById("header"),e=document.getElementById("content");n.innerHTML=await r();let t=o(),l=await i(t),u=c[l]?c[l]:a;e.innerHTML=await u()};window.addEventListener("load",l),window.addEventListener("hashchange",l)}]);