import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Slideshow from '@/components/Slideshow.vue'
import PersonalQuestionnaire from '@/components/PersonalQuestionnaire.vue'
import Intro from '@/components/Intro.vue'
import RecallTest from '@/components/RecallTest.vue'
import ThankYou from '@/components/ThankYou.vue'
import MentalEffort from '@/components/MentalEffort.vue'
Vue.use(Router)

const router = new Router({
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
    },
    {
      path: '/intro',
      name: 'intro',
      component: Intro
    },
    {
      path: '/test',
      name: 'test',
      component: RecallTest
    },
    {
      path: '/fin',
      name: 'fin',
      component: ThankYou
    },
    {
      path: '/mental',
      name: 'mental',
      component: MentalEffort
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path !== '/test' && localStorage.getItem('fin_slideshow') === '1') {
    next('/test')
  } else {
    next()
  }
})

export default router
