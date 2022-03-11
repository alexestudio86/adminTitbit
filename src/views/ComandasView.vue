<template>
  <div class="w3-light-gray" style="height:100vh">
    <Sidebar />
    <main class="w3-main w3-border w3-border-light-gray" style="margin-left:300px">
      <Header />
      <div class="w3-border p-3">
        <div class="w3-row">
          <div class="w3-third p-2">
            <OrderCreator />
          </div>
          <div class="w3-twothird p-2">
            <OrderList />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/Sidebar.vue'
import Header from '@/components/Header.vue'
import OrderCreator from '@/components/OrderCreator.vue'
import OrderList from '@/components/OrderList.vue'

export default {
  name: 'Comandas',
  components: {
    Sidebar, Header, OrderCreator, OrderList
  }
}
</script>
