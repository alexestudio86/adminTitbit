<template>
    <div class='w3-white p-3'>
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
        <div class="w3-border p-2 my-3 w3-light-gray">
            <p class='w3-tag w3-round-xxlarge w3-white w3-border w3-right-align' v-for="(e, i) of orderElements" :key="i">
                {{ e.title }} x {{ e.quantity }} - {{ i }}
                <span class="w3-badge w3-red m-1" style='cursor:pointer' v-on:click='deleteOrderElement(i)' >×</span>
            </p>
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1">Comentarios</label>
            <textarea class="w3-input w3-border" v-model='orderComments'></textarea>
        </div>
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
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

export default {

    name: 'OrderCreator',
    data(){
        return {
            orderTitle: '',
            orderVariants: [],
            variantSelected: '',
            orderQuantity: 1,
            orderElements: [],
            orderComments: null,
            orderInvoice: null,
            guestName: ''
        }
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
        ...mapActions('platillos', ['readDishes']),
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
            this.variantSelected = ''
            if( variants.length > 0 ){
                variants.forEach( variant => {                        
                    this.orderVariants.push( variant )
                });
                this.variantSelected = this.orderVariants[0];
            }
        },
        makeOrderElement(){
            if( this.orderTitle ){
                if( this.variantSelected ){
                    const fullOrder = `${this.orderTitle}, ${this.variantSelected}`;
                    const index = this.orderElements.findIndex( i => i.title === fullOrder );
                    if(index){
                        // El elemento no está
                        this.orderElements.push( {title: fullOrder, quantity: this.orderQuantity} );
                    }else{
                        // El elemento si está
                        this.orderElements[index].quantity = this.orderQuantity;
                    }
                }else{
                    const fullOrder = `${this.orderTitle}`;
                    this.orderElements.push( {title: fullOrder, quantity: this.orderQuantity} );
                }
                // Reset forms
                this.orderTitle = '';
                this.orderVariants.splice(0, this.orderVariants.length);
                this.orderQuantity = 1;
            }else{
                this.showTitleTooltip();
            }
        },
        showTitleTooltip(){
            document.getElementById('orderTooltip').style.visibility = 'visible';
        },
        showGuestTooltip(){
            document.getElementById('guestTooltip').style.visibility = 'visible';
        },
        deleteOrderElement( idx ){
            this.orderElements.splice(idx, 1)
        },
        addItem(){
            if( !this.orderTitle || !this.guestName ){
                if( !this.orderTitle ){
                    console.log('No hay titulo');
                    this.showTitleTooltip();
                }
                if( !this.guestName ){
                    console.log('No hay Cliente');
                    this.showGuestTooltip();
                }
            } else {
                console.log(`${this.orderTitle}`);
                class newOrder {
                    constructor( comments, details ){
                        this.comments   =   comments;
                        this.date       =   new Date();
                        this.delivered  =   false;
                        this.details    =   details;
                    }
                };
                console.log( new newOrder( this.orderComments, `${this.orderTitle}${this.variantSelected ? ", "+this.variantSelected : ""}` )  );
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