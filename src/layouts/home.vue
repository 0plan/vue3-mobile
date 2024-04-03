<script setup lang="ts">
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>

<style lang="scss" scoped>
main {
  @apply flex flex-col;
  overflow-y: auto;
  position: fixed;
  min-width: 360px;
  max-width: 900px;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
}

.light {
  main {
    background: $gray-100;
  }
}

.dark {
  main {
    background: $d-gray-10;
  }
}
</style>
