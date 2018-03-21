<template lang='pug'>
  DefaultLayout
    section.pokedex-filters.mb-5(slot="filters")
      div.container
        div.row
          div.col-md-12.col-lg-6.ml-auto.mr-auto
            div.text-center
              label Busca a tu pokemon favorito
              input.form-control(type="text" placeholder="Introduce el nombre del pokemon" v-model="filter")
              small#emailHelp.form-text.text-muted Actualmente puede hacer búsquedas por nombre
    section.pokexex-items(slot="content")
      div.row
        div.col-md-4.col-lg-3.mb-3(v-for="(item, index) in filteredPokemon" :key="index" v-on:click.prevent="goToDetail(item)") 
          PokemonCard(v-bind:pokemon="item")
      div.row
        div.col-md-12.text-center.mt-3
          button.btn.btn-primary(v-if="filter === ''" @click.prevent="showMorePokemon()") Cargar más pokemon
</template>

<script>
import DefaultLayout from "@/layouts/DefaultLayout";
import { getPokemon } from "@/services/pokemon";
import PokemonCard from "@/components/PokemonCard";
import _ from 'lodash'

export default {
  name: "HomeView",
   components: {
    DefaultLayout,
    PokemonCard
  },
  data() {
    return {
      pokemon: [],
      limit: 12,
      filter: ''
    };
  },
  created() {
    getPokemon()
      .then(response => {
        console.log(response);
        this.pokemon = response.data;
      })
      .catch(err => console.log(err));
  },

  computed: {

    //es una propiedad-No se puede poner parámetros-realiza evaluaciones internas con datos disponibles
    filteredPokemon () {
      let filteredPokemon = (this.filter === '') ? this.pokemon : this.pokemon.filter(item => {
        return _.includes(item.name.toLowerCase(), this.filter.toLowerCase())
      })
      return filteredPokemon.slice(0, this.limit)
    }
  },
 
  methods: {
    showMorePokemon () {
      this.limit += 12
    },


//metodos para realizar eventos
    goToDetail (pokemon){
      this.$router.push({
        name: 'DetailPokemon',
        params: {
          pokemonName: pokemon.slug,
          pokemon: pokemon
        },
       
      })
    }
  }
  
};

</script>

<style>

</style>
