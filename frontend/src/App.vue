<template>
  <main>
    <Navigation />
    <router-view></router-view>
    <Footer />
  </main>
</template>

<script setup>
import Navigation from '@/components/Navigation.vue';
import Footer from '@/components/Footer.vue';
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  /* background-color: #ccd7c5; */
  color: #272727;
  font-family: 'Cambay', sans-serif;
}

a {
  text-decoration: none;
  color: #272727;
}
</style>