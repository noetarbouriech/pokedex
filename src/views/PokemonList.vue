<script setup>
import PokemonTile from '../components/PokemonTile.vue';
import { ref, watchEffect } from 'vue';

const P = new Pokedex.Pokedex({protocol: 'https', cachedImages: true});
const pokemons = ref([]);
const page = ref(0);
const search = ref('');

watchEffect(async () => {
  const data = await P.getPokemonSpecies();
  pokemons.value = await data.results.map((pkm, id) => { 
    pkm.id = id + 1;
    return pkm;
  });
})

function searchPokemons(pkm) {
  return pkm.filter(data => data.name.toLowerCase().startsWith(search.value.toLowerCase()));
}
</script>

<template>
  <main>
    <input placeholder="Search" type="search" v-model="search">
    <PokemonTile v-for="pokemon in searchPokemons(pokemons).slice(page*50,(page+1)*50)" 
    :name=pokemon.name
    :id=pokemon.id
    />
    <button :disabled="page === 0" @click="page--">Previous Page</button>
    <button :disabled="page >= searchPokemons(pokemons).length/50-1" @click="page++">Next Page</button>
  </main>
</template>