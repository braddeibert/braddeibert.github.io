<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import feather from 'feather-icons/dist/feather'

export default {
  mounted() {
    feather.replace()
  },

  updated() {
    feather.replace()
  }
}
</script>

<style lang="scss">
  .body {
    color: $red;
    font-family: 'Raleway';
  }

  .lead {
    color: $blue;
  }
  
  li {
    color: $blue;
  }

  h1, h2, h3, h4, h5, h6,
  .display-1, 
  .display-2, 
  .display-3, 
  .display-4, 
  .display-5, 
  .display-6 {
    color: $red;
  }
</style>