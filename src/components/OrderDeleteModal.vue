<template>
 <div class="w3-modal" id="deleteModal" @click.stop='hideModal'>
  <div class="w3-modal-content w3-animate-top">
    <header class="w3-container w3-light-gray">
      <h2 class="w3-padding-16 w3-large w3-center">¿ELIMINAR PRODUCTO?</h2>
    </header>
    <div class="w3-padding-32 w3-row">
      <div class="w3-col s6 w3-center">
        <button class="w3-button w3-white w3-border w3-border-red" data-ident='deleteModal' @click.stop="hideModal">Cancelar</button>
      </div>
      <div class="w3-col s6 w3-center">
        <!-- Target send like $event only when more of 1 function is setted -->
        <button class="w3-button w3-white w3-border w3-border-green" data-ident='deleteModal' @click.stop="[deleteOrder(orderID), hideModal($event)]">Aceptar</button>
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

  name: 'OrderDeleteModal',
  props: {
    orderID: String
  },
  methods: {
    ...mapActions('comandas', ['deleteOrder']),
    hideModal( evt ){
      const clickedObject = evt.target;
      const clickedIdentified = clickedObject.id || clickedObject.getAttribute('data-ident');
      if( clickedIdentified === 'deleteModal' ){
        document.getElementById(clickedIdentified).classList.remove('w3-show')
      }
    }
  }

}
</script>