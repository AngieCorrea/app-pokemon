<template lang='pug'>
  DefaultLayout
    section(slot="content")
      h1 Aquí estoy llenando un espacio
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout'
export default {

  name: 'Home',
  components:{
    DefaultLayout
  }
}
</script>

<style>

</style>
