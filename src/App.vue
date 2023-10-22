<template>
  <v-app>
    
    <v-main>
      <title>MERCIER Marc-Adrien</title>
      <Home_/>
      <router-view></router-view>

    </v-main>
  </v-app>
</template>

<script>
import Home_ from '@/components/Home.vue';

document.title='MERCIER Marc-Adrien'


export default {
  name: 'App',

  components: {
    Home_,
  },

  data: () => ({
    //
  }),

  
};
</script>