<script setup>
    const lista = [
        {id: 1,nombre: "carlos"},
        {id:2,nombre: "maria"},
    ];

    const persona = {
        nombre: 'carlos',
        telefono: '77777777'
    }

</script>
<template>
    <h2>v-for</h2>
    <li v-for="(item,index) in lista" :key="`'usuario-'${index}`">
        {{index}} - {{ item.nombre }}
    </li>

    <div v-for="(valor,key) in persona" >
        <b>{{key}}</b>: {{ valor }} 
    </div>

    <ul>
        <li v-for="n in 5" :key="n">
            Número {{ n }}
        </li>
    </ul>
</template>