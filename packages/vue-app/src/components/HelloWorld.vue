<template>
  <div class="vue-footer">
    <div class="container">
      <img alt="Vue logo" src="../assets/logo.png">
      <h1>{{ msg }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .vue-footer {
    width: 100%;
    background: #333;
  }
  .vue-footer .container {
    margin: auto;
    max-width: 1440px;
    display: flex;
    justify-content: space-between;
    height: 50px;
  }

  .vue-footer img{
    width: 50px;
  }

  .vue-footer h1{
    color:white;
    margin: 0;
  }
</style>
