<template>
  <div class="products">
    <h1>This is the products page</h1>
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