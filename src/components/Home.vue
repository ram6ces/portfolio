<template>
  <v-app
    id="home"
    :style="{ background: $vuetify.theme.themes.dark.background }"
  >
    <Navbar_ />
    <v-container fluid>
      <v-row>
        
        <v-col md="4" offset-md="2">          
          <v-img src="photoDVJ.jpg" contain min-width="300px"></v-img>
        </v-col>
        <v-col md="4">
          <v-container min-width="400px">
              <h1 class="top" style="color: #43BC48; font-size: 35px;">Marc-Adrien MERCIER</h1>
              <h2 class="white--text">Creative Technologist and Maker</h2>
              <p class="grey--text">
                I'm a Master of Science student in Creative Technology.<br />
                I'm currently member of the De Vinci Innovation Innovation Center and its Resilient Futures research group.<br />
                I interest myself in our production processes. My goal is to work on innovative solutions in order to help the industry to reduce its carbon footprint without reducing its production.<br />
                As a Maker, I developped knowledge in engineering fields such as mechanics, design, manufacturing processes, electronics and computer science.<br />
              </p>
              <v-btn tile color="#43BC48" dark @click="openPDF"> My resume</v-btn>
            </v-container>       
        </v-col>
        <v-col cols="12" class="padd">
          <v-container class="allcompetences">
            <div class="first" id="about">
              <v-row>
                <v-col cols="12">
                  <div class="child bgColor1" >
                    <v-container class="competences"> 
                      <v-icon color="#43BC48" x-large class="ml-3">mdi-cog</v-icon>
                      <h3 class="white--text ml-3 mt-4">Mechanics and Design</h3>
                      <p class="grey--text ml-3 mt-6">
                        3D modeling and assembly <br />
                        for mechanics and parts design. <br />
                        CAD software: Solidworks, Catia,<br /> 
                        Rhino7, Grasshopper, Fusion 360. <br />
                      </p>   
                    </v-container>               
                  </div>
                  <div class="child bgColor2">
                    <v-container class="competences"> 
                      <v-icon color="" x-large class="ml-3" dark>mdi-printer-3d-nozzle</v-icon>
                      <h3 class="white--text ml-3 mt-4">Manufacturing</h3>
                      <p class="black--text ml-3 mt-6">
                        Fast protyping and production:<br />
                        3D printing, CNC, laser cutting,<br />
                        molding, composite materials, <br />
                        MIG and TIG welding.
                      </p>      
                    </v-container>            
                  </div>
                  <div class="child bgColor1">
                    <v-container class="competences"> 
                      <v-icon color="#43BC48" x-large class="ml-3">mdi-recycle</v-icon>
                      <h3 class="white--text ml-3 mt-4">Biomaterials</h3>
                      <p class="grey--text ml-3 mt-6">
                        Research and test of<br />
                        biomaterials and bioplastics. <br />
                        Biodegradable materials and <br />
                        wereable technologies.
                      </p>   
                    </v-container>               
                  </div>
                </v-col>
                  <v-col cols="12">
                    
                    <div class="child bgColor1">
                      <v-container class="competences"> 
                        <v-icon color="#43BC48" x-large class="ml-3">mdi-chip</v-icon>
                        <h3 class="white--text ml-3 mt-4">Electronic</h3>
                        <p class="grey--text ml-3 mt-6">
                          PCB design for embedded <br />
                          systems with mechanics or textile. <br />
                          microcontrollers : Arduino, <br />
                          ESP32, Raspberry Pi...<br />
                        </p>
                        </v-container>
                    </div>
                    <div class="child bgColor2">
                      <v-container class="competences"> 
                        <v-icon color="" x-large class="ml-3" dark>mdi-application-brackets-outline</v-icon>
                        <h3 class="white--text ml-3 mt-4">Computer Science</h3>
                        <p class="black--text ml-3 mt-6">
                          Software development on <br />
                          embedded systems, graphic <br />
                          interfaces, web applications...<br />
                          C, C++, C#, Python, HTML, QML
                        </p>
                      </v-container>
                    </div>
                    <div class="child bgColor1">
                      <v-container class="competences"> 
                        <v-icon color="#43BC48" x-large class="ml-3">mdi-monitor-screenshot</v-icon>
                        <h3 class="white--text ml-3 mt-4">UX/UI Design</h3>
                        <p class="grey--text ml-3 mt-6">
                          Development of graphic <br />
                          interfaces for software, embedded <br />
                          system, web development <br />
                          and mobile applications.
                        </p>
                      </v-container>
                    </div>
                  </v-col>
              </v-row>
            </div>
          </v-container>
        </v-col>      
        <v-col cols="12" class="padd">
          <v-container>
          <div class="exp" id="experience">
            <v-row> 
              <v-col cols="12" class="mt-10">

                <div class="child1">
                  <h1 class=" mt-4 number" style="color: #43BC48;">10+</h1>
                  <h3 class="white--text mt-4">Completed Projects</h3>
                </div>
                <div class="child2 mRight">


                  <v-row>
                    <v-col cols="12" class="childcol">
                      <div class="child2 mButton padding bgColor1">
                        <h1 class="" style="color: #43BC48;">7</h1>
                        <p class="white--text">Projects managed</p>
                      </div>
                    </v-col>
                    <v-col cols="12" class="childcol">
                      <div class="child2 padding bgColor1">
                        <h1 class="" style="color: #43BC48;">5</h1>
                        <p class="white--text">Years of study</p>
                      </div>
                    </v-col>
                  </v-row>

                </div>
                <div class="child2">

                  <v-row>
                    <v-col cols="12" class="childcol">
                      <div class="child2 mButton padding bgColor1">
                        <h1 class="" style="color: #43BC48;">3</h1>
                        <p class="white--text">Commercialized products</p>
                      </div>
                    </v-col>
                    <v-col cols="12" class="childcol">
                      <div class="child2 padding bgColor1">
                        <h1 class="" style="color: #43BC48;">6</h1>
                        <p class="white--text">Programming language</p>
                      </div>
                    </v-col>
                  </v-row>

                </div>
              </v-col>
            </v-row>
          </div>
        </v-container>
        </v-col>
        <v-container id="project" style="text-align: center;">
          <v-row class="justify-center">
            <v-btn class="" height= "48px" width="48px" icon>
                <v-icon color="#43BC48" size="35">mdi-check-bold</v-icon>
            </v-btn>
            <h1 class="text" style="color: #43BC48;">PREVIOUS PROJECTS</h1>
          </v-row>
          <p class="grey--text"><br />See bellow my previous work experiences</p>
        </v-container>
        
        <v-col md="3" offset-md="3">
          <v-card
            class="pa-2 py-12"
            outlined
            tile
            color="#111111"
            >
            <v-img src="insole.png" contain max-height=""></v-img>
          </v-card>
      
          <v-btn color="white" dark text class="ml-n4"> Tailor made insole</v-btn><br />
          <h4 class="grey--text ml-n4 " style="padding-left: 10px;">
            Parametric design of a tailor made insole.
            This project aims to adapt a shoe to the user based on a foot scan and produce it by using 3D printing technologies.
          </h4>
          <a href="https://dvic.devinci.fr/project/tailormade-insole">
            <v-btn color="#43BC48" dark text class="ml-n4">
              know more
              <v-icon right>mdi-arrow-right</v-icon>
            </v-btn>
          </a>
          <v-card
            class="pa-2 py-12"
            outlined
            tile
            color="#111111">
            <v-img src="horuss1.png" contain ></v-img>
          </v-card>
          <v-btn color="white" dark text class="ml-n4"> Horus S1</v-btn><br />
          <h4 class="grey--text ml-n4" style="padding-left: 10px;">
            Development of a resin 3D printer and launch of the first production. This include motherboard design, CAD, graphic interface integration, parts order, test and assembly.
          </h4>
          <a href="https://horus3d.fr/en/accueil">
            <v-btn color="#43BC48" dark text class="ml-n4">
              know more
              <v-icon right>mdi-arrow-right</v-icon>
            </v-btn>
          </a>
          <v-card
            class="pa-2 py-12"
            outlined
            tile
            color="#111111">
            <v-img src="stressbud.avif" contain max-height=""></v-img>
          </v-card>
          <v-btn color="white" dark text class="ml-n4"> STRESSBUD</v-btn><br />
          <h4 class="grey--text ml-n4" style="padding-left: 10px;">
            Development of an object to help people to manage their stress and their focus at work. We produced and sold this object online on Kickstarter.
          </h4>
          <a href="https://www.kickstarter.com/projects/stressbud/quickstarter-stressbud-a-fidget-toy-to-focus">
            <v-btn color="#43BC48" dark text class="ml-n4">
              know more
              <v-icon right>mdi-arrow-right</v-icon>
            </v-btn>
          </a>
        </v-col>
        <v-col md="3">
          
          <v-card
            class="pa-2 py-12"
            outlined
            tile
            color="#111111">
            <v-img src="longboard.png" contain ></v-img>
          </v-card>
          <v-btn color="white" dark text class="ml-n4"> Biocomposites Longboard </v-btn><br />
          <h4 class="grey--text ml-n4" style="padding-left: 10px;">
            Manufacturing of longboards with biocomposites materials. This project aims to test natural fiber as alternatives to carbon and glass fiber for the production of composite materials.
          </h4>
          <a href="https://dvic.devinci.fr/project/biocomposite-longboard">

            <v-btn color="#43BC48" dark text class="ml-n4">
              know more
              <v-icon right>mdi-arrow-right</v-icon>
            </v-btn>
          </a>
          <v-card
            class="pa-2 py-12"
            outlined
            tile
            color="#111111"
            >
            <v-img src="aquaponic-platform.jpeg" contain max-height=""></v-img>
          </v-card>
      
          <v-btn color="white" dark text class="ml-n4"> Aquaponic Platform </v-btn><br />
          <h4 class="grey--text ml-n4" style="padding-left: 10px;">
            Implementation of an autonomous Aquaponic Platform to reduce the carbon footprint of food production. In this project we controlled and monitored the system with differents sensors and actuators.
          </h4>
          <a href="https://dvic.devinci.fr/projects/aquaponic-system">

            <v-btn color="#43BC48" dark text class="ml-n4">
              know more
              <v-icon right>mdi-arrow-right</v-icon>
            </v-btn>
          </a>
        </v-col>
        
        <v-container id="futur" style="text-align: center;">
          <v-row class="justify-center">
            <v-btn class="" height= "48px" width="48px" icon>
                <v-icon color="#43BC48" size="35">mdi-trending-up</v-icon>
            </v-btn>
            <h1 class="text" style="color: #43BC48;">WORK IN PROGRESS</h1>
            
          </v-row>
          <p class="grey--text"><br />See bellow my future and actual works</p>
        </v-container>
        
        
        <v-col md="3" offset-md="3">
          
          <v-card
            class="pa-2 py-12"
            outlined
            tile
            color="#111111"
          >
            <v-img src="CALM.png" contain max-height=""></v-img>
          </v-card>
          <v-btn color="white" dark text class="ml-n4"> C.A.L.M Jewelry </v-btn><br />
          <h4 class="grey--text ml-n4 " style="padding-left: 10px;">
            Parametric and Generative design of jewelry for C.A.L.M brand. 
            Design of tailor-made rings or bracelets who can include gem for the customer.
            Production with 3D printing technologies and hand finition.
            Realisation of a website for the brand including 3D configurator to enable online sales of tailor-made jewelry.
          </h4>  
          <a href="https://www.instagram.com/comme.a.lamaison/">
            <v-btn color="#43BC48" dark text class="ml-n4">
              know more
              <v-icon right>mdi-arrow-right</v-icon>
            </v-btn>
          </a>
        </v-col>
        <v-col md="3">
           
          <v-card
            class="pa-2 py-12"
            outlined
            tile
            color="#111111"
          >
            <v-img src="agricycle.jpeg" contain max-height=""></v-img>
          </v-card>
          <v-btn color="white" dark text class="ml-n4"> AgriCycle</v-btn><br />
          <h4 class="grey--text ml-n4 " style="padding-left: 10px;">
            The main goal of this project is to build a quadricycle from scratch.
            This vehicle aims to give an adapted solution to farmers for their daily tasks. 
            AgriCycle is between a tractor and an electric bike. It can be used for transport, work in the fields without using fossil energy.
            
          </h4>       
        </v-col>
        <v-container id="ai" style="text-align: center;">
          <v-row class="justify-center">
            <v-btn class="" height= "48px" width="48px" icon>
                <v-icon color="#43BC48" size="35">mdi-head-sync</v-icon>
            </v-btn>
            <h1 class="text" style="color: #43BC48;">Artificial Intelligence projects</h1>
            
          </v-row>
          <p class="grey--text"><br /> See bellow my work on Artificial Intelligence. <br /> Those works are deploy by Github pages</p>
        </v-container>
        
        
        <v-col md="3" offset-md="3">
          
          <v-card
            class="pa-2 py-12"
            outlined
            tile
            color="#111111"
          >
            <v-img src="CALM.png" contain max-height=""></v-img>
          </v-card>
          <v-btn color="white" dark text class="ml-n4"> C.A.L.M Jewelry </v-btn><br />
          <h4 class="grey--text ml-n4 " style="padding-left: 10px;">
            Parametric and Generative design of jewelry for C.A.L.M brand. 
            
          </h4>  
          <a href="https://www.instagram.com/comme.a.lamaison/">
            <v-btn color="#43BC48" dark text class="ml-n4">
              test it
              <v-icon right>mdi-arrow-right</v-icon>
            </v-btn>
          </a>
        </v-col>
        <v-col md="3">
           
          <v-card
            class="pa-2 py-12"
            outlined
            tile
            color="#111111"
          >
            <v-img src="agricycle.jpeg" contain max-height=""></v-img>
          </v-card>
          <v-btn color="white" dark text class="ml-n4"> AgriCycle</v-btn><br />
          <h4 class="grey--text ml-n4 " style="padding-left: 10px;">
            The main goal of this project is to build a quadricycle from scratch.
            This vehicle aims to give an adapted solution to farmers for their daily tasks. 
            AgriCycle is between a tractor and an electric bike. It can be used for transport, work in the fields without using fossil energy.
            
          </h4>       
        </v-col>
          <v-col cols="12" class="padd topInverse">

              <div class="second">
                <div class="secondchild1" id="contact">
                  
                    <div class="text-center" >
                        <h1 class="white--text" style="text-align: center;">
                          Let's work together on<br />your next project!
                        </h1>
                        <p class="grey--text" style="text-align: center;">
                          I'm always open to new opportunities, feel free to contact me
                          for any project or collaboration.
                        </p>
                        <a href="https://linktr.ee/marcadrienmercier">
                          <v-btn tile color="#43BC48" dark class="mt-6">
                          My linktree
                          </v-btn> <br /><br/>
                        </a>
                        <v-container>
                          <a href="https://github.com/ram6ces">
                            <v-icon class="ma-3" color="#43BC48" size="35">mdi-github</v-icon>

                          </a>
                          <a href="https://fr.linkedin.com/in/marc-adrien-mercier-9ba787195">
                            <v-icon class="ma-3" color="#43BC48" size="35">mdi-linkedin</v-icon>

                          </a>
                          <a href="https://api.whatsapp.com/send?phone=33698419347">
                            <v-icon class="ma-3" color="#43BC48" size="35">mdi-whatsapp</v-icon>

                          </a>
                          <a href="mailto:marcadrien-mercier@orange.fr">
                            <v-icon class="ma-3" color="#43BC48" size="35">mdi-at</v-icon>

                          </a>

                          
                        </v-container>
                        



                    </div>
                  
                </div>
              </div>
         
        </v-col>
      </v-row>
    </v-container>
    <Footer_ />
  </v-app>
