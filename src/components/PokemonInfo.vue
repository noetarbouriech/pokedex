<script setup>
defineProps({
  pokemon: Object,
  species: Object
})
const typesTable = {
  normal: {
    emoji: "โถ",
    color: "#aa9"
  },
  fire: {
    emoji: "๐ฅ",
    color: "#f42"
  },
  water: {
    emoji: "๐ง",
    color: "#39f"
  },
  electric: {
    emoji: "๐",
    color: "#fc3"
  },
  grass: {
    emoji: "๐ฟ",
    color: "#7c5"
  },
  ice: {
    emoji: "๐ง",
    color: "#6cf"
  },
  fighting: {
    emoji: "๐ฅ",
    color: "#b54"
  },
  poison: {
    emoji: "๐งช",
    color: "#a59"
  },
  ground: {
    emoji: "โฑ",
    color: "#db5"
  },
  flying: {
    emoji: "๐ช",
    color: "#89f"
  },
  psychic: {
    emoji: "๐ฎ",
    color: "#f59"
  },
  bug: {
    emoji: "๐ฆ",
    color: "#ab2"
  },
  rock: {
    emoji: "๐ชจ",
    color: "#ba6"
  },
  ghost: {
    emoji: "๐ป",
    color: "#66b"
  },
  dragon: {
    emoji: "๐",
    color: "#76e"
  },
  dark: {
    emoji: "๐",
    color: "#754"
  },
  steel: {
    emoji: "๐ฉ",
    color: "#aab"
  },
  fairy: {
    emoji: "๐ง",
    color: "#e9e"
  },
}
</script>

<template>
  <article>
    <section>
      <h2>Types</h2>
      <ul class="pkm-type">
        <li v-for="slot in pokemon.types" :style="{'background-color': typesTable[slot.type.name].color}">
          {{ typesTable[slot.type.name].emoji }} {{ slot.type.name }}
        </li>
      </ul>
    </section>
    <section>
      <h2>Description</h2>
      <p>{{ species.flavor_text_entries?.findLast((desc) => { return desc.language.name === 'en'}).flavor_text }}</p>
    </section>
    <section>
      <h2>Abilities</h2>
      <ul>
        <li v-for="ab in pokemon.abilities">{{ ab.ability.name }}</li>
      </ul>
    </section>
  </article>
</template>

<style scoped>
.pkm-type {
  margin-top: 10px;
  padding-bottom: 10px;
}
.pkm-type > li {
  display: inline;
  width: fit-content;
  border-radius: 20px;
  margin-right: 5px;
  padding: 5px;
  color: var(--secondary-color);
  text-shadow: 2px 2px 4px var(--gray);
}
</style>