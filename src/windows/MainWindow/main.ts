import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vuetify from 'vuetify';
import _ from 'lodash';
import jquery from 'jquery'
import VueMoment from 'vue-moment'

Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(VueMoment)
Vue.set(Vue.prototype, '_', _);
Vue.set(Vue.prototype, '$', jquery);

globalThis.app = new Vue({
    vuetify : new Vuetify(),
    router,
    render: (h) => h(App),
}).$mount('#app');


  