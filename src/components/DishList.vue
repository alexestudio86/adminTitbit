<template>
  <div class="px-3 py-1 w3-white">
    <div v-if="loader">
      <PlaceholderTable />
    </div>
    <div class="w3-light-gray">
      <button class="w3-button w3-padding w3-block" v-for='(dish, index) of dishes' :key='index' @click.stop='getDish(dish.id)' style="text-align:left; border-bottom:1px solid #ddd" >
        {{ dish.title }}
      </button>
    </div>
  </div>
</template>

<script>
import PlaceholderTable from './PlaceholderTable.vue'
import { mapState, mapActions, mapMutations } from 'vuex'

export default {

  name: 'DishList',
  components: {
    PlaceholderTable
  },
  created: function(){
    this.readDishes();
  },
  computed: {
    ...mapState('platillos', ['dishes', 'loader'])
  },
  methods: {
    ...mapMutations('platillos', ['allDishes']),
    ...mapActions('platillos', ['readDishes', 'getDish']),
  }

}
</script>