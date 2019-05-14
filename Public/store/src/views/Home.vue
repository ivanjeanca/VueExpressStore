<template>
  <div class="home">
    <div class="separador-30"></div>
    <h1>¡Cientos de productos por descubrir!</h1>
    <hr>
    <Novedades></Novedades>
  </div>
</template>

<script>
// @ is an alias to /src
import Novedades from '@/components/Novedades.vue';

export default {
  name: 'home',
  components: {
    Novedades,
  },
};
</script>

<style scoped>
.separador-30{
  margin-top: 30px;
}
</style>