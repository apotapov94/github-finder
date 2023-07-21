<script setup lang="ts">
import { useStore } from 'vuex';
import { computed } from 'vue'
const store = useStore()

defineProps<{ msg: string }>()



const title = computed({
  get: () => store.state.title,
  set: (val) => store.commit('setTitle', val)
})


</script>

<template>
  <h1>{{ msg }}</h1>
  {{ title }}
  <input type="text" v-model="title">
  <button>change title</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
