<script lang="ts" src="./SearchBar"/>
<template>
  <div class="searchbar-container">
    <input v-if="isButtonReady" class="form-control" type="text" placeholder="Search" v-model="searchQuery"/>

    <SearchResults />
  </div>
</template>


<style lang="scss" scoped>
.searchbar-container {
  position: fixed;
  top: 30px;
  left: 30px;
  z-index: 99;
  border-radius: 5px;
  max-width: 300px;
}
input {
  border: none;
  width: 100%;
  border-radius: 0;
  background-color: #000;
  color: #fff;
  box-shadow: -2px 6px 10px rgba(0, 0, 0, 0.5);
  padding: 10px;
  font-size: 1em;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
}
</style>
