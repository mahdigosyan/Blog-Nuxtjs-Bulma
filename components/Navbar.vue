<template>
  <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
    <div v-show="showMenu" class="navbar-start my-navbar-items">
      <NuxtLink to="/blog" class="navbar-item">
        بلاگ
      </NuxtLink>
      <NuxtLink to="/courses" class="navbar-item">
        دوره ها
      </NuxtLink>
      <NuxtLink to="/contact" class="navbar-item">
        تماس با من
      </NuxtLink>
      <NuxtLink to="/" class="navbar-item">
        صفحه اصلی
      </NuxtLink>
    </div>
    <div class="navbar-brand">
      <nuxt-link to="/" class="navbar-item">
        <img
          src="https://res.cloudinary.com/extazy/image/upload/v1644739139/blog/logo_yj8qqi.png"
          width="112"
          height="28"
          alt="وبسایت مهدی قوسیان"
        >
      </nuxt-link>

      <a
        role="button"
        class="navbar-burger is-active"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        @click="burgerHandler"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      showMenu: true,
      burgerHandler: (event) => {
        event.target.classList.toggle('is-active')
        this.showMenu = !this.showMenu
      }
    }
  }
}
</script>

<style scoped>
@media screen and (min-width: 900px) {
  .my-navbar-items {
    display: flex !important;
  }
}
</style>
