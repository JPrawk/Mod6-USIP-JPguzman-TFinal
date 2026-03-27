<script setup>

const imagen = "https://a.storyblok.com/f/291026/1280x720/eebe1a6174/vue-3-desde-cero.jpg";
const url = "https://vuejs.org/";
const active = false;
const clase = 'mi-clase';
const size = '20px';

</script>

<template>


    <div :class="{ activo: active, error: !active }">
        <p>texto con clase dinamico</p>
        <img v-bind:src="imagen">
        <a v-bind:href="url">Ir</a>
    </div>

    <div :class="clase">
        texto con nombre de clase
    </div>

    <div :style="{ color: 'gray', fontSize: size }">
        Interpolación de estilos
    </div>


</template>

<style scoped>
    .activo{
        color: green;
    }

    .error{
        color: red;
    }

    .mi-clase{
        color: yellow;
    }
</style>