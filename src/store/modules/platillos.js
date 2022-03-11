import { initializeApp } from 'firebase/app';
import firebaseConfig from '../../config.js'
import { getFirestore, collection, query, orderBy, onSnapshot } from 'firebase/firestore';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default {
    namespaced: true,
    state: {
        dishes: [],
        loader: null
    },
    mutations: {
        allDishes( state, dishList ){
            state.loader = false; 
            state.dishes = dishList;
        }
    },
    actions: {
        readDishes: async function ({ commit, state }) {
            state.loader = true
            const db = getFirestore(app);
            try{
                const queryDishes = query(collection(db, 'dishes'), orderBy('title'));
                const dishList = [];
                const getDishes = await onSnapshot(queryDishes, (querySnapshot) => {
                    state.dishes.splice(0, state.dishes.length);
                    querySnapshot.forEach( (doc) => {
                        dishList.push( {id: doc.id, ...doc.data()} )
                    });
                    commit('allDishes', dishList);
                });
            }catch(error){
                console.log(error)
            }
        }
    }
}
