<template>
    <div v-if="!cartStore.cartCount" class="empty-cart">
        <p>No items in cart</p>
    </div>
    <div v-else class="cart-summary">
        <div class="heading">
            <h2>Your Cart</h2>
            <p>Check your items before proceeding to pay</p>
        </div>

        <div class="cart-item-info" v-for="product in products" :key="product.id">
            <img :src="product.attributes.cover_photo.data.attributes.formats.small.url"
                :alt="product.attributes.mask_id" />
            <h3>{{ product.attributes.mask_id }}</h3>
            <p>kes {{ product.attributes.price_kes }} / usd {{ product.attributes.price_usd }}</p>
            <!-- <button @click="cartStore.removeFromCart(product)">-</button> -->
             <div class="quantity">
                 <label :for="'update-quantity-' + product.id">Quantity: </label>
                 <input type="number" v-model.number="product.quantity"
                     @change="cartStore.updateQuantity(product, product.quantity)" placeholder="e.g 5" min="1"
                     :id="'update-quantity-' + product.id"></input>
             </div>
            <!-- <button @click="cartStore.increaseQuantity(product)">+</button> -->
            <button @click="cartStore.removeFromCart(product)" class="remove">Remove</button>
        </div>
        <div class="summary">
            <h2>Summary</h2>
            <p class="cart-total">Total: kes {{ totalKes }} / usd {{ totalUsd }}</p>
            <div class="payment-gateways">
                <button class="crypto" @click="">Pay with Crypto</button>
                <button class="stripe" @click="handlePayment('stripe')">Pay with Stripe</button>
                <HelioCheckout />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, onBeforeMount, computed } from 'vue';
import { useCartStore } from '@/stores/cartStore';
import HelioCheckout from '@/components/HelioCheckout.vue';


const cartStore = useCartStore();
const products = cartStore.cartItems;

const totalKes = computed(() => cartStore.cartTotal('kes'));
const totalUsd = computed(() => cartStore.cartTotal('usd'));
let isLoaded = ref(false);

const showCartInfo = ref(false);
const showCart = () => {
    showCartInfo.value = !showCartInfo.value;
};

watch(() => products, (newVal, oldVal) => {
    if (newVal !== oldVal) {
        cartStore.updateQuantity();
    }
}, { deep: true });
</script>

<style scoped>
.empty-cart {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.cart-summary {
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
    align-items: center;
    /* justify-content: center; */
    gap: 1.5rem;
    /* margin-bottom: 1rem; */
    margin-top: 2rem;
    min-height: 100vh;
    /* overflow-x: scroll; */

    .heading {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
    }

    img {
        width: 3rem;
        height: auto;
        object-fit: cover;
    }

    h2 {
        font-family: "Inter", sans-serif;
        font-size: 1.5rem;
        color: #E47E30;
    }

    .cart-item-info {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #e6a97a;
        padding: 4px;
        gap: 10rem;
        font-family: "Cambay", sans-serif;
        width: 100%;

        input {
            width: 3rem;
            height: 1rem;
            padding: 0.25rem;
            font-family: "Cambay", sans-serif;
        }

        label {
            display: inline;
        }

        .remove {
            font-family: "Inter", sans-serif;
            /* font-size: 1.25rem; */
            background-color: #E47E30;
            margin: 0.25rem solid black;
            padding: 8px;
            color: #000;
            /* padding: 0 0.25rem; */
        }

        .remove:hover {
            background-color: #CF5014;
        }
    }

    .summary {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h2,
        p {
            margin-bottom: 0.5rem;
        }

        h2 {
            font-family: "Inter", sans-serif;
            font-size: 1.5rem;
            color: #E47E30;
        }

        .cart-total {
            font-weight: bold;
            font-size: 1.2rem;
        }
    }
}

.summary {
    bottom: 0;
    position: absolute;
    width: 100%;
    /* background-color: #f7f3f3; */

    h2 {
        color: #E47E30;
    }

    .payment-gateways {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        .crypto,
        .stripe {
            height: 2.75rem;
            background-color: #E47E30;
            font-family: "Inter", sans-serif;
            font-size: 14px;
            text-transform: uppercase;
            font-weight: bold;
            width: 240.05px;
        }

        .crypto:hover, .stripe:hover {
            background-color: #CF5014;
        }
    }
}

button {
    cursor: pointer;
    border: none;
    border-radius: 8px;
}

@media (max-width: 700px) {
    .cart-info {
        width: 95%;
    }
}
</style>