self.addEventListener("install", () => {
    self.skipWaiting();
});

self.addEventListener("activate", ()=> {
    console.log("[SW] new service worker in the house");
    self.clients.claim();
});


self.addEventListener("push", (ev) => {
    const message = ev.data.json();
    console.log("[SW] push event recieved:", ev);

    ev.waitUntil(
        self.registration.showNotification(message.title, message)
    );
});


/** @type {ServiceWorkerRegistration} */
const registration = self.registration;

console.log("[SW] eeeeee");

/*
async function sendNotification() {
    try {
        registration.showNotification("PING!!", {body:"you were gnomed", icon: "./img/gnomed.png"});
        sendClientMessage({msg: "Notified"});
    } catch(err) {
        //
        console.log(err);
        sendClientMessage({msg: "Notifyfailed", err});
    }
}*/

async function sendClientMessage(data) {
    var clients = await self.clients.matchAll();
        clients.forEach((client) => client.postMessage(data));
}
