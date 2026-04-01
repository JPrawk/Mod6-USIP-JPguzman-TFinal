
<script setup>
    import { ref, reactive, watch, computed } from 'vue'

    const form = reactive({
        email: '',
    })

    const name = ref('');

    const errorEmail = ref('')

    watch(() => form.email, (nuevo) => {
        if (!nuevo.includes('@')) {
            errorEmail.value = 'Email inválido'
        } else {
            errorEmail.value = 'válido'
        }
    })

    const enviar = () =>{
        alert('enviar');
    };



    const nombreVacio = computed(()=>{
        return name.value === '';
    });

</script>

<template>
    <form @submit.prevent="enviar()">
        <input type="text" v-model="name">
        <br>
        <span v-if="nombreVacio">El nombre el requerido</span>
        <br>
        <input type="text" v-model="form.email">
        <br>
        <span :class="{error: errorEmail !== 'válido'}">{{ errorEmail }}</span>
        <br>
        <button type="submit">Enviar</button>
    </form>
</template>

<style>
    .error {
        color: red;
    }
</style>