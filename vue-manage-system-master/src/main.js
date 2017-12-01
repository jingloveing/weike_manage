import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css'
// import 'element-ui/lib/theme-default/index.css';    // 默认主题
import '../static/css/theme-green/index.css';       // 浅绿色主题
// import '../static/css/theme-blue/index.css';       // 自定义主题
// import VueAwesomeSwiper from 'vue-awesome-swiper'
import "babel-polyfill";
// Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI);
Vue.prototype.$ajax = axios;
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
