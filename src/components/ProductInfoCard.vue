<template>
  <div class="product-info-card">
    <img :src="product.attributes.cover_photo.data.attributes.formats.small.url" :alt="product.attributes.mask_id" />
    <div class="product-info">
      <div class="left">
        <h3>{{ product.attributes.mask_id }}</h3>
        <q-rating size="18px" v-model="stars" readonly disable color="primary" />
        <p>category: {{ product.attributes.category.data.attributes.name }}</p>
        <p>kes {{ product.attributes.price_kes }} / usd {{ product.attributes.price_usd }}</p>
  
        <div class="variations">
        <!-- <label for="size">Size: </label> -->
        <!-- <select name="size" id="size" v-model="selectedSize">
                <option 
                v-for="size in availableSizes" 
                :value="size"
                >
                {{  size }}
                </option>
              </select> -->

        <q-select v-model="selectedSize" :options="availableSizes" label="Size" stack-label />

        <!-- <label for="color">Color: </label> -->
        <!-- <select name="color" id="color" v-model="selectedColor">
                <option 
                v-for="color in availableColors" 
                :value="color"
                >
                {{  color }}
                </option>
              </select> -->
        <q-select v-model="selectedColor" :options="availableColors" label="Color" stack-label color="primary" />
        </div>
  
        <div class="quantity">
          <!-- <label :for="'update-quantity-' + product.id">Quantity:</label> -->
          <!-- <input type="number" v-model.number="itemQuantity"
                  placeholder="e.g 5" min="1"
                  :id="'update-quantity-' + product.id">
                </input> -->
          <q-input :id="'update-quantity-' + product.id" label="Quantity" v-model.number="itemQuantity" type="number"
            min="1" style="max-width: 200px" square />
        </div>
      </div>
    
      <div class="right">
        <div class="description">
          <!-- <h3>Description</h3> -->
          <p> {{ product.attributes.description }}</p>
        </div>
  
        <div class="buttons">
          <button @click="addToCart">Add to Cart</button>
          <button>
            <router-link to="/cart">View Cart</router-link>
          </button>
        </div>
        
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
const availableSizes = [...new Set(props.product.attributes.product_variations.data.map((variation) => variation.attributes.size.data.attributes.type))];
const availableColors = [...new Set(props.product.attributes.product_variations.data.map((variation) => variation.attributes.color.data.attributes.name))];
const stars = ref(4);

const addToCart = () => {
  cartStore.addToCart(props.product);
  console.log(cartCount);
  console.log(cartItems)
};
</script>

<style scoped>
.product-info-card {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 5rem;
  padding: 1rem;
  margin: 1rem;
  border: 1px solid #e6a97a;
  border-radius: none;
  height: 100%;

  .product-info {
    /* display: flex;
    justify-content: center;
    align-items: center; */
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-left: 1rem;
    font-family: "Cambay", sans-serif;

    h3 {
      color: #E47E30;
      font-size: 1.5rem;
    }

    :nth-child(4) {
      font-weight: bold;
    }

    .left {
      .variations {
        label {
          font-weight: bold;
        }
    
        select {
          padding: 0.25rem;
          border: 1px solid #e6a97a;
          font-family: "Cambay", sans-serif;
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
    }

    .right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      /* gap: 1rem; */
      font-family: "Cambay", sans-serif;
  
      h3 {
        color: #E47E30;
        font-size: 1.5rem;
        padding: 0;
        margin: 0;
      }
  
      .buttons {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        bottom: 0;
      }
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