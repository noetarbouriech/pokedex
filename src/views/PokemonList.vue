<script setup>
import PokemonTile from '../components/PokemonTile.vue';
let pokemons = [
    {
        id: 1,
        name: "test",
    },
    {
        id: 2,
        name: "test2",
    }
];
</script>

<template>
  <main>
    <PokemonTile v-for="pokemon in pokemons" 
    :name=pokemon.name
    :id=pokemon.id
    />
  </main>
</template>