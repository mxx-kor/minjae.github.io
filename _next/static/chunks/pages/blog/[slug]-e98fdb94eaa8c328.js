(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{1127:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return n(846)}])},9607:function(e,t,n){"use strict";n.d(t,{T:function(){return a},U:function(){return c}});var r=n(5893),s=n(2962),i=n(8725),l=n(7906);let a=e=>{let{title:t=i.siteConfig.title,description:n=i.siteConfig.description,path:l,image:a=i.F}=e,c="".concat(i.siteConfig.url,"/").concat(l);return(0,r.jsx)(s.PB,{title:t,description:n,canonical:c,openGraph:{url:c,title:t,description:n,images:[{url:a}]}})},c=e=>{let{...t}=e,{title:n,summary:a,tags:c,cover:o,slug:u}=(0,l.sy)(t),{created_time:d,last_edited_time:x}=t,m=c.map(e=>e.name),h=null===o?i.F:"external"===o.type?o.external.url:o.file.url,p="".concat(i.siteConfig.url,"/blog/").concat(u),f=new Date(d).toISOString(),g=new Date(x).toISOString();return(0,r.jsx)(s.PB,{title:n,description:a||i.siteConfig.description,canonical:p,openGraph:{type:"article",article:{publishedTime:f,modifiedTime:g,authors:["https://github.com/mxx-kor"],tags:m},url:p,title:n,description:a,images:[{url:h,width:285,height:167}]}})}},4205:function(e,t,n){"use strict";var r=n(5893),s=n(1286);t.Z=e=>{let{className:t,...n}=e;return(0,r.jsx)("span",{...n,className:(0,s.cn)("inline-flex items-center rounded-md px-2 py-1","text-tertiary bg-tag text-xs font-medium","hover:bg-secondary ring-1 ring-inset ring-gray-500/10 transition-all",t)})}},6092:function(e,t,n){"use strict";var r=n(5893),s=n(1286);t.Z=e=>{let{Icon:t,iconsize:n=14,text:i,position:l="left",className:a}=e;return(0,r.jsxs)("div",{className:(0,s.cn)("flex items-center gap-1 text-xs",a),children:["left"===l&&(0,r.jsx)(t,{size:n}),(0,r.jsx)("span",{children:i}),"right"===l&&(0,r.jsx)(t,{size:n})]})}},6870:function(e,t,n){"use strict";var r=n(5893),s=n(1664),i=n.n(s),l=n(1286);t.Z=e=>{let{className:t,...n}=e;return(0,r.jsx)(i(),{...n,className:(0,l.cn)("text-mute hover:text-primary inline-block transition-all",t)})}},7202:function(e,t,n){"use strict";var r=n(5893),s=n(1286);t.Z=e=>{let{className:t,...n}=e;return(0,r.jsx)("h2",{...n,className:(0,s.cn)("text-2xl font-bold tracking-tight",t)})}},3793:function(e,t,n){"use strict";var r=n(5893),s=n(1664),i=n.n(s),l=n(1286),a=n(4205);t.Z=e=>{let{className:t,name:n}=e,s=n.replace("\b","");return(0,r.jsx)(i(),{href:"/archives/tags/".concat(s),children:(0,r.jsx)(a.Z,{className:(0,l.cn)(t),children:s})})}},5420:function(e,t,n){"use strict";var r=n(5893),s=n(7294),i=n(1286);let l=(0,s.memo)(function(e){let{className:t,...n}=e;return(0,r.jsx)("h1",{...n,className:(0,i.cn)("mb-4 text-2xl font-extrabold",t)})});t.Z=l},3202:function(e,t,n){"use strict";n.d(t,{RF:function(){return i},Tu:function(){return r},iS:function(){return s}});let r=e=>e.slice(0,10).replaceAll("-","."),s=e=>{let[t,n]=e.slice(5,10).split("-");return"".concat(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][parseInt(t)-1]," ").concat(n)},i=e=>{let[t,n]=e.split("-"),r=new Date(t),s=new Date(n),i=s.getFullYear()-r.getFullYear(),l=s.getMonth()-r.getMonth(),a=s.getDate()-r.getDate();return a<0?12*i+l+1:12*i+l}},7906:function(e,t,n){"use strict";n.d(t,{E6:function(){return s},sy:function(){return i}});var r=n(3202);let s=e=>[...e].sort((e,t)=>new Date(t.created_time).getTime()-new Date(e.created_time).getTime()).reduce((e,t)=>{let n=new Date(t.created_time).getFullYear();return e[n]||(e[n]=[]),e[n].push(t),e},{}),i=e=>{let{properties:t,created_time:n,cover:s}=e,i=t.Title.rich_text[0].plain_text,l=t.Tags.multi_select,a=t.Slug.title[0].plain_text,c=(0,r.Tu)(n),o=t.Summary.rich_text[0]&&t.Summary.rich_text[0].plain_text;return{title:i,tags:l,slug:a,createdTime:c,summary:o,cover:s}}},846:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return Q},default:function(){return U}});var r=n(5893);n(9408),n(1067),n(8594);var s=n(4363),i=n(7759),l=n(7120),a=n(5152),c=n.n(a),o=n(7294),u=n(4793),d=n(3615),x=n(6092),m=n(6870),h=n(3793),p=n(5420),f=n(2010),g=()=>{let e=(0,o.useRef)(null),{resolvedTheme:t}=(0,f.F)(),n="dark"===t?"dark":"light";return(0,o.useEffect)(()=>{if(!e.current||e.current.hasChildNodes())return;let t=document.createElement("script");t.src="https://giscus.app/client.js",t.async=!0,t.crossOrigin="anonymous",t.setAttribute("data-repo","mxx-kor/mxx-kor.github.io"),t.setAttribute("data-repo-id","R_kgDOJ2XnQw"),t.setAttribute("data-category","Comments"),t.setAttribute("data-category-id","DIC_kwDOJ2XnQ84CXxYD"),t.setAttribute("data-mapping","title"),t.setAttribute("data-strict","0"),t.setAttribute("data-reactions-enabled","1"),t.setAttribute("data-emit-metadata","0"),t.setAttribute("data-input-position","top"),t.setAttribute("data-theme",n),t.setAttribute("data-lang","en"),t.setAttribute("data-loading","lazy");try{e.current.appendChild(t)}catch(e){console.error("Error while rendering giscus widget.",e)}},[]),(0,o.useEffect)(()=>{let e=document.querySelector(".giscus-frame");if(e){var t;null==e||null===(t=e.contentWindow)||void 0===t||t.postMessage({giscus:{setConfig:{theme:n}}},"https://giscus.app")}},[n]),(0,r.jsx)("section",{ref:e})},b=n(6788),j=n(7944),v=n(1664),N=n.n(v),k=n(5396),y=n(8263),w=n(5516),_=n(1286),Z=()=>{let{scrollYProgress:e}=(0,y.v)();return(0,r.jsx)(w.E.div,{className:(0,_.cn)("fixed left-0 top-0 z-10 h-1.5 w-full","origin-top-left bg-gradient-to-r from-blue-400 to-sky-600 dark:from-stone-700 dark:to-stone-200"),style:{scaleX:e}})},C=e=>{let{children:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Z,{}),(0,r.jsx)(N(),{href:"/blog",className:"mb-6 inline-block",children:(0,r.jsx)(k.Z,{className:"w-32","aria-label":"Back to posts",children:(0,r.jsx)(x.Z,{Icon:j.T,text:"Back to posts",className:"text-md gap-1"})})}),t]})},A=n(9607),S=n(4025),T=()=>{let e=(0,o.useRef)(),[t,n]=(0,o.useState)(""),{scrollY:r}=(0,y.v)(),s=()=>{e.current=Array.from(document.querySelectorAll(".notion-h")).filter(e=>{var t;return null===(t=e.querySelector(".notion-h-title"))||void 0===t?void 0:t.textContent}).map(e=>({id:e.dataset.id,top:e.offsetTop+201+1}))};return(0,S.W)(r,"change",t=>{s();let r="";if(e.current){for(let n=0;n<e.current.length;n++){if(t>=e.current[n].top){r=e.current[n].id;continue}break}n(r)}}),t},F=n(7202),D=n(7465),E=n(5242),I=()=>(0,r.jsxs)("div",{className:"bg-tag flex w-44 justify-between gap-2 rounded-xl px-4",children:[(0,r.jsx)(N(),{href:"/blog",children:(0,r.jsx)(k.Z,{children:(0,r.jsx)(j.T,{})})}),(0,r.jsx)(k.Z,{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:(0,r.jsx)(D.a,{size:22})}),(0,r.jsx)(k.Z,{onClick:()=>{var e;return null===(e=document.querySelector(".giscus"))||void 0===e?void 0:e.scrollIntoView({behavior:"smooth"})},children:(0,r.jsx)(E.p,{size:22})})]}),O=e=>{let{tableOfContents:t}=e,n=T(),s=e=>e.replaceAll("-",""),i=e=>0===e?"text-base":1===e?"ml-4 text-sm":2===e?"ml-10 text-sm":void 0;return 0===t.length?(0,r.jsx)(r.Fragment,{}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(F.Z,{className:"mb-4 text-lg font-bold",children:"목차"}),(0,r.jsx)("ul",{className:"mb-2",children:t.map(e=>""!==e.text&&(0,r.jsx)("li",{className:"mb-1 font-light tracking-tighter",children:(0,r.jsx)(m.Z,{href:"#".concat(s(e.id)),scroll:!1,className:(0,_.cn)(i(e.indentLevel),n===s(e.id)?"text-primary font-bold":"hover:font-normal"),children:e.text})},e.id))}),(0,r.jsx)(I,{})]})},P=n(4287),z=n(1331),G=e=>{let{tableOfContents:t}=e;if(0===t.length)return(0,r.jsx)(r.Fragment,{});let n=e=>e.replaceAll("-",""),s=e=>0===e?"text-base":1===e?"ml-8 text-sm":2===e?"ml-16 text-sm":void 0;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.Z,{className:"border-1 mb-4 dark:border-neutral-400"}),(0,r.jsx)(F.Z,{className:"mb-2 px-2",children:(0,r.jsx)(x.Z,{Icon:z.b,iconsize:25,text:"Table of Contents",className:"gap-3 text-xl font-bold"})}),(0,r.jsx)("ul",{className:"px-2",children:t.map(e=>""!==e.text&&(0,r.jsx)("li",{className:"mb-1 tracking-tighter",children:(0,r.jsx)(m.Z,{href:"#".concat(n(e.id)),scroll:!1,children:(0,r.jsx)(x.Z,{Icon:P.r,iconsize:30,text:e.text,className:s(e.indentLevel)})})},e.id))})]})},M=n(3708),X=n(7906);let q=c()(()=>n.e(794).then(n.bind(n,1794)).then(e=>e.Code),{loadableGenerated:{webpack:()=>[1794]}}),J=c()(()=>Promise.all([n.e(276),n.e(853)]).then(n.bind(n,635)).then(e=>e.Collection),{loadableGenerated:{webpack:()=>[635]}}),Y=c()(()=>Promise.all([n.e(265),n.e(274)]).then(n.bind(n,7274)).then(e=>e.Equation),{loadableGenerated:{webpack:()=>[7274]}}),B=c()(()=>Promise.all([n.e(824),n.e(764),n.e(595),n.e(738)]).then(n.bind(n,2788)).then(e=>e.Pdf),{loadableGenerated:{webpack:()=>[2788]},ssr:!1}),R=c()(()=>n.e(873).then(n.bind(n,6873)).then(e=>e.Modal),{loadableGenerated:{webpack:()=>[6873]},ssr:!1}),L=e=>{let{prevPost:t,post:n,nextPost:a,recordMap:c,tableOfContents:f}=e,{resolvedTheme:b}=(0,M.Z)(),[j,v]=(0,o.useState)(!0),{title:N,tags:k,createdTime:y}=(0,X.sy)(n);return(0,o.useEffect)(()=>{let e="dark"===b;v(e)},[b]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(A.U,{...n}),(0,r.jsxs)("article",{children:[(0,r.jsx)("aside",{className:"sticky top-12 hidden xl:block",children:(0,r.jsx)("div",{className:"absolute left-full w-64 rounded-2xl p-4",children:(0,r.jsx)(O,{tableOfContents:f})})}),(0,r.jsxs)("section",{children:[(0,r.jsx)(p.Z,{className:"mb-2 break-keep text-center text-3xl font-bold",children:N}),(0,r.jsx)(x.Z,{className:"text-tertiary mb-2 justify-center text-sm",Icon:s.v,text:y}),(0,r.jsx)("div",{className:"mb-4 flex justify-center gap-2",children:k.map(e=>(0,r.jsx)(o.Fragment,{children:(0,r.jsx)(h.Z,{name:e.name})},e.id))})]}),(0,r.jsx)("section",{className:"transition-all xl:hidden",children:(0,r.jsx)(G,{tableOfContents:f})}),(0,r.jsx)(u.cp,{recordMap:c,darkMode:j,showTableOfContents:!1,components:{Code:q,Collection:J,Equation:Y,Modal:R,Pdf:B}}),(0,r.jsx)(d.Z,{className:"my-6"}),(0,r.jsxs)("section",{className:"mb-12 flex justify-between px-2",children:[(0,r.jsx)("div",{children:t&&(0,r.jsxs)(m.Z,{href:"/blog/".concat(t.properties.Slug.title[0].plain_text),children:[(0,r.jsx)(x.Z,{Icon:i.Y,text:"Prev"}),(0,r.jsx)("span",{className:"tracking-tighter",children:t.properties.Title.rich_text[0].plain_text})]})}),(0,r.jsx)("div",{children:a&&(0,r.jsxs)(m.Z,{href:"/blog/".concat(a.properties.Slug.title[0].plain_text),children:[(0,r.jsx)(x.Z,{Icon:l.n,text:"Next",position:"right",className:"justify-end"}),(0,r.jsx)("span",{className:"tracking-tighter",children:a.properties.Title.rich_text[0].plain_text})]})})]}),(0,r.jsx)(g,{})]})]})};L.getLayout=function(e){return(0,r.jsx)(b.Z,{children:(0,r.jsx)(C,{children:e})})};var Q=!0,U=L}},function(e){e.O(0,[239,551,774,888,179],function(){return e(e.s=1127)}),_N_E=e.O()}]);