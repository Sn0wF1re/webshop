<template>
    <div class="navigation">
        <img class="logo" src="@/assets/pmlogo.svg">
        <div class="sub-nav">
            <router-link to="/">Home</router-link>
            <p>Shop</p>
            <p>Blog</p>
        </div>

        <div class="far-right">
            <button class="account">
                <font-awesome-icon icon="fa-solid fa-user" />
            </button>
            <Cart />
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
    padding: 1rem 2rem;
    font-family: "Inter", sans-serif;
    font-weight: 600;

    .logo {
        height: 4rem;
        width: auto;
    }

    .sub-nav {
        flex: 2;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        a {
            color: #e47e30;
            cursor: pointer;
        }

        p {
            margin: 0;
            padding: 0;
        }
    }

    .far-right {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;

        .account {
            border: none;
            color: #e47e30;
            background-color: #0a0908;
            cursor: pointer;
            padding: 1rem;
            font-family: "Inter", sans-serif;
            font-weight: 600;
            font-size: 1rem;
        }
    }
}
</style>