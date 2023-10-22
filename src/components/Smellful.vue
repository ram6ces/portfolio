<template>
     <v-app id="home" :style="{ background: $vuetify.theme.themes.dark.background}">
        <br />
        <br />
        <br />
        <v-row>
            <v-col cols="4">
                    <v-img src="@/assets/smellful.png" contain max-height="500"></v-img>
                </v-col>
                <v-col cols="5">
                    <h1 class="pt">SMELLFUL</h1>
                    <p class="grey--text">The power of scent over cognition, well-being, and behavior has been well-documented in neuroscience research. Despite its potential, the sense of smell has mainly remained underexplored in the field of HCI. We present Smellful, a wearable and programmable Olfactory Interface based on dry diffusion technology, the first of its kind. This project explores applications of Programmable Olfaction in HCI for well-being Humans empowerment. We conducted studies to evaluate Smellful influence on Well-being at work. Although we could not prove the improvement of the participant's emotional state with certainty, We showed that the prototype is robust enough to be used daily in various environments and identified opportunities for future prototype development.
                    </p>
                    
                </v-col>
        </v-row>

        

     </v-app>
</template>

<script>


export default {
    name: 'Smellful_',
}
</script>

<style >

.pt{
    color: #FFFFFF;
    
}



</style>