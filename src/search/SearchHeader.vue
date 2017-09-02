<template>
<div class="columns">
  <input class="input column is-3" type="text" v-model="searchLanguage" @keydown.enter="navigate">
    <div class="field is-grouped is-grouped-multiline">
    <div class="control">
      <div class="tags has-addons">
        <span class="tag is-dark is-large">Repositories</span>
        <span class="tag is-info is-large"></span>
      </div>
    </div>

    <div class="control">
      <div class="tags has-addons">
        <span class="tag is-dark is-large">Code</span>
        <span class="tag is-success is-large"></span>
      </div>
    </div>

    <div class="control">
      <div class="tags has-addons ">
        <span class="tag is-dark is-large">Commits</span>
        <span class="tag is-primary is-large"></span>
      </div>
    </div>
    <div class="control">
      <div class="tags has-addons ">
        <span class="tag is-dark is-large">Issues</span>
        <span class="tag is-primary is-large"></span>
      </div>
    </div>
    <div class="control">
      <div class="tags has-addons ">
        <span class="tag is-dark is-large">Wiki</span>
        <span class="tag is-primary is-large"></span>
      </div>
    </div>
    <div class="control">
      <div class="tags has-addons ">
        <span class="tag is-dark is-large">Users</span>
        <span class="tag is-primary is-large"></span>
      </div>
    </div>
  </div>
</div>

  
</template>

<script>

export default {
  props: ['language'],
  data () {
    return {
      searchLanguage: this.language
    }
  },
  methods : {
    navigate() {
      console.log('language is' + this.language);
      this.$router.push({ path: '/search/'+this.searchLanguage });
    }
  }
}
</script>

<style lang="css">
   
</style>

