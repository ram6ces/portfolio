<template>
  <v-app-bar app color="#111111" dark flat class="px-8">
    <v-btn icon>
      <v-img src="RF.webp" contain max-height="50px"></v-img>
    </v-btn>

    <!-- Display these buttons on larger screens -->
    <v-spacer></v-spacer>
    <v-btn class="navbutton" text @click="scroll('home')">Home</v-btn>    
    <v-btn v-if="!isMobile" class="navbutton" text @click="scroll('about')">About Me</v-btn>

    <!-- Conditionally display these buttons on larger screens -->
        
    <v-btn v-if="!isMobile" class="navbutton" text @click="scroll('project')">My Projects</v-btn>
    <!-- <v-btn v-if="!isMobile" icon @click="toggleMenu">
      <v-icon>mdi-arrow-right-bold-circle</v-icon>
    </v-btn> -->
    <!-- <div v-if="!isMobile && showMenu" class="project-menu"> -->
      <!-- Display these buttons in the mobile menu -->
      <!-- <v-btn class="navbutton" text @click="scrollAndClose('project')">All Projects</v-btn>
      <v-btn class="navbutton" text @click="scrollAndClose('futur')">Work in progress</v-btn>
      <v-btn class="navbutton" text @click="scrollAndClose('ai')">AI projects</v-btn>

    </div> --> 
    <v-btn v-if="!isMobile" class="navbutton" text @click="scroll('contact')">Contact</v-btn>

    <!-- Display a responsive menu button on smaller screens -->
    <v-btn icon v-if="isMobile" @click="toggleMenu">
      <v-icon>mdi-menu</v-icon>
    </v-btn>

    <!-- Display a menu on smaller screens when the menu button is clicked -->
    <div v-if="isMobile && showMenu" class="mobile-menu">
      <!-- Display these buttons in the mobile menu -->
      <v-btn class="navbutton" text @click="scrollAndClose('about')">About Me</v-btn>
      <v-btn class="navbutton" text @click="scrollAndClose('project')">All Projects</v-btn>
      <v-btn class="navbutton" text @click="scrollAndClose('futur')">Work in progress</v-btn>
      <v-btn class="navbutton" text @click="scrollAndClose('artificial')">AI projects</v-btn>

      <v-btn class="navbutton" text @click="scrollAndClose('contact')">Contact</v-btn>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Navbar_',

  data() {
    return {
      isMobile: false,
      showMenu: false,
    };
  },
  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth",  top: -1000 });
    },
    
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    scrollAndClose(refName) {
      this.scroll(refName);
      this.showMenu = false; // Close the mobile menu
    },
  },
  mounted() {
    // Check if the screen width is below a certain threshold to determine if it's a mobile device
    if (window.innerWidth <= 768) {
      this.isMobile = true;
    }

    // Add a listener to handle window resize events
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 768) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  },
};
</script>

<style scoped>
.mobile-menu {
  display: none;
  flex-direction: column;
  position: absolute;
  top: 60px;
  right: 8px;
  background-color: #111111;
  padding: 8px;
  z-index: 1;
}


.mobile-menu .navbutton {
  color: white;
  text-align: left;
  margin: 8px 0;
}
.project-menu .navbutton {
  color: white;
  text-align: left;
  margin: 8px 0;
}
@media screen and (max-width: 768px) {
  .mobile-menu {
    display: flex;
  }
  .project-menu {
    display: flex;
  }
}
</style>

