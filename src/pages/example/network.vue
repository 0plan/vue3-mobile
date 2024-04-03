<script setup lang="ts">
const user: string = navigator.userAgent
const isOnline = useOnline()
console.log(user)
</script>

<template>
  <div class="px-20px pt-104px">
    <p>{{ user }}</p>
    <p>Network 상태 : {{ isOnline ? 'Online' : 'Offline' }}</p>
  </div>
</template>

<route lang="yaml">
meta:
  layout: PageClose
  title: Network
</route>
