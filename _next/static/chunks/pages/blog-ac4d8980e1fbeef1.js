(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{4363:function(t,e,n){var i=n(5787).w_;t.exports.v=function(t){return i({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}},{tag:"line",attr:{x1:"16",y1:"2",x2:"16",y2:"6"}},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"10",x2:"21",y2:"10"}}]})(t)}},1296:function(t,e,n){var i=0/0,r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,s=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,u="object"==typeof self&&self&&self.Object===Object&&self,f=c||u||Function("return this")(),x=Object.prototype.toString,d=Math.max,p=Math.min,m=function(){return f.Date.now()};function g(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function h(t){if("number"==typeof t)return t;if("symbol"==typeof(e=t)||e&&"object"==typeof e&&"[object Symbol]"==x.call(e))return i;if(g(t)){var e,n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var c=o.test(t);return c||s.test(t)?l(t.slice(2),c?2:8):a.test(t)?i:+t}t.exports=function(t,e,n){var i,r,a,o,s,l,c=0,u=!1,f=!1,x=!0;if("function"!=typeof t)throw TypeError("Expected a function");function y(e){var n=i,a=r;return i=r=void 0,c=e,o=t.apply(a,n)}function v(t){var n=t-l,i=t-c;return void 0===l||n>=e||n<0||f&&i>=a}function b(){var t,n,i,r=m();if(v(r))return j(r);s=setTimeout(b,(t=r-l,n=r-c,i=e-t,f?p(i,a-n):i))}function j(t){return(s=void 0,x&&i)?y(t):(i=r=void 0,o)}function _(){var t,n=m(),a=v(n);if(i=arguments,r=this,l=n,a){if(void 0===s)return c=t=l,s=setTimeout(b,e),u?y(t):o;if(f)return s=setTimeout(b,e),y(l)}return void 0===s&&(s=setTimeout(b,e)),o}return e=h(e)||0,g(n)&&(u=!!n.leading,a=(f="maxWait"in n)?d(h(n.maxWait)||0,e):a,x="trailing"in n?!!n.trailing:x),_.cancel=function(){void 0!==s&&clearTimeout(s),c=0,i=l=r=s=void 0},_.flush=function(){return void 0===s?o:j(m())},_}},7801:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n(2588)}])},6092:function(t,e,n){"use strict";var i=n(5893),r=n(1286);e.Z=t=>{let{Icon:e,iconsize:n=14,text:a,className:o}=t;return(0,i.jsxs)("div",{className:(0,r.cn)("flex items-center",null!=o?o:"gap-1 text-xs"),children:[(0,i.jsx)(e,{size:n}),(0,i.jsx)("span",{children:a})]})}},6440:function(t,e,n){"use strict";var i=n(5893),r=n(1286),a=n(1664),o=n.n(a);e.Z=t=>{let{className:e,...n}=t;return(0,i.jsx)(o(),{...n,className:(0,r.cn)("text-mute hover:text-primary inline-block transition-all",e)})}},5832:function(t,e,n){"use strict";var i=n(5893),r=n(1286);e.Z=t=>{let{className:e,...n}=t;return(0,i.jsx)("p",{...n,className:(0,r.cn)("text-tertiary mb-4",e)})}},5420:function(t,e,n){"use strict";var i=n(5893),r=n(1286);e.Z=t=>{let{className:e,...n}=t;return(0,i.jsx)("h1",{...n,className:(0,r.cn)("mb-4 text-2xl font-extrabold",e)})}},1364:function(t,e,n){"use strict";n.d(e,{Ji:function(){return r},dA:function(){return i},eu:function(){return a}});let i={animate:{transition:{staggerChildren:.1}}},r={initial:{opacity:.3,transition:{duration:.3},willChange:"opacity"},animate:{opacity:1,transition:{duration:.3},willChange:"opacity"}},a={initial:{opacity:0,y:10,transition:{duration:.6}},animate:{opacity:1,y:0,transition:{duration:.6}}}},2588:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return y},default:function(){return v}});var i=n(5893),r=n(6092),a=n(4363),o=n(5832),s=n(6440),l=t=>{let{...e}=t,{properties:n,created_time:l}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.Z,{className:"text-primary mb-2 text-xl font-bold",href:"/blog/".concat(n.Slug.title[0].plain_text),children:n.Title.rich_text[0].plain_text}),n.Summary.rich_text[0]&&(0,i.jsx)(o.Z,{className:"mb-2",children:n.Summary.rich_text[0].plain_text}),(0,i.jsxs)("div",{className:"flex justify-between",children:[(0,i.jsx)("div",{children:n.Tags.multi_select.map(t=>(0,i.jsx)("span",{className:"mr-2 rounded-lg border px-1 text-sm",children:t.name},t.id))}),(0,i.jsx)(r.Z,{Icon:a.v,text:l})]})]})},c=n(1286),u=t=>{let{className:e,...n}=t;return(0,i.jsx)("input",{type:"text",className:(0,c.cn)("placeholder:text-tertiary mb-8 w-full rounded-md border px-4 py-2 transition-all","border-stone-200 bg-stone-50 dark:border-stone-900 dark:bg-stone-800","focus:outline-none focus:ring-1 focus:ring-stone-400",e),...n})},f=n(5420),x=n(1296),d=n.n(x),p=n(7294),m=()=>{let[t,e]=(0,p.useState)(""),n=(0,p.useCallback)(d()(t=>{e(t.target.value)},300),[]);return{searchTerm:t,handleSearchTerm:n}},g=n(1364),h=n(6291),y=!0,v=t=>{let{posts:e}=t,{searchTerm:n,handleSearchTerm:r}=m(),a=e.filter(t=>t.properties.Title.rich_text[0].plain_text.toLowerCase().includes(n.toLowerCase())||t.properties.Tags.multi_select.filter(t=>t.name.toLowerCase().includes(n.toLowerCase())).length);return(0,i.jsxs)(h.E.main,{initial:"initial",animate:"animate",exit:"exit",variants:g.dA,children:[(0,i.jsx)(f.Z,{className:"my-6 text-4xl",children:"Blog"}),(0,i.jsx)(u,{placeholder:"포스트 제목, 태그로 검색",onChange:r}),n&&(0,i.jsxs)(o.Z,{children:["총"," ",(0,i.jsx)("span",{className:"text-primary font-bold",children:"".concat(a.length,"개")})," ","의 포스트가 있습니다."]}),(0,i.jsx)(h.E.ul,{variants:g.dA,className:"grid w-full gap-8 lg:grid-cols-2 lg:gap-12",children:a.map(t=>(0,i.jsx)(h.E.li,{variants:g.eu,children:(0,i.jsx)(l,{...t})},t.id))})]})}}},function(t){t.O(0,[291,774,888,179],function(){return t(t.s=7801)}),_N_E=t.O()}]);