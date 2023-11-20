<template>
  <div id="cartes">
    <div v-for="(image, index) in images" :key="index">
      <img :src="image" alt="Image" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartesVue',
  data() {
    return {
      images: [],
    };
  },
  mounted() {
    this.importImages();
  },
  methods: {
    importImages() {
      const imagesContext = require.context('@/assets/cartes/', false, /cartes_.*\.svg$/);
      this.images = imagesContext.keys().map(imagesContext);
    },
  },
}
</script>

<style scoped>

#cartes {
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}

#cartes img {
  width: 100%;
}

</style>
