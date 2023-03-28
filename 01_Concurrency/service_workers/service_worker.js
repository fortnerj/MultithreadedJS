// Register the service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service_worker.js')
    .then(registration => {
      console.log('Service worker registered:', registration);
    })
    .catch(error => {
      console.log('Service worker registration failed:', error);
    });
}

// Cache files on install
addEventListener('install', event => {
  event.waitUntil(
    caches.open('my-cache')
      .then(cache => {
        return cache.addAll([
          'index.html',
          // 'service_worker.js'
        ]);
      })
  );
});

// Add event listener for fetch requests
addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          console.log('Found in cache:', event.request.url);
          return response;
        }
        console.log('Not found in cache, fetching:', event.request.url);
        return fetch(event.request);
      })
  );
});

// Update the cache
addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keyList => {
      return Promise.all(keyList.map(key => {
          if (key !== 'my-cache') {
              return caches.delete(key);
          }
      }));
  }));
});

addEventListener('message', event => {
  if (event.data.action === 'updateCache') {
      caches.open('my-cache').then(cache => {
          cache.add(event.data.url);
      });
  }
});
