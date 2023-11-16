<script setup lang="ts">
import { ref } from 'vue';
import GrayLogo from '/images/logos/Sami-logo-gray.png';
</script>

<template>
    <NuxtLink to="/" class="d-flex logo">
        <img :src="GrayLogo" alt="logo"/>
    </NuxtLink>
</template>