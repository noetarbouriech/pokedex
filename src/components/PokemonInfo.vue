<script setup>
defineProps({
  description: String,
  types: Array
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
      <li v-for="slot in types" :style="{'background-color': typesTable[slot.type.name].color}">
        {{ typesTable[slot.type.name].emoji }} {{ slot.type.name }}
      </li>
    </ul>
  </section>
  <section>
    <h2>Description</h2>
    <p>{{ description }}</p>
  </section>
</template>

<style scoped>
section {
    padding-left: 10px;
    border-left: 5px solid whitesmoke;
    border-radius: 5px;
    margin-bottom: 20px;
}
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