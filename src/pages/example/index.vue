<script setup lang="ts">
const routes = [
  { title: 'swiper', name: 'example-swiper' },
].sort((a, b) => a.title > b.title ? 1 : -1)
</script>

<template>
  <div>
    <button>
      test
    </button>
    <h2 class="mb-10px ml-10px text-xl">
      UI example
    </h2>
    <ul class="flex flex-wrap">
      <li v-for="r in routes" :key="r.title" class="m-5px">
        <el-button>
          <RouterLink class="icon-btn mx-2" :to="{ name: r.name }">
            {{ r.title }}
          </RouterLink>
        </el-button>
      </li>
    </ul>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
