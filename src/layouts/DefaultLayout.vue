<template lang='pug'>
  div.default-layout
    header-partial
    slot(name="filters")
    main.main-section.mb-5
      div.container
        slot(name="content")
    footer-partial
</template>

<script>
import HeaderPartial from '@/partials/HeaderPartial'
import FooterPartial from '@/partials/FooterPartial'

export default {
  name: 'DefaultLayout',
  components: {
    HeaderPartial,
    FooterPartial
  }
}
</script>

<style>

</style>
