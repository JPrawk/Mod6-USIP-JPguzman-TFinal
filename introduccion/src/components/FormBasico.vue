<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
    nombre: '',
    email: '',
    password: ''
})

const errores = ref({})

function validar() {
    errores.value = {}

    if (!form.nombre) {
        errores.value.nombre = 'El nombre es obligatorio'
    }

    if (!form.email.includes('@')) {
        errores.value.email = 'Email inválido'
    }

    if (form.password.length < 6) {
        errores.value.password = 'Mínimo 6 caracteres'
    }

    return Object.keys(errores.value).length === 0
}

function enviar() {
    if (validar()) {
        alert('Formulario válido')
    }
}
</script>

<template>
    <form @submit.prevent="enviar">

        <input v-model="form.nombre" placeholder="Nombre">
        <span>{{ errores.nombre }}</span>

        <input v-model="form.email" placeholder="Email">
        <span>{{ errores.email }}</span>

        <input type="password" v-model="form.password">
        <span>{{ errores.password }}</span>

        <button>Enviar</button>

    </form>
</template>

<style scoped lang="scss">
form {
    max-width: 500px;

    input {
        width: 100%;
    }
}
</style>