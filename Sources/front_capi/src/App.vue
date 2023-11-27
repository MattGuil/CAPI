<template>
  <Jauge ref="SelecteurNbJoueurs"/>
  <button id="playButton" @click="printPlayers">JOUER</button>
</template>

<script>
// import Cartes from './components/Cartes.vue'
import Jauge from './components/SelecteurNbJoueurs.vue'

export default {
  name: 'App',
  components: {
    // Cartes,
    Jauge
  },
  methods: {
    printPlayers() {
      console.log(JSON.parse(this.$refs.SelecteurNbJoueurs.generateJSON()));
    },
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

#playButton {
  font-family: ObjectSans-Heavy;
  padding: 10px 30px;
  background-color: #518CE5;
  opacity: .5;
  color: white;
  border: 0;
  border-radius: 5px;
}

#playButton:hover {
  opacity: 1;
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  transition: all .2s ease;
}

</style>
