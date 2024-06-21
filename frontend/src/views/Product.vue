<template>
    <main>
        <div v-if="loading">Loading</div>
        <ProductInfoCard :product="product" />
        <router-view />
    </main>
    <!-- <div class="related-products" v-if="relatedProducts.length">
        <h2>Related Products</h2>
        <div class="related-products">
            <ProductCard v-for="product in relatedProducts" :key="product.id" :product="product" />
        </div>
    </div> -->
</template>

<script setup>
import ProductInfoCard from '@/components/ProductInfoCard.vue';
// import ProductCard from '@/components/ProductCard.vue';
import { useRoute } from 'vue-router';
import { useProductStore } from '@/stores/productStore'
import { ref, onMounted } from 'vue';

const productStore = useProductStore();
// const route = useRoute();
// const productId = route.params.productId;
const props = defineProps({
    productId: String,
});
const product = ref(null);
// const relatedProducts = ref([]);
const loading = ref(true);

onMounted(async () => {
  await productStore.fetchProduct(productId);
  product.value = productStore.product;
  loading.value = false;
});
</script>