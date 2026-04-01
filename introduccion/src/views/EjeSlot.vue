<script setup>
import Layout from '@/components/Layout.vue';

const texto = "texto del padre"

</script>

<template>
    <Layout>

        <template #header>
            <h1>Encabezado</h1>
        </template>

        <template  v-slot="{ dato }">
                <strong>desde el padre{{ dato }}</strong>
        </template>

        <template v-slot:footer>
            <p>Pie de página {{ texto }}</p>
        </template>

    </Layout>
</template>