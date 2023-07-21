<template>
  <section class="github-user-section">
    <div class="container">
      <div v-if="searchCount > 0 && !loading" class="search-count">Найдено пользователей: {{ searchCount }}</div>
      <Users />
    </div>
  </section>
</template>

<script setup lang="ts">
  import Users from './Users/List.vue'
  import { computed } from 'vue'
  import { store } from '../store';

  const searchCount = computed(() => store.state.totalCount)
  const loading = computed(() => store.state.loading)
</script>

<style scoped>

</style>