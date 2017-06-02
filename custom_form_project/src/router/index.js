import Vue from 'vue'
import Router from 'vue-router'
import CustomForm from '@/components/page/customForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'customForm',
      component: CustomForm
    }
  ]
})
