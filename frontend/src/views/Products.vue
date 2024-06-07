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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
  margin-top: 2rem;
}
</style>
