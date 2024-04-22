<script setup lang="ts">
import type { IFilterDetailOption, IFilterType } from '~/type/common/DrawerFilter'

const props = defineProps(['openDrawer'])
const emit = defineEmits(['closeDrawer', 'filterOption'])
const { height } = useWindowSize()

const openDrawer = ref<boolean>(false)

const filterList: IFilterType = {
  dashboard: {
    title: {
      value: 'dashboard',
      label: '대시보드',
    },
    data: [
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
  },
  serviceType: {
    title: {
      value: 'serviceType',
      label: '서비스유형',
    },
    data: [
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
  },
  sortBy: {
    title: {
      value: 'sortBy',
      label: '정렬기준',
    },
    data: [
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
  },
}

const filterOptions: { [key: string]: string } = reactive({
  dashboard: '',
  serviceType: '',
  sortBy: '',
})

const closeBtn = () => {
  emit('closeDrawer', openDrawer.value = false)
}

const summitBtn = () => {
  emit('filterOption', filterOptions)
  emit('closeDrawer', openDrawer.value = false)
}

const reset = () => {
  filterOptions.dashboard = ''
  filterOptions.serviceType = ''
  filterOptions.sortBy = ''
}

const handleButtonClick = (key: IFilterDetailOption, value: string) => {
  if (key.title.value === 'dashboard')
    filterOptions.dashboard = value

  if (key.title.value === 'serviceType')
    filterOptions.serviceType = value

  if (key.title.value === 'sortBy')
    filterOptions.sortBy = value
}

const drawerSize = computed(() => {
  return height.value <= 360
})

watch(
  props,
  (newValue) => {
    if (newValue.openDrawer)
      openDrawer.value = true
  },
)
</script>

<template>
  <div class="px-20px pt-104px">
    <div>
      <el-drawer
        v-model="openDrawer"
        direction="btt"
        :close-on-click-modal="false"
        :size="drawerSize ? '100%' : '60%'"
        :show-close="false"
        :z-index="999"
      >
        <template #header="{ titleId, titleClass }">
          <h4 :id="titleId" :class="titleClass" class="flex">
            <Icon light-name="menu" type="svg" alt="필터" class="mr-4" />
            필터
          </h4>
          <button class="flex" @click="reset">
            <Icon light-name="reset" type="svg" alt="초기화" class="mr-2" />
            초기화
          </button>
        </template>
        <template #default>
          <div class="demo-drawer__content">
            <div v-for="(item, index) in filterList" :key="index" class="mb-4">
              {{ item.title.label }}
              <div class="mt-4">
                <el-button
                  v-for="filterType in item.data"
                  :key="filterType.value"
                  v-model="filterType.value"
                  round
                  class="button"
                  :class="{ active: filterOptions[item.title.value] === filterType.value }"
                  @click="handleButtonClick(item, filterType.value)"
                >
                  {{ filterType.label }}
                </el-button>
              </div>
            </div>
          </div>
        </template>
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
</route>
