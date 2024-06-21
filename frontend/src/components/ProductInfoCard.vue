<template>
    <div class="product-info-card">
      <img :src="product.attributes.image.data.attributes.formats.small.url" :alt="product.attributes.name" />
        <div class="product-info">
            <h3>{{ product.attributes.name }}</h3>
            <p>Kes{{ product.attributes.price }}</p>
            <p> {{ product.attributes.description }}</p>
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
        </div>
        <button>Add to Cart</button>
    </div>
</template>

<script setup>
const props = defineProps({
    product: Object,
    required: true
});
</script>
<style scoped>
.product-info-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: none;
  height: 100%;

  button {
    margin-top: 1rem;
    cursor: pointer;
    font-family: "Cambay", sans-serif;
  }
}
</style>