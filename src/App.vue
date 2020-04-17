<template>
    <div id="app">
        <!-- <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div> -->
        <transition name="fade">
            <router-view />
        </transition>
        <cube-tab-bar 
            v-model="selectedLabelDefault" 
            :data="tabs" 
            @change="clickHandler" >
        </cube-tab-bar>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                selectedLabelDefault: '/',
                tabs: [{
                    label: '首页',
                    icon: 'cubeic-home',
                    value:'/'
                },{
                    label: '购物车',
                    icon: 'cubeic-vip',
                    value:'/cart',
                }, {
                    label: '我的',
                    icon: 'cubeic-person',
                    value:'/about'
                }]
            }
        },
        created(){
            this.selectedLabelDefault = this.$route.path;
        },
        watch:{
            $route(to){
                this.selectedLabelDefault = to.path;
            }
        },
        methods:{
            clickHandler (value) {
                this.$router.push(value);
            },
        },
        computed:{
            
        },
    }
</script>
<style>
    body{background: #f5f5f5;}
    .cube-tab-bar{
        position: fixed;bottom:0;width:100%;
        background: #fff;
        border-top:1px solid #ddd;
    }
    [class^="cubeic-"], [class*=" cubeic-"]{
        font-size: 18px;
    }
    .cube-tab-bar div{
        font-size: 12px;
        margin-top: 4px;
    }
    #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    }

    #nav {
    padding: 30px;
    }

    #nav a {
    font-weight: bold;
    color: #2c3e50;
    }

    #nav a.router-link-exact-active {
    color: #42b983;
    }

    .fade-enter{
        opacity: 0;
        transform: translateX(-100%)
    }
    .fade-leave-to{
        opacity: 0;
        transform: translateX(100%)
    }
    .fade-enter-active,
    .fade-leave-active{
        opacity:1;
        transition: all .2s;
    }
</style>
