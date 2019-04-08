<template>
    <div id='single-blog'>
        <h1>{{blog.title}}</h1>
        <article>{{blog.content}}</article>
        <p>作者：{{blog.author}}</p>
        <p>分类：</p>
        <ul>
            <li v-for='category in blog.categories'>{{category}}</li>
        </ul>
        <button class="btn" @click="deleteSingleBlog">删 除</button>
        <router-link class='btn' :to="'/edit/' + id">编 辑</router-link>
    </div>
</template>

<script>
    import blogdata1 from '.././blogdata'

    export default{
        name:'single-blog',
        data(){
            return{
                id:this.$route.params.id,
                blog:{}
            }
        },
        created(){
            //console.log(blogdata1.query)
            //console.log(this)
            // this.$http.get('http://jsonplaceholder.typicode.com/posts/' + this.id)
            // .then(function(data){
            //     console.log(data);
            //     this.blog = data.body;
            // })
            
            blogdata1.query.find()
            .then((data)=>{
                //console.log(data)
                //console.log(this.id)
                for(let key in data){
                    if( data[key].id === this.id )
                    {this.blog = data[key].attributes.data1;}        
                }
                //console.log(this.blog)  
            })
        },
        methods:{
            deleteSingleBlog:function(){
                var r=confirm("确定删除吗？")
                if (r==true)
                blogdata1.query.find()
                .then((results)=>{
                    for(var i=0;i<results.length;i++){
                    if(results[i].id === this.id)
                    results[i].destroy();//使用destroy方法对返回来的数据进行删除
                    }
                    this.$router.push({path:'/'})
                });
            }
        }
    }
</script>

<style>
    #single-blog{
        max-width: 960px;
        margin: 0 auto;
        padding: 20px;
        background: #eee;
        border: 1px dotted #aaa;
    }
    .btn{
        display: inline-block;
        margin: 20px 20px;
        background: #23b8ff;
        color: #fff;
        border: 0;
        padding: 14px 30px;
        border-radius: 4px;
        font-size: 18px;
        cursor: pointer;
        text-decoration: none;
        text-align: center
    }
</style>
