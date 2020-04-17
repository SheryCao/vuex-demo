<template>
   <div>
       <ul class="goods-wrap">
           <li v-for="(item,index) in goods" :key="index">
               <img :src="item.goods_pic" alt="">
               <div>
                   <div class="title">{{item.goods_title}}</div>
                   <div class="price">
                       <span>￥{{item.goods_price}}</span>
                       <span>剩余{{item.remain_num}}份</span>
                       <div style="clear:both"></div>
                   </div>
               </div>
           </li>
       </ul>
   </div>
</template>
<script>
   export default {
       props:['goods'],
       name: '',
       data () {
           return {

           }
       },
       methods: {

       }
   }
</script>
<style scoped>
    .goods-wrap{padding-bottom: 80px;}
    .goods-wrap>li{
        background: #fff;
        border-top:1px solid #ddd;
        padding: 6px 3%;
        position: relative;
        min-height: 90px;
        padding-left: 26%;
        font-size: 13px;
        color:#666;
        line-height: 32px;
        box-sizing: border-box;
    }
    .goods-wrap>li .title,.goods-wrap>li .price{
        text-align: left;
    }
    .goods-wrap>li img{
        position: absolute;left: 3%;top:6px;
        width: 20%;
    }
</style>
