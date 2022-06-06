<template>
  <div class="container">
    <div v-if="loginStatus">
      <SidebarComandas />
    </div>
    <div v-else>
      <SidebarHome />
    </div>
    <main class="w3-main w3-border w3-border-light-gray" style="margin-left:400px">
      <Navbar />
      <Header :headerTitle="headerTitle" />
      <div v-if="loginStatus">
        <h3 class="w3-padding w3-right-align w3-large">Registros Totales: {{ orders.length }}</h3>
        <OrderList />
        <OrderAlert v-if='alertCategory' />
      </div>
      <div v-else>
        <KeepOut />
      </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import SidebarComandas from '@/components/SidebarComandas.vue';
import SidebarHome from '@/components/SidebarHome.vue';
import Navbar from '@/components/Navbar.vue';
import Header from '@/components/Header.vue';
import OrderList from '@/components/OrderList.vue';
import OrderAlert from '@/components/OrderAlert.vue';
import KeepOut from '@/components/KeepOut.vue';


import { mapState } from 'vuex';

export default {

  name: 'Comandas',
  data(){
    return {
      headerTitle: 'Alta de ćomandas'
    }
  },
  components: {
    SidebarComandas, SidebarHome, Navbar, Header, OrderList, OrderAlert, KeepOut
  },
  computed: {
    ...mapState(['alertCategory']),
    ...mapState('comandas', ['orders']),
    ...mapState('login', ['loginStatus'])
  }

}
</script>
