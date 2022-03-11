<template>
  <aside class="w3-sidebar w3-bar-block w3-collapse w3-card" style="width:300px;" id="mySidebar">
    <div class="w3-bar w3-teal py-4">
      <span class="w3-bar-item fs-5 text-white fw-bold">Menú</span>
      <button class="w3-bar-item btn w3-hide-large text-white" v-on:click="closeSidebar">
        Close <i class="fas fa-times"></i>
      </button>
    </div>
    <router-link to='/' class="w3-bar-item w3-button py-4">Home</router-link>
    <router-link to='/comandas' class="w3-bar-item w3-button py-4">Comandas</router-link>
    <router-link to='/platillos' class="w3-bar-item w3-button py-4">Platillos</router-link>
  </aside>
</template>


<script>

export default {
  name: 'Sidebar',
  methods: {
    closeSidebar() {
      document.getElementById("mySidebar").style.display = "none";
    }
  }
}

</script>

<style>

aside a.router-link-exact-active {
  color:#000!important;
  background-color:#ccc!important;
}

</style>
