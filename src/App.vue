<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>-->
  <router-view />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
* {
  margin: 0;
  padding: 0;
  font-family: 'Poppins','system-ui', 'Verdana', 'Tahoma', 'Trebuchet MS';
  
}
.mapboxgl-ctrl-attrib-inner, .mapboxgl-ctrl-icon, .mapboxgl-ctrl {
  display: none !important;
}
body {
  background-color: #f2f2f2;
}
#app {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: #fff;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
