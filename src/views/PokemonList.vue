<script setup>
import PokemonTile from '../components/PokemonTile.vue';
import { ref, watchEffect } from 'vue';

const P = new Pokedex.Pokedex({protocol: 'https', cachedImages: true});
const pokemons = ref(null);
const page = ref(0);

watchEffect(async () => {
  const data = await P.getPokemonsList();
  console.log(data);
  pokemons.value = await data.results;
})
</script>
<template>
  <main>
    <PokemonTile v-for="(pokemon, index) in pokemons.slice(page*50,(page+1)*50)" 
    :name=pokemon.name
    :id=(index+1)+page*50
    />
    <button :disabled="page === 0" @click="page--">Previous Page</button>
    <button :disabled="page >= pokemons.length/50-1" @click="page++">Next Page</button>
  </main>
</template>