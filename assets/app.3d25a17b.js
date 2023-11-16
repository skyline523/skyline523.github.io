import{s as P,h as le,a0 as He,j as ee,o as k,c as M,b as V,I as F,k as S,d as J,M as me,l as te,e as ue,_ as oe,K as Oe,g as Ne,p as Te,m as Ie,f as je,t as Pe,u as pe,a1 as W,x as qe,a2 as Me,a3 as Re,a4 as De,a5 as $e,a6 as Be,a7 as Ve,a8 as Fe,a9 as Ze,aa as We,ab as Ye,ac as Je,y as Ue,ad as Ge,ae as Ke,af as Qe}from"./chunks/framework.4d8bac46.js";import{t as se}from"./chunks/theme.5f882845.js";import{L as Xe}from"./chunks/LNavLinks.163d36e5.js";function L(){return typeof window<"u"?navigator.userAgent.toLowerCase():""}const R=typeof window<"u";/Android/i.test(L());/iPhone|iPod|iPad|iOS/i.test(L());/uni-app|html5plus/.test(L());/MicroMessenger/i.test(L());/\sQQ|mqqbrowser|qzone|qqbrowser/i.test(L());/mqqbrowser|qqbrowser/i.test(L());/qzone\/.*_qz_([\d.]+)/i.test(L());/(weibo).*weibo__([\d.]+)/i.test(L());/(baiduboxapp)\/([\d.]+)/i.test(L());R&&window.matchMedia("(prefers-color-scheme: dark)");R&&window.matchMedia("(prefers-color-scheme: light)");R&&window.matchMedia("(orientation: portrait)");R&&window.matchMedia("(orientation: landscape)");function et({type:o,id:e,resource:n}){return new Promise((a,l)=>{if(!R||document.querySelector(`#${e}`)){l();return}function v(d){d.addEventListener("load",a),d.addEventListener("error",l),d.addEventListener("abort",l)}switch(o){case"js":{const d=document.createElement("script");d.id=e,d.async=!0,d.src=n,v(d),document.head.appendChild(d);break}case"css":{const d=document.createElement("link");d.id=e,d.rel="stylesheet",d.href=n,v(d),document.head.appendChild(d);break}case"style":{const d=document.createElement("style");d.id=e,v(d),document.head.appendChild(d),d.appendChild(document.createTextNode(n));break}}})}function tt(){try{return"production"}catch{return}}tt();function ne(o){try{return o==="production"}catch{return!1}}ne("development");ne("test");ne("production");const X={hot:" ~hot",new:" ~new"},ot={hot:'<i class="sidebar__icon--default sidebar__icon--hot"></i>',new:'<i class="sidebar__icon--default sidebar__icon--new"></i>'};function nt(){if(P)try{et({type:"style",id:"symbol-plugin",resource:`
    .sidebar__icon--default {
      position: relative;
      display: inline-block;
      width: 18px;
      height: 18px;
      color: #fff;
      font-size: 13px;
      font-weight: bold;
      font-style: normal;
      vertical-align: middle;
      margin: 0 5px;
      transform: scale(0.7) rotate(30deg);
    }
    .sidebar__icon--default:before {
      position: absolute;
      top: 0;
      left: 0;
      width: 18px;
      height: 18px;
      line-height: 18px;
      text-align: center;
      transform: rotate(135deg);
    }
    .sidebar__icon--hot {
      background-color: #da5961;
    }
    .sidebar__icon--hot:before {
      content: "H";
      background-color: #da5961;
    }
    .sidebar__icon--new {
      background-color: #3eaf7c;
    }
    .sidebar__icon--new:before {
      content: "N";
      background-color: #3eaf7c;
    }
    `}).catch(e=>{console.log(e)})}catch(o){console.log(o)}}function rt(){P&&setTimeout(()=>{try{const o=document.querySelectorAll(".aside-container nav .outline-link")||[],e=document.querySelectorAll(".content-container h2")||[],n=document.querySelectorAll(".content-container h3")||[],a=document.querySelectorAll(".content-container h4")||[];[...o,...e,...n,...a].forEach(v=>{let d=v.innerHTML;for(const u in X)if(Object.hasOwnProperty.call(X,u)){const _=u,z=X[_],H=ot[_],C=new RegExp(z,"img");if(d.includes(z)){const{nodeName:w}=v;switch(w){case"H2":case"H3":case"H4":d=d.replace(C,"");break;default:d=d.replace(C,H)}v.innerHTML=d}}})}catch(o){console.log(o)}},100)}const at={class:"comment-container"},it=S("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",integrity:"sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",crossorigin:"anonymous"},null,-1),st=S("link",{rel:"stylesheet",href:"https://cdn.staticfile.org/lightgallery/2.1.8/css/lightgallery.css"},null,-1),dt=S("div",{id:"twikoo"},null,-1),ct="https://famous-jalebi-5494fe.netlify.app/.netlify/functions/twikoo",lt={__name:"Twikoo",setup(o){const e=le(null),n=He();function a(){try{twikoo.init({envId:ct,onCommentLoaded:l})}catch{}}function l(){for(var u=document.getElementsByClassName("tk-content"),_=0;_<u.length;_++){var z=u[_],H=z.getElementsByTagName("img");if(H.length>0){for(var C=0;C<H.length;C++){var w=H[C],A=document.createElement("a");A.setAttribute("class","tk-lg-link"),A.setAttribute("href",w.getAttribute("src")),A.setAttribute("data-src",w.getAttribute("src")),A.appendChild(w.cloneNode(!1)),w.parentNode.insertBefore(A,w.nextSibling),w.remove()}lightGallery(z,{selector:".tk-lg-link",share:!1})}}}function v(){e.value&&(e.value.onload=a,n.onAfterRouteChanged=d)}function d(u){u&&setTimeout(a,1e3)}return ee(()=>{a(),v(),addEventListener("click",u=>{console.log(u)})}),(u,_)=>(k(),M("div",at,[it,(k(),V(F("script"),{defer:"",src:"https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.js",integrity:"sha384-g7c+Jr9ZivxKLnZTDUhnkOnsh30B4H0rpLUpJ4jAIKs4fnJI+sEnkvrMWph2EDg4",crossorigin:"anonymous"})),(k(),V(F("script"),{defer:"",src:"https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/contrib/auto-render.min.js",integrity:"sha384-mll67QQFJfxn0IYznZYonOWZ644AWYC+Pt2cHqMaRhXVrursRwvLnLaebdGIlYNa",crossorigin:"anonymous"})),st,(k(),V(F("script"),{src:"https://cdn.staticfile.org/lightgallery/2.1.8/lightgallery.min.js"})),dt,(k(),V(F("script"),{src:"https://cdn.jsdelivr.net/npm/twikoo@1.6.22/dist/twikoo.all.min.js",ref_key:"twikooJs",ref:e},null,512))]))}},mt={key:0,class:"visitor",src:"https://visitor-badge.laobi.icu/badge?page_id=skyline523.leet",onerror:"this.style.display='none'"},ut=J({__name:"NavVisitor",setup(o){const e=me("DEV");return(n,a)=>te(e)?ue("",!0):(k(),M("img",mt))}});const pt=oe(ut,[["__scopeId","data-v-46cf3697"]]),fe=o=>(Te("data-v-b3140261"),o=o(),Ie(),o),ft={class:"copyright"},gt={class:"copyright_primary"},ht=["src"],vt=fe(()=>S("span",null,"转载请标注本站原文地址",-1)),yt=fe(()=>S("span",null,"Copyright © 2023-present Leet",-1)),_t=J({__name:"DocFooter",setup(o){const e=me("DEV"),n=Oe(),a=Ne(()=>n.path.replace(".html",""));return(l,v)=>(k(),M("div",ft,[S("div",gt,[te(e)?ue("",!0):(k(),M("img",{key:0,class:"visitor",src:`https://visitor-badge.laobi.icu/badge?page_id=skyline523.leet.${a.value}`,onerror:"this.style.display='none'"},null,8,ht)),vt]),yt]))}});const bt=oe(_t,[["__scopeId","data-v-b3140261"]]);/*! medium-zoom 1.0.8 | MIT License | https://github.com/francoischalifour/medium-zoom */var O=Object.assign||function(o){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(o[a]=n[a])}return o},Z=function(e){return e.tagName==="IMG"},zt=function(e){return NodeList.prototype.isPrototypeOf(e)},Y=function(e){return e&&e.nodeType===1},de=function(e){var n=e.currentSrc||e.src;return n.substr(-4).toLowerCase()===".svg"},ce=function(e){try{return Array.isArray(e)?e.filter(Z):zt(e)?[].slice.call(e).filter(Z):Y(e)?[e].filter(Z):typeof e=="string"?[].slice.call(document.querySelectorAll(e)).filter(Z):[]}catch{throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)}},wt=function(e){var n=document.createElement("div");return n.classList.add("medium-zoom-overlay"),n.style.background=e,n},Et=function(e){var n=e.getBoundingClientRect(),a=n.top,l=n.left,v=n.width,d=n.height,u=e.cloneNode(),_=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,z=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return u.removeAttribute("id"),u.style.position="absolute",u.style.top=a+_+"px",u.style.left=l+z+"px",u.style.width=v+"px",u.style.height=d+"px",u.style.transform="",u},I=function(e,n){var a=O({bubbles:!1,cancelable:!1,detail:void 0},n);if(typeof window.CustomEvent=="function")return new CustomEvent(e,a);var l=document.createEvent("CustomEvent");return l.initCustomEvent(e,a.bubbles,a.cancelable,a.detail),l},kt=function o(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=window.Promise||function(r){function i(){}r(i,i)},l=function(r){var i=r.target;if(i===$){E();return}y.indexOf(i)!==-1&&re({target:i})},v=function(){if(!(N||!t.original)){var r=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(ae-r)>c.scrollOffset&&setTimeout(E,150)}},d=function(r){var i=r.key||r.keyCode;(i==="Escape"||i==="Esc"||i===27)&&E()},u=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=r;if(r.background&&($.style.background=r.background),r.container&&r.container instanceof Object&&(i.container=O({},c.container,r.container)),r.template){var m=Y(r.template)?r.template:document.querySelector(r.template);i.template=m}return c=O({},c,i),y.forEach(function(p){p.dispatchEvent(I("medium-zoom:update",{detail:{zoom:f}}))}),f},_=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return o(O({},c,r))},z=function(){for(var r=arguments.length,i=Array(r),m=0;m<r;m++)i[m]=arguments[m];var p=i.reduce(function(s,h){return[].concat(s,ce(h))},[]);return p.filter(function(s){return y.indexOf(s)===-1}).forEach(function(s){y.push(s),s.classList.add("medium-zoom-image")}),D.forEach(function(s){var h=s.type,b=s.listener,T=s.options;p.forEach(function(x){x.addEventListener(h,b,T)})}),f},H=function(){for(var r=arguments.length,i=Array(r),m=0;m<r;m++)i[m]=arguments[m];t.zoomed&&E();var p=i.length>0?i.reduce(function(s,h){return[].concat(s,ce(h))},[]):y;return p.forEach(function(s){s.classList.remove("medium-zoom-image"),s.dispatchEvent(I("medium-zoom:detach",{detail:{zoom:f}}))}),y=y.filter(function(s){return p.indexOf(s)===-1}),f},C=function(r,i){var m=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return y.forEach(function(p){p.addEventListener("medium-zoom:"+r,i,m)}),D.push({type:"medium-zoom:"+r,listener:i,options:m}),f},w=function(r,i){var m=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return y.forEach(function(p){p.removeEventListener("medium-zoom:"+r,i,m)}),D=D.filter(function(p){return!(p.type==="medium-zoom:"+r&&p.listener.toString()===i.toString())}),f},A=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=r.target,m=function(){var s={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},h=void 0,b=void 0;if(c.container)if(c.container instanceof Object)s=O({},s,c.container),h=s.width-s.left-s.right-c.margin*2,b=s.height-s.top-s.bottom-c.margin*2;else{var T=Y(c.container)?c.container:document.querySelector(c.container),x=T.getBoundingClientRect(),U=x.width,_e=x.height,be=x.left,ze=x.top;s=O({},s,{width:U,height:_e,left:be,top:ze})}h=h||s.width-c.margin*2,b=b||s.height-c.margin*2;var q=t.zoomedHd||t.original,we=de(q)?h:q.naturalWidth||h,Ee=de(q)?b:q.naturalHeight||b,B=q.getBoundingClientRect(),ke=B.top,Le=B.left,G=B.width,K=B.height,Ce=Math.min(Math.max(G,we),h)/G,Ae=Math.min(Math.max(K,Ee),b)/K,Q=Math.min(Ce,Ae),xe=(-Le+(h-G)/2+c.margin+s.left)/Q,Se=(-ke+(b-K)/2+c.margin+s.top)/Q,ie="scale("+Q+") translate3d("+xe+"px, "+Se+"px, 0)";t.zoomed.style.transform=ie,t.zoomedHd&&(t.zoomedHd.style.transform=ie)};return new a(function(p){if(i&&y.indexOf(i)===-1){p(f);return}var s=function U(){N=!1,t.zoomed.removeEventListener("transitionend",U),t.original.dispatchEvent(I("medium-zoom:opened",{detail:{zoom:f}})),p(f)};if(t.zoomed){p(f);return}if(i)t.original=i;else if(y.length>0){var h=y;t.original=h[0]}else{p(f);return}if(t.original.dispatchEvent(I("medium-zoom:open",{detail:{zoom:f}})),ae=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,N=!0,t.zoomed=Et(t.original),document.body.appendChild($),c.template){var b=Y(c.template)?c.template:document.querySelector(c.template);t.template=document.createElement("div"),t.template.appendChild(b.content.cloneNode(!0)),document.body.appendChild(t.template)}if(t.original.parentElement&&t.original.parentElement.tagName==="PICTURE"&&t.original.currentSrc&&(t.zoomed.src=t.original.currentSrc),document.body.appendChild(t.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),t.original.classList.add("medium-zoom-image--hidden"),t.zoomed.classList.add("medium-zoom-image--opened"),t.zoomed.addEventListener("click",E),t.zoomed.addEventListener("transitionend",s),t.original.getAttribute("data-zoom-src")){t.zoomedHd=t.zoomed.cloneNode(),t.zoomedHd.removeAttribute("srcset"),t.zoomedHd.removeAttribute("sizes"),t.zoomedHd.removeAttribute("loading"),t.zoomedHd.src=t.zoomed.getAttribute("data-zoom-src"),t.zoomedHd.onerror=function(){clearInterval(T),console.warn("Unable to reach the zoom image target "+t.zoomedHd.src),t.zoomedHd=null,m()};var T=setInterval(function(){t.zoomedHd.complete&&(clearInterval(T),t.zoomedHd.classList.add("medium-zoom-image--opened"),t.zoomedHd.addEventListener("click",E),document.body.appendChild(t.zoomedHd),m())},10)}else if(t.original.hasAttribute("srcset")){t.zoomedHd=t.zoomed.cloneNode(),t.zoomedHd.removeAttribute("sizes"),t.zoomedHd.removeAttribute("loading");var x=t.zoomedHd.addEventListener("load",function(){t.zoomedHd.removeEventListener("load",x),t.zoomedHd.classList.add("medium-zoom-image--opened"),t.zoomedHd.addEventListener("click",E),document.body.appendChild(t.zoomedHd),m()})}else m()})},E=function(){return new a(function(r){if(N||!t.original){r(f);return}var i=function m(){t.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(t.zoomed),t.zoomedHd&&document.body.removeChild(t.zoomedHd),document.body.removeChild($),t.zoomed.classList.remove("medium-zoom-image--opened"),t.template&&document.body.removeChild(t.template),N=!1,t.zoomed.removeEventListener("transitionend",m),t.original.dispatchEvent(I("medium-zoom:closed",{detail:{zoom:f}})),t.original=null,t.zoomed=null,t.zoomedHd=null,t.template=null,r(f)};N=!0,document.body.classList.remove("medium-zoom--opened"),t.zoomed.style.transform="",t.zoomedHd&&(t.zoomedHd.style.transform=""),t.template&&(t.template.style.transition="opacity 150ms",t.template.style.opacity=0),t.original.dispatchEvent(I("medium-zoom:close",{detail:{zoom:f}})),t.zoomed.addEventListener("transitionend",i)})},re=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=r.target;return t.original?E():A({target:i})},he=function(){return c},ve=function(){return y},ye=function(){return t.original},y=[],D=[],N=!1,ae=0,c=n,t={original:null,zoomed:null,zoomedHd:null,template:null};Object.prototype.toString.call(e)==="[object Object]"?c=e:(e||typeof e=="string")&&z(e),c=O({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},c);var $=wt(c.background);document.addEventListener("click",l),document.addEventListener("keyup",d),document.addEventListener("scroll",v),window.addEventListener("resize",E);var f={open:A,close:E,toggle:re,update:u,clone:_,attach:z,detach:H,on:C,off:w,getOptions:he,getImages:ve,getZoomedImage:ye};return f};function Lt(o,e){e===void 0&&(e={});var n=e.insertAt;if(!(!o||typeof document>"u")){var a=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",n==="top"&&a.firstChild?a.insertBefore(l,a.firstChild):a.appendChild(l),l.styleSheet?l.styleSheet.cssText=o:l.appendChild(document.createTextNode(o))}}var Ct=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";Lt(Ct);const At=kt,xt={class:"img-wrap"},St=["src","alt"],Ht=J({__name:"ZoomImg",props:{src:{},desc:{}},setup(o){const e=le();return ee(()=>{At(e.value)}),(n,a)=>(k(),M("div",xt,[S("img",{ref_key:"imgRef",ref:e,src:te(je)(n.src),alt:n.desc},null,8,St),S("span",null,Pe(n.desc),1)]))}});const Ot=oe(Ht,[["__scopeId","data-v-86183219"]]);const Nt={...se,Layout:()=>{var n;const o={},{frontmatter:e}=pe();return(n=e.value)!=null&&n.layoutClass&&(o.class=e.value.layoutClass),W(se.Layout,o,{"nav-bar-title-after":W(pt),"doc-after":W(lt,bt)})},enhanceApp({app:o,router:e}){o.component("LNavLinks",Xe),o.component("ZoomImg",Ot),o.provide("DEV",!1),P&&(nt(),qe(()=>e.route.data.relativePath,()=>rt(),{immediate:!0}))}};function ge(o){if(o.extends){const e=ge(o.extends);return{...e,...o,async enhanceApp(n){e.enhanceApp&&await e.enhanceApp(n),o.enhanceApp&&await o.enhanceApp(n)}}}return o}const j=ge(Nt),Tt=J({name:"VitePressApp",setup(){const{site:o}=pe();return ee(()=>{Ue(()=>{document.documentElement.lang=o.value.lang,document.documentElement.dir=o.value.dir})}),Ge(),Ke(),Qe(),j.setup&&j.setup(),()=>W(j.Layout)}});async function It(){const o=Pt(),e=jt();e.provide(Re,o);const n=De(o.route);return e.provide($e,n),e.component("Content",Be),e.component("ClientOnly",Ve),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get(){return n.frontmatter.value}},$params:{get(){return n.page.value.params}}}),j.enhanceApp&&await j.enhanceApp({app:e,router:o,siteData:Fe}),{app:e,router:o,data:n}}function jt(){return Ze(Tt)}function Pt(){let o=P,e;return We(n=>{let a=Ye(n),l=null;return a&&(o&&(e=a),(o||e===a)&&(a=a.replace(/\.js$/,".lean.js")),l=Je(()=>import(a),[])),P&&(o=!1),l},j.NotFound)}P&&It().then(({app:o,router:e,data:n})=>{e.go().then(()=>{Me(e.route,n.site),o.mount("#app")})});export{It as createApp};