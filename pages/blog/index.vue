<template>
  <div>
    <Navbar />
    <div class="columns">
      <div class="column">
        <div class="field m-3 has-text-centered">
          <p class="control has-icons-left custom-field">
            <input
              v-model="searchQuery"
              class="input is-normal is-hovered"
              type="search"
              autocomplete="off"
              placeholder="جسنجو..."
            >
            <span class="icon is-small is-left">
              <i class="fas fa-search" />
            </span>
          </p>
        </div>
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
  name: 'BlogPage',
  async asyncData ({ $content }) {
    const articles = await $content('blog', { deep: true })
      .only(['title', 'description', 'img', 'slug', 'author', 'path'])
      .sortBy('createdAt', 'asc')
      .fetch()

    const temp = articles // for refill when searchquery is empty
    return {
      articles,
      temp
    }
  },
  data () {
    return {
      searchQuery: ''
    }
  },
  watch: {
    async searchQuery (searchQuery) {
      if (!searchQuery) {
        this.articles = this.temp
        return
      }
      this.articles = await this.$content('blog', { deep: true })
        .search(searchQuery)
        .fetch()
    }
  }
}
</script>

<style>
p {
  direction: rtl;
}
.custom-dir {
  direction: rtl;
}

.custom-field {
  width: 50%;
  margin: auto;
}
</style>
