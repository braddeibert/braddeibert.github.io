<template>
    <div class="container fixed-bottom nav-container">
      <ul class="nav">
        <li class="nav-item">
        <router-link class="nav-link" to="/">
          <h4><i data-feather="home"></i> Home</h4>
        </router-link>
        </li>
        <li class="nav-item">
        <router-link class="nav-link" to="/about">
          <h4><i data-feather="align-left"></i> About</h4>
        </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/resume">
              <h4><i data-feather="briefcase"></i> Resume</h4>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/projects">
            <h4><i data-feather="activity"></i> Projects</h4>
          </router-link>
        </li>
        <i data-feather="chevron-right" v-if="isOverflown"></i>
      </ul>
    </div>
</template>

<script>
export default {
    mounted() {
      console.log(this.$routes)
    },

    computed: {
      isOverflown: function(){
        return this.scrollWidth < this.elementWidth
      }
    }
}
</script>

<style lang="scss" scoped>
  .nav {
    flex-wrap: nowrap;
    overflow: scroll;
  }
  .nav-container {
    background-color: $body-bg;
    width: auto;
    height: 110px;
    border-top: 1px solid gray;
  }
    .nav-item {
        border-bottom: 1px solid gray;
        padding: 25px 5px 0px 5px;
        margin: 5px;
        margin-bottom: 50px;
        width: 25vw;
        min-width: 160px;

        h4 {
          padding: 0px;
        }

        &:hover {
          border-bottom: 2px solid $red;
        }

        &.active {
          border-bottom: 2px solid $red;
        }
  }
</style>