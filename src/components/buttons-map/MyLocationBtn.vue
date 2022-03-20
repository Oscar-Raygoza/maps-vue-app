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
  background-color: #fff;
  border-radius: 5px;
  color: #0d3150;
  font-size: 1em;
  &:hover {
    background-color: #f2f2f1;
    color: rgb(232, 218, 22);
  }
}
</style>
