<template>
  <div class="HomeView">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg="'10'"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { usePlacesStore } from '../composables/usePlacesStore';

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
  },
  setup() {
    usePlacesStore();
  }
});
</script>
