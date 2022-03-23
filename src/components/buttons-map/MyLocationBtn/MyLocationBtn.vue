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
  background-color: #000;
  border-radius: 5px;
  color: #fff;
  font-size: 1em;
  &:hover {
    background-color: rgb(22, 22, 22);
    color: #0099ff;
  }
}
</style>
