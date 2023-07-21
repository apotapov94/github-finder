<template>
  <div class="repo">
    {{ repo }}
  </div>
</template>

<script setup lang="ts">
  defineProps({
    repo: {
      type: Object,
      required: true
    }
  })
</script>

<style scoped>

</style>