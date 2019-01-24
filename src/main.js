// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import $ from 'jquery'
import VueParticles from 'vue-particles'

// require styles
import 'swiper/dist/css/swiper.css'
import 'popper.js/dist/umd/popper.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import animated from 'animate.css'
import 'csshake/dist/csshake.css'
import './assets/iconfont/iconfont.css'

Vue.use(animated)
Vue.use(VueAwesomeSwiper)
Vue.use(VueParticles)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
