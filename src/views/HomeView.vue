<template>
  <div class="w3-light-gray" style="height:100vh">
    <Sidebar />
    <main class="w3-main w3-border w3-border-light-gray" style='margin-left:300px'>
      <Header />
      <Bienvenida />
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/Sidebar.vue'
import Header from '@/components/Header.vue'
import Bienvenida from '@/components/Bienvenida.vue'

export default {
  name: 'HomeView',
  components: {
    Sidebar, Header, Bienvenida
  }
}

</script>
