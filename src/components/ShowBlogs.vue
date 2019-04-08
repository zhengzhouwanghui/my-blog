<template>
  <div id='show-blogs' v-theme:column="'narrow'">
    <h1>博客总览</h1>
    <input type="text" v-model="search" placeholder="搜索">
    <div v-for='blog in filteredBlogs' v-bind:key= 'blog.id' class="single-blog">
        <router-link v-bind:to="'/blog/' + blog.id">
          <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
        </router-link>
        <article>{{blog.content | snippet}}</article>
    </div>
  </div>
</template>
<script>
import blogdata1 from '.././blogdata'
export default {
  name:'show-blogs',
  data(){
    return{
        blogs:[],
        search:''
    }
  },
  created(){
    // console.log(111)
    // console.log(blogdata1.query);
    blogdata1.query.find()
    //this.$http.get('http://jsonplaceholder.typicode.com/posts')
    .then((data)=>{
      
      //this.blogs = data.slice(0,10);
      let blogsArray = [];
      for (let key in data){
        //console.log(data[key].attributes)
      data[key].attributes.data1.id=data[key].id;
      blogsArray.push(data[key].attributes.data1)
      };
      this.blogs = blogsArray;
      //console.log(this.blogs);
     })
     //.then(function(data){
    //   console.log(data)
    //   this.blogs = data;
    //   console.log(this.blogs);
    // })
    
  },
  computed:{
    filteredBlogs:function(){
      return this.blogs.filter((blog) => {
        return blog.title.match(this.search);
      })
    }
  },
  //过滤器
  filters:{
//     'to-uppercase':function(value){
//    return value.toUpperCase();
//  },
  toUppercase(value){
    return value.toUpperCase();
    },
  },
  //自定义指令 
  directives:{
      'rainbow':{
      bind(el,binding,vnode){
          el.style.color = '#' + Math.random().toString(16).slice(2,8)
      } 
    }
  }

}
</script>

<style>
#show-blogs{
  max-width: 800px;
  margin: 0 auto 20px;
  box-shadow: 1px 1px  5px #888888,-1px -1px  5px #888888  ;
 
}
.single-blog{
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
  border: 1px dotted #aaa;
}
#show-blogs a{
  color: #444;
  text-decoration: none;
}
input[type="text"]{
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}
</style>
