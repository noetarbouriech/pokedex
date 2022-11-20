<script setup>
import { watchEffect, ref, inject } from 'vue';
import PokemonEvolutionNode from './PokemonEvolutionNode.vue';

const P = inject('pokedex');

const props = defineProps({
  species: {
    type: Object,
    required: true,
    default: {}
  }
})

const evol = ref({});

watchEffect(async () => {
  if (props.species.evolution_chain === null) { return; }
  let id = props.species.evolution_chain.url.split("/");
  const dataEvol = await P.getEvolutionChainById(id[id.length-2]);
  evol.value = dataEvol;
})
</script>

<template>
  <article>
    <section>
      <h2>Evolutions</h2>
      <ul>
        <PokemonEvolutionNode v-if="evol.chain" :evol="evol.chain"/>
        <li v-else>{{ props.species.varieties[0].pokemon.name }}</li> <!-- fix for bugged pokemons without evo chain -->
      </ul>
    </section>
  </article>
</template>

<style scoped>
section {
  padding-bottom: 10px;
}
ul {
  padding-top: 10px;
  padding-left: 20px;
}
li {
  padding-left: 10px;
  list-style-type: "þ";
}
</style>