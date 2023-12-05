<template>
  <router-view id="content"></router-view>
  <p>PLANNING<br>POKER</p>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style scoped>

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

p {
  position: absolute;
  bottom: 0;
  left: 0;
  font-family: ObjectSans-Heavy;
  line-height: .8;
  font-size: 1.5rem;
  transform: translate(-15%, -200%) rotate(-90deg);
  opacity: .5;
}

</style>