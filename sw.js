const CACHE="kustik-v6-3-1";
const CORE=["./manifest.webmanifest","./icon-192.png","./icon-512.png"];

self.addEventListener("install",event=>{
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)));
});

self.addEventListener("activate",event=>{
  event.waitUntil(
    Promise.all([
      self.clients.claim(),
      caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key))))
    ])
  );
});

self.addEventListener("message",event=>{
  if(event.data && event.data.type==="SKIP_WAITING"){
    self.skipWaiting();
  }
});

self.addEventListener("fetch",event=>{
  const req=event.request;
  if(req.method!=="GET")return;

  const url=new URL(req.url);
  if(url.origin!==self.location.origin)return;

  // HTML/navigation is always checked against the network first.
  if(req.mode==="navigate" || url.pathname.endsWith("/index.html") || url.pathname.endsWith("/kustik-app/")){
    event.respondWith(
      fetch(req,{cache:"no-store"})
        .then(resp=>{
          const copy=resp.clone();
          caches.open(CACHE).then(cache=>cache.put("./index.html",copy));
          return resp;
        })
        .catch(()=>caches.match("./index.html").then(r=>r||caches.match("./")))
    );
    return;
  }

  // Static assets: serve cached copy quickly, refresh it in the background.
  event.respondWith(
    caches.match(req).then(cached=>{
      const fresh=fetch(req,{cache:"no-cache"})
        .then(resp=>{
          if(resp && resp.ok){
            const copy=resp.clone();
            caches.open(CACHE).then(cache=>cache.put(req,copy));
          }
          return resp;
        })
        .catch(()=>cached);

      return cached || fresh;
    })
  );
});