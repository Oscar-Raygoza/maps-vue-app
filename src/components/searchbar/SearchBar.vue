<script lang="ts" src="./SearchBar"/>
<template>
  <div class="searchbar-container">
    <input class="form-control" type="text" placeholder="Search" />

    <ul class="list-group mt-3">
      <li class="list-group-item list-group-item-action">
        Calle 45, 197. Benito Juarez Norte
      </li>
      <li class="list-group-item list-group-item-action">
        Calle 45, 197. Benito Juarez Norte
      </li>
      <li class="list-group-item list-group-item-action active">
        Calle 45, 197. Benito Juarez Norte
      </li>
      <li class="list-group-item list-group-item-action">
        Calle 45, 197. Benito Juarez Norte
      </li>
    </ul>
  </div>
</template>


<style lang="scss" scoped>
.searchbar-container {
  position: fixed;
  top: 30px;
  left: 30px;
  z-index: 99;
  border-radius: 5px;
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
.list-group {
  max-height: 300px;
  width: 100%;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  margin-top: 10px;
}
.list-group-item {
  border-radius: 0;
  list-style-type: none;
  background-color: #000;
  color: #fff;
  padding: 10px;
  font-size: 1em;
  width: 100%;
  &:hover {
    cursor: pointer;
    background-color: #fff;
    color: #000;
  }
}
</style>
