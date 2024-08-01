import { defineStore } from 'pinia';
import { ref } from 'vue';
import { Dialog } from 'quasar';

export const useCartStore = defineStore('cartStore', () => {
    const cartItems = ref([]);
    const cartCount = ref(0);
    const itemQuantity = ref(1);
    const selectedColor = ref('');
    const selectedSize = ref('');

    const cartTotal = (currency) => {
        if (currency == 'usd') {
            return cartItems.value.reduce((acc, item) => acc + (item.attributes.price_usd * item.quantity), 0).toFixed(2);
        } else if (currency == 'kes') {
            return cartItems.value.reduce((acc, item) => acc + (item.attributes.price_kes * item.quantity), 0).toFixed(2);
        }
    };


    const addToCart = (product) => {
        const existingProduct = cartItems.value.find(item => item.id === product.id && item.color === product.color && item.size === product.size); 

        if (!selectedColor.value && !selectedSize.value) {
            Dialog.create({
                title: 'Alert',
                message: 'Please select a color and size'
            });
            return;
        }else if (!selectedColor.value) {
            Dialog.create({
                title: 'Alert',
                message: 'Please select a color'
            });
            return;
        } else if (!selectedSize.value) {
            Dialog.create({
                title: 'Alert',
                message: 'Please select a size'
            });
            return;
        }

        if (!existingProduct) {
            cartItems.value.push({
                ...product,
                quantity: itemQuantity.value,
                color: selectedColor.value,
                size: selectedSize.value
            });
            cartCount.value += itemQuantity.value;
        }
        selectedColor.value = '';
        selectedSize.value = '';

        console.log(existingProduct);
        console.log(cartItems.value);
        console.log(`cart count: ${cartCount.value}`);
    }

    const updateQuantity = (product, newQuantity) => {
        const existingProduct = cartItems.value.find(item => item.id === product.id && item.color === product.color && item.size === product.size);

        if (newQuantity < 1) {
            newQuantity = 1;
        }

        if (existingProduct) {
            existingProduct.quantity = newQuantity;
            cartCount.value = cartItems.value.reduce((acc, item) => acc + item.quantity, 0);
        }
    }

    const removeFromCart = (product) => {
        const existingProduct = cartItems.value.find(item => item.id === product.id && item.color === product.color && item.size === product.size);

        if (existingProduct) {
            cartCount.value -= existingProduct.quantity;
            cartItems.value = cartItems.value.filter(item => !(item.id === product.id && item.color === product.color && item.size === product.size));
        }
    }

    return {
        cartItems,
        cartCount,
        itemQuantity,
        selectedColor,
        selectedSize,
        cartTotal,
        updateQuantity,
        addToCart,
        removeFromCart,
    }
});