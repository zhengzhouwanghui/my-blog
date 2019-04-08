<template>
  <div id="app">
    <blog-header></blog-header>
    <router-view></router-view>
    
    <!-- <show-blogs></show-blogs>
    <add-blog></add-blog> -->
  
    <div class='footer'>
      <p>Blog  built  by <a href="https://twitter.com/mdo">@wanghui</a>.</p>
      <p>
        <a href="#">Back to top</a>
      </p>
    </div>
  </div>
</template>
<script>
// import Routes from './router'

import AddBlog from './components/AddBlog'
import ShowBlogs from './components/ShowBlogs'
import BlogHeader from './components/BlogHeader'



export default {
  name:'app',
  components:{
    AddBlog,ShowBlogs,BlogHeader

  }
}
</script>

<style>

  body{
    margin: 0;
    padding: 0;
    background-color:#f4f4f4;
  }
  .footer{
    background-color: #909399;
    text-align: center;
    padding: 1px;
  }
</style>
