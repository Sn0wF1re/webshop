<template>
  <router-link to="/cart" class="cart">
    <font-awesome-icon icon="cart-shopping" class="cart-shopping" />
    <span v-if="!cartCount" class="items-count">0</span>
    <span v-else class="items-count">{{ cartCount }}</span>
  </router-link>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useCartStore } from '@/stores/cartStore';


const cartStore = useCartStore();
const { cartCount } = storeToRefs(cartStore);
</script>

<style scoped>
.cart {
  background-color: #0a0908;
  border: none;
  margin: 1rem 0;
  position: relative;
  cursor: pointer;
  
  .cart-shopping {
    font-size: 18px;
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 4px;
  }

  .items-count {
    position: absolute;
    font-family: 'Inter', sans-serif;
    color: #E47E30;
    right: -8px;
    top: -14px;
  }

  .cart-shopping {
    color: #E47E30;
  }
}
.cart-info {
    background-color: #f7f3f3;
    color: #272727;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 45%;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
    z-index: 1000;

    .cart-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        top: 0;
        position: absolute;
        margin-bottom: 1rem;
        color: #E47E30;
        width: 95%;

        span {
            display: block;
            cursor: pointer;
            text-decoration: underline;
        }
    }

    .empty-cart {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .cart-summary {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        gap: 1.5rem;
        margin-bottom: 1rem;
        margin-top: 2rem;

        img {
            width: 3rem;
            height: auto;
            object-fit: cover;
        }

        .cart-item-info {
            display: flex;
            align-items: center;
            gap: 1.5rem;
            font-family: "Cambay", sans-serif;

            input {
              width: 3rem;
              height: 1rem;
              padding: 0.25rem;
              font-family: "Cambay", sans-serif;
            }

            button {
              font-family: "Cambay", sans-serif;
              font-size: 1.25rem;
              margin: 0.25rem solid black;
              color: #272727;
            }
        }

        .summary {
          h2, p {
            margin-bottom: 0.5rem;
          }
        }
    }

    .summary {
      bottom: 0;
      position: absolute;
      width: 100%;
      background-color: #f7f3f3;

      h2 {
        color: #E47E30;
      }

      .payment-gateways {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        .crypto, .stripe {
          height: 2.5rem;
          background-color: #E47E30;
          font-family: "Inter", sans-serif;
          font-size: 14px;
          text-transform: uppercase;
          font-weight: bold;
          width: 100%;
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