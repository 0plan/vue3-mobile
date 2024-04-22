<script setup lang="ts">
import { categoryList } from '~/components/categoryList'

const props = defineProps(['categoryName'])

const categoryTitle = (value: string) => {
  const element = document.getElementById(`${value}`)
  if (element)
    element.scrollIntoView({ behavior: 'smooth' })

  else if (value === '현황' && element)
    document.body.scrollIntoView(false)
}

watch(
  props,
  (newValue) => {
    categoryTitle(newValue.categoryName)
  },
)
</script>

<template>
  <div>
    <ul v-for="item in categoryList" :key="`category-${item.title.value}`" mb-110>
      <li :id="`${item.title.value}`" :key="`${item.title.value}`">
        {{ item.title.label }}
      </li>
      <li v-for="i in item.data" :key="`category-list-${i}`">
        {{ i.label }}
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">

</style>
