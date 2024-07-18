<template>
    <div class="product-info-card">
      <img :src="product.attributes.image.data.attributes.formats.small.url" :alt="product.attributes.name" />
        <div class="product-info">
            <h3>{{ product.attributes.name }}</h3>
            <p> {{ product.attributes.description }}</p>
            <p>Kes{{ product.attributes.price }}</p>
            <div class="product-rating">
              <span>
                <!-- <i
                v-for="i in 5"
                :key="i"
                :class="product.rating >= i ? 'fa fa-star' : 'fa fa-star-o'"
                ></i> -->
                rating
              </span>
            </div>
            <div class="buttons">
              <button @click="addToCart">Add to Cart</button>
              <button>View Cart</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cartStore';

const props = defineProps({
    product: Object,
    required: true
});
console.log(props.product);

const cartStore = useCartStore();
const addToCart = () => {
  cartStore.addToCart(props.product);
  console.log(cartStore.cartCount);
};
</script>
<style scoped>
.product-info-card {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 3rem;
  padding: 1rem;
  margin: 1rem;
  border: 1px solid #e6a97a;
  border-radius: none;
  height: 100%;

  .product-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-left: 1rem;
    font-family: "Cambay", sans-serif;

    h3 {
      color: #E47E30;
      font-size: 1.5rem;
    }

    .buttons {
      display: flex;
      justify-content: space-between;
    }
  }

  button {
    cursor: pointer;
    background-color: #E47E30;
    color: #272727;
    border: none;
    padding: 0.5rem;
    font-family: "Inter", sans-serif;
    width: 6rem;
  }
}
</style>