export async function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    throw Error("Service worker not supported");
  }

  await navigator.serviceWorker.register("/serviceWorker.js");
}

export async function getReadyServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    throw Error("Service worker not supported");
  }

  return navigator.serviceWorker.ready;
}
