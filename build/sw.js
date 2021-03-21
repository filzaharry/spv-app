const CACHE_NAME = "spv-version-1";
const urlsToCache = [ 
    'index.html', 
    'offline.html',
    '/karyawan',
    '/departemen',
    '/static/js/main.chunk.js',
    '/static/js/0.chunk.js',
    '/static/js/bundle.js',
    '/',
 ];

const self = this;

// Install SW
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                cache.addAll(urlsToCache);
            })
    )
});

// Listen for requests
self.addEventListener('fetch', (event) => {
    if(navigator.onLine){
        event.respondWith(
        caches.match(event.request)
            .then((res) => {
                if(res){
                    return res
                }
                let requestUrl = e.request.clone();
                fetch(requestUrl)
            })
    )
    }
    
});

// Activate the SW
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME);

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if(!cacheWhitelist.includes(cacheName)) {
                    return caches.delete(cacheName);
                }
            })
        ))
            
    )
});