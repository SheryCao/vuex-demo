<template>
   <div>
       <ul>
           <li v-for="(n, i) in cartlist" :key="i" style="margin-top: 20px;">
               <h3>标题：{{n.title}}</h3>
               <p>价格：￥{{n.price}}</p>
            </li>
       </ul>
   </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    export default {
        name: '',
        data () {
            return {

            }
        },
        mounted(){
            this.getCartList();
        },
        computed:{
            ...mapState({cartlist: state => state.goods.cartlist}),
            // cartlist() {
            //     return this.$store.state.goods.cartlist
            // }
        },
        methods: {
            ...mapActions(['getCartList'])
        }
    }
</script>
<style scoped>

</style>
