// Service Worker · ODA·ADS v2
// Network-first pro shell do app: quem esta online sempre recebe a versao
// mais recente; o cache so entra em cena quando a rede falha (uso offline).
// A v1 usava cache-first pra tudo, o que deixava quem ja tinha instalado o
// app preso pra sempre na versao antiga, mesmo depois de novos deploys -
// bumping o nome do cache aqui tambem descarta esse cache antigo.

const CACHE_NAME = 'oda-ads-v2';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/i18n.js',
  '/i18n-apply.js',
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
  if (new URL(request.url).origin !== location.origin) return;

  event.respondWith(
    fetch(request).then(resp => {
      if (resp.ok) {
        const clone = resp.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
      }
      return resp;
    }).catch(() => caches.match(request))
  );
});
