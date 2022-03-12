<template>
  <div class="container">
    <SidebarPlatillos />
    <main class="w3-main w3-border w3-border-light-gray zIndex-1" style='margin-left:400px'>
      <Navbar />
      <Header />
      <Dishlist />
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import SidebarPlatillos from '@/components/SidebarPlatillos.vue'
import Navbar from '@/components/Navbar.vue'
import Header from '@/components/Header.vue'
import Dishlist from '@/components/DishList.vue'

export default {
  name: 'Platillos',
  components: {
    SidebarPlatillos, Navbar, Header, Dishlist
  }
}
</script>
