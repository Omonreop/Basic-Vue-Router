<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div>
    <RouterLink active-class="active" to="/">Home</RouterLink>
    <RouterLink active-class="active" to="/about">About</RouterLink>
  </div>
</template>
<style scoped>
div {
  display: flex;
  gap: 10px;
}

.active {
  font-weight: 900;
  color: white;
  background-color: red;
  padding: 5px 10px;
  border-radius: 5px;
  text-decoration: none;
}
</style>
