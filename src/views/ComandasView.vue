<template>
  <div class="container">
    <SidebarComandas />
    <main class="w3-main w3-border w3-border-light-gray" style="margin-left:400px">
      <Navbar />
      <Header :headerTitle="headerTitle" />
      <OrderList />
      <OrderAlert v-if='alertCategory' />
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import SidebarComandas from '@/components/SidebarComandas.vue'
import Navbar from '@/components/Navbar.vue'
import Header from '@/components/Header.vue'
import OrderList from '@/components/OrderList.vue'
import OrderAlert from '@/components/OrderAlert.vue'

import { mapState } from 'vuex';

export default {

  name: 'Comandas',
  data(){
    return {
      headerTitle: 'Alta de ćomandas'
    }
  },
  components: {
    SidebarComandas, Navbar, Header, OrderList, OrderAlert
  },
  computed: {
    ...mapState(['alertCategory']),
  }

}
</script>
