import { createRouter, createWebHistory } from 'vue-router'
import PokemonList from '../views/PokemonList.vue'
import PokemonDetails from '../views/PokemonDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Liste Pokemons',
      component: PokemonList
    },
    {
      path: '/pokemon/:id',
      name: 'Description Pokemon',
      component: PokemonDetails
    }
  ]
})

export default router
