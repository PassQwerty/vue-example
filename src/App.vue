<template>
  <nav-bar />
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
  components: { NavBar },

}
</script>

<style scoped>
  .app{
    padding: 0 1rem;
  }
</style>