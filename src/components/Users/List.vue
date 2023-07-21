<template>
  <div class="wrapper" @scroll="onScroll">
    <div class="users">
      <Card v-for="user in users" :user="user" />
    </div>
    <Loader v-if="loading" />
    <button class="btn btn-primary load-more-btn" v-if="users && loadMore" @click="fetchUsers">Загрузить еще</button>
  </div>
</template>

<script setup lang="ts">
import { store } from '../../store';
import Card from './Card.vue'
import Loader from '../UI/Loader.vue'
import { computed } from 'vue'

const users = computed(() => store.state.users)
const loadMore = computed(() => store.state.loadMore)
const loading = computed(() => store.state.loading)

const fetchUsers = () => {
  store.dispatch('fetchUsers', store.state.search)
}

const onScroll = () => {
  console.log(document.documentElement.clientHeight)
}
</script>

<style scoped>

</style>