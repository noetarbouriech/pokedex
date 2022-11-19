<script setup>
import { useRoute } from 'vue-router';
import { ref, computed, watchEffect } from 'vue';
import PokemonInfo from '../components/PokemonInfo.vue';

const route = useRoute();
const id = route.params.id;
const P = new Pokedex.Pokedex({protocol: 'https'});
const pokemon = ref({});
const species = ref({});

watchEffect(async () => {
  const dataPokemon = await P.getPokemonByName(id);
  const dataSpecies = await P.getPokemonSpeciesByName(id);
  console.log(dataPokemon, dataSpecies);
  pokemon.value = dataPokemon;
  species.value = dataSpecies;
})

const getDescription = computed(() =>  {
  if (!species.value.flavor_text_entries) { return; }
  return species.value.flavor_text_entries.findLast((desc) => {
    return desc.language.name === 'en';
  }).flavor_text;
});

</script>

<template>
  <main>
        <div class="pkm-card">
            <p class="pkm-id">#{{ id }}</p>
            <div class="pkm-img">
                <img :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/' + id + '.png'" alt="Pokemon image">
            </div>
            <div class="pkm-details">
                <h1>{{ pokemon.name }}</h1>
                <button disabled>info</button><button>stats</button><button>evolution</button>
                <div class="pkm-container">
                    <PokemonInfo :description="getDescription"></PokemonInfo>
                </div>
            </div>
        </div>
  </main>
</template>

<style scoped>
.pkm-card {
    width: 60%;
    max-width: 1200px;
    display: flex;
    justify-content: center;
    flex-direction: row;

    border-radius: 20px;
    background: rgba( 255, 255, 255, 0.05 );
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    backdrop-filter: blur(15px);
}
.pkm-img {
    width: 40%;
}
.pkm-img img {
    position: absolute;
    translate: -40% ;
}
.pkm-details {
    width: 60%;
    margin: 20px;
}
.pkm-details h1 {
    font-size: 42px;
}
.pkm-id {
    font-size: x-large;
    margin: 10px;
    position: absolute;
    right: 10px;
}

.pkm-container {
    padding-left: 10px;
    border-left: 5px solid whitesmoke;
    border-radius: 5px;
}

button {
    width: fit-content;
    height: fit-content;
    padding: 5px;
    margin-right: 10px;
    margin-bottom: 20px;
    text-align: center;
    border-radius: 20px;
    border: 0;
    background-color: whitesmoke;
    font-weight: 400;
    font-size: small;
    font-family: 'Silkscreen', cursive;
}
button:hover {
    background: rgb(175, 169, 169);
    cursor: pointer;
}
button:disabled {
    background: rgb(175, 169, 169);
    cursor: default;
}

 /* Extra small devices (phones, 768px and down) */
 @media only screen and (max-width: 768px) {
    .pkm-card {
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
        width: 80%;
        margin: 10px;
    }
 }
 
 /* Medium devices (landscape tablets, 768px and up) */
 @media only screen and (min-width: 600px) {
    .pkm-card {
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
        width: 60%;
        margin: 20px;
    }
 }

 /* Extra large devices (large laptops and desktops, 1200px and up) */
 @media only screen and (min-width: 1200px) {
    .pkm-card {
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
 } 
</style>