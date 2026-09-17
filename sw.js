// Service Worker — ODA·ADS v1
// Cache-first pro shell do app (funciona offline apos a primeira visita).

const CACHE_NAME = 'oda-ads-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/manifest.json',
  '/logo.jpg',
  '/icon-192.png',
  '/icon-512.png',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const { request } = event;
  if (request.method !== 'GET') return;

  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request).then(resp => {
        if (resp.ok && new URL(request.url).origin === location.origin) {
          const clone = resp.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
        }
        return resp;
      }).catch(() => cached);
    })
  );
});
