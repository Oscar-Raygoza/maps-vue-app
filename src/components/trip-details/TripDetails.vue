<script lang="ts" src="./TripDetails"/>

<template>
  <div v-if="isLoadingRoute">
    <Spinner class="spinner" size="50px" background="#09f" />
  </div>

  <div v-else-if="distance && duration && profile" class="trip-container">
    <div class="column">
      <a
        :class="`move-btn ${profile === Profile.DRIVING ? 'active' : ''}`"
        @click="handleClick(Profile.DRIVING)"
      >
        <font-awesome-icon :icon="['fa', 'car']" class="icon alt" />
      </a>
      <a
        :class="`move-btn ${profile === Profile.CYCLING ? 'active' : ''}`"
        @click="handleClick(Profile.CYCLING)"
      >
        <font-awesome-icon :icon="['fa', 'bicycle']" class="icon alt" />
      </a>
      <a
        :class="`move-btn ${profile === Profile.WALKING ? 'active' : ''}`"
        @click="handleClick(Profile.WALKING)"
      >
        <font-awesome-icon :icon="['fa', 'person-walking']" class="icon alt" />
      </a>
      <!--<a :class="`move-btn ${profile === Profile.TRAFFIC ? 'active' : ''}`" @click="handleClick(Profile.TRAFFIC)">
        <font-awesome-icon :icon="['fa', 'traffic-light']" class="icon alt" />
      </a>-->
    </div>
    <div class="column">
      Distance: <b>{{ distance }} Km</b>
    </div>
    <div class="column">
      Duration:
      <b>{{ duration > 60 ? `${duration / 60} hr` : `${duration} min` }}</b>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.trip-container {
  background-color: transparent;
  border-radius: 5px;
  padding: 15px;
  position: fixed;
  right: 30px;
  text-align: left;
  top: 30px;
  width: 200px;
  color: #fff;
  z-index: 99;
}
.column {
  display: flex;
  justify-content: space-between;
}

.move-btn {
  padding: 7px;
  background-color: rgba(255, 255, 255, 0.315);
  transition: background-color 1000ms linear;

  color: rgb(0, 0, 0);
  width: 20px;
  height: 20px;
  text-align: center;
  margin-bottom: 15px;
  border-radius: 50%;
  cursor: pointer;
  &.active {
    background-color: rgb(255, 255, 255);
    color: #000000;
  }
  &:hover {
    background-color: rgb(255, 255, 255);
    color: #000000;
  }
}
.spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
