import Vue from 'vue'
import Router from 'vue-router'

//views
import Home from '@/views/Home/Home'
import DetailPokemon from '@/views/DetailPokemon/DetailPokemon'

Vue.use(Router);

export default new Router({
  routes: [

    {
      path: '/',
      name: 'HomeView',
      component: Home
    },

    {
      path: '/detail/:pokemonName',
      name: 'DetailPokemon',
      component: DetailPokemon
    }
  ]
})
