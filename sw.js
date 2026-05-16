const CACHE_NAME = 'mallorcago-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/playas.html',
  '/festes.html',
  '/mercadillos.html',
  '/planes.html',
  '/favoritos.html',
  '/detalle-ruta.html',
  '/privacidad.html',
  '/manifest.json',
  '/rutas.json',
  '/eventos.json',
  '/datos.json',
  '/img/icon-192.png',
  '/img/icon-512.png',
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
];

self.addEventListener('install', event => {
  console.log('Service Worker instalado');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});