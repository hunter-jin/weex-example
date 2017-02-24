import Router from 'vue-router'
import IndexView from './views/IndexView.vue'
import FooView from './views/FooView.vue'
import TextView from './views/TextView.vue'
import ImageView from './views/ImageView.vue'
import InputView from './views/InputView.vue'
import ScrollerView from './views/ScrollerView.vue'
import ListView from './views/ListView.vue'
import SliderView from './views/SliderView.vue'
import WebView from './views/WebView.vue'
import InstanceAPI from './views/InstanceAPI.vue'
import Storage from './views/StorageView.vue'
import StreamView from './views/StreamView.vue'
import PickerView from './views/PickView.vue'

Vue.use(Router)

export default new Router({
  mode: 'abstract',
  routes: [
    { path: '/foo', component: FooView },
    { path: '/text', component: TextView },
    { path: '/image', component: ImageView },
    { path: '/input', component: InputView },
    { path: '/scroll', component: ScrollerView },
    { path: '/list', component: ListView },
    { path: '/slider', component: SliderView },
    { path: '/web', component: WebView },
    { path: '/iapi', component: InstanceAPI },
    { path: '/storage', component: Storage },
    { path: '/stream', component: StreamView },
    { path: '/picker', component: PickerView },
    { path: '/', component: IndexView }
  ]
})
