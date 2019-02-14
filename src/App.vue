<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <router-view name="slideBar"></router-view>
      <router-view name="main"></router-view>
     
    </div> 
    <!-- 除了头部之外的之外的内容，放在这个div内 -->
    
  </div>
</template>

<script>
  import Header from './components/Header'
  import PostList from './components/PostList'
  export default {
    name: 'App',
    components:{
      Header,
      PostList
    }
  }
</script>

<style>
  .main{
    width:80%;
    margin:0 auto;
  }
</style>
