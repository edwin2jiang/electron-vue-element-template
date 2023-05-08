// 1. Define route components.
// These can be imported from other files
import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '@/views/home/Index.vue'

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: HomeView },
  { path: '/about', component: () => import('@/views/about/Index.vue') },
  { path: '/setting', component: () => import('@/views/setting/Index.vue') },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})
