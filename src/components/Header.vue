<script setup lang="ts">
const logo = ref<string>(`${import.meta.env.BASE_URL}/datafarm-logo.svg`)
const drawer = ref<boolean>(false)
const openDrawer = () => {
  drawer.value = true
}
</script>

<template>
  <header m-3 flex flex-justify-between>
    <button type="button" @click="openDrawer">
      <icon light-name="menu" dark-name="alarm__bell.svg" :width="28" :height="28" alt="닫기" />
    </button>
    <h1>
      <img :src="logo" alt="로고 이미지" type="png">
    </h1>
    <button type="button">
      <el-badge is-dot>
        <icon light-name="alarm__bell" dark-name="alarm__bell.svg" :width="28" :height="28" alt="알람" />
      </el-badge>
    </button>
  </header>
  <el-drawer v-model="drawer" direction="ltr" :close-on-click-modal="false" size="100%">
    <template #header>
      <h4>
        데이터 시각화
      </h4>
    </template>
  </el-drawer>
</template>
