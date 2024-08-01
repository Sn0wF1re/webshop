<template>
  <main class="products">
    <div class="search">
      <SearchForm @emit-search="handleSearch" />
    </div>

    <div v-if="loading" class="loading">
      <q-spinner-puff color="primary" size="5.5rem" />
    </div>

    <div class="products-list">
      <ProductCard v-for="product in filteredProducts" :product="product" />
      <ProductCard v-for="product in filteredProducts" :product="product" />
      <ProductCard v-for="product in filteredProducts" :product="product" />
      <ProductCard v-for="product in filteredProducts" :product="product" />
      <ProductCard v-for="product in filteredProducts" :product="product" />
      <ProductCard v-for="product in filteredProducts" :product="product" />
      <ProductCard v-for="product in filteredProducts" :product="product" />
      <ProductCard v-for="product in filteredProducts" :product="product" />
      <ProductCard v-for="product in filteredProducts" :product="product" />
      <ProductCard v-for="product in filteredProducts" :product="product" />
      <ProductCard v-for="product in filteredProducts" :product="product" />
      <ProductCard v-for="product in filteredProducts" :product="product" />
      <ProductCard v-for="product in filteredProducts" :product="product" />
      <ProductCard v-for="product in filteredProducts" :product="product" />
      <ProductCard v-for="product in filteredProducts" :product="product" />
      <ProductCard v-for="product in filteredProducts" :product="product" />
    </div>
  </main>
</template>

<script setup>
import ProductCard from '@/components/ProductCard.vue'
import { useProductStore } from '@/stores/productStore'
import { ref, computed, onMounted } from 'vue';
import SearchForm from '@/components/SearchForm.vue';

const productStore = useProductStore();
const loading = ref(true);
const searchFilter = ref('');

onMounted(async () => {
  await productStore.fetchProducts();
  loading.value = false;
});

const filteredProducts = computed(() => {
  if (searchFilter.value !== '' && searchFilter.value !== undefined) {
    return productStore.products.filter(product => {
      return product.attributes.mask_id.toLowerCase().includes(searchFilter.value.toLowerCase()) ||
      product.attributes.category.data.attributes.name.toLowerCase().includes(searchFilter.value.toLowerCase());
    });
  }

  return productStore.products;
});

console.log('filtered products: ' + filteredProducts.value);

const handleSearch = (value) => {
  searchFilter.value = value;
  console.log(searchFilter.value);
}

console.log('products: ' + productStore.products);
</script>

<style scoped>
.products {
  display: flex;
  flex-direction: column;
  margin: 1rem;
  min-height: 100vh;

  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    z-index: 100;
    background-color: #ffffff;
  }
}

.search {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  font-family: 'Cambay', sans-serif;
}

.products-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
}
</style>
