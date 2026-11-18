<script setup>
import { Analytics } from '@vercel/analytics/vue';
import { RouterView } from "vue-router";
</script>

<template>
  <Analytics />
  <router-view />
</template>
