<script setup lang="ts">
import Header from './components/Header.vue'
import Search from './components/Search.vue'
import UserSection from './components/UserSection.vue'
import { onMounted } from 'vue';

const onScroll = () => {
  console.log(document.documentElement.scrollTop, window.pageYOffset)
}

onMounted(() => {
  window.addEventListener('scroll', onScroll);
})
</script>

<template>
  <div class="top-bar">
    <Header />
    <Search />
  </div>
  <UserSection />
</template>

<style scoped>
</style>
