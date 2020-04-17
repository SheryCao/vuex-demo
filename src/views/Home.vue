<template>
    <div class="home">
      <!-- <h2>this is home page</h2>
      <button @click="logout" v-if="$store.state.user.isLogin">退 出</button> -->
        <cube-slide :data="slider" />
        <goods-list :goods="goods"></goods-list>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapState, mapActions, mapGetters } from 'vuex'
import GoodsList from '@/components/GoodsList'
export default {
    name: 'home',
    components: { GoodsList },
    mounted(){
        this.getGoods();
    },
    computed:{
        ...mapState({slider: state => state.goods.slider}),
        ...mapGetters(['goods'])
    },
    methods:{
        ...mapActions(['getGoods']),
        logout(){
            this.$store.dispatch('logout');
        }
    }
}
</script>
<style>
    .cube-slide-item > a > img{
        width: 100%;
        height:auto;
    }
</style>
