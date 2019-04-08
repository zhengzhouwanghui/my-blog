<template>
    <nav>
        <ul>
            <li>
                <router-link to='/' exact>博客首页</router-link>
                <router-link to='/add' exact>写博客</router-link>
                <router-link to='/about' exact>关于</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name:'blog-header'
}
</script>

<style scoped>
ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
    width: 100%;
}
li{
    display: inline-block;
    margin: 0 10px;
    font-size: 24px;
    font-weight: lighter
}
a{
    color:#fff;
    text-decoration: none;
    padding: 12px;
    border-radius: 5px;
    }
nav{
    background: #23b8ff;
    padding: 20px 0;
    margin-bottom: 30px;
    box-shadow: 0px 2px 2px #888888;
}
.router-link-active{
    background:rgba(255,255,255,0.8);
    color: #444
}
</style>


