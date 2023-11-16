<script setup lang="ts">
import { ref } from 'vue';
import WhiteTextLogo from '/images/logos/Sami-logo-white.png';
</script>

<template>
    <NuxtLink to="/" class="d-flex wt-logo">
        <img :src="WhiteTextLogo" alt="logo"/>
    </NuxtLink>
</template>