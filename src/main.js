import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus';
import axios from 'axios';
import config from './config/index.js'
import request from './utils/request'


console.log("环境变量=>",
    import.meta.env)

/* axios.get(config.mockApi + '/login').then((res) => {
    console.log(res.data)
}) */


const app = createApp(App);

//将一个对象全局挂载
app.config.globalProperties.$request = request;

app.use(router).use(ElementPlus, { size: 'small' }).mount('#app')