<script setup>
defineProps({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})
</script>

<template>
  <RouterLink :to="{ name: 'pokemon', params: { id: id }}">
    <div class="card">
      <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`" :alt="`${name} sprite`">
      <h2>{{ name }}</h2>
      <span class="pkm-id">#{{ id }}</span>
    </div>
  </RouterLink>
</template>

<style scoped>
.card {
  margin: 20px;
  padding: 10px;
  width: 200px;
  height: 200px;
  text-align: center;
  overflow: hidden;
}
.card:hover {
  background: var(--bg-hover-color);
  cursor: pointer;
}
.card img {
  height: 70%;
}
.card h2 {
  margin: 0;
  font-family: 'Silkscreen', cursive;
  font-size: 18px;
}
</style>

