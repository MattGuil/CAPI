<template>
  <Jauge/>
</template>

<script>
// import Cartes from './components/Cartes.vue'
import Jauge from './components/SelecteurNbJoueurs.vue'

export default {
  name: 'App',
  components: {
    // Cartes,
    Jauge
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@font-face {
    font-family: ObjectSans-Heavy;
    src: url('@/assets/fonts/PPObjectSans-Heavy.otf');
}

@font-face {
    font-family: ObjectSans-HeavySlanted;
    src: url('@/assets/fonts/PPObjectSans-HeavySlanted.otf');
}

@font-face {
    font-family: ObjectSans-Regular;
    src: url('@/assets/fonts/PPObjectSans-Regular.otf');
}

@font-face {
    font-family: ObjectSans-Slanted;
    src: url('@/assets/fonts/PPObjectSans-Slanted.otf');
}


</style>
