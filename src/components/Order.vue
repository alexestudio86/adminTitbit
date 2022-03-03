<template>
  <div>
    <article class="py-1 px-3" v-for='(dish, index) of dishes' :key='index'>
      <div class="card p-1">
        <div class="row">
          <div class="col-md-12 d-flex justify-content-between">
            <div class="row">
              <div class="col-md-8">
                <span>Status:</span>
                <span>Trabajando</span>
              </div>
              <div class="col-md-4">
                Factura: <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" checked disabled>
              </div>
            </div>
            <div>
              <button class="btn btn-light mx-1">
                <i class="fas fa-trash text-danger fs-5"></i>
              </button>
              <button class="btn btn-light mx-1">
                <i class="fas fa-edit text-primary fs-5"></i>
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div class="row">
          <div class="col-md-2">
            <img class="rounded" src="../assets/logo-titbit_grayscale.webp" alt="Logo Titbit escala de grises" width="70" height='auto'>
            <div>{{ index }}</div>
          </div>
          <div class="col-md-10">
            <h1 class="fs-6">{{ dish.title }}</h1>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  name: 'Order',
  created: function(){
    this.getDishes();
  },
  computed: {
    ...mapState(['dishes'])
  },
  methods: {
    ...mapMutations(['allDishes']),
    ...mapActions(['getDishes'])
  }
}
</script>