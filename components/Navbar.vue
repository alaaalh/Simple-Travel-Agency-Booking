
<template>
    <div class="card">
        <Menubar :model="items" />
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-home',
        command: () => router.push('/')
    },
    {
        label: 'Language',
        icon: "pi pi-flag-us",
        items: [
            {
                label: 'English',
                icon: 'pi pi-bolt'
            },
            {
                label: 'Arabic',
                icon: 'pi pi-server'
            },
        ]
    },

]);
</script>
