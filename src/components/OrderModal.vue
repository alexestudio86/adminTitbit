<template>
 <div id="orderModal" class="w3-modal">
  <div class="w3-modal-content w3-animate-top">
    <header class="w3-container w3-light-gray">
      <h2 class="w3-padding-16 w3-large w3-center">¿ELIMINAR PRODUCTO?</h2>
    </header>
    <div class="w3-padding-32 w3-row">
      <div class="w3-half w3-center">
        <button @click="hideOrderModal" class="w3-button w3-white w3-border w3-border-red">Cancelar</button>
      </div>
      <div class="w3-half w3-center">
        <button class="w3-button w3-white w3-border w3-border-green" :data-ident='orderID' @click="deleteOrder(orderID)">Aceptar</button>
      </div>
    </div>
    <footer class="w3-padding-16 w3-light-gray w3-center">
      <p>Esta acción no se puede deshacer</p>
    </footer>
  </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {

  name: 'Order',
  props: {
    orderID: String
  },
  methods: {
    ...mapActions('comandas', ['deleteOrder']),
    hideOrderModal(){
      document.getElementById('orderModal').style.display='none'
    }
  }

}
</script>