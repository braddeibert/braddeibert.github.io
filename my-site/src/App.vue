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
    font-family: 'Raleway';
  }
</style>