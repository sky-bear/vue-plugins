import Vue from 'vue';
// import Vue from 'vue/dist/vue.common.js'
import ElementUI from 'element-ui';
import App from './App.vue';
import 'element-ui/lib/theme-chalk/index.css';
import router from './routers'
import demoBlock from '@/components/DemoBlock/index.vue'

Vue.use(ElementUI);

Vue.component('demo-block', demoBlock);

Vue.config.productionTip = false;





new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
