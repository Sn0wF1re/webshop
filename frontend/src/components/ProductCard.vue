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
    margin: 1rem 0;
    padding: 1rem;
    border: 16px solid #E47E30;
    border-radius: 1.5rem;
    width: 15rem;
    background-color: whitesmoke;
    img {
        width: 100%;
        height: 10rem;
    }
}
</style>