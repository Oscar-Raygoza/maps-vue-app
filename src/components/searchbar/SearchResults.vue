<script lang="ts" src="./SearchResults"/>
<template>
  <div class="spinner-container" v-if="isLoadingPlaces">
    <Spinner class="spinner" size="40px" color="red" />
  </div>

  <ul v-else-if="places.length > 0" class="list-group mt-3">
    <li
      v-for="place in places"
      :key="place.id"
      :class="`list-group-item list-group-item-action ${
        place.id === activePlace ? 'active' : ''
      }`"
      @click="onClickPlace(place)"
    >
      <p class="title-place">
        {{ place.text }}
      </p>
      <p class="description-place">
        {{ place.place_name }}
      </p>
      <div class="container-btn">
        <p>
          <a @click="onClickDirection(place)">
            <font-awesome-icon :icon="['fa', 'arrow-right']" class="icon alt"
          /></a>
        </p>
      </div>
    </li>
  </ul>
</template>


<style lang="scss" scoped>
.list-group {
  max-height: 300px;
  width: 100%;
  margin-top: 10px;
  text-align: left;
}
.list-group-item {
  border-radius: 0;
  list-style-type: none;
  background-color: #000;
  color: #fff;
  padding: 10px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);

  font-size: 1em;
  width: 100%;
  margin-top: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  &:hover {
    cursor: pointer;
    background-color: #fff;
    color: #000;
    div > p > a {
      background-color: #000;
      color: #fff;
      &:hover {
        cursor: pointer;
        background-color: rgb(50, 49, 54);
        color: #0099ff;
      }
    }
  }
}
.active {
  background-color: #fff;
  color: #000;
}

.title-place {
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 15px;
}
.description-place {
  font-size: 14px;
  margin-bottom: 15px;
}
div > p {
  display: block;
  text-align: right;
}

div > p > a {
  color: white;
  background-color: white;
  color: #000;
  font-size: 11px;
  border-radius: 5px;
  padding: 7px;
  margin-bottom: 15px;
}

.container-btn {
  margin-bottom: 15px;
}

</style>
