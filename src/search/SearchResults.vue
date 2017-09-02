
<template>
   <div class="card">
    <div class="card-content">
        <div class="columns" v-for="repo in repos">
            <div class="column">
                <p class="subtitle is-5" style="color:blue">{{repo.full_name}}</p>
                <div>
                    <p>{{repo.description}}</p>
                </div>
                <br />
                <div>{{repo.updated_at}}</div>
            </div>
            <div class="column">{{repo.language}}</div>
            <div class="column is-1">
                <strong>{{repo.stargazers_count}}</strong>
            </div>
            <hr/>
        </div>
    </div>
  </div>
</template>

<script>

export default {
    props : ['repos'],
    data () {
        return {
        }
    }
}
</script>

<style lang="css">
   
</style>

