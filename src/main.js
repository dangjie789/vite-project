import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus';
import axios from 'axios';
import config from './config/index.js'
import request from './utils/request'
import storage from './utils/storage'

const app = createApp(App);

//将一个对象全局挂载
app.config.globalProperties.$request = request;
app.config.globalProperties.$storage = storage;

app.use(router).use(ElementPlus, { size: 'small' }).mount('#app')