<template>
  <div class="container-fluid">
    <br /><br />
    <div class="container">
      <h1 class="display-2">projects</h1>
      <p class="lead">(these projects and more can be found on my GitHub)</p>
      <br />

      <h2 class="display-6">budgeter</h2>
      <h4>
        <small class="text-muted"
          ><a href="https://budgeter-cs291.herokuapp.com/"
            >budgeter-cs291.herokuapp.com</a
          ></small
        >
      </h4>
      <p>
        Built for Web Application Development at The University of Montana. It
        is a web app made with Django, Bootstrap, Sass, and the Bootstrap modal
        forms Django package. <br /><br />
        Visitors can sign up to create custom budgets and track their expenses.
      </p>
      <br />

      <h2 class="display-6">california beach</h2>
      <h4>
        <small class="text-muted"
          ><a href="http://californiabeach.herokuapp.com/index.html"
            >californiabeach.herokuapp.com</a
          ></small
        >
      </h4>
      <p>
        Built as a piece I used in my proposal to my wife at the Marin
        Headlands! It is a simple page built with HTML, CSS, and vanilla
        Javascript. <br /><br />
        Visitors are put through a 20-question screening quiz, which only Alicia
        could pass completely. The visitor is rejected on the first missed
        question.
      </p>
      <br />

      <h2 class="display-6">one word reviews</h2>
      <h4>
        <small class="text-muted"
          ><a href="http://webdev.cs.umt.edu/~bd152220/one_word_reviews/php/"
            >webdev.cs.umt.edu/~bd152220/one_word_reviews/php</a
          ></small
        >
      </h4>
      <p>
        Built for Database Design at The University of Montana. The site is a
        collection of PHP pages that interface with a MySQL database.
        <br /><br />
        Visitors can create users, to create and browse one word reviews for
        movies, tv shows, and albums.
      </p>
      <br />
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
  word-break: break-word;
}
</style>
