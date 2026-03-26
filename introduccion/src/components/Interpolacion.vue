<script setup>
    import { ref } from 'vue'
    const mensaje = ref('Hola Vue')
    const mensajeFx = (version = '1.0.0') => {
        return "Vue " + version;
    };
    const edad = 20;
    const usuario = {
        nombre: 'Ana',
        edad: 30
    }
    const colores = ['rojo', 'verde', 'azul']
</script>

<template>
    <p>{{ mensaje }}</p>
    <p>{{ mensajeFx() }}</p>
    <p>{{ mensajeFx("3.0.0") }}</p>
    <p>{{ 7 +10 }}</p>
    <p>{{ 7 > 10 }}</p>
    <p>{{ true && false }}</p>
    <p>{{ edad > 18 ? "mayor de edad" : "menor de edad" }}</p>
    <p>{{ usuario.nombre }}</p>
    <p>{{ colores[1] }}</p>
    <pre >{{ usuario }}</pre>
    <pre>{{ colores }}</pre>
</template>