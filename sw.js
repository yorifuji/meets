var CACHE_NAME  = "pwa-cache-20190825";
var urlsToCache = [
    // "index.html"
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches
        .open(CACHE_NAME)
        .then(function(cache){
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches
            .match(event.request)
            .then(function(response) {
                if(response){
                    return response;
                }
                return fetch(event.request);
            })
    );
});