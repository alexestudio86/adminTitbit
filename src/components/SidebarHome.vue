<template>
  <aside class="w3-sidebar w3-bar-block w3-collapse w3-top w3-card zIndex-3" id="mySidebar" style="width:100%; max-width:400px">
    <div class="w3-bar">
      <div class="w3-bar-item w3-teal py-4 w3-display-container">
        <span class="fs-5 text-white fw-bold text-uppercase w3-display-left">Menú</span>
        <button class="w3-button w3-hide-large w3-text-white w3-display-right" v-on:click="closeSidebar">
          Close <i class="fas fa-times"></i>
        </button>
      </div>
      <router-link to='/' class="w3-bar-item py-2 w3-button w-100">
        <span class="w3-hide-large">Home</span>
        <i class="fas fa-home w3-hide-small w3-xxlarge"></i>
      </router-link>
      <router-link to='/comandas' class="w3-bar-item py-2 w3-button w-100">
        <span class="w3-hide-large">Comandas</span>
        <i class="fab fa-elementor w3-hide-small w3-xxlarge"></i>
      </router-link>
      <router-link to='/platillos' class="w3-bar-item py-2 w3-button w-100">
        <span class="w3-hide-large">Platillos</span>
        <i class="fas fa-utensils w3-hide-small w3-xxlarge"></i>
      </router-link>
    </div>
  </aside>
</template>


<script>
export default {

  name: 'SidebarHome',
  methods: {
    closeSidebar() {
      document.getElementById("mySidebar").style.display = "none";
    }
  }

}
</script>

<style scoped>

  aside a.router-link-exact-active {
    color:#000!important;
    background-color:#ccc!important;
  }

</style>