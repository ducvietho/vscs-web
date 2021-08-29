import Vue from 'vue'
import App from './App.vue'
import VueScrollactive from 'vue-scrollactive';
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'aos/dist/aos.css'
import jQuery from "jquery"
import VueYoutube from 'vue-youtube'
const $ = jQuery;
window.$ = $;

Vue.use(VueYoutube)
Vue.use(VueScrollactive);
Vue.use(BootstrapVue)
Vue.use(jQuery)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
