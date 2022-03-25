<template>
  <div>
    <!-- Placeholder -->
    <div v-if='loader'>
      <PlaceholderArticle />
      <PlaceholderArticle />
      <PlaceholderArticle />
      <PlaceholderArticle />
      <PlaceholderArticle />
    </div>
    <!-- Articles -->
    <article class="w3-white mb-3 px-3 py-1" v-for='(order, index) of orders' :key='index'>
      <div class="w3-row">
          <div class="w3-col s3">
              <img class="w-100" src="../assets/logo-titbit_grayscale.webp" alt="Logo Titbit escala de grises" width="70" height='auto' style='height:70px; object-fit:cover; object-position:center; padding:8px 0'>
              <div class="w3-center w3-padding" >
                <small><i>{{ dateConvertion(order.created) }}</i></small>
              </div>
          </div>
          <div class="w3-col s9">
            <div class="w3-row">
              <div class="w3-col m9">
                <div class="w3-row">
                  <div class="w3-col s8">
                    <h1 class="w3-large p-1">{{ order.name }}</h1>
                  </div>
                  <div class="w3-col s4 w3-center" v-if='order.delivered'>
                    <small><b>entregado</b></small>
                  </div>
                  <div class="w3-center" v-else>
                    <div v-for='(estado, key, idx) of order.status' :key="idx">
                      <small v-if='estado'><b>{{ key }}</b></small>
                    </div>
                  </div>
                </div>
                <div>
                  <p class="w3-small" v-for="(o, i) of order.details" :key="i">{{ o }}</p>
                </div>
                <div class="py-2" v-if='order.comments'>
                  <p class="w3-panel w3-light-gray py-2 w3-small">{{ order.comments }}</p>
                </div>
              </div>
              <div class="w3-col m3">
                <div class="w3-right-align">
                  <button class="w3-button w3-white w3-border w3-border-red w3-round mx-1" data-ident='deleteModal' @click.stop='[getOrderID(order.id), showModal($event)]' >
                    <i class="fas fa-trash text-danger w3-large"></i>
                  </button>
                  <button class="w3-button w3-white w3-border w3-border-blue w3-round mx-1" data-ident='editModal'  @click.stop='[getItem(order.id), showModal($event)]'>
                    <i class="fas fa-edit text-primary w3-large"></i>
                  </button>
                </div>
                <div class="w3-right-align py-2">
                  <span class="w3-tag w3-gray w3-text-white w3-round p-1" v-if="order.invoice">Factura</span>
                </div>
              </div>
            </div>
          </div>
      </div>
    </article>
    <!-- Order Modal -->
    <order-delete-modal :orderID='orderID' />
    <order-edit-modal :orderID="orderID" />

  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import PlaceholderArticle from './PlaceholderArticle.vue';
import OrderDeleteModal from './OrderDeleteModal.vue';
import OrderEditModal from './OrderEditModal.vue';


//import OrderAlert from './OrderAlert.vue'

export default {

  name: 'Order',
  data(){
    return{
      orderID: ''
    }
  },
  components: {
    PlaceholderArticle, OrderDeleteModal, OrderEditModal
  },
  created: function(){
    this.readOrders();
  },
  methods: {
    ...mapMutations('comandas', ['allOrders']),
    ...mapActions('comandas', ['readOrders', 'getItem']),
    getOrderID(evt){
      this.orderID = evt;
    },
    showModal( evt ){
      let modalIdentifier = evt.currentTarget.getAttribute('data-ident');
      let getModal = document.getElementById( modalIdentifier );
      getModal.classList.add('w3-show');
    },
    dateConvertion: function ( evt ){
      return evt.toDate().toDateString();
    }
  },
  computed: {
    ...mapState(['alertCategory']),
    ...mapState('comandas', ['orders', 'loader']),
  }
}
</script>