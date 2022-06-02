import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import firebaseConfig from '../../config.js'

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
    },
    mutations: {

    },
    actions: {

        /*
        signIn: function ({ commit, state }){
            signInWithEmailAndPassword(auth, state.dataUser.email, state.dataUser.password)
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              console.log('Bienvenido')
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log('Error al loguearte')
            });
        }
        */


        signIn: async function ({ commit, state }) {
            try{
                const getLogin  =   await signInWithEmailAndPassword( auth, state.dataUser.email, state.dataUser.password )
                .userCredential(                    
                    // Signed in
                    const user = userCredential.user;
                )
                return user
            }catch(error){
                console.log(error)
            }
        }


    }
}
