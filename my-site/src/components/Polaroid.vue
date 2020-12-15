<template>
  <div class="container-fluid d-flex">
    <div class="container pic align-self-center">
      <img class="img-fluid rounded" :src="image" :alt="text" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    text: String
  }
};
</script>

<style lang="scss" scoped>
.pic {
  background-color: white;
  margin-top: 2rem;
  padding: 2rem 2rem 6rem 2rem;
  width: 30rem;
  box-shadow: 5px 10px 25px;
  border-radius: 0.25rem;
}
</style>
