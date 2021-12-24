<template>
  <div class="about">
    <h1>This is a vuex page</h1>
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore()
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
