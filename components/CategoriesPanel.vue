<template>
  <div class="column is-2 is-size-3 has-text-centered has-background-white-bis p-5">
    <p class="is-centered">
      دسته بندی ها
    </p>
    <hr>
    <NuxtLink to="/blog/categories/js">
      <button class="button is-light is-fullwidth mb-2">
        جاوا اسکریپت
      </button>
    </NuxtLink>
    <NuxtLink to="/blog/categories/nuxt">
      <button class="button is-light is-fullwidth mb-2">
        ناکست جی اس
      </button>
    </NuxtLink>
    <NuxtLink to="/blog/categories/vue">
      <button class="button is-light is-fullwidth mb-2">
        ویو جی اس
      </button>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'CategoriesPanel'
}
</script>
