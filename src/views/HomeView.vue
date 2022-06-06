<template>
  <div class="container">
    <SidebarHome />
    <main class="w3-main w3-border w3-border-light-gray zIndex-1" style='margin-left:400px'>
      <Navbar />
      <Header :headerTitle="headerTitle" />
      <div v-if="loginStatus">
        <Bienvenida />
      </div>
      <div v-else>
        <KeepOut />
      </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import SidebarHome from '@/components/SidebarHome.vue';
import Navbar from '@/components/Navbar.vue';
import Header from '@/components/Header.vue';
import Bienvenida from '@/components/Bienvenida.vue';
import KeepOut from '@/components/KeepOut.vue';

import { mapState } from 'vuex';


export default {

  name: 'HomeView',
  data(){
    return {
      headerTitle: 'Sistema de Administración'
    }
  },
  components: {
    SidebarHome, Navbar, Header, Bienvenida, KeepOut
  },
  computed: {
    ...mapState('login', ['loginStatus'])
  }


}

</script>
