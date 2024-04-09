<script setup lang="ts">
const logo = ref<string>(`${import.meta.env.BASE_URL}/datafarm-logo.svg`)
const drawer = ref<boolean>(false)

const menus = [
  {
    value: 'all',
    label: '전체',
  },
  {
    value: 'join',
    label: '가입',
  },
  {
    value: 'combination',
    label: '결합',
  },
  {
    value: 'serviceUse',
    label: '서비스 이용',
  },
  {
    value: 'currentSituation',
    label: '현황',
  },
  {
    value: 'beforeChange',
    label: '변경 전',
  },
  {
    value: 'termination',
    label: '해지',
  },
  {
    value: 'benefits',
    label: '혜택',
  },
  {
    value: 'voc',
    label: 'VOC',
  },
  {
    value: 'etc',
    label: '기타',
  },

]

const openDrawer = () => {
  drawer.value = true
}
const closeDrawer = () => {
  drawer.value = false
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
    <h1>
      <img :src="logo" alt="로고 이미지" type="png">
    </h1>
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
      <h4 class="flex">
        <img src="/img/icons/arrowLeft.svg" alt="메뉴창 닫기" @click="close">
        <div class="flex justify-center">
          데이터 시각화
        </div>
      </h4>
    </template>
    <div>
      <el-row>
        <el-col>
          <el-menu
            class="el-menu-vertical"
            size="100%"
          >
            <el-menu-item
              v-for="(menu, index) in menus"
              :key="menu.value"
              v-model="menu.value"
              :index="index.toString()"
              class="menu"
              @click="closeDrawer"
            >
              <span>{{ menu.label }}</span>
              <img src="/img/icons/arrowRight_gray.svg" alt="메뉴">
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
  </el-drawer>
</template>

<style lang="scss" scoped>
.menuList {
  display: block;
  //border-top: gray 0.25px solid;
  //border-left: gray 0.25px solid;
  //border-right: gray 0.25px solid;
}

.menu {
  display: flex;
  justify-content: space-between;
  //border-bottom: gray 0.25px solid;
}
</style>
