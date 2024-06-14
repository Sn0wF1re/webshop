<template>
    <div class="product-card">
      <img src="" alt="product.name" />
        <div class="product-info">
            <h3>product.name</h3>
            <p>$ product.price</p>
            <p>$ product.description</p>
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

</script>
<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: none;
  width: 15rem;

  button {
    margin-top: 1rem;
    cursor: pointer;
    font-family: "Cambay", sans-serif;
  }
}
</style>