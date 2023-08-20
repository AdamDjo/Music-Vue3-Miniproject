<template>
  <!-- Introduction -->
  <Intro></Intro>

  <!-- Main Content -->
  <Artistes></Artistes>
</template>
<script>
import Intro from '../components/Intro.vue'
import Artistes from '../components/Artistes.vue'
export default {
  name: 'Home',
  components: { Intro, Artistes }
}
</script>
