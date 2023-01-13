(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(81),a=t.n(r),o=t(645),c=t.n(o)()(a());c.push([e.id,':root {\n  --color: #f3b900;\n  --background: rgba(0, 255, 0, 0.1);\n  --green: #228b22;\n  --accent: #fffdd0;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  user-select: none;\n}\n\n#content {\n  text-align: center;\n  font-family: Georgia, "Times New Roman", Times, serif;\n  height: 100vh;\n  overflow: hidden;\n}\n\n/* width of the scrollbar */\n::-webkit-scrollbar {\n  width: 10px;\n}\n\n/* background color of the scrollbar */\n::-webkit-scrollbar-thumb {\n  background-color: var(--color);\n}\n\n/* width of the scrollbar */\n::-moz-scrollbar {\n  width: 10px;\n}\n\n/* background color of the scrollbar */\n::-moz-scrollbar-thumb {\n  background-color: var(--background);\n}\n\n.name,\n.heading,\n.home {\n  margin: 10px;\n  background-color: var(--background);\n  color: var(--color);\n}\n\n.navbar {\n  margin: 20px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.tabs {\n  display: flex;\n  justify-content: center;\n  gap: 50px;\n  list-style-type: none;\n  height: 30px;\n}\n\n.tabs > li {\n  font-size: 1.5rem;\n  color: var(--color);\n  font-weight: 900;\n  cursor: pointer;\n}\n\n.tabs > li:hover,\n.current {\n  color: var(--accent) !important;\n  border-bottom: 1px solid var(--color);\n  transform: scale(1.05);\n}\n\n.header > * {\n  padding: 10px;\n}\n\n.description {\n  font-size: 1.2rem;\n  margin: 10px 0;\n  word-spacing: 3px;\n}\n\n.home {\n  color: var(--green);\n  background-color: var(--color);\n  padding: 20px;\n  border: 1px solid var(--green);\n}\n\n.menu {\n  color: var(--color);\n  height: 80vh;\n  overflow: auto;\n  padding-bottom: 60px;\n}\n\n.category {\n  margin-bottom: 40px;\n}\n\n.cat-title {\n  padding: 5px 0;\n  margin: 0 20px;\n  margin-bottom: 20px;\n  background-color: var(--background);\n  border: 1px solid var(--color);\n  font-weight: 900;\n}\n\n.dishes {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 50px;\n}\n\n.card {\n  height: 150px;\n  width: 200px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--color);\n  color: var(--green);\n  padding: 10px;\n  border-radius: 10px;\n  border: 1px solid var(--green);\n}\n\n.card:hover {\n  transform: scale(1.05);\n  cursor: default;\n}\n\n.title {\n  font-size: 1.2rem;\n}\n.recipe {\n  font-size: 1.1rem;\n}\n\n.contact {\n  color: var(--color);\n  background-color: var(--background);\n  font-size: 1.5rem;\n  font-weight: 600;\n  padding: 20px;\n  margin: 10px;\n}\n\n.name,\n.cat-title,\n.contact {\n  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);\n}\n',""]);const i=c},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&c[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},c=[],i=0;i<e.length;i++){var s=e[i],d=r.base?s[0]+r.base:s[0],l=o[d]||0,u="".concat(d," ").concat(l);o[d]=l+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=a(m,r);r.byIndex=i,n.splice(i,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var c=0;c<o.length;c++){var i=t(o[c]);n[i].references--}for(var s=r(e,a),d=0;d<o.length;d++){var l=t(o[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{const e=t.p+"fd51e8db38945fb7cdbc.jpg",n=()=>{const e=document.createElement("h2");e.innerText="Welcome to The Secret Garden Bistro",e.classList.add("welcome");const n=document.createElement("p");n.innerText="The Secret Garden Bistro is a wonderful restaurant that offers a unique and delightful dining experience. Nestled among lush greenery and surrounded by a serene garden, the bistro offers a peaceful and tranquil atmosphere. The restaurant's menu is a delicious fusion of cuisines from around the world, featuring fresh, locally-sourced ingredients and an extensive selection of wines and cocktails. The chefs at The Secret Garden Bistro are experts in their craft, and are dedicated to creating flavorful and visually stunning dishes that will delight your senses.",n.classList.add("description");const t=document.createElement("div");return t.classList.add("home"),t.append(e,n),t};function r(e,n){const t=document.createElement("div");t.classList.add("card");const r=document.createElement("h3");r.classList.add("title"),r.innerText=e;const a=document.createElement("p");return a.classList.add("recipe"),a.innerText=n,t.append(r,a),t}function a(e){const n=document.createElement("div");n.classList.add("category");const t=document.createElement("h2");t.classList.add("cat-title"),t.innerText=e;const r=document.createElement("div");return r.classList.add("dishes"),n.append(t,r),n}var o=t(379),c=t.n(o),i=t(795),s=t.n(i),d=t(569),l=t.n(d),u=t(565),p=t.n(u),m=t(216),f=t.n(m),h=t(589),g=t.n(h),v=t(28),b={};b.styleTagTransform=g(),b.setAttributes=p(),b.insert=l().bind(null,"head"),b.domAPI=s(),b.insertStyleElement=f(),c()(v.Z,b),v.Z&&v.Z.locals&&v.Z.locals;const x=document.getElementById("content");x.append(function(){const e=document.createElement("h1");e.innerText="The Secret Garden Bistro",e.classList.add("name");const n=document.createElement("h2");n.innerText="Discover the Hidden Gem: The Secret Garden Bistro - A Delicious Fusion of Cuisine and Nature",n.classList.add("heading");const t=document.createElement("div");return t.classList.add("header"),t.append(e,n),t}());const y=document.createElement("div");y.classList.add("navbar");const w=document.createElement("ul");w.classList.add("tabs");const E=document.createElement("li");E.innerText="Home";const T=document.createElement("li");T.innerText="Menu";const k=document.createElement("li");k.innerText="Contact";const L=new Image;L.src=e,L.classList.add("image"),document.body.style.backgroundImage=`url(${L.src})`,document.body.style.backgroundRepeat="no-repeat",document.body.style.backgroundSize="cover";const S=document.createElement("div");S.id="view",w.append(E,T,k),y.append(w),x.append(y,S);let C=E;function z(e){C.classList.remove("current"),C=e.target,C.classList.add("current"),S.innerText=""}E.addEventListener("click",(e=>{z(e),S.append(n())})),k.addEventListener("click",(e=>{z(e),S.append(function(){const e=document.createElement("div");e.classList.add("contact-info");const n=document.createElement("h2");n.classList.add("heading");const t=document.createElement("p"),r=document.createElement("p"),a=document.createElement("p");t.innerText="1234 Je T'aime Street, Anytown France",r.innerText="666-666-66",a.innerText="info@secretgardenbistro.com";const o=document.createElement("div");return o.classList.add("contact"),e.append(n,t,r,a),o.append(e),o}())})),T.addEventListener("click",(e=>{z(e),S.append(function(){const e={appetizers:[{title:"Escargot",recipe:"Snails sautéed in garlic butter"},{title:"Crostini",recipe:"Toasted bread with tomato and basil"},{title:"Calamari",recipe:"Fried squid with a lemon aioli"}],salads:[{title:"Caesar Salad",recipe:"Classic Caesar salad with croutons and parmesan"},{title:"Greek Salad",recipe:"Mixed greens with cucumbers, tomatoes, and feta cheese"}],entrees:[{title:"Coq au Vin",recipe:"Chicken cooked in red wine and mushroom"},{title:"Bouillabaisse",recipe:"Mediterranean fish stew with saffron and rouille"},{title:"Ratatouille",recipe:"Stewed vegetables with eggplant, bell pepper, and zucchini"}],desserts:[{title:"Crème Brûlée",recipe:"Classic French custard with caramelized sugar"},{title:"Chocolate Mousse",recipe:"Rich chocolate mousse with whipped cream"},{title:"Sorbet",recipe:"Assorted flavors of sorbet"}],beverages:[{title:"Wine List",recipe:"A selection of red and white wines"},{title:"Cocktails",recipe:"A selection of classic and signature cocktails"},{title:"Coffee and Tea",recipe:"A selection of coffee and tea"}]},n=[];for(let t in e){const o=a(t);o.querySelector(".dishes").append(...e[t].map((e=>r(e.title,e.recipe)))),n.push(o)}const t=document.createElement("div");return t.classList.add("menu"),t.append(...n),t}())})),S.append(n())})()})();