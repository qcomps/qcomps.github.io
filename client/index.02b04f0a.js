import{S as s,i as t,s as e,e as o,t as a,a as n,c as r,b as l,d as c,f as h,g as i,h as f,j as p,k as u,l as m,n as g,m as d,o as v,q as $,p as w,r as E,u as x,v as j,w as b}from"./client.343a40de.js";function B(s,t,e){const o=s.slice();return o[1]=t[e],o}function C(s){let t,e,g,d,v,$,w,E,x=s[1].frontmatter.title+"",j=s[1].frontmatter.excerpt+"";return{c(){t=o("a"),e=o("h2"),g=a(x),d=n(),v=o("div"),$=a(j),w=n(),this.h()},l(s){t=r(s,"A",{class:!0,href:!0});var o=l(t);e=r(o,"H2",{class:!0});var a=l(e);g=c(a,x),a.forEach(h),d=i(o),v=r(o,"DIV",{class:!0});var n=l(v);$=c(n,j),n.forEach(h),w=i(o),o.forEach(h),this.h()},h(){f(e,"class","svelte-7pow5u"),f(v,"class","description svelte-7pow5u"),f(t,"class","post svelte-7pow5u"),f(t,"href",E="/blog/"+s[1].slug)},m(s,o){p(s,t,o),u(t,e),u(e,g),u(t,d),u(t,v),u(v,$),u(t,w)},p(s,e){1&e&&x!==(x=s[1].frontmatter.title+"")&&m(g,x),1&e&&j!==(j=s[1].frontmatter.excerpt+"")&&m($,j),1&e&&E!==(E="/blog/"+s[1].slug)&&f(t,"href",E)},d(s){s&&h(t)}}}function D(s){let t,e=s[0],a=[];for(let t=0;t<e.length;t+=1)a[t]=C(B(s,e,t));return{c(){t=o("div");for(let s=0;s<a.length;s+=1)a[s].c();this.h()},l(s){t=r(s,"DIV",{class:!0});var e=l(t);for(let s=0;s<a.length;s+=1)a[s].l(e);e.forEach(h),this.h()},h(){f(t,"class","posts")},m(s,e){p(s,t,e);for(let s=0;s<a.length;s+=1)a[s].m(t,null)},p(s,[o]){if(1&o){let n;for(e=s[0],n=0;n<e.length;n+=1){const r=B(s,e,n);a[n]?a[n].p(r,o):(a[n]=C(r),a[n].c(),a[n].m(t,null))}for(;n<a.length;n+=1)a[n].d(1);a.length=e.length}},i:g,o:g,d(s){s&&h(t),d(a,s)}}}function I(s,t,e){let{posts:o}=t;return s.$$set=s=>{"posts"in s&&e(0,o=s.posts)},[o]}class Q extends s{constructor(s){super(),t(this,s,I,D,e,{posts:0})}}function V(s){let t,e,m,g,d,B,C,D,I;return D=new Q({props:{posts:s[0]}}),{c(){t=n(),e=o("div"),m=o("h1"),g=a("Quentin Compson's Blog"),d=n(),B=o("p"),C=n(),v(D.$$.fragment),this.h()},l(s){$('[data-svelte="svelte-midiy8"]',document.head).forEach(h),t=i(s),e=r(s,"DIV",{class:!0});var o=l(e);m=r(o,"H1",{class:!0});var a=l(m);g=c(a,"Quentin Compson's Blog"),a.forEach(h),d=i(o),B=r(o,"P",{}),l(B).forEach(h),o.forEach(h),C=i(s),w(D.$$.fragment,s),this.h()},h(){document.title="Quentin Compson Blog",f(m,"class","svelte-1ml1wpz"),f(e,"class","hero-section")},m(s,o){p(s,t,o),p(s,e,o),u(e,m),u(m,g),u(e,d),u(e,B),p(s,C,o),E(D,s,o),I=!0},p(s,[t]){const e={};1&t&&(e.posts=s[0]),D.$set(e)},i(s){I||(x(D.$$.fragment,s),I=!0)},o(s){j(D.$$.fragment,s),I=!1},d(s){s&&h(t),s&&h(e),s&&h(C),b(D,s)}}}async function y(s,t){const e=await this.fetch("index.json");return await e.json()}function H(s,t,e){let{posts:o}=t;return s.$$set=s=>{"posts"in s&&e(0,o=s.posts)},[o]}export default class extends s{constructor(s){super(),t(this,s,H,V,e,{posts:0})}}export{y as preload};
