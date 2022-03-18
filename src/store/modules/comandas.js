import { initializeApp } from 'firebase/app';
import firebaseConfig from '../../config.js'
import { getFirestore, collection, query, orderBy, onSnapshot, addDoc, doc, deleteDoc } from 'firebase/firestore';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

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
            //const db = getFirestore(app);
            try{
                const queryOrders = query(collection(db, 'orders'), orderBy('created', 'desc'));
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
        },
        addOrder: async function({commit}, item){
            try{
                // Add a new document in collection "cities"
                const setOrder = await addDoc(collection(db, 'orders'), item);
                console.log('Documento creado con éxito');
            }catch(error){
                console.log(error)
            }
            
        },
        deleteOrder: async function({commit}, item){
            try{
                const deleteOrder = await deleteDoc(doc(db, "orders", item));
                document.getElementById('orderModal').style.display='none';
                console.log('Documento borrado con éxito');
            }catch(error){
                console.log(error)
            }
        }
    }
}
