/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2022/01/12/comment-jai-cree-mon-blog/index.html",
    "revision": "83372e34ab2dc14452b4c770651a7db4"
  },
  {
    "url": "404.html",
    "revision": "fe8d49dd916474094a69dfd622bc9291"
  },
  {
    "url": "assets/css/0.styles.a6085e30.css",
    "revision": "bd8fdeb52440ebb6cc5c42e4e1b037b4"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFbzr-_dSb_nco.9738e026.woff2",
    "revision": "9738e026c7397b4e3b543ae7f1cf4b6c"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFWzr-_dSb_.b450bfca.woff2",
    "revision": "b450bfca16a8beb05580180de7b678f0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.bded6b75.js",
    "revision": "13b7d547b6a0e5096bfb3564b33d95ad"
  },
  {
    "url": "assets/js/11.3d96c020.js",
    "revision": "e600f10c07e337330e7ee8cef71ec5e7"
  },
  {
    "url": "assets/js/12.b397ee80.js",
    "revision": "baa080248a049610dc62fa0f3e5b4e8e"
  },
  {
    "url": "assets/js/13.f9a7846d.js",
    "revision": "5b542a224b181786b7b037a1ae7421e8"
  },
  {
    "url": "assets/js/14.bd6a9300.js",
    "revision": "362e68d5f371f38e906ef55a42dfe474"
  },
  {
    "url": "assets/js/3.bac06ae2.js",
    "revision": "95186b439cc2408588edbff4e5f3aa14"
  },
  {
    "url": "assets/js/4.65cb3af6.js",
    "revision": "978cdad111d677d0daf4921b0df81acd"
  },
  {
    "url": "assets/js/5.aca39641.js",
    "revision": "49290decccab4cac868101d92ca876f1"
  },
  {
    "url": "assets/js/6.edb7b1f4.js",
    "revision": "b6738f6187df81833877b21cecbd230d"
  },
  {
    "url": "assets/js/7.13011de4.js",
    "revision": "7f44731891df8fd9340531514859aa30"
  },
  {
    "url": "assets/js/8.6ce82aea.js",
    "revision": "967e27338fdd71a1877fcb36db954a4b"
  },
  {
    "url": "assets/js/9.05e2b408.js",
    "revision": "bd9b91bfd3a5b6cb2bbf327780da7662"
  },
  {
    "url": "assets/js/app.e8564285.js",
    "revision": "14e8cb9bc17d8ec08a7ef1ccec164dce"
  },
  {
    "url": "assets/js/vuejs-paginate.f34659de.js",
    "revision": "634ad9edabe5e7e0b8225ce4c05e72fa"
  },
  {
    "url": "index.html",
    "revision": "e2ee9ecaeeed2d79d8372fff10efdf73"
  },
  {
    "url": "tag/index.html",
    "revision": "4cdd5fc738846bb66ed84b19a3544ad1"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "7b31fac28925645104fc66b50b9660bb"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
