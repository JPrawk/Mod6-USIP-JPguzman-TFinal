import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Computed from '../components/Computed.vue'
import Interpolacion from '@/components/Interpolacion.vue'
import Vbind from '@/components/Vbind.vue'
import Vmodel from '@/components/Vmodel.vue'
import Vif from '@/components/Vif.vue'
import Vfor from '@/components/Vfor.vue'
import Modificadores from '@/components/Modificadores.vue'
import Vhtml from '@/components/Vhtml.vue'
import Template from '@/components/Template.vue'
import Formulario from '@/components/Formulario.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/computada',
      name: 'computada',
      component: Computed,
    },
    {
      path: '/interpolacion',
      name: 'interpolacion',
      component: Interpolacion,
    },
    {
      path: '/vbind',
      name: 'vbind',
      component: Vbind,
    },
    {
      path: '/vmodel',
      name: 'vmodel',
      component: Vmodel,
    },
    {
      path: '/vif',
      name: 'vif',
      component: Vif,
    },
    {
      path: '/vfor',
      name: 'vfor',
      component: Vfor,
    },
    {
      path: '/modificadores',
      name: 'modificadores',
      component: Modificadores,
    },
    {
      path: '/vhtml',
      name: 'vhtml',
      component: Vhtml,
    },
    {
      path: '/template',
      name: 'template',
      component: Template,
    }
    ,
    {
      path: '/formulario',
      name: 'formulario',
      component: Formulario,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
