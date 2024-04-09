<script setup lang="ts">
import type { IFilterType } from '~/type'

const drawer = ref<boolean>(false)
const openDrawer = () => {
  drawer.value = true
}

const filterList: IFilterType = {
  dashboard: [
    {
      value: 'media',
      label: '미디어',
    },
    {
      value: 'salesGroup',
      label: '영업그룹',
    },
    {
      value: 'marketing',
      label: '마케팅',
    },
    {
      value: 'diagnosis',
      label: '진단',
    },
  ],
  serviceType: [
    {
      value: 'mobile',
      label: '모바일',
    },
    {
      value: 'home',
      label: '홈',
    },
    {
      value: 'company',
      label: '기업',
    },
  ],
  sortBy: [
    {
      value: 'recent',
      label: '최신',
    },
    {
      value: 'viewCount',
      label: '조회수순',
    },
    {
      value: 'recommended',
      label: '추천순',
    },
  ],
}

const title = (data: string) => {
  if (data === 'dashboard')
    return '대시보드'
  if (data === 'serviceType')
    return '서비스유형'
  if (data === 'sortBy')
    return '정렬기준'
}
const filterOptions = reactive({
  dashboard: '',
  serviceType: '',
  sortBy: '',
})

const closeBtn = () => {
  drawer.value = false
}

const summitBtn = () => {
  drawer.value = false
}

const reset = () => {
  filterOptions.dashboard = ''
  filterOptions.serviceType = ''
  filterOptions.sortBy = ''
  console.log(filterOptions)
}

const handleButtonClick = (key: string, value: string) => {
  if (key === 'dashboard')
    filterOptions.dashboard = value

  if (key === 'serviceType')
    filterOptions.serviceType = value

  if (key === 'sortBy')
    filterOptions.sortBy = value
}
</script>

<template>
  <div class="px-20px pt-104px">
    <el-button plain @click="openDrawer">
      Drawer 오픈
    </el-button>
    <div>대시보드 {{ filterOptions.dashboard }}</div>
    <div>서비스유형 {{ filterOptions.serviceType }}</div>
    <div>정렬기준 {{ filterOptions.sortBy }}</div>
    <div>
      <el-drawer
        v-model="drawer"
        direction="btt"
        :close-on-click-modal="false"
        size="60%"
        :show-close="false"
      >
        <template #header="{ titleId, titleClass }">
          <h4 :id="titleId" :class="titleClass" class="flex">
            <img src="/img/icons/menu.svg" alt="필터" class="mr-4">
            필터
          </h4>
          <button class="flex" @click="reset">
            <img src="/img/icons/reset.svg" alt="초기화" class="mr-2">
            초기화
          </button>
        </template>
        <div class="demo-drawer__content">
          <div v-for="(key, index) in Object.keys(filterList)" :key="index" class="mb-4">
            {{ title(key) }}
            <div class="mt-4">
              <el-button
                v-for="filterType in filterList[key]"
                :key="filterType.value"
                v-model="filterType.value"
                round
                class="button"
                :class="{ active: filterOptions[key] === filterType.value }"
                @click="handleButtonClick(key, filterType.value)"
              >
                {{ filterType.label }}
              </el-button>
            </div>
          </div>
        </div>
        <template #footer>
          <div class="demo-drawer__footer flex">
            <button class="h-12 w-48 border-1 border-[#aeaeb2] rounded-md bg-[#ffffff] text-[#1a1d1d]" @click="closeBtn">
              닫기
            </button>
            <button class="ml-4 h-12 w-48 rounded-md bg-[#eb008b] text-[#ffffff]" @click="summitBtn">
              적용
            </button>
          </div>
        </template>
      </el-drawer>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.button:hover,
.button.active {
  border-color: #eb008b;
  color: #eb008b;
  background-color: #ffffff;
}

.demo-drawer__footer {
  display: flex;
  justify-content: center;
}
</style>

<route lang="yaml">
meta:
  layout: PageClose
  title: Drawer
</route>
