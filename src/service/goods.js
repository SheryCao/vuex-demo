import axios from 'axios'

export default {
    getGoodsInfo() {
        return axios.get('/api/goodsinfo').then(res=>{
            const { keys, slider, datalist: goodsInfo } = res.data;
            return { keys, slider, goodsInfo }
        })
    },
    getCarts() {
        return axios.get('/api/carts').then(res => {
            // console.log(res.data);
            const { list } = res.data;
            return list
        })
    }
}