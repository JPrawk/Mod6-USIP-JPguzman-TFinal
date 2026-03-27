<script setup>
    import {ref} from "vue";
    const nombre = ref('Carlos');
</script>
<template>
    <input v-model="nombre" >
    <input v-model="nombre" v-focus>
    <p>{{ nombre }}</p>
</template>