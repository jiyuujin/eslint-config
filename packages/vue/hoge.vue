<template>
  <div>
    {{ filter }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default {
  data() {
    return {
      abc: '123'
    }
  },
  computed: {
    filter() {
      return 'Go: ' + this.abc
    }
  }
}
</script>
