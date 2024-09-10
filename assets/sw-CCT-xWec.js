// Define the cache name
const CACHE_NAME = "v1";

// Install event: Open cache and add a placeholder file to ensure the cache is created
self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME));
});

const putInCache = async (request, response) => {
  const cache = await caches.open(CACHE_NAME);
  await cache.put(request, response);
};

const cacheFirst = async (request) => {
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }
  const responseFromNetwork = await fetch(request);
  putInCache(request, responseFromNetwork.clone());
  return responseFromNetwork;
};

self.addEventListener("fetch", (event) => {
  event.respondWith(cacheFirst(event.request));
});

// Activate event: Clean up old caches if necessary
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(self.registration?.navigationPreload.enable());
});
