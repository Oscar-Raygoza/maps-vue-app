<template>
  <div class="HomeView">
    <MapVioew />
    <SearchBar />
    <TripDetails />
    <MyLocationBtn />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

/**
 * Components
 */
import MapVioew from "@/components/mapview/MapView.vue"; // @ is an alias to /src
import SearchBar from "@/components/searchbar/SearchBar.vue"; // @ is an alias to /src
import MyLocationBtn from "@/components/buttons-map/MyLocationBtn/MyLocationBtn.vue"; // @ is an alias to /src
import TripDetails from "@/components/trip-details/TripDetails.vue"; // @ is an alias to /src

import { usePlacesStore } from "@/composables";

export default defineComponent({
  name: "HomeView",
  components: {
    MapVioew,
    SearchBar,
    MyLocationBtn,
    TripDetails,
  },
  setup() {
    usePlacesStore();
  },
});
</script>
