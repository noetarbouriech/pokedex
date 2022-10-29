<script setup>
import PokemonTile from '../components/PokemonTile.vue';
import { ref, watchEffect } from 'vue';

const P = new Pokedex.Pokedex({protocol: 'https', cachedImages: true});
const pokemons = ref([]);
const page = ref(0);
const search = ref('');

watchEffect(async () => {
  const data = await P.getPokemonSpecies();
  console.log(data);
  pokemons.value = await data.results;
})

function searchPokemons(pkm) {
  return pkm.filter(data => data.name.toLowerCase().startsWith(search.value.toLowerCase()));
}

function getPkmIndex(name) {
  return pokemons.value.findIndex((i) => i.name === name) + 1;
}
</script>
<template>
  <main>
    <input placeholder="Search" type="search" v-model="search">
    <PokemonTile v-for="pokemon in searchPokemons(pokemons).slice(page*50,(page+1)*50)" 
    :name=pokemon.name
    :id=getPkmIndex(pokemon.name)
    />
    <button :disabled="page === 0" @click="page--">Previous Page</button>
    <button :disabled="page >= searchPokemons(pokemons).length/50-1" @click="page++">Next Page</button>
  </main>
</template>