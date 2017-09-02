<template>
  <div class="columns">
    <ul class="column is-two-thirds">
        <span v-for="(key,language) in languages">
            <router-link :to="'/search/'+language">
                <li><app-language :language="language"></app-language></li>
                <br />
            </router-link>
        </span>
        
    </ul>
    <div class="column">
        <app-languages-list :languages="languages"></app-languages-list>
    </div>
  </div>
</template>

<script>
import langList from './../LanguagesList.vue';
import language from './Language.vue';
export default {
    props : ['languages'],
  data () {
      return {

      }
  },
  components: {
      'appLanguage' : language,
      'appLanguagesList' : langList
  },
}

</script>

<style lang="css">
   
</style>

