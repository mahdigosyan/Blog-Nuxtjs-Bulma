<template>
  <div>
    <Navbar />
    <div class="columns mt-4">
      <div class="column" />
      <div class="column  is-three-quarters">
        <nuxt-content :document="doc" />
        برچسب ها:
        <NuxtLink v-for="(tag, index) in doc.tags" :key="index" :to="`/blog/tags/${tag}`">
          <span class="tag is-warning mr-3">{{ tag }}</span>
        </NuxtLink>
        <div class="has-text-centered">
          <span v-if="next !== null">مطلب بعدی:</span>
          <NuxtLink :to="next === null ? '#' : next.path">
            <span>{{ next === null ? '' : next.title }}</span>
          </NuxtLink>
          <span v-if="prev !== null">مطلب قبلی:</span>
          <NuxtLink :to="prev === null ? '#' : prev.path">
            <span>{{ prev === null ? '' : prev.title }}</span>
          </NuxtLink>
        </div>
      </div>
      <div class="column" />
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const doc = await $content('blog', params.slug).fetch()

    const [prev, next] = await $content('blog', { deep: true })
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(doc.path)
      .fetch()

    return { doc, prev, next }
  }
}
</script>

<style>
.nuxt-content p, h1, h2, h3, h4, h5, h6 {
  direction: rtl;
  text-align: justify;
}

.nuxt-content img {
  margin: auto;
  display: block;
}
</style>
