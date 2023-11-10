import{s as f,h as S,a0 as P,j as C,o as p,c as j,b as y,I as w,k as v,w as T,l as E,H as N,a1 as R,a2 as M,a3 as O,a4 as H,a5 as B,a6 as J,a7 as D,a8 as $,a9 as F,aa as I,ab as z,d as G,u as V,y as W,ac as Q,ad as U,ae as Y,af as K}from"./chunks/framework.4ae1a61c.js";import{t as x}from"./chunks/theme.7876533b.js";function c(){return typeof window<"u"?navigator.userAgent.toLowerCase():""}const b=typeof window<"u";/Android/i.test(c());/iPhone|iPod|iPad|iOS/i.test(c());/uni-app|html5plus/.test(c());/MicroMessenger/i.test(c());/\sQQ|mqqbrowser|qzone|qqbrowser/i.test(c());/mqqbrowser|qqbrowser/i.test(c());/qzone\/.*_qz_([\d.]+)/i.test(c());/(weibo).*weibo__([\d.]+)/i.test(c());/(baiduboxapp)\/([\d.]+)/i.test(c());b&&window.matchMedia("(prefers-color-scheme: dark)");b&&window.matchMedia("(prefers-color-scheme: light)");b&&window.matchMedia("(orientation: portrait)");b&&window.matchMedia("(orientation: landscape)");function Z({type:e,id:t,resource:o}){return new Promise((a,s)=>{if(!b||document.querySelector(`#${t}`)){s();return}function i(n){n.addEventListener("load",a),n.addEventListener("error",s),n.addEventListener("abort",s)}switch(e){case"js":{const n=document.createElement("script");n.id=t,n.async=!0,n.src=o,i(n),document.head.appendChild(n);break}case"css":{const n=document.createElement("link");n.id=t,n.rel="stylesheet",n.href=o,i(n),document.head.appendChild(n);break}case"style":{const n=document.createElement("style");n.id=t,i(n),document.head.appendChild(n),n.appendChild(document.createTextNode(o));break}}})}function X(){try{return"production"}catch{return}}X();function A(e){try{return e==="production"}catch{return!1}}A("development");A("test");A("production");const k={hot:" ~hot",new:" ~new"},ee={hot:'<i class="sidebar__icon--default sidebar__icon--hot"></i>',new:'<i class="sidebar__icon--default sidebar__icon--new"></i>'};function te(){if(f)try{Z({type:"style",id:"symbol-plugin",resource:`
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
    `}).catch(t=>{console.log(t)})}catch(e){console.log(e)}}function ne(){f&&setTimeout(()=>{try{const e=document.querySelectorAll(".aside-container nav .outline-link")||[],t=document.querySelectorAll(".content-container h2")||[],o=document.querySelectorAll(".content-container h3")||[],a=document.querySelectorAll(".content-container h4")||[];[...e,...t,...o,...a].forEach(i=>{let n=i.innerHTML;for(const r in k)if(Object.hasOwnProperty.call(k,r)){const d=r,m=k[d],g=ee[d],u=new RegExp(m,"img");if(n.includes(m)){const{nodeName:l}=i;switch(l){case"H2":case"H3":case"H4":n=n.replace(u,"");break;default:n=n.replace(u,g)}i.innerHTML=n}}})}catch(e){console.log(e)}},100)}const oe={class:"comment-container"},ae=v("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",integrity:"sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",crossorigin:"anonymous"},null,-1),re=v("link",{rel:"stylesheet",href:"https://cdn.staticfile.org/lightgallery/2.1.8/css/lightgallery.css"},null,-1),se=v("div",{id:"twikoo"},null,-1),ie="https://famous-jalebi-5494fe.netlify.app/.netlify/functions/twikoo",L={__name:"Twikoo",setup(e){const t=S(null),o=P();function a(){try{twikoo.init({envId:ie,onCommentLoaded:s})}catch{}}function s(){for(var r=document.getElementsByClassName("tk-content"),d=0;d<r.length;d++){var m=r[d],g=m.getElementsByTagName("img");if(g.length>0){for(var u=0;u<g.length;u++){var l=g[u],_=document.createElement("a");_.setAttribute("class","tk-lg-link"),_.setAttribute("href",l.getAttribute("src")),_.setAttribute("data-src",l.getAttribute("src")),_.appendChild(l.cloneNode(!1)),l.parentNode.insertBefore(_,l.nextSibling),l.remove()}lightGallery(m,{selector:".tk-lg-link",share:!1})}}}function i(){t.value&&(t.value.onload=a,o.onAfterRouteChanged=n)}function n(r){r&&setTimeout(a,1e3)}return C(()=>{a(),i(),addEventListener("click",r=>{console.log(r)})}),(r,d)=>(p(),j("div",oe,[ae,(p(),y(w("script"),{defer:"",src:"https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.js",integrity:"sha384-g7c+Jr9ZivxKLnZTDUhnkOnsh30B4H0rpLUpJ4jAIKs4fnJI+sEnkvrMWph2EDg4",crossorigin:"anonymous"})),(p(),y(w("script"),{defer:"",src:"https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/contrib/auto-render.min.js",integrity:"sha384-mll67QQFJfxn0IYznZYonOWZ644AWYC+Pt2cHqMaRhXVrursRwvLnLaebdGIlYNa",crossorigin:"anonymous"})),re,(p(),y(w("script"),{src:"https://cdn.staticfile.org/lightgallery/2.1.8/lightgallery.min.js"})),se,(p(),y(w("script"),{src:"https://cdn.jsdelivr.net/npm/twikoo@1.6.22/dist/twikoo.all.min.js",ref_key:"twikooJs",ref:t},null,512))]))}};const ce={__name:"Layout",setup(e){const{Layout:t}=x;return(o,a)=>(p(),y(E(t),null,{"doc-after":T(()=>[N(L)]),_:1}))}};const le={...x,Layout:ce,enhanceApp({app:e,router:t}){e.component("Twikoo",L),f&&(te(),t.onAfterRouteChanged=o=>{ne()})}};function q(e){if(e.extends){const t=q(e.extends);return{...t,...e,async enhanceApp(o){t.enhanceApp&&await t.enhanceApp(o),e.enhanceApp&&await e.enhanceApp(o)}}}return e}const h=q(le),de=G({name:"VitePressApp",setup(){const{site:e}=V();return C(()=>{W(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),Q(),U(),Y(),h.setup&&h.setup(),()=>K(h.Layout)}});async function ue(){const e=he(),t=pe();t.provide(M,e);const o=O(e.route);return t.provide(H,o),t.component("Content",B),t.component("ClientOnly",J),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return o.frontmatter.value}},$params:{get(){return o.page.value.params}}}),h.enhanceApp&&await h.enhanceApp({app:t,router:e,siteData:D}),{app:t,router:e,data:o}}function pe(){return $(de)}function he(){let e=f,t;return F(o=>{let a=I(o),s=null;return a&&(e&&(t=a),(e||t===a)&&(a=a.replace(/\.js$/,".lean.js")),s=z(()=>import(a),[])),f&&(e=!1),s},h.NotFound)}f&&ue().then(({app:e,router:t,data:o})=>{t.go().then(()=>{R(t.route,o.site),e.mount("#app")})});export{ue as createApp};
