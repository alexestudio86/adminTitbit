<template>
    <div>
        <div class='w3-white p-3'>
            <!-- NOMBRES Y VARIANTES -->
            <form v-on:submit.prevent>
                <div class='mb-3'>
                    <span>*Orden</span>
                    <div class="tooltip">
                        <span class="tooltiptext px-1" id='orderTooltip'>Elija una opción</span>
                    </div>
                    <select class='w3-select' name='nameOrders' id="nameOrders" v-model='orderTitle' v-on:change='checkVariants'>
                        <option value="" disabled selected>Elige una opcion</option>
                        <option v-for="(dish, index) of dishes" :key="index" v-bind:value="dish.title">{{ dish.title }}</option>
                    </select>
                    <div class='my-3' v-if='orderVariants.length > 0'>
                        <span>*Variante</span>
                        <select class='w3-select' name="variantOrder" id="variantOrder" v-model='variantSelected' >
                            <option value="" disabled='disabled' selected='selected'>Elija una opción</option>
                            <option v-for='(v, index) of orderVariants' :key="index" :value='v' >{{ v }}</option>
                        </select>
                    </div>
                    <div class='w3-row py-2'>
                        <div class='w3-col m10'>
                            <div class='w3-row'>
                                <div class='w3-col s9'>
                                    <input class='w3-input w3-border' type='range' min='1' max='9' id='customRange2' v-model='orderQuantity'>
                                </div>
                                <div class='w3-col s3'>
                                    <label for='customRange2' >{{ orderQuantity }}</label>
                                </div>
                            </div>
                        </div>
                        <div class='w3-col s2'>
                            <button class='w3-button w3-green w3-text-white w-100' v-on:click='makeOrderElement'>+</button>
                        </div>
                    </div>
                </div>
            </form>
            <!-- ELEMENTOS -->
            <div class="w3-border p-2 my-3 w3-light-gray">
                <div class="tooltip">
                    <span class="tooltiptext px-1" id='elementsTooltip'>Añada un elemento</span>
                </div>
                <p class='w3-tag w3-round-xxlarge w3-white w3-border w3-right-align' v-for="(e, i) of orderElements" :key="i">
                    {{ e.title }} x {{ e.quantity }}
                    <span class="w3-badge w3-red m-1" style='cursor:pointer' v-on:click='deleteOrderElement(i)' >×</span>
                </p>
            </div>
            <!-- COMENTARIOS -->
            <div class="mb-3">
                <label for="exampleFormControlTextarea1">Comentarios</label>
                <textarea class="w3-input w3-border" v-model='orderComments'></textarea>
            </div>
            <!-- FACTURA Y CLIENTE -->
            <div class="w3-row">
                <div class="w3-col m2 w3-center">
                    <div>
                        <label for='exampleCheck1'>Factura</label>
                    </div>
                    <div>
                        <input class='w3-check w3-border' type='checkbox' v-model='orderInvoice'>
                    </div>
                </div>
                <div class="w3-col m10">
                    <div class='mb-3'>
                        <div class="tooltip">
                            <span class="tooltiptext px-1" id='guestTooltip'>Escriba un nombre</span>
                        </div>
                        <label for='exampleInputEmail1'>*Cliente</label>
                        <input class='w3-input w3-border' type='text' id='exampleInputEmail1' aria-describedby='emailHelp' v-model='guestName' />
                    </div>
                </div>
            </div>
            <button class='w3-button w3-blue w-100' type='submit' v-on:click='addItem'>Añadir</button>
        </div>
        <OrderAlert />
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import OrderAlert from './OrderAlert.vue'

