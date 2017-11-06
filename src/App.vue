<template>
  <div id="app">
    <app-header></app-header>
    <app-content></app-content>
  </div>
</template>

<script>

//components
import headerComponent from "./components/header.vue"
import navComponent from "./components/nav.vue"
import contentComponent from "./components/content.vue"

//services

export default {
  name: 'app',
  components: {
    'app-header': headerComponent,
    'app-nav': navComponent,
    'app-content': contentComponent
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style src="./app.css">

</style>
