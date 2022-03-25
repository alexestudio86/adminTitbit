<template>
    <div id="alertModal" class="w3-modal bg-alert w3-show">
        <div class="w3-modal-content w3-animate-top">
            <div class="w3-panel w3-center py-3" :class='alertData.class'>
                <h3 class="text-uppercase w3-large">{{ alertData.text }}</h3>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {

    name: 'OrderAlert',
    data(){
        return{
            alerta: {}
        }
    },
    updated(){
        this.alertIdentifier();
    },
    methods:{
    },
    computed: {
        ...mapState(['alertCategory']),
        alertData(){
            if( this.alertCategory === 'created' ){
                return {
                    class: 'w3-pale-green',
                    text: 'Elemento creado correctamente'
                }
            }
            if( this.alertCategory === 'edited' ){
                return {
                    class: 'w3-pale-blue',
                    text: 'Elemento actualizado correctamente'
                }
            }
            if( this.alertCategory === 'deleted' ){
                return {
                    class: 'w3-pale-red',
                    text: 'Elemento eliminado correctamente'
                }
            }
            if( !this.alertCategory ){
                return {
                    class: '',
                    text: ''
                }
            }
        }
    }

}
</script>

<style scoped>

.bg-alert{
    background: rgba(255,255,255,0.6);
}

</style>