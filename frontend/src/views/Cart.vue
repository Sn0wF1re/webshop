<template>
    <button class="cart" @click="showCart">
      <span class="items-count">1</span>
      <font-awesome-icon icon="cart-shopping" class="cart-shopping" />
    </button>
    <div class="cart-info" v-if="showCartInfo">
      <div class="cart-header">
        <h3>Shopping Cart</h3>
        <span @click="showCart">close</span>
      </div>
      <div class="cart-item" v-for="i in 5">
          <img src="" alt="product.name" />
          <div class="cart-item-info">
              <h3>product.name</h3>
              <p>$ product.price</p>
              <p>Qty: 1</p>
              <button>Remove</button>
          </div>
      </div>
      <div class="summary">
          <h2>Summary</h2>
          <p>Total: $0.00</p>
          <div class="payment-gateways">
            <button class="crypto" @click="handlePayment('crypto')">Pay with Crypto</button>
            <button class="stripe" @click="handlePayment('stripe')">Pay with Stripe</button>
          </div>
      </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const showCartInfo = ref(false);
const showCart = () => {
  showCartInfo.value = !showCartInfo.value;
}

// async handlePayment(gateway) {
//   try {
//     const checkoutData = await cartStore.checkout(gateway);
//     if (gateway == 'stripe') {
//       const stripe = await loadStripe('your-key');
//       const { error } = await stripe.redirectToCheckout({
//         sessionId: checkoutData.sessionId,
//       });
  
//       if (error) {
//         console.error(`Stripe redirect error: ${error}`);
//       }
//     } else if (gateway == 'crypto') {
//       window.location.href = checkoutData.url;
//     }
//   } catch(err) {
//     console.error(`Checkout error: ${err}`);
//   }
// }
</script>

<style scoped>
.cart {
  background-color: none;
  border: none;
  margin: 1rem;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  
  .cart-shopping {
    font-size: 1rem;
    position: absolute;
    top: 0;
    right: 0;
  }

  .items-count {
    position: absolute;
    font-size: 14px;
    color: black;
    display: block;
    right: -10px;
    top: -10px;
  }
}
.cart-info {
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 40%;
    position: fixed;
    overflow: auto;
    top: 0;
    right: 0;
    bottom: 0;
    box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);

    .cart-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;

        span {
            display: block;
            cursor: pointer;
            text-decoration: underline;
        }
    }

    .cart-item {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 1.5rem;
    }
    .cart-item-info {
        display: flex;
        align-items: center;
        gap: 1.5rem;
    }

    .summary {
      .payment-gateways {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .crypto, .stripe {
          height: 2.5rem;
          background-color: #E47E30;
        }
      }
    }
}
button {
    cursor: pointer;
    border: none;
}

@media (max-width: 700px) {
    .cart-info {
        width: 95%;
    }
}
</style>