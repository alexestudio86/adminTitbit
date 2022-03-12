<template>
  <div class="container">
    <SidebarPlatillos />
    <main class="w3-main w3-border w3-border-light-gray zIndex-1" style='margin-left:400px'>
      <Navbar />
      <Header :headerTitle="headerTitle" />
      <DishlistCreator />
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import SidebarPlatillos from '@/components/SidebarPlatillos.vue'
import Navbar from '@/components/Navbar.vue'
import Header from '@/components/Header.vue'
import DishlistCreator from '@/components/DishListCreator.vue'

export default {
  name: 'Platillos',
  data(){
    return {
      headerTitle: 'Alta de platillos'
    }
  },
  components: {
    SidebarPlatillos, Navbar, Header, DishlistCreator
  }
}
</script>
