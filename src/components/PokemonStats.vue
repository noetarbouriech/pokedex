<script setup>
defineProps({
    pokemon: Object
})
</script>

<template>
  <section>
    <h2>Stats</h2>
    <ul>
      <li v-for="stat in pokemon.stats">
        <label :for="stat.stat.name">{{ stat.stat.name }}:</label><br>
        <meter :id="stat.stat.name" :value="stat.base_stat" min="0" max="255" low="50" high="99" optimum="75"></meter>
        <span>{{ stat.base_stat }}</span>
      </li>
    </ul>
  </section>
</template>

<style scoped>
meter {
  width: 70%;
  height: 20px;
}
span {
  margin-left: 5px;
}
ul {
  width: 30vw;
  min-width: 240px;
}
li {
  margin: 5px;
}
</style>