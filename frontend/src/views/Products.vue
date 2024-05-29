<script setup>
import ProductCard from '@/components/ProductCard.vue'
</script>

<template>
  <main class="products">
    <ProductCard v-for="i in 20" />
  </main>
</template>

<style scoped>
.products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  margin-top: 2rem;
  justify-items: center;
  align-items: center;
}
</style>
