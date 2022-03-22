<script lang="ts" src="./SearchResults"/>
<template>
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
   
    </ul>
</template>


<style lang="scss" scoped>
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
