<template>
    <form class="w3-container py-4">
        <div class="w3-center py-2">
            <i class="fas fa-user w3-jumbo w3-text-gray"></i>
        </div>
        <div class="py-2">
            <div class="py-1">
                <label class="w3-disabled"><b>Usuario</b></label>
                <input class="w3-input w3-border w3-margin-bottom" type="text" placeholder="Nombre de usuario" disabled>
            </div>
            <div class="py-1">
                <label class="w3-disabled"><b>Contraseña</b></label>
                <input class="w3-input w3-border" type="text" placeholder="******" disabled>
            </div>
        </div>
        <button class="w3-button w-100 w3-teal w3-disabled" disabled>Loging</button>
    </form>
</template>

<script>
export default {

    name: 'LoginForm'

}
</script>