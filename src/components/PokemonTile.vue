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
    margin: 20px;
    padding: 10px;
    width: 200px;
    height: 200px;
    text-align: center;

    border-radius: 20px;
    background: rgba( 255, 255, 255, 0.05 );
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    backdrop-filter: blur(15px);

    overflow: hidden;
}
.pokemon-card:hover {
    background: rgba(255, 255, 255, 0.2);
    cursor: pointer;
}
.pokemon-card img {
    height: 70%;
}
.pokemon-card h2 {
    margin: 0;
    font-family: 'Silkscreen', cursive;
    font-size: larger;
}
.pokemon-card h3 {
    margin: 0;
    position: absolute;
    left: 0px;
    top: 0px;
    padding: 8px;
    border-radius: 0px 0px 20px 0px;
    background-color: whitesmoke;
    color: black;
    font-family: 'Silkscreen', cursive;
    font-weight: 400;
}
</style>

