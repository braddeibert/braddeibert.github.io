<template>
  <div class="container-fluid">
    <br /><br />
    <div class="container">
      <h1 class="display-2">about</h1>
      <p class="lead">
        Hey there visitor, thanks for checking out my website! Find out more about me below.
      </p>
      <br />

      <h2 class="display-6">from</h2>
      <p>
        I am originally from Montana's beautiful Flathead county. I have spent most of my
        life in Montana, and even received my full education here. First, my high school diploma
        from Columbia Falls High School. Then, my Associate's from Flathead
        Valley Community College, and finally, my Bachelor's from The University
        of Montana. Between receiving college degrees, I spent a
        year outside of my home state in Northern California and Eastern Texas. 
      </p>
      <br />

      <h2 class="display-6">interests</h2>
      <ul>
        <li>
          Training and nutrition. After working at
          <a href="https://www.accessfitnesskalispell.com/">an awesome gym</a>
          for a couple years, these both became a big part of who I am.
        </li>
        <li>
          Sports. Especially, Green Bay Packer football and LA Laker basketball. Brett Favre and Kobe Bryant were a couple of my childhood heroes.
        </li>
        <li>
          Podcasts and books. I love digging in to a good book or listening through a long podcast.
        </li>
        <li>
          Food and cooking. I am always striving for a stronger grill game. 
        </li>
      </ul>
      <br />

      <h2 class="display-6">weird fact</h2>
      <p>
        I declared my computer science major on a whim as an undecided college
        Sophomore. I hadn't wrote a single line of code prior to my decision.
        Why, you ask? It sounded more fun than engineering!
      </p>
    </div>
    <Nav></Nav>
  </div>
</template>

<script>
import Nav from "@/components/Nav";

export default {
  components: {
    Nav
  }
};
</script>

<style lang="scss" scoped>
.container-fluid {
  margin-bottom: 150px;
}
</style>
