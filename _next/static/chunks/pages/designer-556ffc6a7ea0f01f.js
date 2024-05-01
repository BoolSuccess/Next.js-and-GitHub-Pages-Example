(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[205],{3454:function(e,t,n){"use strict";var i,r;e.exports=(null==(i=n.g.process)?void 0:i.env)&&"object"==typeof(null==(r=n.g.process)?void 0:r.env)?n.g.process:n(7663)},5366:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/designer",function(){return n(742)}])},6068:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var i=n(5893),r=n(9008),o=n.n(r),s=n(3017);let a=()=>(0,i.jsxs)("section",{className:"text-white flex flex-row justify-center pt-4 items-center",children:[(0,i.jsx)("div",{className:"text-xs bg-[#FF9900] rounded-sm drop-shadow-sm  p-0.5 mr-0.5",children:"THE"}),(0,i.jsx)("div",{className:"text-xs  bg-[#3C3C3D]  rounded-sm drop-shadow-sm p-0.5  ",children:"RATIO"})]});function l(e){let{description:t,requirements:n=[""],responsibilites:r=[""],title:l}=e;return(0,i.jsxs)("main",{children:[(0,i.jsxs)(o(),{children:[(0,i.jsx)("title",{children:"Jobs at The Ratio"}),(0,i.jsx)("meta",{name:"description",content:"You have no idea whats coming"}),(0,i.jsx)("link",{rel:"icon",href:"".concat(s.O,"/favicon.ico")})]}),(0,i.jsxs)("div",{className:"min-h-screen  bg-[#f0f0f0] w-full flex flex-col items-center justify-between",children:[a(),(0,i.jsxs)("div",{className:" max-w-4xl mx-10 my-4 px-10 py-4 md:mx-16 rounded bg-white border-[#696969] shadow-lg text-left",children:[(0,i.jsx)("div",{className:"text-4xl my-2 font-semibold max-w-xl",children:l}),(0,i.jsxs)("div",{className:"pt-4",children:["Job Title: ",(0,i.jsx)("span",{className:"font-semibold",children:l})]}),(0,i.jsxs)("div",{className:"pt-2",children:["Job Type:  ",(0,i.jsx)("span",{className:"font-semibold",children:"Contract (Paid in USDC)"})]}),(0,i.jsxs)("div",{className:"pt-2",children:["Location: ",(0,i.jsx)("span",{className:"font-semibold",children:"Remote"})]}),(0,i.jsx)("div",{className:"max-w-xl pt-4",children:t}),(0,i.jsx)("div",{className:"text-xl pt-4 font-semibold",children:"Responsibilities:"}),r.map((e,t)=>(0,i.jsxs)("div",{children:["- ",e]},t)),(0,i.jsx)("div",{className:"text-xl mt-4 font-semibold",children:"Requirements:"}),n.map((e,t)=>(0,i.jsxs)("div",{children:["- ",e]},t)),(0,i.jsxs)("div",{className:"pt-8",children:["To Apply: Please provide your availability, cv, and details about your background, experience, how you like to work, and what you would like to work on. Apply by emailing your info to jobs @ (this domain) or apply with a direct message on Telegram to ",(0,i.jsx)("a",{className:"underline text-blue-500",href:"https://t.me/witecrypto",target:"_blank",children:"@witecrypto"})]})]}),(0,i.jsx)("div",{className:"pb-4",children:a()})]})]})}},742:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var i=n(5893),r=n(6068);let o=["Collaborate with the development team to design and implement a visually appealing and functional front-end design for the DeFi application."],s=["Proven experience as a front-end designer, preferably some knowledge of React and ability to perform updates","A strong visual aesthetic and sense of style","Willingness to be paid in USDC or DAI","Willingness to communicate primarily on Telegram"];function a(e){let{Component:t,pageProps:n}=e;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(r.Z,{responsibilites:o,requirements:s,title:"Front-End Designer for DeFi Application",description:"\n  We are seeking a skilled web/ui designer to join our team and work on a DeFi application built on EVM-compatible chains.\n  The project is currently in the smart contract finalization stage, and we are looking to develop a user-friendly front-end\n  that will initially serve as a marketing page and later evolve into a full dashboard for the DeFi app. Our team prefers working\n  with tools such as figma, sketch, and similar products to workshop designs as a team.\n  "})})}},3017:function(e,t,n){"use strict";n.d(t,{O:function(){return i}});let i=n(3454).env.BASE_PATH||""},7663:function(e){!function(){var t={229:function(e){var t,n,i,r=e.exports={};function o(){throw Error("setTimeout has not been defined")}function s(){throw Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"==typeof clearTimeout?clearTimeout:s}catch(e){n=s}}();var l=[],c=!1,u=-1;function d(){c&&i&&(c=!1,i.length?l=i.concat(l):u=-1,l.length&&f())}function f(){if(!c){var e=a(d);c=!0;for(var t=l.length;t;){for(i=l,l=[];++u<t;)i&&i[u].run();u=-1,t=l.length}i=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function p(){}r.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new m(e,t)),1!==l.length||c||a(f)},m.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=p,r.addListener=p,r.once=p,r.off=p,r.removeListener=p,r.removeAllListeners=p,r.emit=p,r.prependListener=p,r.prependOnceListener=p,r.listeners=function(e){return[]},r.binding=function(e){throw Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw Error("process.chdir is not supported")},r.umask=function(){return 0}}},n={};function i(e){var r=n[e];if(void 0!==r)return r.exports;var o=n[e]={exports:{}},s=!0;try{t[e](o,o.exports,i),s=!1}finally{s&&delete n[e]}return o.exports}i.ab="//";var r=i(229);e.exports=r}()},9008:function(e,t,n){e.exports=n(6665)}},function(e){e.O(0,[888,774,179],function(){return e(e.s=5366)}),_N_E=e.O()}]);