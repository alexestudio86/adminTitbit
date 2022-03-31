<template>
  <div class="w3-white px-3 py-1">
    <div class="w3-row w3-light-gray p-2">
      <div class="w3-col s12 w3-border-bottom">
        <div class="w3-row w3-padding-small">
          <div class="w3-col s8">
            <h1 class='w3-large w3-center w3-padding' style="text-transform:uppercase; font-weight:bold">Editor</h1>
          </div>
          <div class="w3-rest w3-right">
            <!-- Cancel -->
            <button class="w3-button w3-text-gray" @click.stop="cancelEdit">
              <i class="far fa-times-circle fa-2x"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="w3-col s12">
        <form class="w3-row w3-padding-large" v-for='(d, index) of dish' :key="index" @submit.prevent="">
          <!-- Image -->
          <div class="w3-col s4 w3-center py-4">
            <i class="fas fa-utensils w3-jumbo w3-text-gray"></i>
          </div>
          <div class="w3-rest">
            <!-- Platillo -->
            <div class="p-1">
              <label for="dishName">*Platillo</label>
              <input class="w3-input w3-border" id='dishName' type="text" placeholder="ej. Hamburguesa Sencilla" v-model='d.title' />
            </div>
            <!-- Categoría -->
            <div class="p-1">
              <label class="w3-disabled" for="dishCategory">Categoría</label>
              <input class="w3-input w3-border" id='dishCategory' type="text" placeholder="ej. Hamburguesas" disabled />
            </div>
          </div>
          <div class="w3-col s12">
            <div>
              <span>Variantes</span>
            </div>
            <!-- Edit -->
            <div class="w3-row py-1" v-for='(v, i) of d.variant' :key="i">
              <div class="w3-col s11">
                <input class="w3-input w3-border" id='dishName' type="text" placeholder="ej. De res" v-model='d.variant[i]' />
              </div>
              <button type="button" class="w3-button w3-rest w3-right p-0" @click="deleteItem(i)">
                <i class="far fa-times-circle w3-xxlarge w3-text-red"></i>
              </button>
            </div>
            <!-- Add -->
            <div class="w3-padding w3-center" style="border:1px solid; border-color:#9e9e9e; border-style: dashed">
              <button class="w3-button w3-light-gray w3-text-gray" type="button" @click.prevent="addItem">
                <i class="fas fa-plus-circle fa-2x"></i>
              </button>
            </div>
            <div class="w3-row p-1 py-2">
              <!-- Delete -->
              <div class="w3-half p-1">
                <button class="w3-button w-100 w3-red" type="button" @click.stop='showDeleteModal(d.id)' >Eliminar</button>
              </div>
              <!-- Update -->
              <div class="w3-half p-1">
                <button class="w3-button w-100 w3-teal" type="submit" @click.stop='confirmEdition(d.id)' >Actualizar</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <DishDeleteModal :orderID="orderID" />
  </div>
</template>

<script>
import DishDeleteModal from '@/components/DishDeleteModal.vue'
import { mapState } from 'vuex'

export default {

  name: 'DishListEditor',
  data(){
    return {
      orderID: ''
    }
  },
  components: {
    DishDeleteModal
  },
  computed: {
    ...mapState('platillos', ['dish'])
  },
  methods: {
    cancelEdit(){
      this.dish.splice(0,this.dish.length)
    },
    deleteItem( idx ){
      this.dish[0].variant.splice(idx,1)
    },
    addItem(){
      this.dish[0].variant.splice(this.dish[0].variant.length,1, 'Nueva variante')
    },
    showDeleteModal( evt ){
      this.orderID = evt;
      const getModal = document.getElementById('dishDeleteModal');
      getModal.classList.add('w3-show');
    },
    confirmEdition( evt ){
      this.$store.dispatch('platillos/updateOrder', evt);
    }
  }

}
</script>