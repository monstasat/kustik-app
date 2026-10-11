const CACHE="kustik-v6-5";
const CORE=["./manifest.webmanifest","./app.js","./icon-192.png","./icon-512.png"];

self.addEventListener("install",function(event){
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(function(cache){return cache.addAll(CORE)}));
});

self.addEventListener("activate",function(event){
  event.waitUntil(Promise.all([
    self.clients.claim(),
    caches.keys().then(function(keys){
      return Promise.all(keys.filter(function(key){return key!==CACHE}).map(function(key){return caches.delete(key)}));
    })
  ]));
});

self.addEventListener("message",function(event){
  if(event.data && event.data.type==="SKIP_WAITING")self.skipWaiting();
});

self.addEventListener("fetch",function(event){
  var req=event.request;
  if(req.method!=="GET")return;
  var url=new URL(req.url);
  if(url.origin!==self.location.origin)return;

  if(req.mode==="navigate" || /\/index\.html$/.test(url.pathname) || /\/kustik-app\/$/.test(url.pathname)){
    event.respondWith(
      fetch(req,{cache:"no-store"})
        .then(function(resp){
          var copy=resp.clone();
          caches.open(CACHE).then(function(cache){cache.put("./index.html",copy)});
          return resp;
        })
        .catch(function(){
          return caches.match("./index.html").then(function(r){return r||caches.match("./")});
        })
    );
    return;
  }

  event.respondWith(
    caches.match(req).then(function(cached){
      var fresh=fetch(req,{cache:"no-cache"})
        .then(function(resp){
          if(resp && resp.ok){
            var copy=resp.clone();
            caches.open(CACHE).then(function(cache){cache.put(req,copy)});
          }
          return resp;
        })
        .catch(function(){return cached});
      return cached || fresh;
    })
  );
});