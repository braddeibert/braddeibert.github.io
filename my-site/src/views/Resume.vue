<template>
  <div class="container-fluid">
    <br /><br />
    <div class="container resume">
      <h1 class="display-2">resume</h1>
      <p class="lead">(current as of 04/2021)</p>
      <br />
      <Skills :skills="skills"></Skills>
      <Item title="experience" :items="experience"></Item>
      <Item title="education" :items="education"></Item>
    </div>

    <Nav></Nav>
  </div>
</template>

<script>
import Skills from "@/components/Resume/Skills";
import Item from "@/components/Resume/Item";
import Nav from "@/components/Nav";

export default {
  components: {
    Skills,
    Item,
    Nav
  },

  data() {
    return {
      skills: [
        {
          name: "languages",
          list: ["Javascript", "Python", "Java", "SQL"],
          strong: [1, 1, 1, 0]
        },

        {
          name: "frameworks & libs",
          list: ["Vue", "Flask", "Django", "jQuery", "Bootstrap", "Bulma"],
          strong: [1, 1, 0, 0, 0]
        },

        {
          name: "other",
          list: ["HTML & CSS", "Git", "Command Line", "Docker", "Scrum "],
          strong: [1, 1, 1, 0, 0]
        }
      ],

      experience: [
        {
          place: "the university of montana",
          location: "missoula, mt",
          title: "undergraduate research assistant",
          dates: "feb 2019 - may 2021",
          description: 
           "As a member of Jesse Johnson’s fire lab, I helped orchestrate and develop a web application aimed at delivering high quality wildfire simulations from the cloud. The project uses vanilla frontend web technologies (HTML, CSS, and Javascript) and Flask on the backend (Python). It was built with a microservice architecture in mind (Docker)."
        },

        {
          place: "onx maps inc.",
          location: "missoula, mt",
          title: "software engineering intern",
          dates: "may 2020 - aug 2020",
          description:
            "At onX, I worked on two small Scrum teams (<10 members) where I shipped contributions to both public facing and in-house projects. These included web applications and an API. The primary technologies I worked with were Vue (Javascript), Flask (Python), and Laravel (PHP)."
        }
      ],

      education: [
        {
          place: "the university of montana",
          location: "missoula, mt",
          title: "bs, computer science",
          dates: "2019 - 2021",
          description: "Minor in Mathematics. Received the 2020-21 President's Oustanding Senior Recognition Award for the computer science department."
        },

        {
          place: "flathead valley community college",
          location: "kalispell, mt",
          title: "as, general studies",
          dates: "2016 - 2018",
          description: ""
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.resume {
  margin-bottom: 150px;
}
</style>
