importScripts("/rasmus2.0/precache-manifest.08b2f5f36d2c2018a64f9b495b5967c7.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/* eslint-env serviceworker */
/* global workbox */

workbox.core.setCacheNameDetails({ prefix: 'Resmus' });

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
workbox.clientsClaim();
workbox.skipWaiting();

