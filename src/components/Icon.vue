<script setup lang="ts">
interface IProps {
  width?: number
  height?: number
  alt: string
  darkName: string
  lightName: string
  type?: string
}
const props = withDefaults(defineProps<IProps>(), {
  width: 24,
  height: 24,
  type: 'svg',
})
const darkMode = computed(() => {
  // if (isDark.value) {
  //   return `${import.meta.env.BASE_URL}images/icons/dark/${props.darkName}.${props.type}`
  // }
  // else {
  console.log(`${import.meta.env.BASE_URL}img/icons/${props.lightName}.${props.type}`)
  return `${import.meta.env.BASE_URL}img/icons/${props.lightName}.${props.type}`
  // }
})
</script>

<template>
  <img
    :src="darkMode" :alt="`${props.alt}`" :style="`width:${props.width}px; height:${props.height}px`"
  >
</template>
