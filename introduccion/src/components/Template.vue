<template>
    <div>

    <template v-if="activo">
        <h2>Activo</h2>
        <p>Usuario habilitado</p>
    </template>

    <template v-else>
        <p>Usuario desactivado</p>
    </template>

    </div>
</template>

<script setup>
    import { ref } from 'vue'

    const activo = ref(true)
</script>