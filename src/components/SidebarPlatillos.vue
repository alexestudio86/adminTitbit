<template>
  <aside class="w3-sidebar w3-bar-block w3-collapse w3-top w3-card zIndex-3" id="mySidebar" style="width:100%; max-width:400px">
    <div class="w3-bar">
      <div class="w3-bar-item w3-teal py-4 w3-display-container">
        <span class="fs-5 text-white fw-bold text-uppercase w3-display-center">Menú</span>
        <button class="w3-button w3-hide-large w3-text-white w3-display-right" v-on:click="closeSidebar">
          Close <i class="fas fa-times"></i>
        </button>
      </div>
      <DishList />
    </div>
  </aside>
</template>


<script>
import DishList from '@/components/DishList.vue'

export default {
  name: 'SidebarPlatillos',
  components: {
    DishList
  },
  methods: {
    closeSidebar() {
      document.getElementById("mySidebar").style.display = "none";
    }
  }
}

</script>