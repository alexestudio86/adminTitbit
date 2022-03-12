<template>
  <div class="container">
    <SidebarHome />
    <main class="w3-main w3-border w3-border-light-gray zIndex-1" style='margin-left:400px'>
      <Navbar />
      <Header />
      <Bienvenida />
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import SidebarHome from '@/components/SidebarHome.vue'
import Navbar from '@/components/Navbar.vue'
import Header from '@/components/Header.vue'
import Bienvenida from '@/components/Bienvenida.vue'

export default {
  name: 'HomeView',
  components: {
    SidebarHome, Navbar, Header, Bienvenida
  }
}

</script>
