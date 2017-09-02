<template>
<div class="card">
  <div class="card-content">
    <h2 class="title is-2">Languages</h2>
    <div class="level" v-for="(stars,language) in languages">
      <div class="level-left">
        <div class="level-item">
          <p class="subtitle is-5">
            <strong>{{language}}</strong>
          </p>
        </div>
      </div>
      <div class="level-right">
        <strong>{{stars}}</strong>
      </div>
    </div>
  </div>
</div>
  
</template>

<script>
export default {
  props : ['languages'],
  data () {
      return {
          
      }
  },
  components: {
     
  }
}
</script>

<style lang="css">
   
</style>

