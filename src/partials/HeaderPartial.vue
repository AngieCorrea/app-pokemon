<template lang='pug'>
  header.header
    div.container.main-header
      nav.text-center.navbar-dark
        router-link.navbar-bran(:to="{name: 'HomeView'}")
          img.d-inline-block.align-top(src="../assets/pokemon.svg" width="30" height="30") 
          p.pokedex Pókedex Virtual -- Angie Clariza
        
      
          
</template>

<script>
export default {
 name: 'HeaderPartial'
}
</script>


<style lang='scss' >
  .pokedex{
    color: #fff;
    font-size: 2em;
    padding-left: 1em;
    &:hover{
     list-style: none;
    }
  }

  a:hover{
    text-decoration: none;
  }
 
</style>


