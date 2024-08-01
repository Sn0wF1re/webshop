<template>
    <div v-if="!cartStore.cartCount" class="empty-cart">
        <p>No items in cart</p>
    </div>
    
    <div v-else class="cart-summary">
        <div class="heading">
            <h2>Your Cart</h2>
            <p>Check your items before proceeding to pay</p>
        </div>

        <div class="cart-item-info">
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Product</th>
                        <th>Color</th>
                        <th>Size</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Remove</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="product in cartItems" :key="`${product.id}-${product.color}-${product.size}`">
                        <td><img :src="product.attributes.cover_photo.data.attributes.formats.small.url"
                            :alt="product.attributes.mask_id" /></td>
                        <td><p>{{ product.attributes.mask_id }}</p></td>
                        <td><p>{{ product.color }}</p></td>
                        <td><p>{{ product.size }}</p></td>
                        <td><p>kes {{ product.attributes.price_kes }} / usd {{ product.attributes.price_usd }}</p></td>
                        <td>
                            <div class="quantity">
                                <label :for="'update-quantity-' + product.id">Quantity: </label>
                                <q-input
                                  :id="'update-quantity-' + product.id"
                                  v-model.number="product.quantity"
                                  @change="updateQuantity(product, Number(product.quantity))"
                                  type="number"
                                  min="1"
                                  borderless
                                  style="max-width: 50px"
                                />
                            </div>
                        </td>
                        <td><button @click="cartStore.removeFromCart(product)" class="remove">Remove</button></td>
                    </tr>
                </tbody>
            </table>
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
import { storeToRefs } from 'pinia';
import HelioCheckout from '@/components/HelioCheckout.vue';


const cartStore = useCartStore();
const { cartItems  } = storeToRefs(cartStore);

const totalKes = computed(() => cartStore.cartTotal('kes'));
const totalUsd = computed(() => cartStore.cartTotal('usd'));

const updateQuantity = (product, quantity) => {
    cartStore.updateQuantity(product, quantity);
};
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
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 2rem;
    margin-top: 2rem;
    min-height: 100vh;

    .heading {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        h2 {
            font-family: "Inter", sans-serif;
            font-size: 1.5rem;
            font-weight: bold;
            color: #E47E30;
        }
    }

    .cart-item-info {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 8px;
        gap: 5rem;
        font-family: "Cambay", sans-serif;
        width: 95%;
        margin: 0 3rem;

        table, tr {
            border: 1px solid #e6a97a;
        }
        
        table {
            width: 100vw;
            border-collapse: collapse;
        }

        th {
            background-color: #E47E30;
            padding: 1rem 0;
        }

        td {
            padding: 0.5rem 2rem;
            margin: 0.5rem;
            text-align: center;
        }

        img {
        width: 3rem;
        height: auto;
        object-fit: cover;
        }

        p {
            margin: 0;
        }

        .quantity {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;
        }

        .remove {
            font-family: "Inter", sans-serif;
            background-color: #E47E30;
            margin: 0.25rem solid black;
            padding: 8px;
            color: #000;
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
            font-weight: bold;
            color: #E47E30;
        }

        .cart-total {
            font-weight: bold;
            font-size: 1.2rem;
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
}

button {
    cursor: pointer;
    border: none;
    border-radius: 8px;
}

/* @media (max-width: 700px) {
    .cart-info {
        width: 95%;
    }
} */
</style>