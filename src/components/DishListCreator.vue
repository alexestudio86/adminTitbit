<template>
  <div class="w3-white px-3 py-1">
    <div class="w3-row w3-light-gray p-2">
      <div class="w3-col s12 w3-border-bottom">
        <div class="w3-row w3-padding-small">
          <div class="w3-col s8">
            <h1 class='w3-large w3-center w3-padding' style="text-transform:uppercase; font-weight:bold">Creador</h1>
          </div>
          <div class="w3-rest w3-right">
            <!-- Cancel -->
          </div>
        </div>
      </div>
      <div class="w3-col s12">
        <form class="w3-row w3-padding-large" @submit.prevent="">
          <!-- Image -->
          <div class="w3-col s4 w3-center py-2">
            <i class="fas fa-utensils w3-jumbo w3-text-gray"></i>
          </div>
          <div class="w3-rest">
            <!-- Platillo -->
            <div class="p-1">
              <label for="dishName">*Platillo</label>
              <input v-model='item.title' class="w3-input w3-border" id='dishName' type="text" placeholder="ej. Hamburguesa sencilla" />
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
            <div class="w3-row py-1" v-for='(variant, index) of item.variant' :key="index">
              <div class="w3-col s11">
                <input v-model='item.variant[index]' class="w3-input w3-border" id='dishName' type="text" placeholder="ej. De res" />
              </div>
              <button type="button" class="w3-button w3-rest w3-right p-0" @click="deleteItem(index)">
                <i class="far fa-times-circle w3-xxlarge w3-text-red"></i>
              </button>
            </div>
            <!-- Add -->
            <div class="w3-padding w3-center" style="border:1px solid; border-color:#9e9e9e; border-style: dashed">
              <button class="w3-button w3-light-gray w3-text-gray" type="button" @click.stop="addItem" >
                <i class="fas fa-plus-circle fa-2x"></i>
              </button>
            </div>
            <!-- Save -->
            <div class="w3-right-align p-1 py-2">
              <button class="w3-button w-100 w3-teal" type="submit" @click.stop='saveDish' :disabled='item.title.length < 4' >Guardar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  name: 'DishListCreator',
  data(){
    return {
      item: {
        title: '',
        variant: []
      }
    }
  },
  methods: {
    deleteItem( idx ){
      this.item.variant.splice(idx,1)
    },
    addItem(){
      this.item.variant.splice(this.item.variant.length, 1, '')
    },
    saveDish(){
      console.log( this.item );
      this.$store.dispatch('platillos/addDish', this.item);
      this.item.title     = '';
      this.item.variant   = [];
    }
  }

}
</script>