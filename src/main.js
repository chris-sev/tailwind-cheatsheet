import Vue from 'vue';
import App from './App.vue';
import VueFuse from 'vue-fuse';
import './assets/styles.css';

Vue.config.productionTip = false;
Vue.use(VueFuse);

new Vue({
  render: h => h(App)
}).$mount('#app');
