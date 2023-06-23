import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/TimeLine',
    name: 'timeline',
    component: () => import('../views/TimelineView.vue')
  },
  {
    path: '/UsefulTools',
    name: 'tools',
    component: () => import('../views/ToolsView.vue')
  },
  {
    path: '/MoreInfo',
    name: 'more',
    
    component: () => import('../views/InfoView.vue')
  },
  {
    path: '/G_OverHeat',
    name: 'more1',
    
    component: () => import('../views/articles/OverHeat.vue')
  },
  {
    path: '/G_Moment',
    name: 'more2',
    
    component: () => import('../views/articles/MomentArticle.vue')
  },
  {
    path: '/G_Moment_2',
    name: 'more3',
    
    component: () => import('../views/articles/IdeasAboutMoment.vue')
  },
  {
    path: '/Baba',
    name: 'baba',
    component: () => import('../views/articles/BabaIsYou.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  mode: 'history',
  routes
})

export default router
