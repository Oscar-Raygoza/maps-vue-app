<template>
  <div class="HomeView">
    <MapVioew />
    <MyLocationBtn />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

/**
 * Components
 */
import MapVioew from "@/components/mapview/MapView.vue"; // @ is an alias to /src
import MyLocationBtn from "@/components/buttons-map/MyLocationBtn.vue"; // @ is an alias to /src

import { usePlacesStore } from "@/composables";

export default defineComponent({
  name: "HomeView",
  components: {
    MapVioew,
    MyLocationBtn
  },
  setup() {
    usePlacesStore();
  },
});
</script>
