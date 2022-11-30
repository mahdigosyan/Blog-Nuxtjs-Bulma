<template>
  <div>
    <Navbar />
    <div class="columns">
      <div class="column">
        <p class="title has-text-centered mt-3">
          دسته بندی: {{ category }}
        </p>
        <div class="columns is-flex-wrap-wrap custom-dir">
          <div v-for="article of articles" :key="article.slug" class="column is-3">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img :src="article.img" :alt="article.description">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">
                      {{ article.title }}
                    </p>
                  </div>
                </div>

                <div class="content">
                  <p>{{ article.description }}</p>
                  <br>
                  <NuxtLink :to="article.path">
                    <button class="button is-dark is-centered">
                      ادامه مطلب
                    </button>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CategoriesPanel />
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'PostPage',
  async asyncData ({ $content, params, route }) {
    const articles = await $content(`blog/categories/${route.params.slug}`, { deep: true }).fetch()
    return { articles }
  },
  data () {
    return {
      category: this.$route.params.slug
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
