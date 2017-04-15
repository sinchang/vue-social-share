<template>
  <div id="app">
    <h1>Vue-Social-Share</h1>
    <h2>A Vue 2.x social share component </h2>
    <github-badge slug="sinchang/vue-social-share" />
    <share :config="config"></share>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        config: {

        }
      }
    }
  }
</script>

<style>
  body {
    margin: 0;
    padding: 0;
    text-align: center;
  }

  a {
    color: #42b983;
    text-decoration: none;
  }

  h1 {
    font-size: 54px;
    color: #42b983;
    margin: 30px 0 10px;
  }

  h2 {
    font-size: 22px;
    color: #555;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 30px;
    }

    h2 {
      font-size: 16px;
    }
  }
</style>
