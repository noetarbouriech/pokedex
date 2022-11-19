<script setup>
defineProps({
  pokemon: Object,
  species: Object
})
const typesTable = {
  normal: {
    emoji: "✶",
    color: "#aa9"
  },
  fire: {
    emoji: "🔥",
    color: "#f42"
  },
  water: {
    emoji: "💧",
    color: "#39f"
  },
  electric: {
    emoji: "🔌",
    color: "#fc3"
  },
  grass: {
    emoji: "🌿",
    color: "#7c5"
  },
  ice: {
    emoji: "🧊",
    color: "#6cf"
  },
  fighting: {
    emoji: "🥊",
    color: "#b54"
  },
  poison: {
    emoji: "🧪",
    color: "#a59"
  },
  ground: {
    emoji: "⛱",
    color: "#db5"
  },
  flying: {
    emoji: "🪁",
    color: "#89f"
  },
  psychic: {
    emoji: "🔮",
    color: "#f59"
  },
  bug: {
    emoji: "🦗",
    color: "#ab2"
  },
  rock: {
    emoji: "🪨",
    color: "#ba6"
  },
  ghost: {
    emoji: "👻",
    color: "#66b"
  },
  dragon: {
    emoji: "🐉",
    color: "#76e"
  },
  dark: {
    emoji: "🌃",
    color: "#754"
  },
  steel: {
    emoji: "🔩",
    color: "#aab"
  },
  fairy: {
    emoji: "🧚",
    color: "#e9e"
  },
}
</script>

<template>
  <section>
    <h2>Types</h2>
    <ul>
      <li v-for="slot in pokemon.types" :style="{'background-color': typesTable[slot.type.name].color}">
        {{ typesTable[slot.type.name].emoji }} {{ slot.type.name }}
      </li>
    </ul>
  </section>
  <section>
    <h2>Description</h2>
    <p>{{ species.flavor_text_entries.findLast((desc) => { return desc.language.name === 'en'}).flavor_text }}</p>
  </section>
</template>

<style scoped>
ul {
  margin-top: 10px;
  padding-bottom: 10px;
}
li {
  display: inline;
  width: fit-content;
  border-radius: 20px;
  margin-right: 5px;
  padding: 5px;
  color: black;
}
</style>