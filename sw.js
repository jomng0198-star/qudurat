// Lightweight service worker: always try the network first so updates appear immediately,
// and fall back to the last saved copy of the page when offline. Videos are never cached here.
const C='qudurat-v1';
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(['./','icons/icon-192.png','manifest.webmanifest']).catch(()=>{})))});
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET'||new URL(r.url).origin!==location.origin||r.url.includes('/videos/'))return;
  e.respondWith(fetch(r).then(res=>{if(res.ok&&r.mode==='navigate'){const cp=res.clone();caches.open(C).then(c=>c.put('./',cp))}return res}).catch(()=>caches.match(r).then(m=>m||caches.match('./'))))});
