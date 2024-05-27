<template>
    <div class="cart">
      <h1>Shopping Cart</h1>
      <div class="cart-item" v-for="i in 5">
          <img src="" alt="product.name" />
          <div class="cart-item-info">
              <h3>product.name</h3>
              <p>$ product.price</p>
              <p>Qty: 1</p>
              <button>Remove</button>
          </div>
      </div>
      <div class="summary">
          <h2>Summary</h2>
          <p>Total: $0.00</p>
          <button>Checkout</button>
      </div>
    </div>
</template>

<style scoped>
.cart {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 30%;
    position: fixed;
    overflow: auto;
    top: 0;
    right: 0;
    bottom: 0;
    box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
    .cart-item {
        display: flex;
        align-items: center;
        gap: 1.5rem;
    }
    .cart-item-info {
        display: flex;
        align-items: center;
        gap: 1.5rem;
    }
}
button {
    cursor: pointer;
}
</style>