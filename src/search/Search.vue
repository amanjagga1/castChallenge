<template>
  <div>
    <app-search-header :language="params.language"></app-search-header>
    <div class="columns">
        <div class="column is-two-thirds">
          <div class="card">
          <h2 class="title is-2">{{totalCount}} results</h2>
          </div>
            <app-search-results :repos="displayRepos"></app-search-results>
            <br />
            <nav class="pagination" role="navigation" aria-label="pagination">
              <ul class="pagination-list">
                <li>
                  <a :class="{'pagination-link': true, 'is-current':activeClass == 0}" aria-label="Page 1" aria-current="page" @click="switchPage(0,3)" >1</a>
                </li>
                <li>
                  <a :class="{'pagination-link': true, 'is-current': activeClass == 1}" aria-label="Goto page 2" @click="switchPage(3,6)">2</a>
                </li>
                <li>
                  <a :class="{'pagination-link': true, 'is-current':activeClass == 2}" aria-label="Goto page 3" @click="switchPage(6,9)">3</a>
                </li>
              </ul>
            </nav>
        </div>
        <div class="column">
            <app-languages-list :languages="languages"></app-languages-list>
        </div>
    </div>
  </div>
</template>

<script>
import appSearchHeader from './SearchHeader.vue'
import appLanguagesList from './../LanguagesList.vue'
import appSearchResults from './SearchResults.vue'
export default {
  props: ['languages'],
  data () {
    return {
      topRepos : [],
      displayRepos : [],
      totalCount: 0,
      activeClass : 0,
      params: this.$route.params
    }
  },
  components: {
        appSearchHeader,appLanguagesList,appSearchResults
    },
  methods: {
    switchPage(a,b) {
      this.displayRepos = this.topRepos.slice(a,b);
      if (a == 6) {
        this.activeClass = 2;
      }
      if (a == 3) {
        this.activeClass = 1;
      } else {
        this.activeClass = 0;
      }
    },
    getData() {
        let self = this;
        this.$http.get('https://api.github.com/search/repositories?q='+ this.params.language).then(response => {
          return response.json();
          }, error => {
          console.log(error);
          }).then(data => {
            data.items.sort(function(a,b) {
              if (a.stargazers_count < b.stargazers_count)
                return 1;
              if (a.stargazers_count > b.stargazers_count)
                return -1;
              return 0;
            });
            self.topRepos = data.items.slice(0, 9);
            self.totalCount = data.total_count;
            self.displayRepos = self.topRepos.slice(0,3);
            console.log(self.topRepos);
          });
        },
        checkLanguage() {
          console.log(this.$route.params.language);
        }
    },
      watch: {
        '$route'(to, from) {
          this.getData();
        }

    },
    created() {
      this.getData();
    },
  }
  
</script>

<style lang="css">
   
</style>

