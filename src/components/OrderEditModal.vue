<template>
 <div class="w3-modal" id="editModal" @click.stop='hideModal'>
  <div class="w3-modal-content w3-animate-top">
    <header class="w3-container w3-light-gray w3-row py-3">
      <div class="w3-col s8">
        <h1 class="w3-padding-16 w3-large w3-center p-0">{{ item.name }}</h1>
      </div>
      <div class="w3-col s4" v-if='item.created'>
        <span><b>{{ dateConvertion(item.created) }}</b></span>
      </div>
    </header>
    <form class="w3-container w3-padding-32 w3-row">
      <div class="w3-col s12 w3-padding-small">
        <span>Detalles</span>
        <div class="w3-light-gray w3-padding" v-if='item.details'>
          <div class="w3-row w3-padding-small" v-if='item.details.length < 2' >
            <div v-for="(detail,index)  of item.details" :key="index">
              <div class="w3-col s11">
                <input v-model='item.details[0]' class="w3-input w3-border" type="text" />
              </div>
              <div class="w3-rest">
                <button class="w3-btn w3-text-red w-100 w3-disabled" type="button">
                  <i class="fas fa-times fa-2x"></i>
                </button>
              </div>
            </div>
          </div>
          <div v-else>
            <div v-for="(detail,index)  of item.details" :key="index">
              <div class="w3-col s11">
                <input v-model='item.details[index]' class="w3-input w3-border" type="text" />
              </div>
              <div class="w3-rest">
                <button class="w3-btn w3-text-red w-100" @click.prevent="deleteItemDetail(index)" type="button">
                  <i class="fas fa-times fa-2x"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="w3-padding w3-center" style="border:1px solid; border-color:#9e9e9e; border-style: dashed">
            <button class="w3-button w3-light-gray" type="button" @click.prevent="addItemDetail">
              <i class="fas fa-plus-circle fa-2x"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="w3-col s8 w3-padding-small">
        <label for="comment">Comentarios</label>
        <textarea class="w3-input w3-border" v-model='item.comments' id='comment'></textarea>
      </div>
      <div class="w3-col s3 w3-padding-small">
        <span class="w3-disabled">Estatus</span>
        <div v-if='item.delivered'>
          <select class="w3-select w3-border w3-disabled" name="option" disabled>
            <option value="entregado" selected >entregado</option>
          </select>
        </div>
        <div v-else>
          <select class="w3-select w3-border w3-disabled" name="option" disabled v-if='item.status'>
            <option :value="item.status.trabajando" selected v-if='item.status.trabajando'>trabajando</option>
            <option :value="item.status.retrasado" selected v-if='item.status.retrasado'>retrasado</option>
          </select>
        </div>
      </div>
      <div class="w3-col s1 w3-padding-small">
        <div class="w3-right-align">
          <label class="w3-disabled" for="invoice">Factura</label>
        </div>
        <div class="w3-right-align">
          <input id='invoice' class="w3-check w3-disabled" type="checkbox" disabled checked='checked' v-if='item.invoice'>
          <input id='invoice' class="w3-check w3-disabled" type="checkbox" disabled v-else>
        </div>
      </div>
    </form>
    <footer class="w3-padding-16 w3-light-gray w3-center w3-row">
      <div class="w3-col s6 w3-center">
        <button class="w3-button w3-white w3-border w3-border-red" data-ident='editModal' @click.stop="hideModal">Cancelar</button>
      </div>
      <div class="w3-col s6 w3-center">
        <!-- Target send like $event only when more of 1 function is setted -->
        <button class="w3-button w3-white w3-border w3-border-green" data-ident='editModal' @click.stop="[updateOrder(item.id), hideModal($event)]">Guardar</button>
      </div>
    </footer>
  </div>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {

  name: 'OrderEditModal',
  props: {
    orderID: String
  },
  methods: {
    ...mapActions('comandas', ['getItem', 'updateOrder']),
    deleteItemDetail( idx ){
      this.item.details.splice(idx,1)
      //console.log( this.$store.state.comandas.item.details );
    },
    addItemDetail(){
      this.item.details.splice(this.item.details.length,1, 'Nuevo, Elemento x 1')
    },
    dateConvertion: function ( evt ){
      return evt.toDate().toDateString();
    },
    hideModal( evt ){
      const clickedObject = evt.target;
      const clickedIdentified = clickedObject.id || clickedObject.getAttribute('data-ident');
      if( clickedIdentified === 'editModal' ){
        document.getElementById(clickedIdentified).classList.remove('w3-show')
      }
    }
  },
  computed: {
    ...mapState('comandas', ['item'])
  }
}
</script>