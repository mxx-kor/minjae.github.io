(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{1127:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return n(4732)}])},9607:function(t,e,n){"use strict";n.d(e,{T:function(){return s},U:function(){return l}});var r=n(5893),i=n(8725),a=n(2962);let s=t=>{let{title:e=i.siteConfig.title,description:n,path:s,image:l=i.F}=t,o="".concat(i.siteConfig.url,"/").concat(s);return(0,r.jsx)(a.PB,{title:e,description:n,canonical:o,openGraph:{url:o,title:e,description:n,images:[{url:l}]}})},l=t=>{let{...e}=t,{properties:n,created_time:s,last_edited_time:l,cover:o}=e,c=n.Title.rich_text[0].plain_text,u=n.Summary.rich_text[0].plain_text,d=n.Tags.multi_select.map(t=>t.name),p=null===o?i.F:"external"===o.type?o.external.url:o.file.url,h="".concat(i.siteConfig.url,"/blog/").concat(n.Slug.title[0].plain_text),b=new Date(s).toISOString(),x=new Date(l).toISOString();return(0,r.jsx)(a.PB,{title:c,description:u,canonical:h,openGraph:{type:"article",article:{publishedTime:b,modifiedTime:x,authors:["https://github.com/mxx-kor"],tags:d},url:h,title:c,description:u,images:[{url:p,width:285,height:167}]}})}},5420:function(t,e,n){"use strict";var r=n(5893),i=n(1286);e.Z=t=>{let{className:e,...n}=t;return(0,r.jsx)("h1",{...n,className:(0,i.cn)("mb-4 text-2xl font-extrabold",e)})}},4732:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return E},default:function(){return S}});var r=n(5893),i=n(2010),a=n(7294),s=()=>{let t=(0,a.useRef)(null),{resolvedTheme:e}=(0,i.F)(),n="dark"===e?"dark":"light";return(0,a.useEffect)(()=>{if(!t.current||t.current.hasChildNodes())return;let e=document.createElement("script");e.src="https://giscus.app/client.js",e.async=!0,e.crossOrigin="anonymous",e.setAttribute("data-repo","mxx-kor/mxx-kor.github.io"),e.setAttribute("data-repo-id","R_kgDOJ2XnQw"),e.setAttribute("data-category","Comments"),e.setAttribute("data-category-id","DIC_kwDOJ2XnQ84CXxYD"),e.setAttribute("data-mapping","title"),e.setAttribute("data-strict","0"),e.setAttribute("data-reactions-enabled","1"),e.setAttribute("data-emit-metadata","0"),e.setAttribute("data-input-position","top"),e.setAttribute("data-theme",n),e.setAttribute("data-lang","en"),e.setAttribute("data-loading","lazy");try{t.current.appendChild(e)}catch(t){console.error("Error while rendering giscus widget.",t)}},[]),(0,a.useEffect)(()=>{let t=document.querySelector(".giscus-frame");if(t){var e;null==t||null===(e=t.contentWindow)||void 0===e||e.postMessage({giscus:{setConfig:{theme:n}}},"https://giscus.app")}},[n]),(0,r.jsx)("section",{ref:t})},l=n(7369),o=n(1163),c=t=>{let{children:e}=t,n=(0,o.useRouter)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("button",{onClick:()=>n.back(),children:"뒤로 가기"}),e]})},u=n(4793),d=n(5152),p=n.n(d),h=n(3708),b=n(1664),x=n.n(b),g=n(5675),m=n.n(g),f=n(9607);n(4298),n(1067),n(8594);var _=n(5420);let k=p()(()=>n.e(794).then(n.bind(n,1794)).then(t=>t.Code),{loadableGenerated:{webpack:()=>[1794]}}),w=p()(()=>Promise.all([n.e(276),n.e(853)]).then(n.bind(n,635)).then(t=>t.Collection),{loadableGenerated:{webpack:()=>[635]}}),j=p()(()=>Promise.all([n.e(265),n.e(274)]).then(n.bind(n,7274)).then(t=>t.Equation),{loadableGenerated:{webpack:()=>[7274]}}),C=p()(()=>Promise.all([n.e(824),n.e(312),n.e(738)]).then(n.bind(n,2788)).then(t=>t.Pdf),{loadableGenerated:{webpack:()=>[2788]},ssr:!1}),A=p()(()=>n.e(873).then(n.bind(n,6873)).then(t=>t.Modal),{loadableGenerated:{webpack:()=>[6873]},ssr:!1}),y=t=>{let{post:e,recordMap:n}=t,{resolvedTheme:i}=(0,h.Z)(),[l,o]=(0,a.useState)(!0),c=e.properties.Title.rich_text[0].plain_text;return(0,a.useEffect)(()=>{let t="dark"===i;o(t)},[i]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f.U,{...e}),(0,r.jsxs)("article",{children:[(0,r.jsx)(_.Z,{className:"text-center text-3xl font-bold",children:c}),(0,r.jsx)(u.cp,{recordMap:n,darkMode:l,components:{Code:k,Collection:w,Equation:j,Modal:A,Pdf:C,nextImage:m(),nextLink:x()}})]}),(0,r.jsx)(s,{})]})};y.getLayout=function(t){return(0,r.jsx)(l.Z,{children:(0,r.jsx)(c,{children:t})})};var E=!0,S=y}},function(t){t.O(0,[675,839,774,888,179],function(){return t(t.s=1127)}),_N_E=t.O()}]);