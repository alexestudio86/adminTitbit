<template>
  <div class="container">
    <SidebarComandas />
    <main class="w3-main w3-border w3-border-light-gray" style="margin-left:400px">
      <Navbar />
      <Header :headerTitle="headerTitle" />
      <OrderList />
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import SidebarComandas from '@/components/SidebarComandas.vue'
import Navbar from '@/components/Navbar.vue'
import Header from '@/components/Header.vue'
import OrderList from '@/components/OrderList.vue'

export default {
  name: 'Comandas',
  data(){
    return {
      headerTitle: 'Alta de ćomandas'
    }
  },
  components: {
    SidebarComandas, Navbar, Header, OrderList
  }
}
</script>
