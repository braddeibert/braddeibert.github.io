<template>
    <div class="home container-fluid">
      <br><br>
      <div class="container">
        <h1 class="display-1">Brad Deibert</h1>
        <p class="lead">
          <i class="icons" data-feather="terminal"></i>
          {{ tagline }} <br />

          <i class="icons" data-feather="map-pin"></i>
          {{ location }}
        </p>
        <Contacts :contacts="contacts"></Contacts>
      </div>
      <div class="container-fluid d-flex">
        <div class="container home-pic align-self-center">
          <img class="img-fluid rounded" src="../assets/imgs/santa_monica.jpg" alt="">
        </div>
      </div>
      <Nav></Nav>
    </div>
</template>

<script>
import Contacts from '@/components/Contacts'
import Nav from '@/components/Nav'
// @ is alias to /src

export default {
  components: {
    Contacts, Nav
  },

  data() {
    return {
      tagline: "Developer",
      location: "Missoula, MT",
      contacts: [
        {icon: "github", link: "https://github.com/braddeibert"},
        {icon: "linkedin", link: "https://www.linkedin.com/in/bradleydeibert/"},
        {icon: "instagram", link: "https://www.instagram.com/bradleydeibert/"},
        {icon: "mail", link: "mailto:bradeibert7@gmail.com"}
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
  .home {
    height: 100vh;

    .home-pic {
      background-color: white;
      margin-top: 2rem;
      padding: 2rem 2rem 6rem 2rem;
      width: 30rem;
      box-shadow: 5px 10px 25px;
      border-radius: 0.25rem;
    }
  } 

  .icons {
    color: black;
  }
</style>