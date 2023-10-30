<template>
  <v-footer dark padless>
    <v-card
      flat
      tile
      class="black white--text py-5 px-5 text-center"
      width="100%"
    >
      <v-row>
        <v-col cols="12" sm="4">
            <v-btn icon>
              <v-img src="RF.webp" contain max-height="50"></v-img>
            </v-btn>
        </v-col>
        <v-col cols="12" sm="4"   >
            <v-btn text @click="scroll('home')">Home</v-btn>    
            <v-btn text @click="scroll('about')">about me</v-btn>
            <v-btn text @click="scroll('project')">My Projects</v-btn>
        </v-col>
        <v-col cols="12" sm="4">
            <v-btn class="mx-1 white--text" icon>
              <v-icon color="#43BC48">mdi-sprout-outline</v-icon>
            </v-btn>
            Created by Marc-Adrien MERCIER
        </v-col>
      </v-row>
    </v-card>
  </v-footer>
</template>
<script>


export default {
  name: 'Footer_',
  data: ()=>({
      icons:[
          "mdi-gmail", "mdi-linkedin"
      ]
  }),
  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
      },
  },
}
</script>