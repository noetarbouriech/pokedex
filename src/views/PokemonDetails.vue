<script setup>
import { useRoute } from 'vue-router';
import { ref, watchEffect } from 'vue';

const route = useRoute();
const id = route.params.id;
const P = new Pokedex.Pokedex({protocol: 'https'});
const pokemon = ref({});

watchEffect(async () => {
  const data = await P.getPokemonByName(id);
  console.log(data);
  pokemon.value = await data;
})
</script>

<template>
  <main>
        <img :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + id + '.png'" alt="Pokemon image">
        <h1>{{ pokemon.name }}</h1>
        <h3>#{{ id }}</h3>
        <ul>
          <li>Types:</li>
          <ul>
            <li v-for="t of pokemon.types">- {{ t.type.name }}</li>
          </ul>
          <li>Height: {{ pokemon.height / 10 }}m</li>
          <li>Weight: {{ pokemon.weight / 10 }}kg</li>
        </ul>
  </main>
</template>