import Router from 'vue-router'
import IndexView from './views/IndexView.vue'
import FooView from './views/FooView.vue'
import TextView from './views/TextView.vue'

Vue.use(Router)

export default new Router({
  mode: 'abstract',
  routes: [
    { path: '/foo', component: FooView },
    { path: '/text', component: TextView },
    { path: '/', component: IndexView }
  ]
})
