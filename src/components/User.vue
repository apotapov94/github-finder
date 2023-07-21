<template>
  <div class="user" v-if="user">
    <div class="user__avatar">
      <a :href="user.url"><img :src="user.avatar" alt=""></a>
    </div>
    <div class="user__info">
      <span class="user__name">{{ user.name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { store } from '../store'
  import { computed } from 'vue'
 
  const user = computed(() => store.state.user)
</script>

<style scoped>

</style>