<template>
    <div id="helioCheckoutContainer"></div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import { useCartStore } from '@/stores/cartStore'; // Update the path as necessary

const cartStore = useCartStore();
let scriptLoaded = ref(false);

// Load the Helio script
onMounted(() => {
    const script = document.createElement('script');
    script.id = "helioCheckoutScript";
    script.type = 'module';
    script.async = true;
    script.defer = true;
    script.crossOrigin = 'anonymous';
    script.src = 'https://embed.hel.io/assets/index-v1.js';
    script.onload = () => {
        scriptLoaded.value = true;
        initHelioCheckout();
    };
    document.head.appendChild(script);
});

// Watch for changes in cartTotal or scriptLoaded and re-initialize Helio checkout
watch([() => cartStore.cartTotal, scriptLoaded], () => {
    if (scriptLoaded.value) {
        initHelioCheckout();
    }
}, { immediate: true });

function initHelioCheckout() {
    if (window.helioCheckout) {
        window.helioCheckout(
            document.getElementById("helioCheckoutContainer"),
            {
                paylinkId: "66966a6a502f507417b2f59c",
                theme: {"colors":{"primaryButtonBackground":"#E47E30", "primaryButtonText": "#000000"}},
                customTexts: {
                    mainButtonTitle: "Pay with Crypto/Card"
                },
                primaryPaymentMethod: "fiat",
                amount: cartStore.cartTotal, // Use the cartTotal from cartStore
                display: "button",
                onSuccess: event => console.log(event),
                onError: event => console.log(event),
                onPending: event => console.log(event),
                onCancel: () => console.log("Cancelled payment"),
                onStartPayment: () => console.log("Starting payment"),
            }
        );
    }
}
</script>

<style scoped>
</style>