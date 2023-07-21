<template>
  <div class="repos">
    <Card v-for="repo in repos" :repo="repo" />
  </div>
</template>

<script setup lang="ts">
import { store } from '../../store';
import Card from './Card.vue'
import { computed } from 'vue'

const repos = computed(() => store.state.repos)
</script>

<style scoped>

</style>