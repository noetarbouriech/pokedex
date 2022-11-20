<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1>Pokedex</h1>
  </header>
  <RouterView />
</template>

<style scoped>
header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3vh;
    margin-top: 3vh;
}
header h1 {
    font-size: 40px;
    font-family: 'Silkscreen', cursive;
    font-weight: 700;
}
</style>
