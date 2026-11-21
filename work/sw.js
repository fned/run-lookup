// Work Available — offline cache.
// First visit (online) saves the page, the paddles, the reader and its English data.
// After that the app opens and reads images with no internet.
const CACHE='work-available-v2';
const LOCAL=['./','index.html','paddles.json','eng.traineddata.gz','manifest.webmanifest','icon-192.png','icon-512.png','apple-touch-icon.png'];
const CDN=[
 'https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js',
 'https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/worker.min.js',
 'https://cdn.jsdelivr.net/npm/tesseract.js-core@5/tesseract-core-simd-lstm.wasm.js',
 'https://cdn.jsdelivr.net/npm/tesseract.js-core@5/tesseract-core-lstm.wasm.js'
];
self.addEventListener('install',e=>{
 e.waitUntil(caches.open(CACHE).then(c=>Promise.allSettled([...LOCAL,...CDN].map(u=>c.add(u)))).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',e=>{
 e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',e=>{
 const req=e.request;if(req.method!=='GET')return;
 const url=new URL(req.url);
 // the page itself: try the network first so updates show up, fall back to the saved copy offline
 if(req.mode==='navigate'||url.pathname.endsWith('/index.html')){
  e.respondWith(fetch(req).then(r=>{const cp=r.clone();caches.open(CACHE).then(c=>c.put('index.html',cp));return r}).catch(()=>caches.match('index.html')));
  return;
 }
 // everything else: saved copy first, otherwise fetch and save it
 e.respondWith(caches.match(req,{ignoreSearch:true}).then(hit=>hit||fetch(req).then(r=>{if(r.ok||r.type==='opaque'){const cp=r.clone();caches.open(CACHE).then(c=>c.put(req,cp))}return r})));
});
