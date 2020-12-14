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
      </ul>
    </div>
</template>

<script>
export default {
    mounted() {
      console.log(this.$routes)
    }
}
</script>

<style lang="scss" scoped>
  .nav-container {
    background-color: $white;
    width: auto;
    height: auto;
    border-top: 1px solid gray;
  }
    .nav-item {
        border-bottom: 1px solid gray;
        padding: 25px 5px 0px 5px;
        margin: 5px;
        margin-bottom: 50px;

        h4 {
          color: black;
          padding: 0px;
        }

        &:hover {
          color: black;
          border-bottom: 2px solid black;
        }

        &.active {
          border-bottom: 2px solid red;
        }
  }
</style>