<template>
  <div id="register">
    <Header></Header>
    {{ msg }}
  </div>
</template>

<script>
  import Header from '../../components/common/header'
  export default {
    component:{Header},
    data() {
      return {
        msg: 'register'
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
