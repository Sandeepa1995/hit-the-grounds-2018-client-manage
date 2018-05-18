import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import AddTeam from '@/components/AddTeam'
import StartMatch from '@/components/StartMatchForm'
import MatchManage from '@/components/MatchManage'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/add_team',
      name: 'AddTeam',
      component:AddTeam
    },
    {
      path: '/start_match',
      name: 'StartMatch',
      component:StartMatch
    },
    {
      path: '/select_match',
      name: 'MatchManage',
      component: MatchManage
    }
  ]
})
