<template>
    <div class='p-3'>
        <form>
            <div class='mb-3'>
                <label for='exampleInputEmail1' class='form-label'>*Cliente</label>
                <input type='text' class='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' />
            </div>
            <div class='mb-3'>
                <label for='exampleInputPassword1' class='form-label'>*Orden</label>
                <input class='form-control' type='text' id='exampleInputPassword1' />
                <div class='row py-2'>
                    <div class='col-sm-10'>
                        <div class='row'>
                            <div class='col-sm-9'>
                                <input type='range' class='form-range' min='1' max='9' id='customRange2' v-model='orderQuantity'>
                            </div>
                            <div class='col-sm-3'>
                                <label for='customRange2' class='form-label' >{{ orderQuantity }}</label>
                            </div>
                        </div>
                    </div>
                    <div class='col-sm-2'>
                        <button class='btn bg-success text-white w-100'>+</button>
                    </div>
                </div>
            </div>
        </form>
        <div class="border p-2 my-3 bg-light">
        </div>
        <div class='mb-3 form-check'>
            <input type='checkbox' class='form-check-input' id='exampleCheck1'>
            <label class='form-check-label' for='exampleCheck1'>Factura</label>
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button type='submit' class='btn btn-primary w-100'>Añadir</button>
    </div>
</template>

<script>
export default {
    name: 'OrderCreator',
    props: {
        value: Number
    },
   data(){
       return {
           orderQuantity: 1
       }
   },
   watch: {
       orderQuantity(value){
           this.$emit('input', value)
       }
   }
}
</script>