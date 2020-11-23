<template>
  <div class="vue-footer">
    <div class="container">
      <img alt="Vue logo" src="../assets/logo.png">
      <nav>
        <a href="/index">Home</a>
        <a href="/page-1">Page 1</a>
        <a href="/page-2">Page 2</a>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>


<style scoped>
  .vue-footer {
    width: 100%;
    background: #333;
    font-family: Arial, Helvetica, sans-serif;
  }

  .vue-footer .container {
    margin: auto;
    max-width: 1440px;
    display: flex;
    justify-content: space-between;
    height: 50px;
    align-items: center;
  }

  .vue-footer img {
    width: 35px;
    height: 35px;
  }

  .vue-footer nav a {
    padding: 5px 10px;
    text-decoration: none;
    margin-right: 10px;
    margin-top: 0px;
    display: inline-block;
    background-color: #eee;
    border-radius: 4px;
  }

  .vue-footer nav a:visited, a:link {
    color: #607D8B;
  }

  .vue-footer nav a:hover {
    color: #039be5;
    background-color: #CFD8DC;
  }

  .angular-headernav a.active {
    color: #039be5;
  }

</style>
