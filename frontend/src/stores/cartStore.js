import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCartStore = defineStore('cartStore', () => {
    const cartItems = ref([]);
    const cartCount = ref(0);

    const addToCart = (product) => {
        const existingProduct = cartItems.value.find(item => item.id === product.id);

        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cartItems.value.push({ ...product, quantity: 1 });
            cartCount.value++;
        }
        console.log(existingProduct);
    }

    const removeFromCart = (product) => {
        const existingProduct = cartItems.value.find(item => item.id === product.id);

        if (existingProduct) {
            if (existingProduct.quantity === 1) {
                cartItems.value = cartItems.value.filter(item => item.id !== product.id);
            } else {
                existingProduct.quantity--;
            }
            cartCount.value--;
        }
    }

    return {
        cartItems,
        addToCart,
        removeFromCart
    }
});