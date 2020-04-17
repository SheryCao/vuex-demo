import gs from '@/service/goods'

export default {
    state: {
        slider: [],
        keys: [],
        goodsInfo: {},
        cartlist: [], 
    },
    mutations: {
        setGoodsInfo( state, { slider, keys, goodsInfo }){
            state.slider = slider;
            state.keys = keys;
            state.goodsInfo = goodsInfo;
        },
        setCarts(state, list){
            state.cartlist = list;
        }
    },
    getters: { // 添加一个goods属性，转换goodsInfo为数组便于循环渲染
        goods: state => {
            return state.keys
            .map( key => state.goodsInfo[key])
            .reduce(( prev, next ) =>  prev.concat(next), [])
        }
    }, 
    actions: {
        getGoods( {state, commit }){
            if(!state.keys.length){
                gs.getGoodsInfo().then( goodsInfo => {
                    commit('setGoodsInfo', goodsInfo)
                })
            }
        },
        getCartList ( { commit }) {
            gs.getCarts().then( list => {
                commit('setCarts', list)
            }) 
        }
    },
}