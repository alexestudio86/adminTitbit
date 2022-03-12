<template>
  <div class="px-3 py-1 w3-white">
    <div v-if="loader">
      <PlaceholderTable />
    </div>
    <ul class="w3-ul w3-light-gray w3-hoverable">
      <li v-for='(dish, index) of dishes' :key='index'>
        {{ dish.title }}
      </li>
    </ul>
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
    ...mapActions('platillos', ['readDishes'])
  }

}
</script>