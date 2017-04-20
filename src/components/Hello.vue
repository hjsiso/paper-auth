<template>
  <div class="hello">
    <div class="columns" >

      <div class="column">
        <section class="hero is-primary">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                {{ msg }}
              </h1>
              <h2 class="subtitle">
                Sign In!
              </h2>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
