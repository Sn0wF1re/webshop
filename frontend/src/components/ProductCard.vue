<template>
    <div class="product-display">
        <router-link :to="{ name: 'product', params: { productId: product.id } }">
            <img :src="product.attributes.image.data.attributes.formats.small.url" :alt="product.attributes.name">
            <div class="product-details">
                <p>{{ product.attributes.name }}</p>
                <p>Kes{{ product.attributes.price }}</p>
            </div>
        </router-link>
        <button class="add-to-cart" @click="addToCart">Add to Cart</button>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useCartStore } from '@/stores/cartStore';

const props = defineProps({
    product: Object,
    required: true
});
// log the product object

onMounted(() => {
    console.log(props.product);
});

const cartStore = useCartStore();
const addToCart = () => {
  cartStore.addToCart(props.product);
  console.log(cartStore.cartCount);
};

</script>

<style scoped>
.product-display {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0.5rem 0;
    padding: 1rem;
    /* border: 16px solid #E47E30; */
    border-radius: none;
    width: 15rem;
    img {
        width: 100%;
        height: 15rem;
        background-color: whitesmoke;
        }

    img:hover {
        height: 16rem;
        width: auto;
        transition: 0.5s;
    }

    .product-details {
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        margin: 1rem 0;

        p {
            font-family: "Inter", sans-serif;
            font-size: 1rem;
        }
    }
    .add-to-cart {
        cursor: pointer;
        background-color: #E47E30;
        color: #272727;
        border: none;
        padding: 0.5rem;
        font-family: "Inter", sans-serif;
    }
}
</style>