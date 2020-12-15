<template>
    <div class="home container">
      <br><br>
      <div class="container row">
        <div class="col info">
          <h1 class="display-1">Brad Deibert</h1>
          <p class="lead">
            <i class="icons" data-feather="terminal"></i>
            {{ tagline }} <br />

            <i class="icons" data-feather="map-pin"></i>
            {{ location }}
          </p>
          <Contacts :contacts="contacts"></Contacts>
        </div>
        <div class="col avatar">
          <div class="container-fluid d-flex justify-content-end">
            <div class="container home-pic">
              <img class="img-fluid pic" src="../assets/imgs/santa_monica.jpg" alt="">
            </div>
          </div>
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
    background-image: url('../assets/imgs/backdrop.jpg');
    background-size: cover;
    background-position: center;

    .home-pic {
      background-color: $body-bg;
      padding: 1rem;
      margin: 0px;
      width: 25rem;
      border-radius: 100%;

      .pic {
        border-radius: 100%;;
      }
    }
  } 

  .info {
    text-shadow: 2px 2px 8px black;
  }

  .avatar {
    display: none;

    @media (min-width: 992px) { 
      display: flex;
    }
  }

  .icons {
    color: $blue;
  }
</style>