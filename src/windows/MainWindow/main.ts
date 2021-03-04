import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vuetify from 'vuetify';
import moment from 'moment';
import vueMoment from 'vue-moment' 
import _ from 'lodash';

Vue.config.productionTip = false;
Vue.prototype._ = _;
Vue.prototype.moment = moment;
Vue.use(Vuetify);

new Vue({
    vuetify : new Vuetify(),
    router,
    render: (h) => h(App),
}).$mount('#app');
