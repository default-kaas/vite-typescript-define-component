<template>
  <button type="button" @click="counter++">count is: {{ counter }}</button>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
export default defineComponent({
  name: "App",
  data: function() {
    return {
      counter: 0
    }
  },
})
</script>
