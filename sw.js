// Nexus FluxCore - Service Worker
const CACHE = "nexus-v4";
const BASE_PATH = new URL(self.registration.scope).pathname.replace(/\/$/, "");
const inScope = (path) => `${BASE_PATH}${path}` || "/";
const PRECACHE = [inScope("/manifest.json"), inScope("/nexus-logo.png")];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(PRECACHE)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (request.method !== "GET" || url.origin !== self.location.origin) return;

  if (
    url.pathname.startsWith(inScope("/nexuslm")) ||
    url.pathname.startsWith(inScope("/mcpo")) ||
    url.pathname.startsWith(inScope("/zeroclick")) ||
    url.pathname.startsWith(inScope("/engine"))
  ) {
    return;
  }

  if (request.mode === "navigate" || url.pathname === inScope("/") || url.pathname === inScope("/index.html")) {
    event.respondWith(fetch(request, { cache: "no-store" }).catch(() => caches.match(inScope("/index.html"))));
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request).then((response) => {
        if (response.ok) {
          caches.open(CACHE).then((cache) => cache.put(request, response.clone()));
        }
        return response;
      });
    })
  );
});
