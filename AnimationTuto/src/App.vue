<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="container">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </div>
  </header>
  <Transition name="route">
    <RouterView />
  </Transition>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.container {
  max-width: 300px;
  margin: 0 auto;
  margin-bottom: 10px;
}

.container a {
  margin-right: 5px;
}

.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.route-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.route-enter-active {
  transition: all 0.4s ease;
}

</style>
