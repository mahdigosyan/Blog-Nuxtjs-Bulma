<template>
  <div>
    <Navbar />
    <div class="columns is-fullheight-100vh">
      <div class="column" />
      <div class="column mt-4">
        <form action="https://formsubmit.co/76b1885c0f62dcf836fb8a2727a536c2" method="POST">
          <input type="hidden" name="_template" value="table">
          <div class="field">
            <label class="label has-text-right">نام</label>
            <div class="control">
              <input name="_subject" class="input has-text-right" type="text" placeholder="اسم خودتون را بنویسید">
            </div>
          </div>

          <div class="field">
            <label class="label has-text-right">ایمیل</label>
            <input name="email" class="input has-text-right" type="email" placeholder="ایمیل خودتون رو به درستی وارد کنید">
          </div>

          <div class="field">
            <label class="label has-text-right">متن پیام</label>
            <div class="control">
              <textarea name="message" class="textarea has-text-right" placeholder="پیام خود را اینجا به فارسی بنویسید" />
            </div>
          </div>

          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link" type="submit">
                ارسال
              </button>
            </div>
          </div>
        </form>
      </div>
      <div class="column" />
    </div>
    <Footer />
  </div>
</template>

<script>

export default {
  name: 'ContactPage'
}
</script>

<style scoped>
</style>
