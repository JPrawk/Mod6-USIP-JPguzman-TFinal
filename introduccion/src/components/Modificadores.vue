<script setup>
    const accion = () =>{
        alert('enviar');
    };
</script>
<template>
    <form @submit.prevent="accion">

        <button  type="submit" >Guardar</button>    

    </form>

    <button  @click.once="accion" >Once</button>
    
</template>