</template>

<script>
import Navbar_ from '@/components/Navbar'
import Footer_ from '@/components/Footer'

export default {
  name: 'Home_',

  components: {
      Navbar_,
      Footer_,     
  },
  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },
    openPDF() {
      // Replace 'pdf_url' with the actual URL of your PDF file
      const pdfUrl = '/resume_MERCIER.pdf';

      // Open the PDF in a new tab or window
      //Open a PDF in a new tab/window
      
      window.open(pdfUrl, '_blank');
    },
  },
}


</script>

<style scoped>
.top {
  margin-top: 50px;
}
.topInverse {
  margin-top: -250px;
}
.topTolbar {
  margin-top: 100px;
  text-align: center;
}
.allcompetences {
  width: 100%;
  
}



.first {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    #181818,
    #181818 50%,
    #111111 50%,
    #111111 50%
  );
  text-align: center;
  padding: 2rem 2rem;
}
.exp {
  width: 100%;
  min-height: 305px;
  
  text-align: center;
  padding: 2rem 2rem;
}

.competences {
  width: 280px;
  height: 220px;
  text-align: center;
}
.second {
  width: 100%;
  text-align: center;
  padding: 2rem 2rem;
}
.secondchild1 {
  display: inline-block;
  background-color: #1e1e1e;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: left;
  margin-top: 250px;
}
.child {
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: center;
  margin-right: 8px;
}
.bgColor1 {
  background-color: #1e1e1e;
}
.bgColor2 {
  background-color: #43BC48;
}

.child1 {
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  margin-right: 5px;
  width: 240px;
}
.child2 {
  display: inline-block;
  width: 245px;
  vertical-align: middle;
}
.mRight {
  margin-right: 8px;
}
.mButton {
  margin-bottom: 8px;
}
.padding {
  padding: 8px 0;
}

.col-12.padd {
  padding: 12px 0 !important;
}
.col-12.childcol {
  padding: 0 !important;
}

h1.number {
  font-size: 50px;
  font-weight: bold;
  color:#43BC48;
}

</style>