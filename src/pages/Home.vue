<template>
  <div>
    <h1>Home page</h1>
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
