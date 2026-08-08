const CACHE_NAME = 'hightech-ps-cache-v1';
const urlsToCache = [
  './index.html'
];

// تثبيت الكاش
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// جلب الملفات من الكاش عند انقطاع الإنترنت
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
