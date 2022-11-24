const container = document.querySelector(".container");

if ("serviceWorker" in navigator) { //check if the Service Worker supported in the current Browser
    window.addEventListener("load", function() { // listen to the page load event to register our service worker
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(res => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err));
    });
}
