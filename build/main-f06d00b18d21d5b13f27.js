!function(e){var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,r){!function(e,t){if(!b[e]||!w[e])return;for(var r in w[e]=!1,t)Object.prototype.hasOwnProperty.call(t,r)&&(p[r]=t[r]);0==--v&&0===g&&x()}(e,r),t&&t(e,r)};var r,n=!0,i="f06d00b18d21d5b13f27",o=1e4,a={},c=[],s=[];function u(e){var t=j[e];if(!t)return E;var n=function(n){return t.hot.active?(j[n]?-1===j[n].parents.indexOf(e)&&j[n].parents.push(e):(c=[e],r=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),c=[]),E(n)},i=function(e){return{configurable:!0,enumerable:!0,get:function(){return E[e]},set:function(t){E[e]=t}}};for(var o in E)Object.prototype.hasOwnProperty.call(E,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(n,o,i(o));return n.e=function(e){return"ready"===d&&f("prepare"),g++,E.e(e).then(t,function(e){throw t(),e});function t(){g--,"prepare"===d&&(m[e]||O(e),0===g&&0===v&&x())}},n.t=function(e,t){return 1&t&&(e=n(e)),E.t(e,-2&t)},n}var l=[],d="idle";function f(e){d=e;for(var t=0;t<l.length;t++)l[t].call(null,e)}var h,p,y,v=0,g=0,m={},w={},b={};function S(e){return+e+""===e?+e:e}function _(e){if("idle"!==d)throw new Error("check() is only allowed in idle status");return n=e,f("check"),function(e){return e=e||1e4,new Promise(function(t,r){if("undefined"==typeof XMLHttpRequest)return r(new Error("No browser support"));try{var n=new XMLHttpRequest,o=E.p+""+i+".hot-update.json";n.open("GET",o,!0),n.timeout=e,n.send(null)}catch(e){return r(e)}n.onreadystatechange=function(){if(4===n.readyState)if(0===n.status)r(new Error("Manifest request to "+o+" timed out."));else if(404===n.status)t();else if(200!==n.status&&304!==n.status)r(new Error("Manifest request to "+o+" failed."));else{try{var e=JSON.parse(n.responseText)}catch(e){return void r(e)}t(e)}}})}(o).then(function(e){if(!e)return f("idle"),null;w={},m={},b=e.c,y=e.h,f("prepare");var t=new Promise(function(e,t){h={resolve:e,reject:t}});p={};return O(0),"prepare"===d&&0===g&&0===v&&x(),t})}function O(e){b[e]?(w[e]=!0,v++,function(e){var t=document.getElementsByTagName("head")[0],r=document.createElement("script");r.charset="utf-8",r.src=E.p+""+e+"."+i+".hot-update.js",t.appendChild(r)}(e)):m[e]=!0}function x(){f("ready");var e=h;if(h=null,e)if(n)Promise.resolve().then(function(){return D(n)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var r in p)Object.prototype.hasOwnProperty.call(p,r)&&t.push(S(r));e.resolve(t)}}function D(t){if("ready"!==d)throw new Error("apply() is only allowed in ready status");var r,n,o,s,u;function l(e){for(var t=[e],r={},n=t.slice().map(function(e){return{chain:[e],id:e}});n.length>0;){var i=n.pop(),o=i.id,a=i.chain;if((s=j[o])&&!s.hot._selfAccepted){if(s.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:o};if(s.hot._main)return{type:"unaccepted",chain:a,moduleId:o};for(var c=0;c<s.parents.length;c++){var u=s.parents[c],l=j[u];if(l){if(l.hot._declinedDependencies[o])return{type:"declined",chain:a.concat([u]),moduleId:o,parentId:u};-1===t.indexOf(u)&&(l.hot._acceptedDependencies[o]?(r[u]||(r[u]=[]),h(r[u],[o])):(delete r[u],t.push(u),n.push({chain:a.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:r}}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];-1===e.indexOf(n)&&e.push(n)}}t=t||{};var v={},g=[],m={},w=function(){console.warn("[HMR] unexpected require("+O.moduleId+") to disposed module")};for(var _ in p)if(Object.prototype.hasOwnProperty.call(p,_)){var O;u=S(_);var x=!1,D=!1,P=!1,M="";switch((O=p[_]?l(u):{type:"disposed",moduleId:_}).chain&&(M="\nUpdate propagation: "+O.chain.join(" -> ")),O.type){case"self-declined":t.onDeclined&&t.onDeclined(O),t.ignoreDeclined||(x=new Error("Aborted because of self decline: "+O.moduleId+M));break;case"declined":t.onDeclined&&t.onDeclined(O),t.ignoreDeclined||(x=new Error("Aborted because of declined dependency: "+O.moduleId+" in "+O.parentId+M));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(O),t.ignoreUnaccepted||(x=new Error("Aborted because "+u+" is not accepted"+M));break;case"accepted":t.onAccepted&&t.onAccepted(O),D=!0;break;case"disposed":t.onDisposed&&t.onDisposed(O),P=!0;break;default:throw new Error("Unexception type "+O.type)}if(x)return f("abort"),Promise.reject(x);if(D)for(u in m[u]=p[u],h(g,O.outdatedModules),O.outdatedDependencies)Object.prototype.hasOwnProperty.call(O.outdatedDependencies,u)&&(v[u]||(v[u]=[]),h(v[u],O.outdatedDependencies[u]));P&&(h(g,[O.moduleId]),m[u]=w)}var H,k=[];for(n=0;n<g.length;n++)u=g[n],j[u]&&j[u].hot._selfAccepted&&k.push({module:u,errorHandler:j[u].hot._selfAccepted});f("dispose"),Object.keys(b).forEach(function(e){!1===b[e]&&function(e){delete installedChunks[e]}(e)});for(var I,C,T=g.slice();T.length>0;)if(u=T.pop(),s=j[u]){var A={},L=s.hot._disposeHandlers;for(o=0;o<L.length;o++)(r=L[o])(A);for(a[u]=A,s.hot.active=!1,delete j[u],delete v[u],o=0;o<s.children.length;o++){var q=j[s.children[o]];q&&((H=q.parents.indexOf(u))>=0&&q.parents.splice(H,1))}}for(u in v)if(Object.prototype.hasOwnProperty.call(v,u)&&(s=j[u]))for(C=v[u],o=0;o<C.length;o++)I=C[o],(H=s.children.indexOf(I))>=0&&s.children.splice(H,1);for(u in f("apply"),i=y,m)Object.prototype.hasOwnProperty.call(m,u)&&(e[u]=m[u]);var N=null;for(u in v)if(Object.prototype.hasOwnProperty.call(v,u)&&(s=j[u])){C=v[u];var U=[];for(n=0;n<C.length;n++)if(I=C[n],r=s.hot._acceptedDependencies[I]){if(-1!==U.indexOf(r))continue;U.push(r)}for(n=0;n<U.length;n++){r=U[n];try{r(C)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:u,dependencyId:C[n],error:e}),t.ignoreErrored||N||(N=e)}}}for(n=0;n<k.length;n++){var B=k[n];u=B.module,c=[u];try{E(u)}catch(e){if("function"==typeof B.errorHandler)try{B.errorHandler(e)}catch(r){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:u,error:r,originalError:e}),t.ignoreErrored||N||(N=r),N||(N=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:u,error:e}),t.ignoreErrored||N||(N=e)}}return N?(f("fail"),Promise.reject(N)):(f("idle"),new Promise(function(e){e(g)}))}var j={};function E(t){if(j[t])return j[t].exports;var n=j[t]={i:t,l:!1,exports:{},hot:function(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:r!==e,active:!0,accept:function(e,r){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._acceptedDependencies[e[n]]=r||function(){};else t._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._declinedDependencies[e[r]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=t._disposeHandlers.indexOf(e);r>=0&&t._disposeHandlers.splice(r,1)},check:_,apply:D,status:function(e){if(!e)return d;l.push(e)},addStatusHandler:function(e){l.push(e)},removeStatusHandler:function(e){var t=l.indexOf(e);t>=0&&l.splice(t,1)},data:a[e]};return r=void 0,t}(t),parents:(s=c,c=[],s),children:[]};return e[t].call(n.exports,n,n.exports,u(t)),n.l=!0,n.exports}E.m=e,E.c=j,E.d=function(e,t,r){E.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},E.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},E.t=function(e,t){if(1&t&&(e=E(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(E.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)E.d(r,n,function(t){return e[t]}.bind(null,n));return r},E.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return E.d(t,"a",t),t},E.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},E.p="",E.h=function(){return i},u(0)(E.s=0)}([function(e,t,r){"use strict";var n=function(e){return e&&e.__esModule?e:{default:e}}(r(1));for(var i=[[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0]],o=[],a=0;a<i.length;a++){for(var c=[],s=0;s<i[0].length;s++){var u=document.createElement("div");u.className="none",u.style.top=20*a+"px",u.style.left=20*s+"px",document.querySelector("#game").appendChild(u),c.push(u)}o.push(c)}var l=new n.default;l.generateShape(i,o),document.addEventListener("keydown",function(e){37===e.keyCode&&l.goLeft(i,o),39===e.keyCode&&l.goRight(i,o),40===e.keyCode&&l.goDown(i,o),32===e.keyCode&&l.rotateShape(i,o)},!1)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(r(2)),i=l(r(3)),o=l(r(4)),a=l(r(5)),c=l(r(6)),s=l(r(7)),u=l(r(8));function l(e){return e&&e.__esModule?e:{default:e}}var d=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.shapesArr=[n.default,i.default,o.default,a.default,c.default,s.default,u.default],this.fulfiledLines=new Set,this.score=0,this.gameOver=!1};d.prototype.generateShape=function(e,t){var r=this;this.gameOver||(this.curShape&&clearInterval(this.curShape.timer),this.curShape=new(this.shapesArr[Math.floor(7*Math.random())]),this.downable(e)?this.curShape.timer=setInterval(function(){r.goDown(e,t)},500):(this.gameOver=!0,document.querySelector(".gameover").classList.add("show-gameover"),clearInterval(this.curShape.timer),this.updateData(this.curShape.data,e,t)))},d.prototype.refreshGame=function(e,t){for(var r=0;r<e.length;r++)for(var n=0;n<e[0].length;n++)switch(e[r][n]){case 0:t[r][n].className="none";break;case 1:t[r][n].className="done";break;case 2:t[r][n].className="current"}},d.prototype.clearBefore=function(e){for(var t=this.curShape.data,r=0;r<t.length;r++)for(var n=0;n<t[0].length;n++)e[r+this.curShape.origin.x][n+this.curShape.origin.y]=0},d.prototype.rotateShape=function(e,t){if(this.curShape.dir=(this.curShape.dir+1)%4,this.rotatable(this.curShape.rotate[this.curShape.dir],e)){this.clearBefore(e),this.curShape.data=this.curShape.rotate[this.curShape.dir];for(var r=0;r<this.curShape.data.length;r++)for(var n=0;n<this.curShape.data[0].length;n++)e[r+this.curShape.origin.x][n+this.curShape.origin.y]=this.curShape.data[r][n];this.refreshGame(e,t)}},d.prototype.downable=function(e){for(var t=this.curShape.data,r=0;r<t.length;r++){if(r+this.curShape.origin.x===e.length-1)return this.settleData(t,e),!1;for(var n=0;n<t[0].length;n++)if(1===e[r+this.curShape.origin.x+1][n+this.curShape.origin.y]&&2===t[r][n])return this.settleData(t,e),!1}return!0},d.prototype.leftable=function(){for(var e=this.curShape.data,t=0;t<e.length;t++)for(var r=0;r<e[0].length;r++)if(r+this.curShape.origin.y<1)return!1;return!0},d.prototype.rightable=function(e){for(var t=this.curShape.data,r=0;r<t.length;r++)for(var n=0;n<t[0].length;n++)if(n+this.curShape.origin.y>=e[0].length-1)return!1;return!0},d.prototype.rotatable=function(e,t){for(var r=0;r<e.length;r++){if(r+this.curShape.origin.x>=t.length-1)return!1;for(var n=0;n<e[0].length;n++){if(n+this.curShape.origin.y>=t[0].length-1)return!1;if(n+this.curShape.origin.y<1)return!1}}return!0},d.prototype.updateData=function(e,t,r){for(var n=0;n<e.length;n++)for(var i=0;i<e[0].length;i++)t[n+this.curShape.origin.x][i+this.curShape.origin.y]=e[n][i];this.refreshGame(t,r)},d.prototype.settleData=function(e,t){for(var r=0;r<e.length;r++)for(var n=0;n<e[0].length;n++)2===t[r+this.curShape.origin.x][n+this.curShape.origin.y]&&(t[r+this.curShape.origin.x][n+this.curShape.origin.y]=1);this.removeFulfiled(t)},d.prototype.goDown=function(e,t){this.downable(e)?(this.clearBefore(e),this.curShape.origin.x++,this.updateData(this.curShape.data,e,t)):this.generateShape(e,t)},d.prototype.goLeft=function(e,t){this.leftable(e)&&(this.clearBefore(e),this.curShape.origin.y--,this.updateData(this.curShape.data,e,t))},d.prototype.goRight=function(e,t){this.rightable(e)&&(this.clearBefore(e),this.curShape.origin.y++,this.updateData(this.curShape.data,e,t))},d.prototype.removeFulfiled=function(e){for(var t=0;t<e.length;t++)e[t].every(function(e){return 1===e})&&this.fulfiledLines.add(t);if(this.fulfiledLines.size){var r=!0,n=!1,i=void 0;try{for(var o,a=this.fulfiledLines[Symbol.iterator]();!(r=(o=a.next()).done);r=!0){var c=o.value;e.splice(c,1),e.splice(0,0,[0,0,0,0,0,0,0,0,0,0,0,0,0,0]),this.score++,document.querySelector(".score").innerHTML=this.score}}catch(e){n=!0,i=e}finally{try{!r&&a.return&&a.return()}finally{if(n)throw i}}this.fulfiledLines.clear()}},t.default=d},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.data=[[2,0,0],[2,2,2]],this.rotate=[[[2,0,0],[2,2,2]],[[2,2],[2,0],[2,0]],[[2,2,2],[0,0,2]],[[0,2],[0,2],[2,2]]],this.dir=0,this.origin={x:0,y:0},this.timer=null}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.data=[[2,2],[2,2]],this.rotate=[[[2,2],[2,2]],[[2,2],[2,2]],[[2,2],[2,2]],[[2,2],[2,2]]],this.dir=0,this.origin={x:0,y:0},this.timer=null}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.data=[[2,2],[0,2],[0,2]],this.rotate=[[[2,2],[0,2],[0,2]],[[0,0,2],[2,2,2]],[[2,0],[2,0],[2,2]],[[2,2,2],[2,0,0]]],this.dir=0,this.origin={x:0,y:0},this.timer=null}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.data=[[2,2,2],[0,2,0]],this.rotate=[[[2,2,2],[0,2,0]],[[0,2],[2,2],[0,2]],[[0,2,0],[2,2,2]],[[2,0],[2,2],[2,0]]],this.dir=0,this.origin={x:0,y:0},this.timer=null}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.data=[[2,2,0],[0,2,2]],this.rotate=[[[2,2,0],[0,2,2]],[[0,2],[2,2],[2,0]],[[2,2,0],[0,2,2]],[[0,2],[2,2],[2,0]]],this.dir=0,this.origin={x:0,y:0},this.timer=null}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.data=[[0,2,2],[2,2,0]],this.rotate=[[[0,2,2],[2,2,0]],[[2,0],[2,2],[0,2]],[[0,2,2],[2,2,0]],[[2,0],[2,2],[0,2]]],this.dir=0,this.origin={x:0,y:0},this.timer=null}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.data=[[2,2,2,2]],this.rotate=[[[2,2,2,2]],[[2],[2],[2],[2]],[[2,2,2,2]],[[2],[2],[2],[2]]],this.dir=0,this.origin={x:0,y:0},this.timer=null}}]);
//# sourceMappingURL=main-f06d00b18d21d5b13f27.js.map