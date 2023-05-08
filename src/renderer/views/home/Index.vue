<script setup>
import HelloWorld from '../../components/HelloWorld.vue'

const counter = ref(0)
</script>

<template>
  <div class="">
    <div class="box bg-gray-700 text-white">home</div>
    {{ counter }}
    <button @click="counter++">+</button>
    <!-- <About></About> -->
    <HelloWorld></HelloWorld>
  </div>
</template>

<style scoped lang="scss">
.container {
  .box {
    color: red;
  }
}
</style>
