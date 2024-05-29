<template>
    <router-link to="`/products/${product.id}`">
        <div class="product-display">
            <img src="" alt="product.name">
            <p>product.name</p>
        </div>
    </router-link>
</template>

<style scoped>
.product-display {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    margin: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 15rem;
    img {
        width: 100%;
        height: 10rem;
    }
}
</style>