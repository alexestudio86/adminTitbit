<template>
  <div class='fullSize w3-display-container w3-white'>
    <div v-if="loginStatus">
      <h1 class="w3-display-middle w3-xxlarge">Bienvenid@ al sistema de administración</h1>
    </div>
    <div v-else>
      <div class="w3-center py-5">
        <img class="w-image" src="../assets/keep-out.jpg" alt="Keep Out" width="500" height='auto' />
        <h1 class="w3-large py-3 text-uppercase fw-bold">Lo siento, no puedes pasar</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {

  name: 'Bienvenida',
  computed: {
    ...mapState('login', ['loginStatus'])
  }

}
</script>

<style scoped>
  .fullSize{
    width: 100%;
    height: 100vh
  }
</style>