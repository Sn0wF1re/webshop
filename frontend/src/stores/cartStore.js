import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import axios from 'axios';

export const useCartStore = defineStore('cartStore', () => {
    const cartItems = ref([]);
    const cartCount = ref(0);

    const cartTotal = computed(() => {
        return cartItems.value.reduce((acc, item) => acc + (item.attributes.price * item.quantity), 0).toFixed(2);
    });


    const addToCart = (product) => {
        const existingProduct = cartItems.value.find(item => item.id === product.id);

        if (existingProduct) {
            console.log('existingProduct', existingProduct);
        } else {
            cartItems.value.push({ ...product, quantity: 1 });
            cartCount.value++;
        }
        console.log(existingProduct);
        console.log(cartItems.value);
    }

    const updateQuantity = (product, newQuantity) => {
        const existingProduct = cartItems.value.find(item => item.id === product.id);

        if (newQuantity < 1) {
            newQuantity = 1;
        }

        if (existingProduct) {
            existingProduct.quantity = newQuantity;
            cartCount.value = cartItems.value.reduce((acc, item) => acc + item.quantity, 0);
        }
    }

    const removeFromCart = (product) => {
        const existingProduct = cartItems.value.find(item => item.id === product.id);

        if (existingProduct) {
            cartCount.value -= existingProduct.quantity;
            cartItems.value = cartItems.value.filter(item => item.id !== product.id);
        }
    }

    return {
        cartItems,
        cartCount,
        cartTotal,
        updateQuantity,
        addToCart,
        removeFromCart,
    }
});