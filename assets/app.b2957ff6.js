import{s as d,a0 as _,a1 as v,a2 as A,a3 as C,a4 as k,a5 as S,a6 as q,a7 as P,a8 as x,a9 as E,aa as L,d as M,u as R,j as T,y as H,ab as O,ac as $,ad as j,ae as D}from"./chunks/framework.b67c47e6.js";import{t as z}from"./chunks/theme.19f600b7.js";function r(){return typeof window<"u"?navigator.userAgent.toLowerCase():""}const l=typeof window<"u";/Android/i.test(r());/iPhone|iPod|iPad|iOS/i.test(r());/uni-app|html5plus/.test(r());/MicroMessenger/i.test(r());/\sQQ|mqqbrowser|qzone|qqbrowser/i.test(r());/mqqbrowser|qqbrowser/i.test(r());/qzone\/.*_qz_([\d.]+)/i.test(r());/(weibo).*weibo__([\d.]+)/i.test(r());/(baiduboxapp)\/([\d.]+)/i.test(r());l&&window.matchMedia("(prefers-color-scheme: dark)");l&&window.matchMedia("(prefers-color-scheme: light)");l&&window.matchMedia("(orientation: portrait)");l&&window.matchMedia("(orientation: landscape)");function N({type:e,id:t,resource:o}){return new Promise((a,i)=>{if(!l||document.querySelector(`#${t}`)){i();return}function s(n){n.addEventListener("load",a),n.addEventListener("error",i),n.addEventListener("abort",i)}switch(e){case"js":{const n=document.createElement("script");n.id=t,n.async=!0,n.src=o,s(n),document.head.appendChild(n);break}case"css":{const n=document.createElement("link");n.id=t,n.rel="stylesheet",n.href=o,s(n),document.head.appendChild(n);break}case"style":{const n=document.createElement("style");n.id=t,s(n),document.head.appendChild(n),n.appendChild(document.createTextNode(o));break}}})}function F(){try{return"production"}catch{return}}F();function p(e){try{return e==="production"}catch{return!1}}p("development");p("test");p("production");const u={hot:" ~hot",new:" ~new"},V={hot:'<i class="sidebar__icon--default sidebar__icon--hot"></i>',new:'<i class="sidebar__icon--default sidebar__icon--new"></i>'};function I(){if(d)try{N({type:"style",id:"symbol-plugin",resource:`
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
    `}).catch(t=>{console.log(t)})}catch(e){console.log(e)}}function Q(){d&&setTimeout(()=>{try{const e=document.querySelectorAll(".aside-container nav .outline-link")||[],t=document.querySelectorAll(".content-container h2")||[],o=document.querySelectorAll(".content-container h3")||[],a=document.querySelectorAll(".content-container h4")||[];[...e,...t,...o,...a].forEach(s=>{let n=s.innerHTML;for(const f in u)if(Object.hasOwnProperty.call(u,f)){const h=f,m=u[h],g=V[h],b=new RegExp(m,"img");if(n.includes(m)){const{nodeName:y}=s;switch(y){case"H2":case"H3":case"H4":n=n.replace(b,"");break;default:n=n.replace(b,g)}s.innerHTML=n}}})}catch(e){console.log(e)}},100)}const B={...z,enhanceApp({app:e,router:t}){d&&(I(),t.onAfterRouteChanged=o=>{Q()})}};function w(e){if(e.extends){const t=w(e.extends);return{...t,...e,async enhanceApp(o){t.enhanceApp&&await t.enhanceApp(o),e.enhanceApp&&await e.enhanceApp(o)}}}return e}const c=w(B),G=M({name:"VitePressApp",setup(){const{site:e}=R();return T(()=>{H(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),O(),$(),j(),c.setup&&c.setup(),()=>D(c.Layout)}});async function K(){const e=J(),t=U();t.provide(v,e);const o=A(e.route);return t.provide(C,o),t.component("Content",k),t.component("ClientOnly",S),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return o.frontmatter.value}},$params:{get(){return o.page.value.params}}}),c.enhanceApp&&await c.enhanceApp({app:t,router:e,siteData:q}),{app:t,router:e,data:o}}function U(){return P(G)}function J(){let e=d,t;return x(o=>{let a=E(o),i=null;return a&&(e&&(t=a),(e||t===a)&&(a=a.replace(/\.js$/,".lean.js")),i=L(()=>import(a),[])),d&&(e=!1),i},c.NotFound)}d&&K().then(({app:e,router:t,data:o})=>{t.go().then(()=>{_(t.route,o.site),e.mount("#app")})});export{K as createApp};
