import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut  } from 'firebase/auth';
import firebaseConfig from '../../config.js'
import { async } from '@firebase/util';

// Initialize Firebase
const app   =   initializeApp(firebaseConfig);
const auth  =   getAuth();
const db = getFirestore(app);

export default {
    namespaced: true,
    state: {
        dataUser: {
            email:      localStorage.length > 0 ? JSON.parse(localStorage.getItem('user')).email : '',
            password:   localStorage.length > 0 ? JSON.parse(localStorage.getItem('user')).password : '',
        },
        loader: null,
        shaker: false,
        loginStatus: false
    },
    mutations: {
        loginTrue: function( state ){
            state.loginStatus   =   true;
            state.loader        =   false;
        },
        loginFalse: function( state ){
            state.loginStatus   =   false;
            state.loader        =   false;
        },
        loginError: function( state ){
            state.loader        =   false;
            state.shaker        =   true;
            setTimeout( ()=> state.shaker = false , 600 );
        }
    },
    actions: {
        signIn: async function ({ commit, state }) {
            state.loader = true;
            try{
                const userCredential  =   await signInWithEmailAndPassword( auth, state.dataUser.email, state.dataUser.password );
                console.log('action ejecutada')
                commit('loginTrue');
            }catch(error){
                console.log(`Code: ${error.code}, message: ${error.message}`);
                commit('loginError');
            }
        },
        signOut: async function({ commit }){
            try{
                await signOut(auth);
                commit('loginFalse')
            }catch(error){
                console.log(error)
            }
        },
        checkLogin: function({ commit }){
            const auth = getAuth();
            const user = auth.currentUser
            onAuthStateChanged(auth, (user) => {
                if( user ){
                    commit('loginTrue');;
                }else{
                    console.log('No user')
                }
            })
        }
    }
}
