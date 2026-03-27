<script setup>
import {ref} from 'vue';
    const edad = ref(20);
</script>
<template>
    <input type="text" v-model="edad">
<p v-if="edad >= 18 && edad < 65">Mayor de edad</p>
<p v-else-if="edad >= 65">Tercera edad</p>
<p v-else>Menor de edad</p>

<p v-show="edad<18"> Menor de edad </p>
</template>