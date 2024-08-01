<template>
  <router-link to="/cart" class="cart">
    <font-awesome-icon icon="cart-shopping" class="cart-shopping" />
    <span v-if="!cartCount" class="items-count">0</span>
    <span v-else class="items-count">{{ cartCount }}</span>
  </router-link>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useCartStore } from '@/stores/cartStore';


const cartStore = useCartStore();
const { cartCount } = storeToRefs(cartStore);
</script>

<style scoped>
.cart {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0a0908;
  border: none;
  padding-bottom: 1rem;
  position: relative;
  cursor: pointer;
  
  .cart-shopping {
    display: flex;
    align-items: center;
    font-size: 18px;
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 4px;
    color: #E47E30;
  }

  .items-count {
    position: absolute;
    font-family: 'Inter', sans-serif;
    color: #E47E30;
    right: -8px;
    top: -14px;
  }
}
</style>