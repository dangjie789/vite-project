<template>
<h1>欢迎来到登录页面</h1>
<el-button @click="gohome">返回主页</el-button>

</template>
<script >
//composition Api 写法

/* import {useRouter} from 'vue-router'
const router = useRouter()  */

/* import router from '../router/index.js' */

/* const gohome = ()=>{
   router.push('./welcome')
} */

// options Api写法

export default {
    name:'Login',
    methods:{
        gohome(){
          this.$router('./welcome')
        }
    },
    mounted(){
        this.$request.get('/login',{name:'jack'},{mock:true}).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }
}
</script>
<style>
</style>