<script setup>
const mensaje = "hola <i> VUE </i>"
</script>
<template>
<p v-text="mensaje"></p>
<p v-html="mensaje"></p>
</template>