<!--Encargado de visualizar la targeta del pokemon-->
<template lang='pug'>
  div.pokedex-card
    img.pokedex-card-img(:src="pokemon.ThumbnailImage")
    div.pokedex-card-details
      small.pokedex-card-details__number {{pokemon.number}}
      h4.pokedex-card-details__title {{pokemon.name}}
      div.pokedex-card__types
        PokedexTag(v-for="(type, index) in pokemon.type" :key="index" :pokemon-type="type")
</template>

<script>
import PokedexTag from '@/components/PokedexTag'
export default {
  name: 'PokemonCard',
  props: {
    pokemon: {
      type: Object,
      required: true
    }
  },
  components: {
    PokedexTag
  }
}
</script>


