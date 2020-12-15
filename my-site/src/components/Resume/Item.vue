<template>
  <div>
    <h2 class="display-6">{{ title }}</h2>
    <div class="container" v-for="item in items" :key="item.id">
      <h4>
        {{ item.place }} - <small class="lead">{{ item.location }}</small>
      </h4>
      <h5>{{ item.title }}</h5>
      <h6>{{ item.dates }}</h6>
      <p>{{ item.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    items: Array
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin-bottom: 3rem;
}
</style>
