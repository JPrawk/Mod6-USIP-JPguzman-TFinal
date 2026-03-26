<script setup>
    import { ref, computed } from 'vue'

    const precio = ref(100)

    const precioConIVA = computed(() => {
        const iva = 1.13;
        return precio.value * iva;
    })

</script>

<template>
    <p>Total: {{ precioConIVA }}</p>
</template>