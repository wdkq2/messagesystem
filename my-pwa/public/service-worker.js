const CACHE = 'v1'
const PREFIX = '/messagesystem'
const ASSETS = [
  `${PREFIX}/`,
  `${PREFIX}/index.html`,
  `${PREFIX}/manifest.json`,
  `${PREFIX}/vite.svg`,
]

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)))
  self.skipWaiting()
})

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))),
    ),
  )
  self.clients.claim()
})

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url)
  if (url.origin === location.origin) {
    e.respondWith(
      caches.match(e.request).then((res) => res || fetch(e.request)),
    )
  }
})
