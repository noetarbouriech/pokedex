<script setup>
defineProps({
  evol: Object
})
function getPage(url) {
  let id = url.split('/');
  return `/pokemon/${id[id.length-2]}`;
}
</script>

<template>
  <li>
    <div v-if="evol">
      <RouterLink :to="getPage(evol.species.url)">{{ evol.species.name }}</RouterLink>
    </div>
    <ul v-if="evol && evol.evolves_to.length !== 0">
      <PokemonEvolutionNode
        v-for="evol in evol.evolves_to"
        :evol="evol"
       />
    </ul>
  </li>
</template>

<style scoped>
a:hover {
  color: var(--gray);
}
li {
  list-style-type: "þ";
}
ul, li {
  padding-left: 10px;
}
</style>