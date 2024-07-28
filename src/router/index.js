import { createRouter, createWebHistory } from 'vue-router'
import Products from '../views/Products.vue'
import Product from '../views/Product.vue'
import CartView from '../views/CartView.vue'

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
      path: '/products/:productId/:slug',
      name: 'product',
      component: Product,
      props: route => ({ productId: route.params.productId, slug: route.params.slug })
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    // {
    //   path: '/products',
    //   name: 'products',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/Products.vue')
    // }
  ]
});

export default router
