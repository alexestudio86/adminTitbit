<template>
  <form class="w3-white p-3">
    <div class="p-1">
      <label for="dishName">Nombre</label>
      <input class="w3-input w3-border" id='dishName' type="text" />
    </div>
    <div class="p-1">
      <span>Icono</span>
      <select class="w3-select" name="option">
        <option value="fas fa-hamburger" selected>
          Icono 1
        </option>
        <option value="fas fa-bread-slice">
          Icono 2
        </option>
        <option value="fas fa-cheese">
          Icono 3
        </option>
        <option value="fas fa-fish">
          Icono 4
        </option>
      </select>
    </div>
    <div class="w3-right-align p-1 py-2">
      <button class="w3-button w3-light-gray" type="submit" v-on:submit.prevent='' >+</button>
    </div>
  </form>
</template>

<script>


export default {

  name: 'DishListCreator',

}
</script>