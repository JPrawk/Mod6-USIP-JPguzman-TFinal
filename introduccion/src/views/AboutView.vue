<script setup >
import Props from "../components/Props.vue"
import Emits from "../components/Emits.vue"
import { ref } from 'vue'
const miTitulo="curso de vue desde una variable";

const valorRecibido = ref('');

const mostrarEvento = (event) => {
  alert(event);
  valorRecibido.value = event;
};

</script>

<template>
  <div class="about">
    <h1>This is an <span>about</span> page</h1>
    <Props :titulo="miTitulo"></Props>
    <Emits @saludar="mostrarEvento($event)"></Emits>
    <pre>{{ valorRecibido }}</pre>
  </div>
</template>

<style lang="scss">

.about{
  color: orangered;
  span {
    color:white;
  }
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
