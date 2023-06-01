'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "93146d64ad978b36570237ce3180f49d",
"assets/assets/images/cars/ambulance.png": "ec22efb8caa9aa3c24af75a20eea6f1d",
"assets/assets/images/cars/buggy.png": "a9a88ba3ec31101877b105881b03f48c",
"assets/assets/images/cars/bus.png": "a6a1925516dac648032638db19cf3917",
"assets/assets/images/cars/bus_school.png": "7930530a038614004a83bcd22eda0ba6",
"assets/assets/images/cars/convertible.png": "e27d842ca58bab5aef63df1b4e2bc782",
"assets/assets/images/cars/cycle.png": "58d791fe2c142eb06c28f3ba146b1829",
"assets/assets/images/cars/cycle_low.png": "05b7030071224fe8890e5406d82133d6",
"assets/assets/images/cars/firetruck.png": "1dcfe2372d2e5230d7d15540096b205c",
"assets/assets/images/cars/formula.png": "e969f04000d459530697d52b4baac57e",
"assets/assets/images/cars/hotdog.png": "909eaef2174ffe01eae40b3fb21f2938",
"assets/assets/images/cars/kart.png": "4ea47d16f12784703c5bdd58094458c9",
"assets/assets/images/cars/police.png": "9cb0aff58ce7d605e91e48153d6c18f3",
"assets/assets/images/cars/riot.png": "9259831d2c148b75138fc38e40bc3d18",
"assets/assets/images/cars/rounded_green.png": "787ea9dc590d5b120ae55d4f04630ec9",
"assets/assets/images/cars/rounded_red.png": "4a36d6f29c2fcdf386de30cae25b247b",
"assets/assets/images/cars/rounded_yellow.png": "fc4e3f4507ef901fe76ee1621054a1ca",
"assets/assets/images/cars/scooter.png": "edaa6448293964472b4c9da8d4e19d3b",
"assets/assets/images/cars/sedan.png": "f8a47bee0cc8f5f6300c4c0d195d1832",
"assets/assets/images/cars/sedan_blue.png": "859c0f13388324d341d1ff5d940634dc",
"assets/assets/images/cars/sedan_vintage.png": "ef5f33ac793cad0229bbe968a9ab9f12",
"assets/assets/images/cars/sports_convertible.png": "d21d85224ea72decdbdfeb8e8a1d691b",
"assets/assets/images/cars/sports_green.png": "135bc611797b40651ac2dbb807b26e56",
"assets/assets/images/cars/sports_race.png": "47a644342ed27f49267329538bd140e7",
"assets/assets/images/cars/sports_red.png": "8d6cd96c875614653037e089dbffee2f",
"assets/assets/images/cars/sports_yellow.png": "1f307984fc4db474498c5aca0851f7cb",
"assets/assets/images/cars/station.png": "3adec2faaf6acf3e0a7a129ae459524e",
"assets/assets/images/cars/suv.png": "d9066474912c768d200073d1def0fcc1",
"assets/assets/images/cars/suv_closed.png": "146fbc0d1da639cde8303d13cbed5c63",
"assets/assets/images/cars/suv_green.png": "e91a8c74cb4480ed813e48f0e9811c00",
"assets/assets/images/cars/suv_large.png": "784e9735f49f6d40310fe2007a7de5e8",
"assets/assets/images/cars/suv_military.png": "f0dd9faf647f001ed8ffaba2c5fd6ef3",
"assets/assets/images/cars/suv_travel.png": "e4f70199a21e57a0a37bb082bcccbc94",
"assets/assets/images/cars/taxi.png": "78d4a79c025a0f8f6baa3f597237be31",
"assets/assets/images/cars/towtruck.png": "2998bf9bd7b74a67d9c4afda9e817e31",
"assets/assets/images/cars/tractor.png": "e8519cedcab325b9c69d3ab76b23212d",
"assets/assets/images/cars/transport.png": "4d5c0d8dde84f338a4080257ea060092",
"assets/assets/images/cars/truck.png": "7c8ba8ad7a59da08bfbc6523c0866d08",
"assets/assets/images/cars/truckcabin.png": "c9df3842d9d1a6df3b60973fe12d5368",
"assets/assets/images/cars/truckcabin_vintage.png": "3e20950782dfd9c3b867e867b6a26a3e",
"assets/assets/images/cars/truckdark.png": "8773019014eb47767f0cf646f083e2ed",
"assets/assets/images/cars/truckdelivery.png": "e02ddcd85a90d9fa78aa5511b8f0f97c",
"assets/assets/images/cars/trucktank.png": "d1cce4bfa1c59c4b4892f72158dfbbd2",
"assets/assets/images/cars/trucktank_trailer.png": "7bd97db4225b439f6411b040777b6658",
"assets/assets/images/cars/truck_trailer.png": "96a707a90bf10253f7d25f73aaa9b920",
"assets/assets/images/cars/van.png": "fb10d0beaae0727deba28159fbdf1684",
"assets/assets/images/cars/van_flat.png": "4e6cf6d10a6cfe3facaf0f7e859ed67f",
"assets/assets/images/cars/van_large.png": "06f22b7496cb7fd15c427dc4c3e1c7e2",
"assets/assets/images/cars/van_small.png": "676d5199a4fb3019ad8c0b7287da1215",
"assets/assets/images/cars/vendor.png": "291c4db62699b3e7b33a51e28157b26f",
"assets/assets/images/cars/vintage.png": "1b7d73feae3c7a954bb2ec29557d42ff",
"assets/assets/images/icons/gasolina.png": "f0e05178869ed578a1af1e7cba3ef108",
"assets/assets/images/icons/pneu_cheio.png": "10a0453ca1c6c5a8b4843d86e1d6a5f5",
"assets/assets/images/icons/pneu_vazio.png": "5f9692c2ff0db263701f5190d876f74e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "1c1af7a96477dd23b121bf6b33c55714",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f00a9142602fc6eceda5e588eb7acd14",
"/": "f00a9142602fc6eceda5e588eb7acd14",
"main.dart.js": "fbe21de6f612a420eb732f9720ce743c",
"manifest.json": "c1370491733aed71a5765da43753d72f",
"version.json": "7051d108d7efc97d8d2d3076fdb99b8b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
