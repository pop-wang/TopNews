<template>
  <div id="app">
    <router-link to="/" tag="li"><a>首页</a></router-link>
    <router-link to="/study"><a>我是学习页面</a></router-link>
    <router-link to="/work"><a>我是工作页面</a></router-link>
    <!--<a href="/">首页</a>-->
    <!--<a href="/study">我是学习页面</a>-->
    <!--<a href="/work">我是工作页面</a>-->
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
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
  .shudong{
    background-color: cornflowerblue;
  }
</style>