export default {

    name: 'OrderCreator',
    data(){
        return {
            orderTitle: '',
            orderVariants: [],
            variantSelected: '',
            orderQuantity: 1,
            orderElements: [],
            orderComments: '',
            orderInvoice: false,
            guestName: ''
        }
    },
    components: {
        OrderAlert
    },
    created: function(){
        this.readDishes()
    },
    updated: function(){
        this.bodyEvent()
    },
    computed: {
        ...mapState('platillos', ['dishes', 'loader'])
    },
    methods: {
        ...mapMutations('platillos', ['allDishes']),
        ...mapActions('platillos', ['readDishes', 'addOrder']),
        bodyEvent(){
            const body = document.querySelector('body');
            body.addEventListener('click', this.hideAllTooltips, true)
        },
        hideAllTooltips(){
            const allTooltips = document.querySelectorAll('.tooltiptext');
            allTooltips.forEach( t => t.style.visibility='hidden' )
        },
        checkVariants(){
            const index = this.dishes.findIndex( i => i.title === this.orderTitle );
            const variants = this.dishes[index].variant;
            this.orderVariants.splice(0, this.orderVariants.length);
            this.variantSelected = '';
            if( variants.length > 0 ){
                variants.forEach( variant => {                        
                    this.orderVariants.push( variant )
                });
                //Select first element of variants
                //this.variantSelected = this.orderVariants[0];
            }
        },
        makeOrderElement(){
            if( this.orderTitle ){
                if( this.variantSelected ){
                    const fullOrder = `${this.orderTitle}, ${this.variantSelected}`;
                    const index = this.orderElements.findIndex( i => i.title === fullOrder );
                    if(index < 0){
                        // El elemento no está
                        this.orderElements.push( {title: fullOrder, quantity: this.orderQuantity} );
                    }else{
                        // El elemento si está
                        this.orderElements[index].quantity = this.orderQuantity;
                    }
                }else{
                    const idx = this.orderElements.findIndex( i => i.title === this.orderTitle );
                    if(idx < 0){
                        this.orderElements.push( {title: this.orderTitle, quantity: this.orderQuantity} );
                    }else{
                        this.orderElements[idx].quantity = this.orderQuantity;           
                    }
                }
            }else{
                this.showTitleTooltip();
            }
        },
        showTitleTooltip(){
            document.getElementById('orderTooltip').style.visibility = 'visible';
        },
        showElementsTooltip(){
            document.getElementById('elementsTooltip').style.visibility = 'visible';
        },
        showGuestTooltip(){
            document.getElementById('guestTooltip').style.visibility = 'visible';
        },
        deleteOrderElement( idx ){
            this.orderElements.splice(idx, 1)
        },
        showOrderAlert(){
            document.getElementById('id01').style.display='block'
        },
        hideOrderAlert(){
            document.getElementById('id01').style.display='none'
        },
        addItem(){
            if( this.orderElements.length < 1 || !this.guestName ){
                if( this.orderElements.length < 1 ){
                    this.showElementsTooltip();
                }
                if( !this.guestName ){
                    this.showGuestTooltip();
                }
            } else {
                // Convert array elements to string
                //const detalles = ( this.orderElements.map( (g) => {
                    //return `${g.title} x ${g.quantity}`
                    // Other form to retun join in a map
                    //return [g.title, g.quantity].join(' x ')
                //}) ).toString();
                const detalles = ( this.orderElements.map( (g) => {
                    return `${g.title} x ${g.quantity}`
                //});
                    }) )
                const obj = {
                    comments:    this.orderComments,
                    created:        new Date(),
                    delivered:   false,
                    details:     detalles,
                    status:      {
                                retrasado:  false,
                                trabajando: true
                                },
                    invoice:    this.orderInvoice,
                    modified:   new Date(),
                    name:       this.guestName,
                };
                console.log( this.$store.dispatch('comandas/addOrder', obj) );
                // Reset forms
                this.orderTitle = '';
                this.orderQuantity = 1;
                this.orderVariants.splice(0, this.orderVariants.length);
                this.orderElements.splice(0, this.orderElements.length);
                this.orderComments = '';
                this.orderInvoice = false;
                this.guestName = '';
                // Show alert
                //setTimeout(this.showOrderAlert, 400)
                this.showOrderAlert();
                // Set time out
                setTimeout(this.hideOrderAlert, 1000);
            }
        }
    }

}
</script>

<style scoped>

    /* Tooltip container */
    .tooltip {
        position: relative;
        display: inline-block;
        border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
    }

    /* Tooltip text */
    .tooltip .tooltiptext {
        visibility: hidden;
        width: 200px;
        bottom: 100%;
        left: 150px;
        margin-left: -60px;
        background-color: rgb(214, 214, 214);
        color: rgb(0, 0, 0);
        text-align: center;
        padding: 5px 0;
        border-radius: 6px;
        /* Position the tooltip text - see examples below! */
        position: absolute;
        z-index: 1;
    }

    /* Bottom Arrow */
    .tooltip .tooltiptext::after {
        content: " ";
        position: absolute;
        top: 100%; /* At the bottom of the tooltip */
        left: 25%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: rgb(214, 214, 214) transparent transparent transparent;
    }

    /* Show the tooltip text when you mouse over the tooltip container */
    .tooltip:hover .tooltiptext {
        visibility: visible;
    }

</style>