<template>
  <section class="github-user-section">
    <div class="container">
      <div class="search-count">Найдено пользователей: {{ searchCount }}</div>
      <Users />
    </div>
  </section>
</template>

<script setup lang="ts">
  import Users from './Users/List.vue'
  import { computed } from 'vue'
  import { store } from '../store';

  const searchCount = computed(() => store.state.totalCount)
</script>

<style scoped>

</style>