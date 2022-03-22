<script lang="ts" src="./MapView"/>

<template>
  <div v-if="!isUserLocationReady" class="isLoading">
    <Spinner class="spinner" size="150px" color="#000000" />
  </div>

  <div v-show="isUserLocationReady" class="map-container" ref="mapRef">
  </div>
</template>


<style lang="scss">
.spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.map-container {
  position: fixed;
  height: 100vh;
  width: 100vw;
}
</style>