(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{1318:function(t,e,i){var n=i(5787).w_;t.exports.i=function(t){return n({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"}}]})(t)}},8318:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return i(5661)}])},9607:function(t,e,i){"use strict";i.d(e,{T:function(){return c},U:function(){return l}});var n=i(5893),r=i(2962),s=i(8725),a=i(7906);let c=t=>{let{title:e=s.siteConfig.title,description:i=s.siteConfig.description,path:a,image:c=s.F}=t,l="".concat(s.siteConfig.url,"/").concat(a);return(0,n.jsx)(r.PB,{title:e,description:i,canonical:l,openGraph:{url:l,title:e,description:i,images:[{url:c}]}})},l=t=>{let{...e}=t,{title:i,summary:c,tags:l,cover:o,slug:u}=(0,a.sy)(e),{created_time:m,last_edited_time:d}=e,x=l.map(t=>t.name),h=null===o?s.F:"external"===o.type?o.external.url:o.file.url,p="".concat(s.siteConfig.url,"/blog/").concat(u),g=new Date(m).toISOString(),f=new Date(d).toISOString();return(0,n.jsx)(r.PB,{title:i,description:c||s.siteConfig.description,canonical:p,openGraph:{type:"article",article:{publishedTime:g,modifiedTime:f,authors:["https://github.com/mxx-kor"],tags:x},url:p,title:i,description:c,images:[{url:h,width:285,height:167}]}})}},4205:function(t,e,i){"use strict";var n=i(5893),r=i(1286);e.Z=t=>{let{className:e,...i}=t;return(0,n.jsx)("span",{...i,className:(0,r.cn)("inline-flex items-center rounded-md px-2 py-1","text-tertiary bg-tag text-xs font-medium","hover:bg-secondary ring-1 ring-inset ring-gray-500/10 transition-all",e)})}},328:function(t,e,i){"use strict";var n=i(5893),r=i(8782),s=i.n(r),a=i(7294),c=i(8725);e.Z=t=>{let{className:e,fallback:i=c.F,alt:r,src:l,...o}=t,[u,m]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{m(!1)},[l]),(0,n.jsx)(s(),{className:e,alt:r,onError:()=>{m(!0)},src:u?i:l,...o})}},5832:function(t,e,i){"use strict";var n=i(5893),r=i(1286);e.Z=t=>{let{className:e,...i}=t;return(0,n.jsx)("p",{...i,className:(0,r.cn)("text-tertiary mb-4",e)})}},7202:function(t,e,i){"use strict";var n=i(5893),r=i(1286);e.Z=t=>{let{className:e,...i}=t;return(0,n.jsx)("h2",{...i,className:(0,r.cn)("text-2xl font-bold tracking-tight",e)})}},5420:function(t,e,i){"use strict";var n=i(5893),r=i(7294),s=i(1286);let a=(0,r.memo)(function(t){let{className:e,...i}=t;return(0,n.jsx)("h1",{...i,className:(0,s.cn)("mb-4 text-2xl font-extrabold",e)})});e.Z=a},1364:function(t,e,i){"use strict";i.d(e,{Ji:function(){return r},dA:function(){return n},eu:function(){return s}});let n={animate:{transition:{staggerChildren:.1}}},r={initial:{opacity:.3,transition:{duration:.3},willChange:"opacity"},animate:{opacity:1,transition:{duration:.3},willChange:"opacity"}},s={initial:{opacity:0,y:10,transition:{duration:.6}},animate:{opacity:1,y:0,transition:{duration:.6}}}},3202:function(t,e,i){"use strict";i.d(e,{RF:function(){return s},Tu:function(){return n},iS:function(){return r}});let n=t=>t.slice(0,10).replaceAll("-","."),r=t=>{let[e,i]=t.slice(5,10).split("-");return"".concat(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][parseInt(e)-1]," ").concat(i)},s=t=>{let[e,i]=t.split("-"),n=new Date(e),r=new Date(i),s=r.getFullYear()-n.getFullYear(),a=r.getMonth()-n.getMonth(),c=r.getDate()-n.getDate();return c<0?12*s+a+1:12*s+a}},7906:function(t,e,i){"use strict";i.d(e,{E6:function(){return r},sy:function(){return s}});var n=i(3202);let r=t=>[...t].sort((t,e)=>new Date(e.created_time).getTime()-new Date(t.created_time).getTime()).reduce((t,e)=>{let i=new Date(e.created_time).getFullYear();return t[i]||(t[i]=[]),t[i].push(e),t},{}),s=t=>{let{properties:e,created_time:i,cover:r}=t,s=e.Title.rich_text[0].plain_text,a=e.Tags.multi_select,c=e.Slug.title[0].plain_text,l=(0,n.Tu)(i),o=e.Summary.rich_text[0]&&e.Summary.rich_text[0].plain_text;return{title:s,tags:a,slug:c,createdTime:l,summary:o,cover:r}}},5661:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return N}});var n=i(5893),r=i(1318),s=i(2560),a=i(4205),c=i(3615),l=i(328),o=i(5832),u=i(1286),m=t=>{let{className:e,...i}=t;return(0,n.jsx)("span",{className:(0,u.cn)("text-quaternary text-sm italic",e),...i})},d=i(7202),x=i(5420),h=i(9607);let p={introduce:["프론트엔드 개발을 통해 비즈니스 가치를 높이는 개발자를 목표로 합니다.","사용성과 성능을 개선하는 작업을 좋아합니다. 개선 방향을 고민하고 더 나은 방법을 찾는 과정을 즐깁니다.","꾸준히 학습하며 개인적인 목표로 정한 365일 개발하기를 달성한 경험과 깃허브, 블로그에 기록하고 공유하고자 노력합니다.","커뮤니케이션을 통한 성장을 추구합니다. 팀 프로젝트, 스터디를 진행하며 동료들과 경험을 공유함으로 성장하는 것에 가치를 두고 있습니다."],skills:["JavaScript","TypeScript","React.js","Next.js","HTML/CSS","SCSS","Emotion"]},g={"개인 블로그":{since:"Aug 2023",description:"개발 과정에 마주하는 다양한 문제를 기록하고 공유하기 위한 개발 블로그",github:"https://github.com/mxx-kor/mxx-kor.github.io"},"WuMo(우리들의 모임)":{since:"Feb 2023",description:"가족, 친구와 모임 일정을 계획하고 공유하는 프라이빗 서비스",github:"https://github.com/prgrms-web-devcourse/Team-5YES-WuMo-FE"},"Dig-Dig-Deep":{since:"Jan 2023",description:"커뮤니케이션을 통한 학습을 제공하는 개발자 전용 SNS",github:"https://github.com/prgrms-fe-devcourse/FEDC3_DigDigDeep_Yuri"},"Notion-cloning":{since:"Nov 2022",description:"Vanilla JS로 노션 SPA를 클론 코딩한 프로젝트",github:"https://github.com/mxx-kor/Notion-Clone-VanillaJS"}},f={"프로그래머스 웹 데브코스 프론트엔트 3기":{period:"2022.10.14-2023.03.15",details:["JavaScript 코어와 자료구조의 기초를 다졌습니다.","VanillaJS와 React 과제를 진행하고 팀원과 멘토 리뷰를 통해 개선하며 심화했습니다.","TypeScript, Storybook, SCSS를 학습했습니다.","팀 프로젝트를 통해 코드 리뷰, 스프린트 방식 등 효율적인 협업 방법을 경험하였습니다."]}};var j=i(1364),b=i(3202),N=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(h.T,{title:"about me | minjae",description:"저를 소개합니다.",path:"about"}),(0,n.jsxs)(s.m.main,{initial:"initial",animate:"animate",variants:j.dA,children:[(0,n.jsx)(x.Z,{className:"my-6 text-2xl",children:"김민재 (Minjae Kim)"}),(0,n.jsxs)(s.m.section,{variants:j.Ji,className:"mb-6 grid grid-cols-1 items-center gap-2 sm:grid-cols-3",children:[(0,n.jsx)(l.Z,{className:"mx-auto mb-4 sm:mb-0",src:"/images/profile.png",width:200,height:200,alt:"Profile Photo"}),(0,n.jsx)("div",{className:"col-span-2",children:p.introduce.map((t,e)=>(0,n.jsx)(o.Z,{className:"mb-1.5",children:t},e))})]}),(0,n.jsxs)(s.m.section,{variants:j.Ji,className:"mb-6",children:[(0,n.jsx)(d.Z,{children:"Skills"}),(0,n.jsx)(c.Z,{className:"mb-4"}),(0,n.jsx)("div",{className:"flex flex-wrap gap-2",children:p.skills.map(t=>(0,n.jsx)(a.Z,{className:"text-secondary rounded-lg text-sm",children:t},t))})]}),(0,n.jsxs)(s.m.section,{variants:j.Ji,className:"mb-6",children:[(0,n.jsx)(d.Z,{children:"Projects"}),(0,n.jsx)(c.Z,{className:"mb-4"}),(0,n.jsx)("ul",{children:(0,u.R)(g).map((t,e)=>(0,n.jsxs)("li",{className:"mb-3 grid grid-cols-1 sm:grid-cols-3",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"text-primary text-lg font-medium tracking-tight",children:(0,n.jsxs)("a",{target:"_blank",href:g[t].github,className:"flex items-center gap-1 hover:underline",rel:"noreferrer",children:[(0,n.jsx)(r.i,{size:18}),t]})}),(0,n.jsxs)(m,{children:["since ",g[t].since]})]}),(0,n.jsx)(o.Z,{className:"col-span-2",children:g[t].description})]},e))})]}),(0,n.jsxs)(s.m.section,{variants:j.Ji,children:[(0,n.jsx)(d.Z,{children:"Dev Experience"}),(0,n.jsx)(c.Z,{className:"mb-4"}),(0,n.jsx)("ul",{children:(0,u.R)(f).map(t=>(0,n.jsxs)("li",{className:"mb-3 grid grid-cols-1 sm:grid-cols-3",children:[(0,n.jsxs)("div",{className:"mb-1 flex w-full flex-col sm:w-44",children:[(0,n.jsx)("h3",{className:"text-primary text-md font-medium tracking-tight",children:t}),(0,n.jsx)(m,{children:f[t].period}),(0,n.jsxs)(m,{children:[(0,b.RF)(f[t].period),"개월"]}),(0,n.jsx)(m,{children:t.includes("프로그래머스")&&(0,n.jsx)("a",{target:"_blank",href:"https://mxxcode.tistory.com/category/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4%20%EB%8D%B0%EB%B8%8C%EC%BD%94%EC%8A%A4",rel:"noreferrer",className:"hover:text-secondary underline underline-offset-2",children:"관련 블로그 글"})})]}),(0,n.jsx)("ul",{className:"text-tertiary col-span-2 list-disc break-keep pl-3.5",children:f[t].details.map((t,e)=>(0,n.jsx)("li",{children:(0,n.jsx)(o.Z,{className:"mb-0.5",children:t})},e))})]},t))})]})]})]})},5443:function(){},4129:function(){}},function(t){t.O(0,[239,764,16,774,888,179],function(){return t(t.s=8318)}),_N_E=t.O()}]);