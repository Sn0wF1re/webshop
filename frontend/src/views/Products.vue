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
  /* display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center; */
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  margin: 2rem;
  /* margin-top: 2rem; */
}
</style>
