<template>
  <div class="w3-light-gray" style="height:100vh">
    <Sidebar />
    <main class="w3-main w3-border w3-border-light-gray" style="margin-left:300px">
      <Header />
      <div class="w3-border p-3">
        <div class="w3-row">
          <div class="w3-third p-2">
            <Dishlist />
          </div>
          <div class="w3-twothird p-2">
            <DishlistCreator />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import Header from '@/components/Header.vue'
import Dishlist from '@/components/DishList.vue'
import DishlistCreator from '@/components/DishListCreator.vue'

export default {
  name: 'Platillos',
  components: {
    Sidebar, Header, Dishlist, DishlistCreator
  }
}
</script>
