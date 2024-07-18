<template>
    <main>
        <div v-if="loading">Loading</div>
        
        <div v-else-if="product">
            <ProductInfoCard :product="product" />
        </div>

        <div v-else>
            Product not found or loading failed
        </div>
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
import { useProductStore } from '@/stores/productStore'
import { ref, computed, onMounted } from 'vue';

const productStore = useProductStore();
// const route = useRoute();
// const productId = route.params.productId;
const props = defineProps({
    productId: String,
});

console.log(props.productId);
// const relatedProducts = ref([]);
const loading = ref(true);

onMounted(async () => {
  await productStore.fetchProduct(props.productId);
  loading.value = false;
});

const product = computed(() => productStore.product);
console.log(product.value);
</script>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    min-height: 100vh;
}
</style>