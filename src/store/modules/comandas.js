import { initializeApp } from 'firebase/app';
import firebaseConfig from '../../config.js'
import { getFirestore, collection, query, orderBy, onSnapshot, addDoc, doc, deleteDoc, getDoc, updateDoc } from 'firebase/firestore';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default {
    namespaced: true,
    state: {
        orders: [],
        loader: null,
        item: {}
    },
    mutations: {
        allOrders( state, orderList ){
            state.loader = false; 
            state.orders = orderList;
        },
        oneOrder( state, order ){
            state.item = order;
        }
    },
    actions: {
        readOrders: async function ({ commit, state }) {
            state.loader = true
            //const db = getFirestore(app);
            try{
                const queryOrders = query(collection(db, 'orders'), orderBy('created', 'desc'));
                const orderList = [];
                await onSnapshot(queryOrders, (querySnapshot) => {
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
        addOrder: async function({commit, rootState}, item){
            try{
                // Add a new document in collection "cities"
                await addDoc(collection(db, 'orders'), item);
                //This instruction is used when vuex store are import
                //this.$store.state.alertCategory = 'created';
                // make mutations in rootstate
                rootState.alertCategory = 'created';
                setTimeout( () => rootState.alertCategory = null, 2000 )
            }catch(error){
                console.log(error)
            }
        },
        deleteOrder: async function({commit, rootState}, item){
            try{
                await deleteDoc(doc(db, "orders", item));
                // make mutations in rootstate
                rootState.alertCategory = 'deleted';
                setTimeout( () => rootState.alertCategory = null, 2000 )
            }catch(error){
                console.log(error);
            }
        },
        getItem: async function({commit}, item){
            try{
                const getOrder = await getDoc(doc(db, "orders", item));
                let order = {};
                order = {id: getOrder.id, ...getOrder.data()};
                commit('oneOrder', order)
            }catch(error){
                console.log(error);
            }
        },
        updateOrder: async function({commit, state, rootState}, itemID){
            const newItem = {
                details: state.item.details,
                comments: state.item.comments
            };        
            try{
                await updateDoc(doc(db, "orders", itemID), newItem);
                rootState.alertCategory = 'edited';
                setTimeout( () => rootState.alertCategory = null, 2000 )
            }catch(error){
                console.log(error);
            }
            
        }
    }
}
