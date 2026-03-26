<script setup>
    const emit = defineEmits(['saludar'])

    function enviar() {
        emit('saludar', {mensaje:'Hola desde el hijo', type: 'info'})
    }
</script>

<template>
    <button @click="enviar">Enviar evento</button>
</template>
    