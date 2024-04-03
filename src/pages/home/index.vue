<script setup lang="ts">
interface IRoutes {
  title: string
  name: string
}

const router = useRouter()
const logo = ref<string>(`${import.meta.env.BASE_URL}/datafarm-logo.svg`)
const drawer = ref<boolean>(false)
const routes: IRoutes[] = [
  { title: 'Swiper', name: '/example/swiper' },
  { title: 'Input', name: '/example/swiper' },
  { title: 'Network', name: '/example/network' },
  { title: 'Drawer', name: '/example/drawer' },
  { title: 'Popup', name: '/example/swiper' },
  { title: 'Message', name: '/example/message' },
  { title: 'swiper', name: '/example/swiper' },

].sort((a, b) => a.title > b.title ? 1 : -1)

const movePage = (page: string) => {
  router.push(page)
}
const openDrawer = () => {
  drawer.value = true
}
</script>

<template>
  <div>
    <header class="header">
      <div class="relative h-full flex-center justify-center">
        <button type="button" class="btn__prev__left" @click="openDrawer">
          <icon light-name="menu" dark-name="alarm__bell.svg" :width="28" :height="28" alt="닫기" />
        </button>
        <h1>
          <img class="logo__img" :src="logo" alt="로고 이미지" type="png">
        </h1>
        <button type="button" class="btn__prev__right">
          <el-badge is-dot>
            <icon light-name="alarm__bell" dark-name="alarm__bell.svg" :width="28" :height="28" alt="알람" />
          </el-badge>
        </button>
      </div>
    </header>
    <div class="test">
      <!-- example -->
      <h2 class="mb-10px ml-10px text-xl">
        UI example
      </h2>
      <ul class="flex flex-wrap">
        <li v-for="r in routes" :key="r.title" class="m-5px">
          <el-button plain @click="movePage(r.name)">
            {{ r.title }}
          </el-button>
        </li>
      </ul>
    </div>
  </div>
  <el-drawer v-model="drawer" direction="ltr" :close-on-click-modal="false" size="100%">
    <template #header>
      <h4>
        데이터 시각화
      </h4>
    </template>
  </el-drawer>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

<style lang="scss" scoped>
.header {
  position: fixed;
  z-index: 999;
  width: 100%;
  min-width: 360px;
  max-width: 900px;
  height: 76px;
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);

  @supports (-webkit-touch-callout: none) {
    height: calc(52px + var(--sat));
    padding-top: var(--sat);
  }

  h2 {
    @apply text-18 font-700;
  }

  .btn__prev__left {
    display: inline-block;
    position: absolute;
    top: calc(50%);
    left: 16px;
    width: 28px;
    height: 28px;
    transform: translateY(-50%);
  }
  .btn__prev__right {
    display: inline-block;
    position: absolute;
    top: calc(50%);
    right: 16px;
    width: 28px;
    height: 28px;
    transform: translateY(-50%);
  }
}
.logo__img {
  width: 117px;
  height: 29px;
}
.test {
  padding: 104px 20px 42px;
}
</style>
