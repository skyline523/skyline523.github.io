import{s as h,h as q,a0 as S,j as C,o as y,c as L,b as w,I as _,k as v,a1 as P,a2 as j,a3 as T,a4 as R,a5 as E,a6 as M,a7 as N,a8 as O,a9 as B,aa as H,ab as J,d as D,u as F,y as I,ac as $,ad as z,ae as G,af as W}from"./chunks/framework.bb0cf214.js";import{t as Q}from"./chunks/theme.9ba9f549.js";function c(){return typeof window<"u"?navigator.userAgent.toLowerCase():""}const b=typeof window<"u";/Android/i.test(c());/iPhone|iPod|iPad|iOS/i.test(c());/uni-app|html5plus/.test(c());/MicroMessenger/i.test(c());/\sQQ|mqqbrowser|qzone|qqbrowser/i.test(c());/mqqbrowser|qqbrowser/i.test(c());/qzone\/.*_qz_([\d.]+)/i.test(c());/(weibo).*weibo__([\d.]+)/i.test(c());/(baiduboxapp)\/([\d.]+)/i.test(c());b&&window.matchMedia("(prefers-color-scheme: dark)");b&&window.matchMedia("(prefers-color-scheme: light)");b&&window.matchMedia("(orientation: portrait)");b&&window.matchMedia("(orientation: landscape)");function U({type:e,id:t,resource:o}){return new Promise((r,a)=>{if(!b||document.querySelector(`#${t}`)){a();return}function s(n){n.addEventListener("load",r),n.addEventListener("error",a),n.addEventListener("abort",a)}switch(e){case"js":{const n=document.createElement("script");n.id=t,n.async=!0,n.src=o,s(n),document.head.appendChild(n);break}case"css":{const n=document.createElement("link");n.id=t,n.rel="stylesheet",n.href=o,s(n),document.head.appendChild(n);break}case"style":{const n=document.createElement("style");n.id=t,s(n),document.head.appendChild(n),n.appendChild(document.createTextNode(o));break}}})}function V(){try{return"production"}catch{return}}V();function A(e){try{return e==="production"}catch{return!1}}A("development");A("test");A("production");const k={hot:" ~hot",new:" ~new"},Y={hot:'<i class="sidebar__icon--default sidebar__icon--hot"></i>',new:'<i class="sidebar__icon--default sidebar__icon--new"></i>'};function K(){if(h)try{U({type:"style",id:"symbol-plugin",resource:`
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
    `}).catch(t=>{console.log(t)})}catch(e){console.log(e)}}function Z(){h&&setTimeout(()=>{try{const e=document.querySelectorAll(".aside-container nav .outline-link")||[],t=document.querySelectorAll(".content-container h2")||[],o=document.querySelectorAll(".content-container h3")||[],r=document.querySelectorAll(".content-container h4")||[];[...e,...t,...o,...r].forEach(s=>{let n=s.innerHTML;for(const i in k)if(Object.hasOwnProperty.call(k,i)){const d=i,f=k[d],m=Y[d],u=new RegExp(f,"img");if(n.includes(f)){const{nodeName:l}=s;switch(l){case"H2":case"H3":case"H4":n=n.replace(u,"");break;default:n=n.replace(u,m)}s.innerHTML=n}}})}catch(e){console.log(e)}},100)}const X={class:"comment-container"},ee=v("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",integrity:"sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",crossorigin:"anonymous"},null,-1),te=v("link",{rel:"stylesheet",href:"https://cdn.staticfile.org/lightgallery/2.1.8/css/lightgallery.css"},null,-1),ne=v("div",{id:"twikoo"},null,-1),oe="https://famous-jalebi-5494fe.netlify.app/.netlify/functions/twikoo",re={__name:"Twikoo",setup(e){const t=q(null),o=S();function r(){try{twikoo.init({envId:oe,onCommentLoaded:a})}catch{}}function a(){for(var i=document.getElementsByClassName("tk-content"),d=0;d<i.length;d++){var f=i[d],m=f.getElementsByTagName("img");if(m.length>0){for(var u=0;u<m.length;u++){var l=m[u],g=document.createElement("a");g.setAttribute("class","tk-lg-link"),g.setAttribute("href",l.getAttribute("src")),g.setAttribute("data-src",l.getAttribute("src")),g.appendChild(l.cloneNode(!1)),l.parentNode.insertBefore(g,l.nextSibling),l.remove()}lightGallery(f,{selector:".tk-lg-link",share:!1})}}}function s(){t.value&&(t.value.onload=r,o.onAfterRouteChanged=n)}function n(i){i&&setTimeout(r,1e3)}return C(()=>{r(),s()}),(i,d)=>(y(),L("div",X,[ee,(y(),w(_("script"),{defer:"",src:"https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.js",integrity:"sha384-g7c+Jr9ZivxKLnZTDUhnkOnsh30B4H0rpLUpJ4jAIKs4fnJI+sEnkvrMWph2EDg4",crossorigin:"anonymous"})),(y(),w(_("script"),{defer:"",src:"https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/contrib/auto-render.min.js",integrity:"sha384-mll67QQFJfxn0IYznZYonOWZ644AWYC+Pt2cHqMaRhXVrursRwvLnLaebdGIlYNa",crossorigin:"anonymous"})),te,(y(),w(_("script"),{src:"https://cdn.staticfile.org/lightgallery/2.1.8/lightgallery.min.js"})),ne,(y(),w(_("script"),{src:"https://cdn.jsdelivr.net/npm/twikoo@1.6.22/dist/twikoo.all.min.js",ref_key:"twikooJs",ref:t},null,512))]))}},ae={...Q,enhanceApp({app:e,router:t}){e.component("Twikoo",re),h&&(K(),t.onAfterRouteChanged=o=>{Z()})}};function x(e){if(e.extends){const t=x(e.extends);return{...t,...e,async enhanceApp(o){t.enhanceApp&&await t.enhanceApp(o),e.enhanceApp&&await e.enhanceApp(o)}}}return e}const p=x(ae),se=D({name:"VitePressApp",setup(){const{site:e}=F();return C(()=>{I(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),$(),z(),G(),p.setup&&p.setup(),()=>W(p.Layout)}});async function ie(){const e=le(),t=ce();t.provide(j,e);const o=T(e.route);return t.provide(R,o),t.component("Content",E),t.component("ClientOnly",M),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return o.frontmatter.value}},$params:{get(){return o.page.value.params}}}),p.enhanceApp&&await p.enhanceApp({app:t,router:e,siteData:N}),{app:t,router:e,data:o}}function ce(){return O(se)}function le(){let e=h,t;return B(o=>{let r=H(o),a=null;return r&&(e&&(t=r),(e||t===r)&&(r=r.replace(/\.js$/,".lean.js")),a=J(()=>import(r),[])),h&&(e=!1),a},p.NotFound)}h&&ie().then(({app:e,router:t,data:o})=>{t.go().then(()=>{P(t.route,o.site),e.mount("#app")})});export{ie as createApp};
