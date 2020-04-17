<template>
   <div>
       <cube-form
            :model="model"
            :schema="schema"
            @validate="validateHandler"
            @submit="submitHandler">
        </cube-form>
   </div>
</template>
<script>
   export default {
       name: 'login',
       data () {
           return {
               model:{
                   username:'shery',
                   password:'123456ccc',
               },
               schema:{
                   fields:[
                       {
                            type: 'input',
                            modelKey: 'username',
                            label:'用户名',
                            props: {
                                placeholder:'请输入用户名',
                            },
                            trigger:'input',
                            rules: {
                                required: true
                            },
                       },{
                            type: 'input',
                            modelKey: 'password',
                            label:'密码',
                            props: {
                                type:'password',
                                placeholder:'请输入密码',
                                eye: {
                                    open: true,
                                    reverse: false
                                },
                            },
                            trigger:'input',
                            rules: {
                                required: true
                            },
                       },{
                           type: 'submit',
                           label: '登 录'
                       }
                   ],
               },
           }
       },
       created(){
       },
       methods: {
           submitHandler(e){
                e.preventDefault();
                this.$store.dispatch('login', this.model)
                .then( code => {
                    if(code){
                        const repath = this.$route.query.redirect || '/';
                        this.$router.push(repath);
                    }
                })
                .catch(error => {
                    console.log(error.mesage);
                })
           },
           validateHandler(){
            //    console.log(ret.valid);
           },
       }
   }
</script>
<style scoped>

</style>
