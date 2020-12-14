<template>
  <div class="container-fluid">
    <br><br>
    <div class="container">
      <h1 class="display-2">Resume</h1>

      <h2 class="display-6">Skills</h2>
      <p>I can do a few thangs</p>

      <h2 class="display-6">Experience</h2>
      <p>I did some workin'</p>

      <h2 class="display-6">Education</h2>
      <p>I did some schoolin'</p>

      <p>*get my pdf resume</p>
    </div>

    <Nav></Nav>
  </div>
</template>

<script>
import Nav from '@/components/Nav'

export default {
  components: {
    Nav,
  }
};
</script>
