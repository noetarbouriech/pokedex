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
      <div class="pokemon-card">
          <img :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + id + '.png'" alt="Pokemon image">
          <h2>{{ name }}</h2>
          <h3>#{{ id }}</h3>
      </div>
    </RouterLink>
</template>

<style scoped>
.pokemon-card {
    background: whitesmoke;
    box-shadow: 5px 5px 2px grey;
    border-radius: 5px;
    margin: 20px;
    padding: 10px;
    border: 1px black;
    width: 200px;
    text-align: center;
}
.pokemon-card:hover {
    background-color: aliceblue;
    cursor: pointer;
}
</style>

