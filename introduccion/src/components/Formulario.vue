
<template>
    <form @submit.prevent="enviar">

        <!-- Input texto -->
        <input v-model="form.nombre" placeholder="Nombre"
            required
        >

        <!-- Email -->
        <input type="email" v-model="form.email" placeholder="Email">

        <!-- Password -->
        <input type="password" v-model="form.password" placeholder="Password">

        <!-- Número -->
        <input type="number" v-model="form.edad">

        <!-- Checkbox -->
        <label>
        <input type="checkbox" v-model="form.acepta" required>
        Acepto términos
        </label>

        <!-- Radio -->
        <label>
        <input type="radio" value="M" v-model="form.genero" > Masculino
        </label>
        <label>
        <input type="radio" value="F" v-model="form.genero" > Femenino
        </label>

        <!-- Select -->
        <select v-model="form.pais">
            <option value="">Seleccione</option>
            <option value="BO">Bolivia</option>
            <option value="AR">Argentina</option>
        </select>

        <!-- Textarea -->
        <textarea v-model="form.descripcion"></textarea>

        <button type="submit">enviar</button>
    </form>
    <pre>{{ form }}</pre>
</template>

<script setup>
    import { reactive } from 'vue'

    const form = reactive({
        nombre: '',
        email: '',
        password: '',
        edad: null,
        acepta: false,
        genero: '',
        pais: '',
        descripcion: ''
    })
    const enviar = () =>{
        if(form.value.genero == ''){
            alert('debe elegir genero');
        } else {
            alert('enviar');
        }
        
    };
</script>