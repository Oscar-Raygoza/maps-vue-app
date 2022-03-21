<script lang="ts" src="./MyLocationBtn"/>

<template>
  <a href="#" @click="onClick" v-if="isButtonReady">
    <font-awesome-icon :icon="['fa', 'location-crosshairs']" class="icon alt" />
  </a>
</template>


<style lang="scss" scoped>
// align input to the right
a {
  position: absolute;
  right: 15px;
  bottom: 15px;
  padding: 10px;
  text-decoration: none;
  background-color: #f2f2f2;
  border-radius: 5px;
  color: #0099ff;
  font-size: 1em;
  &:hover {
    background-color: #ffffff;
    color: rgb(0, 89, 255);
  }
}
</style>
