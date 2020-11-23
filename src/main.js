import Vue from 'vue'
import App from './App.vue'
import dataV from '@jiaminghi/data-view'
import router from './router'

import request from "@/assets/http/service";
import API from '@/assets/http/apiUrl'

Vue.use(dataV)
Vue.prototype.request = request
Vue.prototype.Api = API

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
