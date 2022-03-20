import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1Ijoib3NjYXJyYXlnb3phIiwiYSI6ImNsMHlkZGphbTF6dHUzY3Brdjh4bW80c3EifQ.129PXQKAXa2Ls5UFHH5Rog";

if (!navigator.geolocation) {
  throw new Error("Geolocation is not supported by your browser.");
}
createApp(App).use(store).use(router).mount("#app");
