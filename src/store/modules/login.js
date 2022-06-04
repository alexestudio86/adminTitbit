import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword, signOut  } from 'firebase/auth';
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
            email:       'alexestudio86@gmail.com',
            password:   '123456'
        },
        loginStatus: false
    },
    mutations: {
        loginTrue: function( state ){
            state.loginStatus   =   true;
        },
        loginFalse: function( state ){
            state.loginStatus   =   false;
        }
    },
    actions: {
        signIn: async function ({ commit, state }) {
            try{
                const userCredential  =   await signInWithEmailAndPassword( auth, state.dataUser.email, state.dataUser.password );
                const user = userCredential.user;
                commit('loginTrue');
            }catch(error){
                console.log(`Code: ${error.code}, message: ${error.message}`)
            }
        },
        signOut: async function({ commit }){
            try{
                await signOut(auth);
                commit('loginFalse')
                console.log('Usuario fuera');
            }catch(error){
                console.log(error)
            }
        }
    }
}
