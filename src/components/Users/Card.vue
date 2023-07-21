<template>
  <div class="user-card">
    <img class="user__avatar" :src="user.avatar" alt="">
    <span class="user__name">{{ user.login }}</span>
  </div>
</template>

<script setup lang="ts">
  defineProps({
    user: {
      type: Object,
      required: true
    }
  })
</script>

<style scoped>

</style>