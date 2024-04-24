<script setup lang="ts">
useHead({
  title: 'Vue3 Mobile',
  meta: [
    {
      name: 'description',
      content: 'Mobile DataFarm',
    },
    {
      name: 'theme-color',
      content: () => isDark.value ? '#00aba9' : '#ffffff',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: () => preferredDark.value ? `${import.meta.env.BASE_URL}/favicon-dark.svg` : `${import.meta.env.BASE_URL}/favicon.svg`,
    },
  ],
})
</script>

<template>
  <main h-screen w-full flex flex-col items-center>
    <div max-w-4xl min-w-xs w-full>
      <RouterView />
    </div>
  </main>
</template>
