<template>
  <div class="w3-white px-3 py-1">
    <div class="w3-row w3-light-gray p-2">
      <!-- Image -->
      <div class="w3-col s4 w3-center py-2">
        <i class="fas fa-utensils w3-jumbo w3-text-gray"></i>
      </div>
      <form class="w3-rest">
        <div class="p-1">
          <label for="dishName">*Platillo</label>
          <input class="w3-input w3-border" id='dishName' type="text" placeholder="Hamburguesa" v-model='dishName' />
        </div>
        <div class="p-1">
          <label class="w3-disabled" for="dishCategory">Categoría</label>
          <input class="w3-input w3-border" id='dishCategory' type="text" placeholder="Hamburguesas" disabled />
        </div>
        <div class="w3-row p-1">
          <div class="w3-col s12">
            <label for="dishName">Variantes</label>
          </div>
          <div class="w3-col s10">
            <input class="w3-input w3-border" id='dishName' type="text" placeholder="De res" />
          </div>
          <button class="w3-button w3-rest w3-right p-0">
            <i class="fas fa-plus-circle w3-xxlarge w3-text-gray"></i>
          </button>
        </div>
        <div class="w3-right-align p-1 py-2">
          <button class="w3-button w-100 w3-teal" type="submit" v-on:submit.prevent='' >Añadir</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>


export default {

  name: 'DishListCreator',
  data(){
    return {
      dishName: '',
      dishVariants: []
    }
  }

}
</script>