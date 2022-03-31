<template>
 <div class="w3-modal" id="dishDeleteModal" @click.stop='hideModal'>
  <div class="w3-modal-content w3-animate-bottom">
    <header class="w3-container w3-light-gray">
      <h2 class="w3-padding-16 w3-large w3-center text-uppercase">¿Eliminar Platillo?</h2>
    </header>
    <div class="w3-padding-32 w3-row">
      <div class="w3-col s6 w3-center">
        <!-- Cancel -->
        <button class="w3-button w3-white w3-border w3-border-red" @click.stop="hideModal">Cancelar</button>
      </div>
      <div class="w3-col s6 w3-center">
        <!-- Continue -->
        <button class="w3-button w3-white w3-border w3-border-green" @click.stop="confirmDeletion">Aceptar</button>
      </div>
    </div>
    <footer class="w3-padding-16 w3-light-gray w3-center">
      <p class='fw-bold'>Esta acción no se puede deshacer</p>
    </footer>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {

  name: 'DishDeleteModal',
  props: {
    orderID: String
  },
  computed: {
    ...mapState('platillos', ['dish'])
  },
  methods: {
    hideModal(){
      const getModal = document.getElementById('dishDeleteModal');
      getModal.classList.remove('w3-show');
    },
    cancelEdit(){
      this.dish.splice(0,this.dish.length)
    },
    confirmDeletion(){
      this.$store.dispatch('platillos/deleteDish', this.orderID);
      this.cancelEdit();
      this.hideModal();
    }
  }

}
</script>