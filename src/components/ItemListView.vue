<script setup lang="ts">
import { categoryList } from '~/components/categoryList'

const props = defineProps(['categoryName'])
const router = useRouter()

const categoryTitle = (value: string) => {
  const element = document.getElementById(`${value}`)
  if (element)
    element.scrollIntoView({ behavior: 'smooth' })

  else if (value === 'etc' && element)
    document.body.scrollIntoView(false)
}

const reportOpen = (title: string, report: number) => {
  router.push({ path: '/report', query: { title, report } })
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
    <ul v-for="item in categoryList.data" :key="`category-${item.title.value}`" mb-110>
      <li :id="`${item.title.value}`" :key="`${item.title.value}`" mb-4>
        {{ item.title.label }} ({{ item.totalCount }})
      </li>
      <li v-for="i in item.data" :key="`category-list-${i}`" mb-4 @click="reportOpen(item.title.value, i.value)">
        {{ i.label }}
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">

</style>
