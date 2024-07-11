import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/EventListView.vue'
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'
import EventListStudentView from '@/views/EventListStudentView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list-view',
      component: EventListView
    },
    {
      path: '/about',
      name: 'about',

      component: AboutView
    },    
    {
      path: '/student',
      name: 'StudentList',
      component: EventListStudentView
    }
  ]
})

export default router
