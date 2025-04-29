<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed } from 'vue';
const route = useRoute();
const activeLink = computed(() => {
  switch (route.path) {
    case '/':
      return 'home';

    case '/about':
      return 'about';

    case '/blogs':
      return 'blogs';

    default:
      console.error('this page does not exists');
      break;
  }
});
</script>

<template>
  <header class="site-header-wrapper">
    <div class="logo-wrapper">
      <img src="../public/icon-green.png" alt="nuxt-logo" />
    </div>
    <div class="nav-links-wrapper">
      <NuxtLink
        to="/"
        class="nav-bar-page-name"
        :class="activeLink === 'home' ? 'active-nav-link' : ''"
        >HOME</NuxtLink
      >
      <NuxtLink
        to="/blogs"
        class="nav-bar-page-name"
        :class="activeLink === 'blogs' ? 'active-nav-link' : ''"
        >BLOGS</NuxtLink
      >
      <NuxtLink
        to="/about"
        class="nav-bar-page-name"
        :class="activeLink === 'about' ? 'active-nav-link' : ''"
        >ABOUT</NuxtLink
      >
    </div>
    <div class="search-bar-wrapper">
      <Icon name="uil:search" mode="svg" style="color: white" />
    </div>
  </header>
</template>

<style lang="scss">
.site-header-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: $Primary-black;
  padding: 20px 100px;
}
.logo-wrapper {
  width: 40px;
  img {
    width: 100%;
    height: 100%;
  }
}
.nav-links-wrapper {
  display: flex;
  align-items: center;
  flex-basis: calc(100% / 3);
  justify-content: space-between;
}
.nav-bar-page-name {
  padding: 10px;
  border: 1px solid transparent;
  color: $Primary_white;
  border-radius: 5px;
  &:hover {
    background: $Primary-color;
    color: $Primary-black;
  }
}
.active-nav-link {
  background-color: $Primary-color;
  color: $Primary-black;
}
</style>
