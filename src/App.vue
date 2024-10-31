<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import LNavBar from './components/LNavBar.vue'
</script>

<template>
  <div>
    <LNavBar></LNavBar>
    <RouterView />
  </div>
</template>