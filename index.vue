<template>
  <div>
    <Navbar />
    <h2 class="title is-3 has-text-right mt-4 mr-4">
      آخرین مطالب بلاگ
    </h2>
    <LatestPosts :articles="articles" />
    <h2 class="title is-3 has-text-right mt-4 mr-4">
      آخرین دوره ها
    </h2>
    <LatestCourses />
    <Footer />
  </div>
</template>

<script>

export default {
  name: 'IndexPage',
  async asyncData ({ $content, params }) {
    const articles = await $content('blog', { deep: true })
      .only(['title', 'description', 'img', 'slug', 'author', 'path'])
      .sortBy('createdAt', 'desc')
      .limit(6)
      .fetch()
    return {
      articles
    }
  }
}
</script>
