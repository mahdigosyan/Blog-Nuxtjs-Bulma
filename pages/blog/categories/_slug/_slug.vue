<template>
  <div>
    <Navbar />
    <div class="columns mt-4">
      <div class="column" />
      <div class="column  is-three-quarters">
        <nuxt-content :document="doc" />
        <span>برچسب ها:</span>
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
  name: 'SinglePostPage',
  async asyncData ({ $content, params, route }) {
    const cat = route.fullPath.toString().split('/').at(-2)
    const doc = await $content(`blog/categories/${cat}`, { deep: true }, params.slug).fetch()

    const [prev, next] = await $content('blog', { deep: true })
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(doc.path)
      .fetch()

    return { doc, prev, next }
  },
  head () {
    return {
      title: this.doc.title,
      meta: [
        {
          hid: this.doc.title,
          name: 'description',
          content: this.doc.description
        }
      ]
    }
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
