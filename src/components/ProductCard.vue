<template>
    <div class="product-display">
        <router-link :to="{ name: 'product', params: { productId: product.id, slug: product.attributes.slug } }">
            <img :src="product.attributes.cover_photo.data.attributes.formats.small.url" :alt="product.attributes.mask_id">
        </router-link>
        <div class="product-details">
            <div class="product-info">
                <p>{{ product.attributes.mask_id }}</p>
                <p>kes {{ product.attributes.price_kes }} / usd {{ product.attributes.price_usd }}</p>
            </div>
            <button class="add-to-cart" @click="addToCart">Add to Cart</button>
        </div>
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
        flex-direction: column;
        justify-content: space-between;
        gap: 1rem;
        margin: 1rem 0;

        .product-info {
            display: flex;
            justify-content: space-between;
        }

        p {
            font-family: "Inter", sans-serif;
            font-size: 1rem;
            font-weight: bold;
        }
    }
    .add-to-cart {
        cursor: pointer;
        background-color: #E47E30;
        color: #272727;
        border: none;
        padding: 0.5rem;
        font-family: "Inter", sans-serif;
        font-weight: bold;
    }
}
</style>