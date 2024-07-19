import { createRouter, createWebHistory } from 'vue-router'
import Products from '../views/Products.vue'
import Product from '../views/Product.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'products',
      component: Products
    },
    {
      path: '/products',
      redirect: '/'
    },
    {
      path: '/products/:productId',
      name: 'product',
      component: Product,
      props: route => ({ productId: route.params.productId })
    },
    // {
    //   path: '/cart',
    //   name: 'cart',
    //   component: Cart
    // },
    // {
    //   path: '/products',
    //   name: 'products',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/Products.vue')
    // }
  ]
})

export default router
