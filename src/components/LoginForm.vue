<template>
    <div>
        <div class='w3-container py-4' v-if="loader">
            <div class="w3-center py-2">
                <PlaceholderLogin />
            </div>
        </div>
        <div v-else>
            <form v-if="loginStatus" class="w3-container py-4">
                <div class="w3-center py-2">
                    <i class="fas fa-user w3-jumbo w3-text-gray"></i>
                </div>
                <div class="py-2">
                    <div class="py-1">
                        <h1 class="w3-center w3-medium">{{ dataUser.email }}</h1>
                    </div>
                </div>
                <button type="submit" class="w3-button w-100 w3-pale-red" @click.prevent="signOut">Logout</button>
            </form>
            <form v-else class="w3-container py-4">
                <div class="w3-center py-2">
                    <i class="fas fa-user w3-jumbo w3-text-gray"></i>
                </div>
                <div class="py-2">
                    <div class="py-1">
                        <label class="w3-disabled"><b>Usuario</b></label>
                        <input class="w3-input w3-border w3-margin-bottom" placeholder="Nombre de usuario" type="text" v-model="dataUser.email">
                    </div>
                    <div class="py-1">
                        <label class="w3-disabled"><b>Contraseña</b></label>
                        <input class="w3-input w3-border" type="password" placeholder='******' v-model="dataUser.password">
                    </div>
                </div>
                <button type="submit" class="w3-button w-100 w3-teal" @click.prevent="signIn">Login</button>
                <input class='w3-check' id="remember" type="checkbox" v-model="checked" @click="setLocal" />
                <label class="px-2" for="remember">Recordarme</label>
            </form>
        </div>
    </div>
</template>

<script>
import PlaceholderLogin from './PlaceholderLogin.vue';
import { mapState, mapActions } from 'vuex';


export default {

    name: 'LoginForm',
    data(){
        return {
            checked: localStorage.length > 0 ? JSON.parse(localStorage.getItem('user')).checked : false
        }
    },
    components: {
        PlaceholderLogin
    },
    methods: {
        ...mapActions('login', ['signIn', 'signOut']),
        setLocal: function(){
            console.log( this.checked )
            if( !this.checked ){
                let getData = { 'email': this.dataUser.email, 'password': this.dataUser.password, 'checked': true }
                localStorage.setItem( 'user', JSON.stringify(getData) );
            }else{
                localStorage.removeItem( 'user' );
            }
        }
    },
    computed: {
        ...mapState('login', ['dataUser', 'loginStatus', 'loader'])
    }

}
</script>