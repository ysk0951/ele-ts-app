import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vuetify from 'vuetify';
import _ from 'lodash';
import jquery from 'jquery'
import VueMoment from 'vue-moment'

Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.use(Vuetify);
Vue.use(VueMoment)
Vue.set(Vue.prototype, '_', _);
Vue.set(Vue.prototype, '$', jquery);
globalThis.config = Vue.config;

//reference
//https://wedul.site/632 
//https://iancoding.tistory.com/155?category=1179222
globalThis.app = new Vue({
    vuetify : new Vuetify(),
    router,
    render: (h) => h(App),
}).$mount('#app');

  