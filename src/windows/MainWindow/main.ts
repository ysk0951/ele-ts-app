import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vuetify from 'vuetify'

Vue.config.productionTip = false;
Vue.use(Vuetify);
new Vue({
    vuetify : new Vuetify(),
    router,
    render: (h) => h(App),
}).$mount('#app');
