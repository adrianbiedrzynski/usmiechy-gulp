"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below

const button = document.querySelector('.site__header--navbar');

button.addEventListener('click', () => {
  const navigation = document.querySelector('.site__header--navigation');
  navigation.classList.toggle('site__header--navigation--active');
  const bar = document.querySelector('.site__header--navbar');
  bar.classList.toggle('site__header--navbar--active')
})


