const CACHE_NAME = 'pwa-demo-site-v1';
const urlsToCache = [
    '/',
    '/styles/global.css',
    '/images/image-1.JPG',
    '/images/image-2.JPG',
    '/images/image-3.JPG',
    '/images/image-4.JPG'
];

self.addEventListener('install', installEvent => {
    installEvent.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', fetchEvent => {
    fetchEvent.respondWith(
        /* 
            caches.match accepts the request property of the event passed to the event listener's 
            callback function and checks for matches to files that are cached.
            If matches are found in the response, the response is returned; otherwise the result of
            the call to fetch is returned and a network request is made.
        */
        caches.match(fetchEvent.request).then(response => response || fetch(fetchEvent.request))
    );
});