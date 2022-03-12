<template>
  <nav class="sticky-top zIndex-2">
    <div class="w3-row w3-large" style="background: #ddffdd">
      <div class="w3-col s3 w3-hide-large">
        <button class="w3-button w3-blue w-100 w3-hide-large" v-on:click="openSidebar">
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <div class="w3-col s3 l4 w3-center">
        <router-link to='/' class="w3-bar-item w3-button w-100">
          <span class="w3-hide-small">Home</span>
          <i class="fas fa-home w3-hide-large"></i>
        </router-link>
      </div>
      <div class="w3-col s3 l4 w3-center">
        <router-link to='/comandas' class="w3-bar-item w3-button w-100">
          <span class="w3-hide-small">Comandas</span>
          <i class="fab fa-elementor w3-hide-large"></i>
        </router-link>
      </div>
      <div class="w3-col s3 l4 w3-center">
        <router-link to='/platillos' class="w3-bar-item w3-button w-100">
          <span class="w3-hide-small">Platillos</span>
          <i class="fas fa-utensils w3-hide-large"></i>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {

  name: 'Navbar',
  methods: {
    openSidebar(){
      document.getElementById("mySidebar").style.display = "block";
    }
  }

}
</script>

<style scoped>

aside a.router-link-exact-active {
  color:#000!important;
  background:rgb(35, 105, 8)!important;
}

</style>