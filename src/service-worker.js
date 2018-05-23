const CACHE_NAME = 'lazada test';
const CACHE_FILES = [
    '/',
  'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
  'index.js'];


self.addEventListener('install', function (event) {
  event.waitUntil(caches.open(CACHE_NAME).then(function (cache) {
    return cache.addAll(CACHE_FILES);
  }));
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
      caches.keys().then(function(keyList) {
        return Promise.all(keyList.map(function(key) {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        }));
      })
  );
});

self.addEventListener('fetch', function (event) {
  if (event.request.url.indexOf('/api/urls') !== -1) {
    console.log('cache api call')
    event.respondWith(
        fetch(event.request)
            .then(function(response) {
              return caches.open(CACHE_NAME).then(function(cache) {
                cache.put(event.request.url, response.clone());
                return response;
              });
            })
    );
  }
  else {
    event.respondWith(
        caches.match(event.request).then(function(response) {
          return response || fetch(event.request);
        })
    );
  }
});