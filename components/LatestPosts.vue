<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <LatestPostsItem :img="articles[0].img" :title="articles[0].title" :path="articles[0].path" :description="articles[0].description" />
      </div>
      </div>
      <div class="columns">
      <div class="column">
        <LatestPostsItem :img="articles[1].img" :title="articles[1].title" :path="articles[1].path" :description="articles[1].description" />
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <LatestPostsItem :img="articles[2].img" :title="articles[2].title" :path="articles[2].path" :description="articles[2].description" />
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <LatestPostsItem :img="articles[3].img" :title="articles[3].title" :path="articles[3].path" :description="articles[3].description" />
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <LatestPostsItem :img="articles[4].img" :title="articles[4].title" :path="articles[4].path" :description="articles[4].description" />
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <LatestPostsItem :img="articles[5].img" :title="articles[5].title" :path="articles[5].path" :description="articles[5].description" />
      </div>
    </div>
  </div>
  </template>

<script>
export default {
  props: {
    articles: {
      type: Array,
      default: null
    }
  }
}
</script>

