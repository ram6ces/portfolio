import Vue from 'vue'
import Router from 'vue-router'
import Smellful from '@/components/Smellful'


Vue.use(Router)

export default new Router({
    routes: [
        
        /*{
            path: '/',
            name: 'Home',
            component: Home,
        },*/
        {
            path: '/Smellful',
            name: 'Smellful',
            component: Smellful,
        }
    ]
})