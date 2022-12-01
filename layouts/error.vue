<template>
  <div>
    <Navbar />
    <p class="title has-text-centered mt-3">
      صفحه مورد نظر یافت نشد
    </p>
    <NuxtLink to="/">
      <div class="has-text-centered mb-3">
        <button class="button is-info">
          بازگشت به صفحه اصلی
        </button>
      </div>
    </NuxtLink>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
  layout: 'error',
  props: {
    error: {
      type: String,
      default: 'error'
    }
  }
}
</script>
