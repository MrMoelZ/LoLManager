import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import dataService from './services/data.js'

import test from './components/test.vue'
import home from './components/home.vue'
import finance from './components/finance.vue'
import team from './components/team.vue'
import league from './components/league.vue'
import transfers from './components/transfers.vue'




window.services = {
  data: new dataService()
}

Vue.use(VueRouter);

let router = new VueRouter({
  routes: [
    {path: "/home", name: "home", component: home},
    {path: "/finance", name: "finance", component: finance},
    {path: "/team", name: "team", component: team},
    {path: "/league", name: "league", component: league},
    {path: "/transfers", name: "transfers", component: transfers},
    {path: "/test", name: "test", component: test}
  ]
})


new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})

