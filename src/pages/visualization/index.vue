<script setup lang="ts">
import { categoryList } from '../../components/categoryList'

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
  <div mb-4>
    <p>전체 ({{ categoryList.categoryTotal }})</p>
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
