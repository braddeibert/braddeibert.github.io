<template>
  <div class="container-fluid">
    <br /><br />
    <div class="container">
      <h1 class="display-2">projects</h1>
      <p class="lead">(more hosted on my <a href="https://github.com/braddeibert">Github</a>)</p>
      <br />

      <h2 class="display-6">fuelcast.net</h2>
      <h4>
        <small class="text-muted"
          ><a href="https://www.fuelcast.net"
            >www.fuelcast.net</a
          ></small
        >
      </h4>
      <p>
        For the UM CS capstone project, I led a small team (3 peers) to design, develop, and test reporting functionalities for the existing Fuelcast.net platform.
        In the process, our team revamped the overall look and feel of the site using the Bulma CSS framework. 
        We worked primarily in Python and vanilla web technologies (HTML, CSS, Javascript). <br><br> 
        My team's contributions were ultimately merged into the live app after the conclusion of our capstone. Our work can be viewed at the link above. 
      </p>
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
