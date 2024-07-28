<template>
    <div class="product-info-card">
      <img :src="product.attributes.cover_photo.data.attributes.formats.small.url" :alt="product.attributes.mask_id" />
        <div class="product-info">
            <p>category: {{ product.attributes.category.data.attributes.name }}</p>
            <h3>{{ product.attributes.mask_id }}</h3>
            <p>kes {{ product.attributes.price_kes }} / usd {{ product.attributes.price_usd }}</p>
            <p> {{ product.attributes.description }}</p>

            <div class="variations">
              <label for="size">Size: </label>
              <select name="size" id="size" v-model="selectedSize">
                <option 
                v-for="size in availableSizes" 
                :value="size"
                >
                {{  size }}
                </option>
              </select>

              <label for="color">Color: </label>
              <select name="color" id="color" v-model="selectedColor">
                <option 
                v-for="color in availableColors" 
                :value="color"
                >
                {{  color }}
                </option>
              </select>
            </div>

            <div class="quantity">
              <label :for="'update-quantity-' + product.id">Quantity:</label>
              <input type="number" v-model.number="itemQuantity"
                placeholder="e.g 5" min="1"
                :id="'update-quantity-' + product.id">
              </input>
            </div>
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
              <button>
                <router-link to="/cart">View Cart</router-link>
              </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useCartStore } from '@/stores/cartStore';
import { storeToRefs } from 'pinia';

const props = defineProps({
    product: Object,
    required: true
});
console.log(props.product);

const cartStore = useCartStore();
const {itemQuantity, selectedSize, selectedColor, cartCount, cartItems} = storeToRefs(cartStore);
const availableSizes = new Set(props.product.attributes.product_variations.data.map((variation) => variation.attributes.size.data.attributes.type));
const availableColors = new Set(props.product.attributes.product_variations.data.map((variation) => variation.attributes.color.data.attributes.name));

const addToCart = () => {
  cartStore.addToCart(props.product);
  console.log(cartCount);
  console.log(cartItems)
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

    :nth-child(4) {
      font-weight: bold;
    }

    .variations {
      label {
        font-weight: bold;
      }

      select {
        padding: 0.25rem;
        border: 1px solid #e6a97a;
        font-family: "Inter", sans-serif;
        outline: none;
        text-align: center;
      }

      option {
        font-family: "Inter", sans-serif;
        outline: none;
        text-align: center;
        font-weight: normal;
      }

      #size {
        margin-right: 1rem;
      }
    }

    .quantity {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      label {
        font-weight: bold;
      }

      input {
        padding: 0.5rem;
        border: 1px solid #e6a97a;
        font-family: "Inter", sans-serif;
        outline: none;
      }
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
    font-weight: bold;
    width: 6rem;
  }
}
</style>