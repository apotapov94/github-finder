<template>
  <div class="input-group">
    <input
        v-bind="$attrs"
        :value="modelValue"
        :type="type"
        :placeholder="placeholder"
        @input="$emit('update:modelValue', $event.target.value)"    
    >
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    modelValue: string
    type: string
    placeholder: string
  }>()
</script>

<style scoped>

</style>