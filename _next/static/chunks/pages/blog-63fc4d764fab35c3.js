(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{4363:function(t,e,n){var r=n(5787).w_;t.exports.v=function(t){return r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}},{tag:"line",attr:{x1:"16",y1:"2",x2:"16",y2:"6"}},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"10",x2:"21",y2:"10"}}]})(t)}},1296:function(t,e,n){var r=0/0,i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,u="object"==typeof self&&self&&self.Object===Object&&self,f=l||u||Function("return this")(),d=Object.prototype.toString,x=Math.max,p=Math.min,m=function(){return f.Date.now()};function g(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function h(t){if("number"==typeof t)return t;if("symbol"==typeof(e=t)||e&&"object"==typeof e&&"[object Symbol]"==d.call(e))return r;if(g(t)){var e,n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var l=o.test(t);return l||s.test(t)?c(t.slice(2),l?2:8):a.test(t)?r:+t}t.exports=function(t,e,n){var r,i,a,o,s,c,l=0,u=!1,f=!1,d=!0;if("function"!=typeof t)throw TypeError("Expected a function");function y(e){var n=r,a=i;return r=i=void 0,l=e,o=t.apply(a,n)}function v(t){var n=t-c,r=t-l;return void 0===c||n>=e||n<0||f&&r>=a}function j(){var t,n,r,i=m();if(v(i))return b(i);s=setTimeout(j,(t=i-c,n=i-l,r=e-t,f?p(r,a-n):r))}function b(t){return(s=void 0,d&&r)?y(t):(r=i=void 0,o)}function _(){var t,n=m(),a=v(n);if(r=arguments,i=this,c=n,a){if(void 0===s)return l=t=c,s=setTimeout(j,e),u?y(t):o;if(f)return s=setTimeout(j,e),y(c)}return void 0===s&&(s=setTimeout(j,e)),o}return e=h(e)||0,g(n)&&(u=!!n.leading,a=(f="maxWait"in n)?x(h(n.maxWait)||0,e):a,d="trailing"in n?!!n.trailing:d),_.cancel=function(){void 0!==s&&clearTimeout(s),l=0,r=c=i=s=void 0},_.flush=function(){return void 0===s?o:b(m())},_}},7801:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n(1173)}])},3432:function(t,e,n){"use strict";var r=n(5893),i=n(4363),a=n(1664),o=n.n(a),s=n(7294),c=n(7906),l=n(6092),u=n(5832),f=n(3793);let d=(0,s.memo)(function(t){let{...e}=t,{title:n,slug:a,summary:d,tags:x,createdTime:p}=(0,c.sy)(e);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o(),{href:"/blog/".concat(a),children:[(0,r.jsx)("h2",{className:"text-primary mb-2 text-xl font-bold group-hover:underline",children:n}),(0,r.jsx)(u.Z,{className:"group-hover:text-secondary mb-2 transition-all",children:d})]}),(0,r.jsxs)("div",{className:"flex justify-between",children:[(0,r.jsx)("div",{className:"flex flex-wrap gap-2",children:x.map(t=>(0,r.jsx)(s.Fragment,{children:(0,r.jsx)(f.Z,{name:t.name})},t.id))}),(0,r.jsx)(l.Z,{className:"text-tertiary group-hover:text-secondary",Icon:i.v,text:p})]})]})});e.Z=d},9607:function(t,e,n){"use strict";n.d(e,{T:function(){return s},U:function(){return c}});var r=n(5893),i=n(2962),a=n(8725),o=n(7906);let s=t=>{let{title:e=a.siteConfig.title,description:n=a.siteConfig.description,path:o,image:s=a.F}=t,c="".concat(a.siteConfig.url,"/").concat(o);return(0,r.jsx)(i.PB,{title:e,description:n,canonical:c,openGraph:{url:c,title:e,description:n,images:[{url:s}]}})},c=t=>{let{...e}=t,{title:n,summary:s,tags:c,cover:l,slug:u}=(0,o.sy)(e),{created_time:f,last_edited_time:d}=e,x=c.map(t=>t.name),p=null===l?a.F:"external"===l.type?l.external.url:l.file.url,m="".concat(a.siteConfig.url,"/blog/").concat(u),g=new Date(f).toISOString(),h=new Date(d).toISOString();return(0,r.jsx)(i.PB,{title:n,description:s||a.siteConfig.description,canonical:m,openGraph:{type:"article",article:{publishedTime:g,modifiedTime:h,authors:["https://github.com/mxx-kor"],tags:x},url:m,title:n,description:s,images:[{url:p,width:285,height:167}]}})}},4205:function(t,e,n){"use strict";var r=n(5893),i=n(1286);e.Z=t=>{let{className:e,...n}=t;return(0,r.jsx)("span",{...n,className:(0,i.cn)("inline-flex items-center rounded-md px-2 py-1","text-tertiary bg-tag text-xs font-medium","hover:bg-secondary ring-1 ring-inset ring-gray-500/10 transition-all",e)})}},6092:function(t,e,n){"use strict";var r=n(5893),i=n(1286);e.Z=t=>{let{Icon:e,iconsize:n=14,text:a,position:o="left",className:s}=t;return(0,r.jsxs)("div",{className:(0,i.cn)("flex items-center gap-1 text-xs",s),children:["left"===o&&(0,r.jsx)(e,{size:n}),(0,r.jsx)("span",{children:a}),"right"===o&&(0,r.jsx)(e,{size:n})]})}},5832:function(t,e,n){"use strict";var r=n(5893),i=n(1286);e.Z=t=>{let{className:e,...n}=t;return(0,r.jsx)("p",{...n,className:(0,i.cn)("text-tertiary mb-4",e)})}},3793:function(t,e,n){"use strict";var r=n(5893),i=n(1664),a=n.n(i),o=n(1286),s=n(4205);e.Z=t=>{let{className:e,name:n}=t,i=n.replace("\b","");return(0,r.jsx)(a(),{href:"/archives/tags/".concat(i),children:(0,r.jsx)(s.Z,{className:(0,o.cn)(e),children:i})})}},5420:function(t,e,n){"use strict";var r=n(5893),i=n(7294),a=n(1286);let o=(0,i.memo)(function(t){let{className:e,...n}=t;return(0,r.jsx)("h1",{...n,className:(0,a.cn)("mb-4 text-2xl font-extrabold",e)})});e.Z=o},1364:function(t,e,n){"use strict";n.d(e,{Ji:function(){return i},dA:function(){return r},eu:function(){return a}});let r={animate:{transition:{staggerChildren:.1}}},i={initial:{opacity:.3,transition:{duration:.3},willChange:"opacity"},animate:{opacity:1,transition:{duration:.3},willChange:"opacity"}},a={initial:{opacity:0,y:10,transition:{duration:.6}},animate:{opacity:1,y:0,transition:{duration:.6}}}},3202:function(t,e,n){"use strict";n.d(e,{T:function(){return r},i:function(){return i}});let r=t=>t.slice(0,10).replaceAll("-","."),i=t=>{let[e,n]=t.slice(5,10).split("-");return"".concat(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][parseInt(e)-1]," ").concat(n)}},7906:function(t,e,n){"use strict";n.d(e,{E6:function(){return i},sy:function(){return a}});var r=n(3202);let i=t=>[...t].sort((t,e)=>new Date(e.created_time).getTime()-new Date(t.created_time).getTime()).reduce((t,e)=>{let n=new Date(e.created_time).getFullYear();return t[n]||(t[n]=[]),t[n].push(e),t},{}),a=t=>{let{properties:e,created_time:n,cover:i}=t,a=e.Title.rich_text[0].plain_text,o=e.Tags.multi_select,s=e.Slug.title[0].plain_text,c=(0,r.T)(n),l=e.Summary.rich_text[0]&&e.Summary.rich_text[0].plain_text;return{title:a,tags:o,slug:s,createdTime:c,summary:l,cover:i}}},1173:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return g},default:function(){return h}});var r=n(5893),i=n(2560),a=n(7294),o=n(5832),s=n(1286),c=t=>{let{className:e,...n}=t;return(0,r.jsx)("input",{type:"text",className:(0,s.cn)("placeholder:text-tertiary mb-8 w-full rounded-md border px-4 py-2 transition","border-stone-200 bg-stone-50 dark:border-stone-900 dark:bg-stone-800","focus:outline-none focus:ring-1 focus:ring-stone-400",e),...n})},l=n(5420),u=n(3432),f=n(9607),d=n(1296),x=n.n(d),p=()=>{let[t,e]=(0,a.useState)(""),n=(0,a.useCallback)(x()(t=>{e(t.target.value)},300),[]);return{searchTerm:t,handleSearchTerm:n}},m=n(1364),g=!0,h=t=>{let{posts:e}=t,{searchTerm:n,handleSearchTerm:s}=p(),[d,x]=(0,a.useState)([]);return(0,a.useEffect)(()=>{let t=e.filter(t=>t.properties.Title.rich_text[0].plain_text.toLowerCase().includes(n.toLowerCase())||t.properties.Tags.multi_select.some(t=>t.name.toLowerCase().includes(n.toLowerCase())));x(t)},[n]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f.T,{path:"blog"}),(0,r.jsxs)(i.m.main,{initial:"initial",animate:"animate",exit:"exit",variants:m.dA,children:[(0,r.jsx)(l.Z,{className:"my-6 text-4xl",children:"Blog"}),(0,r.jsx)(c,{placeholder:"포스트 제목, 태그로 검색",onChange:s}),n&&(0,r.jsxs)(o.Z,{children:["총"," ",(0,r.jsx)("span",{className:"text-primary font-bold",children:"".concat(d.length,"개")})," ","의 포스트가 있습니다."]}),(0,r.jsx)("ul",{className:"grid w-full gap-8 lg:grid-cols-2 lg:gap-12",children:d.map(t=>(0,r.jsx)(i.m.li,{variants:m.eu,className:"group",children:(0,r.jsx)(u.Z,{...t})},t.id))})]})]})}},2560:function(t,e,n){"use strict";n.d(e,{m:function(){return a}});var r=n(1150),i=n(4007);let a=(0,r.D)(i.w)}},function(t){t.O(0,[239,774,888,179],function(){return t(t.s=7801)}),_N_E=t.O()}]);