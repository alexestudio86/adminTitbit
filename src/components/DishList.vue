<template>
  <div>
    <div v-if="loader">
      <placeholder-table />
    </div>
    <div v-else class="w3-responsive">
      <table class="w3-table-all w3-hoverable">
        <thead>
          <tr class="w3-light-grey">
            <th>#</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for='(dish, index) of dishes' :key='index'>
            <th>{{ index }}</th>
            <td>{{ dish.title }}</td>
          </tr>
        </tbody>
      </table>
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
    ...mapActions('platillos', ['readDishes'])
  }

}
</script>