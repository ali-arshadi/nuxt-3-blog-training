<script setup lang="ts"></script>

<template>
  <footer class="site-footer-wrapper">
    <ul class="page-links-wrapper">
      <li>
        <NuxtLink to="/"> Home </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/blogs"> Blogs </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about"> About us </NuxtLink>
      </li>
    </ul>

    <div class="site-information-wrapper">
      <div class="footer-address-wrapper">
        <p>Address:</p>
        <p class="address">
          Lorem ipsum dolor, sit amet consectetur adipisicing
        </p>
      </div>
      <div class="footer-phone-wrapper">
        <p>phone:</p>
        <p class="phone-number">+989199999999</p>
      </div>
    </div>
    <div class="site-logo">
      <img src="../public/icon-green.png" alt="nuxt logo" />
    </div>
  </footer>
</template>

<style lang="scss">
.site-footer-wrapper {
  display: flex;
  justify-content: space-between;
  padding: 30px 100px;
  background: $Primary-black;
  min-height: 200px;
}
.page-links-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  list-style-type: disc;
  li {
    a {
      color: $Primary-white;
    }
    &::marker {
      color: white;
    }
  }
}
.site-information-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}
.footer-address-wrapper {
  p {
    color: $Primary-white;
  }
}
.footer-phone-wrapper {
  p {
    color: $Primary-white;
  }
}
.site-logo {
  flex-basis: 10%;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
