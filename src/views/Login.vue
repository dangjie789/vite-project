<template>
<div>

    <h1>欢迎来到登录页面</h1>
<el-button @click="gohome">返回主页</el-button>
</div>


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
          this.$router.push('./welcome')
        }
         
    },
    mounted(){
        this.$request.get('/login').then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }
}
</script>
<style>
</style>