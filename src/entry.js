import App from './App.vue'
import router from './router'
import mixins from './mixins'

// register global mixins.
Vue.mixin(mixins)

// create the app instance.
/*eslint-disable*/
new Vue(Vue.util.extend({ el: '#root', router }, App))

router.push('/')
