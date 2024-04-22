<script setup lang="ts">
const props = defineProps(['target'])
const target = ref('')

watch(() => props.target, (newValue) => {
  target.value = newValue
})

onMounted(() => {
  target.value = props.target
})
</script>

<template>
  <div>
    <p>데이터 시각화 화면</p>
  </div>
  <ItemListView
    :category-name="target"
  />
</template>

<route lang="yaml">
meta :
  layout: PagePrev
  title: 데이터 시각화
</route>
