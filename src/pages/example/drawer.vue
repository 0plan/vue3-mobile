<script setup lang="ts">
const drawer = ref<boolean>(false)
const openDrawer = () => {
  drawer.value = true
}
</script>

<template>
  <div class="px-20px pt-104px">
    <el-button plain @click="openDrawer">
      Drawer 오픈
    </el-button>
    <div>
      <el-drawer v-model="drawer" direction="btt" :close-on-click-modal="false" size="100%">
        <template #header="{ close, titleId, titleClass }">
          <h4 :id="titleId" :class="titleClass">
            필터
          </h4>
          <button @click="close">
            Close
          </button>
        </template>
      </el-drawer>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: PageClose
  title: Drawer
</route>
