<template>
    <div>
        <div class='w3-container py-4' v-if="loader">
            <div class="w3-center py-2">
                <PlaceholderLogin />
            </div>
        </div>
        <div :class="shaker ? 'shake' : ''" v-else>
            <!-- Logout-->
            <form v-if="loginStatus" class="w3-container py-4">
                <div class="w3-center py-2">
                    <i class="fa-solid fa-face-smile w3-jumbo w3-text-teal"></i>
                </div>
                <div class="py-2">
                    <div class="py-1">
                        <h1 class="w3-center w3-medium">{{ dataUser.email }}</h1>
                    </div>
                </div>
                <button type="submit" class="w3-button w-100 w3-pale-green" @click.prevent="signOut">Logout</button>
            </form>
            <!-- Login -->
            <form v-else class="w3-container py-4">
                <div class="w3-center py-2">
                    <i class="fas fa-user w3-jumbo" :class="shaker ? 'w3-text-red' : 'w3-text-gray'"></i>
                </div>
                <div class="py-2">
                    <div class="py-1">
                        <label :class="shaker ? 'w3-text-red' : 'w3-text-gray'"><b>Usuario</b></label>
                        <input class="w3-input w3-border w3-margin-bottom" placeholder="Nombre de usuario" type="text" v-model="dataUser.email">
                    </div>
                    <div class="py-1">
                        <label :class="shaker ? 'w3-text-red' : 'w3-text-gray'"><b>Contraseña</b></label>
                        <input class="w3-input w3-border" type="password" placeholder='******' v-model="dataUser.password">
                    </div>
                </div>
                <button type="submit" class="w3-button w-100" :class="shaker ? 'w3-red' : 'w3-teal'" @click.prevent="signIn">Login</button>
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
    mounted(){
        this.checkLogin()
    },
    components: {
        PlaceholderLogin
    },
    methods: {
        ...mapActions('login', ['signIn', 'signOut', 'checkLogin']),
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
        ...mapState('login', ['dataUser', 'loginStatus', 'loader', 'shaker'])
    }

}
</script>

<style scoped>

    .shake{
        /* Start the shake animation and make the animation last for 0.5 seconds */
        animation: shake 0.5s;

        /* When the animation is finished, start again */
        animation-iteration-count: infinite;
    }

    @keyframes shake {
        0% { transform: translate(1px, 1px) rotate(0deg); }
        10% { transform: translate(-1px, -2px) rotate(-1deg); }
        20% { transform: translate(-3px, 0px) rotate(1deg); }
        30% { transform: translate(3px, 2px) rotate(0deg); }
        40% { transform: translate(1px, -1px) rotate(1deg); }
        50% { transform: translate(-1px, 2px) rotate(-1deg); }
        60% { transform: translate(-3px, 1px) rotate(0deg); }
        70% { transform: translate(3px, 1px) rotate(-1deg); }
        80% { transform: translate(-1px, -1px) rotate(1deg); }
        90% { transform: translate(1px, 2px) rotate(0deg); }
        100% { transform: translate(1px, -2px) rotate(-1deg); }
    }

    .w3-text-teal {
        color:      #009688 !important;
    }

</style>