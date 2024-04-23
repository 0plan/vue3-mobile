<script setup lang="ts">
const router = useRouter()
// const route = useRoute()

const title = '서비스 이용 리스트 3번입니다.'
const moveRouter = () => {
  router.back()
}
</script>

<template>
  <header m-3 flex justify-items-center>
    <button type="button" @click="moveRouter">
      <Icon light-name="arrow_left" dark-name="close__line--c9c" :width="24" :height="24" alt="뒤로가기" />
    </button>
    <p mx-auto w-30 text-lg class="truncate">
      {{ title }}
    </p>
    <Icon light-name="dropdown" type="svg" alt="탭열기" mr-3 />
    <Icon light-name="favorites" type="svg" alt="즐겨찾기" mr-3 />
    <Icon light-name="clipboard" type="svg" alt="공유하기" />
  </header>
  <main m-6>
    <RouterView />
  </main>
  <footer />
</template>

<style scoped lang="scss">

</style>
