import Vue from 'vue'
import Router from 'vue-router'
import SlotMachine from '@/components/SlotMachine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SlotMachine',
      component: SlotMachine

    }
  ]
})
