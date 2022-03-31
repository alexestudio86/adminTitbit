import { initializeApp } from 'firebase/app';
import firebaseConfig from '../../config.js'
import { getFirestore, collection, query, orderBy, onSnapshot, addDoc, doc, deleteDoc, getDoc, updateDoc } from 'firebase/firestore';

// Initialize Firebase
const app   = initializeApp(firebaseConfig);
const db    = getFirestore(app);

export default {
    namespaced: true,
    state: {
        dishes:         [],
        loader:         null,
        dish:           [],
        notification:   false
    },
    mutations: {
        allDishes( state, dishList ){
            state.loader    = false; 
            state.dishes    = dishList;
        },
        oneDish( state, order ){
            state.dish      = order;
        }
    },
    actions: {
        readDishes: async function ({ commit, state }) {
            state.loader    = true
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
        },
        getDish: async function({commit}, item){
            try{
                const getDish = await getDoc(doc(db, "dishes", item));
                let order = [];
                order.push( {id: getDish.id, ...getDish.data()} );
                commit('oneDish', order)
            }catch(error){
                console.log(error);
            }
        },
        addDish: async function({commit, state}, item){
            try{
                await addDoc(collection(db, 'dishes'), item);
                state.notification  = true;
                setTimeout( () => state.notification = false, 2000 )
            }catch(error){
                console.log(error)
            }
        },
        deleteDish: async function({commit, state}, itemID){
            try{
                await deleteDoc(doc(db, "dishes", itemID));
                state.notification  = true;
                setTimeout( () => state.notification = false, 2000 )
            }catch(error){
                console.log(error);
            }
        },
        updateOrder: async function({commit, state}, itemID){    
            try{
                await updateDoc(doc(db, "dishes", itemID), state.dish[0]);
                state.notification  = true;
                setTimeout( () => state.notification = false, 2000 )
            }catch(error){
                console.log(error);
            }
            
        }
    }
}
