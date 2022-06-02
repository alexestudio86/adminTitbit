<template>
    <form class="w3-container py-4">
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
        <button class="w3-button w-100 w3-teal" @click.prevent="signIn">Loging</button>
    </form>
</template>

<script>
import { mapState, mapActions } from 'vuex';


export default {

    name: 'LoginForm',
    methods: {
    ...mapActions('login', ['signIn']),
    },
    computed: {
        ...mapState('login', ['dataUser'])
    }

}
</script>