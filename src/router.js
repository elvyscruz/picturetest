import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Slideshow from '@/components/Slideshow.vue'
import PersonalQuestionnaire from '@/components/PersonalQuestionnaire.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/pq',
      name: 'pq',
      component: PersonalQuestionnaire
    },
    {
      path: '/slideshow',
      name: 'slideshow',
      component: Slideshow
    }
  ]
})
