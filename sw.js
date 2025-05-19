self.addEventListener('install', event => {
  console.log('Service Worker installing...');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('Service Worker activated!');
  return self.clients.claim();
});

self.addEventListener('fetch', event => {
  // Just a simple network fetch fallback (no caching)
  event.respondWith(fetch(event.request));
});
