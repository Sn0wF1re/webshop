<template>
  <main>
    <!-- <router-link to="/">
      Products
    </router-link>
    <router-view /> -->
    <Cart />
    <Products />
  </main>
</template>

<script setup>
import Products from '@/views/Products.vue';
import Cart from '@/views/Cart.vue';
</script>