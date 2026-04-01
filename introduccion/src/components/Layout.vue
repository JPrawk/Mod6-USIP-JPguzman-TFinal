<script setup>
    const texto = "texto del hijo";
    const items = ['A', 'B', 'C']
</script>
<template>


    <header>
        <slot name="header"></slot>
    </header>

    <div>{{ texto }}</div>
    <main>
        <ul>
        <li v-for="item in items" :key="item">
            <slot :dato="item"></slot>
        </li>
    </ul>



    </main>



    <footer>
        <slot name="footer"></slot>
    </footer>
</template>