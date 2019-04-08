<template>
  <div id="edit-blog">
    <h2>编辑博客</h2>
    <form v-if='!submmited'>
      <label for="">博客标题</label>
      <input type="text" v-model='blog.title' required>
      <label for="">博客内容</label>
      <textarea name="" id="" cols="" rows="" v-model="blog.content"></textarea>
      <div id="checkboxes">
        <label for="">Vue.js</label>
        <input type="checkbox" value='Vue.js' v-model="blog.categories">
        <label for="">Node.js</label>
        <input type="checkbox" value='Node.js' v-model="blog.categories">
        <label for="">React.js</label>
        <input type="checkbox" value='React.js' v-model="blog.categories">
        <label for="">Angular4.js</label>
        <input type="checkbox" value='Angular4.js' v-model="blog.categories">
      </div>
      <label for="">作者：</label>
      <select v-model="blog.author">
        <option v-for='author in authors' :key="author">{{author}}</option>
      </select>
      <button v-on:click.prevent="post">编辑博客</button>
    </form>
    <div v-if='submmited'>
      <h3>您的博客已经编辑成功</h3>
    </div>
    <div id="preview">
      <h3>博客总览</h3>
      <p>博客标题：{{blog.title}}</p>
      <p>博客内容：</p>
      <p>{{blog.content}}</p>
      <p>博客分类：</p>
      <ul>
        <li v-for="category in blog.categories" :key='category'>{{category}}</li>
      </ul>
      <p>作者：{{blog.author}}</p>
    </div>
  </div>
</template>
 

<script>
import blogdata1 from '.././blogdata'

export default {
  name: 'edit-blog',
  data(){
      return{
        id:this.$route.params.id,
        blog:{},
        authors:['张志成','王云飞','徐浩宇'],
        submmited:false,
      }
  },
  created(){
      this.fetchData()
        },
  // http://jsonplaceholder.typicode.com/
  // http://jsonplaceholder.typicode.com/posts
  methods:{
      post:function(){    
          blogdata1.testData.id = this.id
           blogdata1.testData.set('data1',this.blog).save()
        .then((data)=>{this.submmited = true;})
      },
      fetchData(){
            //console.log(blogdata1.query)
            //console.log(this)
            // this.$http.get('http://jsonplaceholder.typicode.com/posts/' + this.id)
            // .then(function(data){
            //     console.log(data);
            //     this.blog = data.body;
            // })
            
            blogdata1.query.find()
            .then((data)=>{
                //console.log(this.id)
                for(let key in data){
                    if( data[key].id === this.id )
                    {this.blog = data[key].attributes.data1;}        
                }
                //console.log(this.blog)  
            })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#edit-blog *{
  box-sizing: border-box;
}
#edit-blog{
  margin: 20px auto;
  max-width: 800px;
  padding: 20px;
}
label{
  display: block;
  margin: 20px 0 10px;
}
input[type='text'],textarea,select{
  display:block;  
  width:100%;
  padding: 8px;
}
textarea{height: 200px;}
#checkboxes label{
  display: inline-block;
  margin-top: 0;
}
#checkboxes input{
  display: inline-block;
  margin-right: 10px;
}
button{
  display: block;
  margin: 20px 0;
  background: crimson;
  color: #fff;
  border: 0;
  padding: 14px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
}
#preview{
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3{
  margin-top: 10px;
}
</style>
