<script setup lang="ts">
import { ref } from 'vue';
import BlackLogo from '/images/logos/Sami-logo-black.png';
</script>

<template>
    <NuxtLink to="/" class="d-flex logo">
        <img :src="BlackLogo" alt="logo"/>
    </NuxtLink>
</template>