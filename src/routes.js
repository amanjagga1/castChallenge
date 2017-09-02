import Home from './home/Home.vue'
import Search from './search/Search.vue'
import User from './user/User.vue'

export const routes = [
  {path: '/', component: Home},
  {path: '/search/:language', component: Search},
  {path: '/user', component: User}
];