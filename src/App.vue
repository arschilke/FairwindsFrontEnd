<script lang="ts">
import { RouterView } from 'vue-router'
import { ModalsContainer } from 'vue-final-modal'
import Navbar from './components/Navbar.vue'

export default {
  components: {
    Navbar,
    RouterView,
    ModalsContainer
  }
}
</script>

<template>
  <ModalsContainer />
  <Navbar />
  <RouterView />
</template>