<template>
    <div class="box mt-1">
      <article class="media">
        <div class="media-content">
          <div class="content">
            <h2 class="has-text-right">
              {{ title }}
            </h2>
            <div>
              <p class="has-text-right">
                {{ description }}
              </p>
            </div>
          </div>
          <NuxtLink :to="path">
            <button class="button is-dark is-centered">
              ادامه مطلب
            </button>
          </NuxtLink>
        </div>
        <div class="media-left">
        <figure class="image is-128x128">
          <img :src="img" :alt="description">
        </figure>
      </div>
    </article>
  </div>
</template>

------------------------------

<script>
export default {
  props: {
    img: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    path: {
      type: String,
      default: ''
    }
  }
}
</script>