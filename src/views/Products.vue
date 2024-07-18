<script setup>
import ProductCard from '@/components/ProductCard.vue'
import { useProductStore } from '@/stores/productStore'
import { ref, computed, onMounted } from 'vue';

const productStore = useProductStore();
const loading = ref(true);

onMounted(async () => {
  await productStore.fetchProducts();
  loading.value = false;
});

const products = computed(() => productStore.products);
console.log(products.value);
</script>

<template>
  <main class="products">
    <div v-if="loading">Loading...</div>
    <ProductCard v-for="product in products" :product="product" />
    <ProductCard v-for="product in products" :product="product" />
    <ProductCard v-for="product in products" :product="product" />
    <ProductCard v-for="product in products" :product="product" />
    <ProductCard v-for="product in products" :product="product" />
    <ProductCard v-for="product in products" :product="product" />
    <ProductCard v-for="product in products" :product="product" />
    <ProductCard v-for="product in products" :product="product" />
    <ProductCard v-for="product in products" :product="product" />
    <ProductCard v-for="product in products" :product="product" />
    <ProductCard v-for="product in products" :product="product" />
    <ProductCard v-for="product in products" :product="product" />
    <ProductCard v-for="product in products" :product="product" />
    <ProductCard v-for="product in products" :product="product" />
    <ProductCard v-for="product in products" :product="product" />
    <ProductCard v-for="product in products" :product="product" />
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
  min-height: 100vh;
}
</style>
