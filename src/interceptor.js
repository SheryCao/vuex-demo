import axios from 'axios';
export default function intercepotr(vm) {
    // 请求拦截器
    axios.interceptors.request.use(config => {
        const token = localStorage.getItem('token');
        if(token){
            config.headers.Authorization = 'Bearer ' + token;
        }
        return config;
    })
    // 响应拦截器
    axios.interceptors.response.use(null, err => {
        if(err.respose.status === 401){// 没有登录或者令牌过期
            vm.$store.dispatch('logout');
            vm.$router.push('/login');
        }
        return Promise.reject(err)
    })
}