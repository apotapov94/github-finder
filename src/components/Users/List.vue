<template>
  <div class="users">
    <Card v-for="user in users" :user="user" />
  </div>
</template>

<script setup lang="ts">
import { store } from '../../store';
import Card from './Card.vue'
import { computed } from 'vue'

const users = computed(() => store.state.users)
</script>

<style scoped>

</style>