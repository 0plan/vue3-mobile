<script setup lang="ts">
useHead({
  title: 'LG U+ Mobile 데이터팜',
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
  <RouterView />
</template>
