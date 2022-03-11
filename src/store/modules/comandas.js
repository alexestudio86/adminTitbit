import { initializeApp } from 'firebase/app';
import firebaseConfig from '../../config.js'
import { getFirestore, collection, query, orderBy, onSnapshot } from 'firebase/firestore';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default {
    namespaced: true,
    state: {
        orders: [],
        loader: null
    },
    mutations: {
        allOrders( state, orderList ){
            state.loader = false; 
            state.orders = orderList;
        }
    },
    actions: {
        readOrders: async function ({ commit, state }) {
            state.loader = true
            const db = getFirestore(app);
            try{
                const queryOrders = query(collection(db, 'orders'), orderBy('date', 'desc'));
                const orderList = [];
                const getOrders = await onSnapshot(queryOrders, (querySnapshot) => {
                    state.orders.splice(0, state.orders.length);
                    querySnapshot.forEach( (doc) => {
                        orderList.push( {id: doc.id, ...doc.data()} )
                    });
                    commit('allOrders', orderList);
                });
            }catch(error){
                console.log(error)
            }
        }
    }
}
