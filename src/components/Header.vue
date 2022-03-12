<template>
  <header class="w3-bar w3-light-gray w3-border">
    <button class="w3-button w3-gray w3-hide-large" v-on:click="openSidebar">
      <i class="fas fa-bars"></i>
    </button>
    <div class="w3-container">
      <ul class="nav nav-pills nav-fill">
        <li class="nav-item py-3">
          <span class="text-uppercase fs-5">Sistema de administración Titbit</span>
        </li>
        <li class="nav-item">
          <img src="../assets/logo-titbit.png" alt="Logo Titbit" width="65" height='auto' />
        </li>
      </ul>
    </div>
  </header>
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