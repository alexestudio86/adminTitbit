<template>
  <header class="d-flex justify-content-around align-items-center w3-white w3-border-top w3-border-bottom">
    <h1 class="text-uppercase w3-large">{{ headerTitle }}</h1>
    <img src="../assets/logo-titbit.png" alt="Logo Titbit" width="65" height='auto' />
  </header>
</template>

<script>
export default {

  name: 'Header',
  props: {
    headerTitle: String
  },
  methods: {
    openSidebar(){
      document.getElementById("mySidebar").style.display = "block";
    }
  }

}
</script>