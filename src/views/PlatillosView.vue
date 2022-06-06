<template>
  <div class="container">
    <div v-if="loginStatus">
      <SidebarPlatillos />
    </div>
    <div v-else>
      <SidebarHome />
    </div>
    <main class="w3-main w3-border w3-border-light-gray zIndex-1" style='margin-left:400px'>
      <Navbar />
      <Header :headerTitle="headerTitle" />
      <div v-if="loginStatus">
        <h3 class="w3-white w3-padding w3-right-align w3-large">Registros Totales: {{ dishes.length }}</h3>
        <DishAlert v-if='notification' />
        <DishListCreator v-if='dish.length < 1' />
        <DishListEditor v-if='dish.length > 0' />
      </div>
      <div v-else>
        <KeepOut />
      </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import SidebarPlatillos from '@/components/SidebarPlatillos.vue';
import SidebarHome from '@/components/SidebarHome.vue';
import Navbar from '@/components/Navbar.vue';
import Header from '@/components/Header.vue';
import DishAlert from '@/components/DishAlert.vue';
import DishListCreator from '@/components/DishListCreator.vue';
import DishListEditor from '@/components/DishListEditor.vue';
import KeepOut from '@/components/KeepOut.vue';

import { mapState, mapMutations } from 'vuex'


export default {

name: 'Platillos',
  data(){
    return {
      headerTitle: 'Alta de platillos'
    }
  },
  components: {
    SidebarPlatillos, SidebarHome, Navbar, Header, DishAlert, DishListCreator, DishListEditor, KeepOut
  },
  computed: {
    ...mapState('platillos', ['dishes', 'dish', 'notification']),
    ...mapState('login', ['loginStatus'])
  },
  methods: {
    ...mapMutations('platillos', ['allDishes']),
  }

}
</script>
