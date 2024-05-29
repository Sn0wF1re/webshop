<template>
    <main>
        <ProductCard v-if="product" />
    </main>
    <div class="related-products" v-if="relatedProducts.length">
        <h2>Related Products</h2>
        <div class="related-products">
            <ProductCard v-for="product in relatedProducts" :key="product.id" :product="product" />
        </div>
    </div>
</template>

<script setup>
import ProductCard from '@/components/ProductCard.vue';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute();
const productId = route.params.id;

const product = ref(null);
const relatedProducts = ref([]);
</script>