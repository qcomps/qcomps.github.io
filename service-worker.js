!function(){"use strict";const e=["client/index.17d66ca4.js","client/client.b3241b25.js","client/index.92c9444d.js","client/contact.ab6119d7.js","client/about.5688a1d2.js","client/[slug].ce440dfa.js"].concat(["service-worker-index.html","favicon.png","global.css","logo-192.png","logo-512.png","logo.png","manifest.json","redtie.png"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1643351480203").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1643351480203"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&t.has(n.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1643351480203").then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const s=await t.match(e.request);if(s)return s;throw n}}))))})}();
