<template>
  <div class="container-fluid">
    <br /><br />
    <div class="container resume">
      <h1 class="display-2">Resume</h1>
      <p class="lead">(current as of 12/2020)</p>
      <br />
      <Skills :skills="skills"></Skills>
      <Item title="Experience" :items="experience"></Item>
      <Item title="Education" :items="education"></Item>
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
          name: "Languages",
          list: ["Javascript", "HTML & CSS", "Python", "Java", "PHP", "SQL"],
          strong: [1, 1, 1, 1, 0, 0]
        },

        {
          name: "Frameworks",
          list: ["Vue", "Django", "Flask", "Bootstrap", "Sass", "Laravel"],
          strong: [1, 1, 0, 1, 0, 0]
        },

        {
          name: "Other",
          list: ["Git", "Bash/Zsh Command Line", "Docker", "Scrum"],
          strong: [1, 1, 0, 0]
        }
      ],

      experience: [
        {
          place: "The University of Montana",
          location: "Missoula, MT",
          title: "Undergraduate Research Assistant",
          dates: "Feb 2019 - Present",
          description:
            "As a member of professor Jesse Johnson’s fire lab, I have worked primarily with Paraview, an open-source visualization and data analysis application, to create visualizations of simulated wildfires. Recently, I have shifted focus towards developing a web application to interface with emerging technologies in the wildfire community."
        },

        {
          place: "onX Maps Inc.",
          location: "Missoula, MT",
          title: "Software Engineering Intern",
          dates: "May 2020 - Aug 2020",
          description:
            "At onX, I worked on two small Scrum teams (<10 members) where I shipped contributions to both public facing and in-house projects. These included web applications and an API. The primary technologies I worked with were Vue (Javascript), PHP (Laravel), and Python (Flask)."
        }
      ],

      education: [
        {
          place: "The University of Montana",
          location: "Missoula, MT",
          title: "BS in Computer Science",
          dates: "2019 - 2021",
          description: "Minor in Mathematics. *Graduating in Spring 2021"
        },

        {
          place: "Flathead Valley Community College",
          location: "Kalispell, MT",
          title: "AS in General Studies",
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
