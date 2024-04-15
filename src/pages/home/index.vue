<script setup lang="ts">
interface IRoutes {
  title: string
  name: string
}

const router = useRouter()
const routes: IRoutes[] = [
  { title: 'Swiper', name: '/example/swiper' },
  { title: 'Input', name: '/example/swiper' },
  { title: 'Network', name: '/example/network' },
  { title: 'Drawer', name: '/example/drawer' },
  { title: 'Popup', name: '/example/swiper' },
  { title: 'Message', name: '/example/message' },
].sort((a, b) => a.title > b.title ? 1 : -1)

const movePage = (page: string) => {
  router.push(page)
  // test.value = page
}
</script>

<template>
  <p text-xl>
    UI example
  </p>
  <ul flex flex-wrap>
    <li v-for="r in routes" :key="r.title" m-1>
      <el-button plain @click="movePage(r.name)">
        {{ r.title }}
      </el-button>
    </li>
  </ul>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
