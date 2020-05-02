<template>
  <div>
    <h1>test</h1>
    <button @click="inc">Clicked {{ count }} times.</button>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  setup() {
    const count = ref(0)
    const inc = () => {
      count.value++
    }

    return {
      count,
      inc,
    }
  },
}
</script>

<style scoped></style>
