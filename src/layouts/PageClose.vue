<script setup lang="ts">
const router = useRouter()
const route = useRoute()

const title = ref<string>(route.meta.title as string)
const moveRouter = () => {
  router.back()
}
</script>

<template>
  <header m-3 flex flex-justify-between>
    <p text-xl>
      {{ title }}
    </p>
    <button type="button" @click="moveRouter">
      <icon light-name="close__line--3b4" dark-name="close__line--c9c" :width="28" :height="28" alt="닫기" />
    </button>
  </header>
  <main m-6>
    <RouterView />
  </main>
</template>
