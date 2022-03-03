<template>
  <div class="bg-white" style="height:100vh">
    <Navbar />
    <div class="row">
      <div class="col-md-4">
        <OrderCreator />
      </div>
      <div class="col-md-8">
        <Order />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import OrderCreator from '@/components/OrderCreator.vue'
import Order from '@/components/Order.vue'

export default {
  name: 'HomeView',
  components: {
    Navbar, OrderCreator, Order
  }
}
</script>
