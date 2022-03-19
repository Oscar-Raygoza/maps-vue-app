<template>
  <div class="HomeView">
    <MapVioew />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

/**
 * Components
 */
import MapVioew from "@/components/mapview/MapView.vue"; // @ is an alias to /src

import { usePlacesStore } from "../composables/usePlacesStore";

export default defineComponent({
  name: "HomeView",
  components: {
    MapVioew,
  },
  setup() {
    usePlacesStore();
  },
});
</script>
