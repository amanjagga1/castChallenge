<template>
  <div class="box">
    <article class="media">
        <div class="media-left">
            <figure class="image is-64x64">
                <img src="http://bulma.io/images/placeholders/128x128.png" alt="Image">
            </figure>
        </div>
        <div class="media-content">
            <div class="content">
                <h3>{{language}}</h3>
            </div>
        </div>
    </article>
</div>
</template>

<script>
export default {
  props : ['language'],
  data () {
    return {
    }
  }
}
</script>

<style lang="css">
   
</style>
