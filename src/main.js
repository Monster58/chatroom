import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  container,
  header,
  aside,
  main,
  avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Input,
  Message
} from 'element-ui';

Vue.use(container).use(header).use(aside).use(main).use(avatar).use(Button).use(Dropdown).use(DropdownItem).use(DropdownMenu).use(Input)

Vue.prototype.$message = Message



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
