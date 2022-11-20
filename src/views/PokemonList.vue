<script setup>
import PokemonTile from '../components/PokemonTile.vue';
import { inject, ref, watchEffect } from 'vue';

const P = inject('pokedex');
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
  return pkm.filter(data => { 
    return data.name.toLowerCase().startsWith(search.value.toLowerCase())
    || data.id.toString().startsWith(search.value.toString());
  });
}
</script>

<template>
  <main>
    <input placeholder="🔍 Search by name or id" type="search" v-model="search" @keydown="page=0">
    <div class="card-grid">
      <PokemonTile v-for="pokemon in searchPokemons(pokemons).slice(page*50,(page+1)*50)" 
      :name=pokemon.name
      :id=pokemon.id
      />
    </div>
    <div class="nav-btn">
      <button :disabled="page === 0" @click="page--">&lt;</button>
      <button :disabled="page >= searchPokemons(pokemons).length/50-1" @click="page++">></button>
    </div>
  </main>
</template>

<style scoped>
input {
  border-radius: 20px;
  border: none;
  padding: 8px;
  background-color: var(--primary-color);
  min-width: 220px;
  width: 20vw;
  font-family: 'Silkscreen', cursive;
  font-weight: 400;
}

.card-grid {
  margin-top: 20px;
  max-width: calc(260px * 5);
  min-width: 220px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
}
.nav-btn {
  position: fixed;
  bottom: 2vh;
}
button {
  width: 50px;
  height: 50px;
  padding: 10px;
  text-align: center;
  border-radius: 2rem;
  border: 0;
  margin: 5px;
  background-color: var(--primary-color);
  font-weight: 700;
  font-size: 20px;
  font-family: 'Silkscreen', cursive;
}
button:hover {
  background: var(--gray);
  cursor: pointer;
}
button:disabled {
  background: var(--gray);
  cursor: default;
}
</style>