<template>
  <div class= "container">
    <app-headers></app-headers>
    <br>
    <router-view :languages="languages"></router-view>
    <!--<app-home :languages="languages"></app-home>-->
  </div>
</template>

<script>
import Header from './Header.vue';
import Home from './home/Home.vue';
export default {
  data () {
    return {
      languages : {'javascript':1000,'java':2000,'python': 900,'ruby':200,'Scala':230}
    }
  },
  components: {
    'appHeaders': Header
  }
}
</script>

<style lang="css">
    @import '../node_modules/bulma/css/bulma.css';
    body {
      background-color: grey;
    }
</style>

