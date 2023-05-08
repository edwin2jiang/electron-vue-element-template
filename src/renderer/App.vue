<script setup lang="ts">
import NavBar from '@/components/navBar/index.vue'
window.electronAPI.sendMessage('Hello from App.vue!')
</script>

<template>
  <div class="flex h-full w-full">
    <NavBar></NavBar>
    <RouterView class="w-full"></RouterView>
  </div>
</template>

<style scoped></style>
<style>
html,
body,
#app {
  height: 100%;
}
</style>
