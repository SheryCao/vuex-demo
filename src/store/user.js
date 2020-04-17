import us from '@/service/user';
export default {
    state: {
        isLogin: localStorage.getItem('token') ? true : false,
    },
    mutations: {
        setLoginState(state, isLogin){
            state.isLogin = isLogin;
        },
    },
    actions: {
        login({ commit }, user){
            return us.login(user).then(res => {
                const {code, token } = res.data;
                if(code){
                    commit('setLoginState', true);
                    localStorage.setItem('token', token);
                }
                return code;
            })
        },
        logout({ commit }){ // 清除缓存 登录状态改成false
            localStorage.removeItem('token');
            commit('setLoginState', false);
        },  
    }
}