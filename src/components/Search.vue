<template>
  <section class="section">
    <div class="container">
      <div class="search">
        <p>Введите имя пользователя:</p>
        <form @submit.prevent="searchUsers">
          <AppInput v-model="search" placeholder="Поиск" required />
          <button type="submit" class="btn btn-primary">Поиск</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { useStore } from 'vuex';
  import { computed } from 'vue'
  const store = useStore()

  const search = computed({
    get: () => store.state.search,
    set: (val) => store.commit('updateSearch', val)
  })

  const searchUsers = () => {
    store.dispatch('getUsers', store.state.search)
  }

</script>

<style scoped>

</style>