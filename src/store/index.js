import Vue from 'vue'
import Vuex from 'vuex'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../config.js'
import { getFirestore, collection, query, orderBy, onSnapshot } from 'firebase/firestore';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dishes: []
  },
  getters: {
  },
  mutations: {
    allDishes( state, orderList ){
      state.dishes = orderList;
    }
  },
  actions: {
    getDishes: async function ({ commit }) {
      const db = getFirestore(app);
      try{
        const queryDishes = query(collection(db, 'dishes'), orderBy('title'));
        const getDishes = await onSnapshot(queryDishes, (querySnapshot) => {
          const orderList = [];
          querySnapshot.forEach( (doc) => {
            orderList.push( doc.data() )
          });
          commit('allDishes', orderList)
        })
      }catch(error){
        console.log(error)
      }
    }
  },
  modules: {
  }
})
