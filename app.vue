<script setup lang="ts">
import Footer from './components/footer.vue';
import Header from './components/header.vue';
</script>

<template>
  <Header />
  <div class="container">
    <NuxtPage />
  </div>
  <Footer />
</template>

<style lang="scss">
.container {
  padding: 0 100px;
}
</style>
