<template>
    <div class="footer">
        <div class="contacts">
            <h2>Find Us</h2>
            <p>1234 Main St</p>
            <p>City, State, 12345</p>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>Email</p>
        </div>
        <div class="info">
            <h2>Useful Information</h2>
            <p>Return Policy</p>
            <p>Shipping Policy</p>
            <p>Terms of Service</p>
        </div>
        <div class="newsletter">
            <h2>Newsletter</h2>
            <p>Sign up for our newsletter to receive updates on new products and discounts.</p>
            <div class="email-input">
                <input type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.footer {
    display: flex;
    justify-content: space-between;
    background-color: #e47e30;
    padding: 3rem;
    column-gap: 3rem;
    position: relative;
    bottom: 0;
    right: 0;
    left: 0;
    
    h2 {
        color: #0a0908;
        font-family: "Inter", sans-serif;
        font-weight: 500;
        font-size: 1.5rem;
    }

    .contacts, .info, .newsletter {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .newsletter {

        input, button {
            border: none;
            padding: 0.5rem;
            font-family: "Cambay", sans-serif;
        }

        button {
            background-color: #272727;
            color: #fff;
            cursor: pointer;
        }
    }
}
</style>

<script setup>
</script>