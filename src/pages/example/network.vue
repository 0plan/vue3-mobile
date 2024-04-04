<script setup lang="ts">
const user: string = navigator.userAgent
const isOnline = useOnline()
console.log(user)
</script>

<template>
  <article>
    <p>user-agent: {{ user }}</p>
    <p>Network 상태: {{ isOnline ? 'Online' : 'Offline' }}</p>
  </article>
</template>

<route lang="yaml">
meta:
  layout: PageClose
  title: Network
</route>
