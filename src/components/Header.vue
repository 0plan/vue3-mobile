<script setup lang="ts">
import { menus } from '~/components/menuBar'

const router = useRouter()
const logo = ref<string>(`${import.meta.env.BASE_URL}/abacus-logo.svg`)
const drawer = ref<boolean>(false)
const selectMenu = ref<string>('all')

const openDrawer = () => {
  drawer.value = true
}
const closeDrawer = () => {
  drawer.value = false
}
const menuClick = (data: string) => {
  selectMenu.value = data
  closeDrawer()
  router.push({ name: '/visualization/', query: { target: data } })
}
</script>

<template>
  <header m-3 flex flex-justify-between>
    <button type="button" @click="openDrawer">
      <icon
        light-name="menu"
        dark-name="menu"
        :width="28"
        :height="28"
        alt="닫기"
      />
    </button>
    <img :src="logo" alt="로고 이미지" type="png">
    <button type="button">
      <el-badge is-dot>
        <icon
          light-name="alarm__bell"
          dark-name="alarm__bell"
          :width="28"
          :height="28"
          alt="알람"
        />
      </el-badge>
    </button>
  </header>
  <el-drawer
    v-model="drawer"
    direction="ltr"
    :close-on-click-modal="false"
    :show-close="false"
    size="100%"
  >
    <template #header="{ close }">
      <div class="flex">
        <Icon class="mr-a" light-name="arrow_left" type="svg" alt="메뉴창 닫기" @click="close" />
        <p class="mr-a text-lg text-black">
          데이터 시각화
        </p>
      </div>
    </template>
    <ul>
      <li
        v-for="(menu) in menus"
        :key="menu.value"
        class="menu flex flex-between cursor-pointer border-b p-4"
        :class="{ active: selectMenu === menu.value }"
        @click="menuClick(menu.value)"
      >
        <span>{{ menu.label }}</span>
        <Icon light-name="arrow_right_gray" type="svg" alt="메뉴" />
      </li>
    </ul>
  </el-drawer>
</template>

<style lang="scss" scoped>
.menuList {
  display: block;
}

.menu {
  display: flex;
  justify-content: space-between;
}

.menu.active {
  color: #1a1d1d;
  font-weight: bold;
  background-color: #ffffff;
}
</style>
