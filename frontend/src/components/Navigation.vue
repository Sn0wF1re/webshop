<template>
    <div class="navigation">
        <p class="logo">Pixel Morans</p>
        <div class="sub-nav">
            <p>Home</p>
            <p>Shop</p>
            <p>Blog</p>
        </div>

        <div class="far-right">
            <button class="account">
                <font-awesome-icon icon="fa-soli fa-user" />
                Account
            </button>
            <Cart class="cart" />
        </div>
    </div>

</template>

<script setup>
import Cart from '@/components/Cart.vue';
</script>

<style scoped>
.navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #0a0908;
    color: #e47e30;
    padding: 1rem 3rem;
    font-family: "Fredoka", sans-serif;

    .sub-nav {
        flex: 2;
        display: flex;
        justify-content: center;
        gap: 2rem;
    }

    .far-right {
        display: flex;
        gap: 3rem;

        .account {
            border: none;
            color: #e47e30;
            background-color: #0a0908;
            cursor: pointer;
            padding: 1rem;
        }
    }
}
</style>