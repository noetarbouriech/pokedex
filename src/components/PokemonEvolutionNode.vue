<script setup>
defineProps({
  evol: Object
})
</script>

<template>
  <li>
    <div v-if="evol">
      {{ evol.species.name }}
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
li {
  list-style-type: "⚪";
}
ul, li {
  padding-left: 10px;
}
</style>