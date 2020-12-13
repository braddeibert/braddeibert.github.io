<template>
  <div class="home container-fluid landing">
    <div class="jumbotron jumbotron-fluid landing">
      <div class="container" id="home-capt">
        <h1 class="display-1">Brad Deibert</h1>
        <p class="lead">
          <svg
            class="bi bi-code"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.854 4.146a.5.5 0 010 .708L2.707 8l3.147 3.146a.5.5 0 01-.708.708l-3.5-3.5a.5.5 0 010-.708l3.5-3.5a.5.5 0 01.708 0zm4.292 0a.5.5 0 000 .708L13.293 8l-3.147 3.146a.5.5 0 00.708.708l3.5-3.5a.5.5 0 000-.708l-3.5-3.5a.5.5 0 00-.708 0z"
              clip-rule="evenodd"
            />
          </svg>
          {{ tagline }} <br />

          <svg
            class="bi bi-geo-alt"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 16s6-5.686 6-10A6 6 0 002 6c0 4.314 6 10 6 10zm0-7a3 3 0 100-6 3 3 0 000 6z"
              clip-rule="evenodd"
            />
          </svg>
          {{ location }}
        </p>
        <Contacts :contacts="contacts"></Contacts>
      </div>
    </div>
  </div>
</template>

<script>
import Contacts from '@/components/Contacts.vue'
// @ is an alias to /src
export default {
  components: {
    Contacts,
  },

  data() {
    return {
      tagline: "Developer",
      location: "Missoula, MT",
      contacts: [
        {icon: "github", link: "https://github.com/braddeibert"},
        {icon: "linkedin", link: "https://www.linkedin.com/in/bradleydeibert/"},
        {icon: "instagram", link: "https://www.instagram.com/bradleydeibert/"},
        {icon: "envelope", link: "mailto:bradeibert7@gmail.com"}
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home {
  background-image: url(../assets/imgs/jenny-caywood-v1n3BjuF6rU-unsplash.jpg);
  background-size: cover;
}
</style>
