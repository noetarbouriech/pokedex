<script setup>
import { useRoute } from 'vue-router';
import { shallowRef, ref, inject, watchEffect } from 'vue';
import PokemonInfo from '../components/PokemonInfo.vue';
import PokemonStats from '../components/PokemonStats.vue';
import router from '../router';

const P = inject('pokedex');
const route = useRoute();
const id = route.params.id;
const pokemon = ref({});
const species = ref({});
const tabs = [
  {
    name: "info",
    component: PokemonInfo
  },
  {
    name: "stats",
    component: PokemonStats
  }
];
const activeTab = shallowRef(PokemonInfo);

watchEffect(async () => {
  try {
    const dataPokemon = await P.getPokemonByName(id);
    const dataSpecies = await P.getPokemonSpeciesByName(id);
    pokemon.value = dataPokemon;
    species.value = dataSpecies;
    document.title = `Pokedex - ${pokemon.value.name}`;
  } catch(error) {
    console.error(error);
    router.push({name: 'NotFound'});
  }
})
</script>

<template>
  <main>
    <div class="card">
      <p class="pkm-id">#{{ id }}</p>
        <div class="pkm-img">
          <img :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/' + id + '.png'" alt="Pokemon image">
        </div>
        <div class="pkm-details">
          <h1>{{ pokemon.name }}</h1>
          <button v-for="tab in tabs" :key="tab" @click="activeTab = tab.component" :disabled="tab.component === activeTab" >
            {{ tab.name }}
          </button>
          <component :is='activeTab' :pokemon="pokemon" :species="species"></component>
        </div>
    </div>
  </main>
</template>

<style scoped>
.card {
  width: 60%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  flex-direction: row;
}
.pkm-img {
  width: 40%;
}
.pkm-img img {
  position: absolute;
  translate: -40% ;
}
.pkm-details {
  width: fit-content;
  margin: 20px;
}

button {
  width: fit-content;
  height: fit-content;
  margin-right: 10px;
  margin-bottom: 20px;
  border: 0;
  font-weight: 400;
  font-size: 18px;
  font-family: 'Silkscreen', cursive;
  background: none;
  color: var(--gray);
}
button:hover {
  color: var(--primary-color);
  cursor: pointer;
}
button:disabled {
  cursor: default;
  border-bottom: var(--primary-color) solid 5px;
  border-radius: 5px;
  color: var(--primary-color);
}

/* Extra small devices (phones, 768px and down) */
@media only screen and (max-width: 768px) {
  .card {
    width: 90%;
    max-width: none;
    flex-wrap: wrap;
  }
  .pkm-img {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .pkm-img img {
    position: relative;
    translate: 0;
    width: 80%;
  }
  .pkm-details {
    width: 100%;
    margin: 10px;
  }
  .pkm-details h1 {
    font-size: 26px;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 600px) {
  .card {
    width: 60%;
    flex-wrap: wrap;
  }
  .pkm-img {
    width: 100%;
    max-width: none;
    display: flex;
    justify-content: center;
  }
  .pkm-img img {
    position: relative;
    translate: 0;
    width: 60%;
  }
  .pkm-details {
    width: 80%;
    margin: 20px;
  }
  .pkm-details h1 {
    font-size: 30px;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .card {
    width: 60%;
    flex-wrap: nowrap;
  }
  .pkm-img {
    width: 40%;
    max-width: 300px;
    display: block;
  }
  .pkm-img img {
    position: absolute;
    translate: -40%;
    width: auto;
  }
  .pkm-details {
    width: 60%;
    margin: 20px;
  }
  .pkm-details h1 {
    font-size: 42px;
  }
}
</style>