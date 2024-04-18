<script setup lang="ts">
import type { IFilterDetailOption, IFilterType } from '~/type/common/DrawerFilter'

const drawer = ref<boolean>(false)
const openDrawer = () => {
  drawer.value = true
}

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
  drawer.value = false
}

const summitBtn = () => {
  drawer.value = false
}

const notice = ref<boolean>(false)
const openNotice = () => {
  notice.value = true
}

const noticeTitle = {
  title: '데이터팜 서버작업 공지',
}

const noticeShow = ref(false)

const noMoreShow = (e: any) => {
  if (e.isTrusted)
    noticeShow.value = true
}

const closeNotice = () => {
  notice.value = false
}

const moveNotice = () => {
  if (noticeShow.value)
    notice.value = false
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
</script>

<template>
  <div class="px-20px pt-104px">
    <el-button plain @click="openDrawer">
      Drawer 오픈
    </el-button>
    <el-button plain @click="openNotice">
      공지사항 오픈
    </el-button>
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
    <div>
      <el-drawer
        v-model="notice"
        direction="btt"
        :close-on-click-modal="false"
        size="35%"
        :show-close="false"
      >
        <template #header>
          <p class="flex items-center justify-center text-xl font-bold">
            {{ noticeTitle.title }}
          </p>
        </template>
        <template #default>
          <div class="demo-drawer__content flex items-center justify-center">
            <div class="mb-4">
              공지사항을 보러 가시겠습니까?
            </div>
            <div class="round mt-15">
              <input id="checkbox" type="checkbox" class="mr-3" @click="noMoreShow">
              <label for="checkbox" />
              다시 보지 않기
            </div>
          </div>
        </template>
        <template #footer>
          <div class="demo-drawer__footer flex">
            <button class="h-12 w-48 border-1 border-[#aeaeb2] rounded-md bg-[#ffffff] text-[#1a1d1d]" @click="closeNotice">
              닫기
            </button>
            <button class="ml-4 h-12 w-48 rounded-md bg-[#eb008b] text-[#ffffff]" @click="moveNotice">
              확인
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

// ================== 둥근 체크박스 ================== //
.round {
  position: absolute;
}

.round label {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 0;
  left: 0;
}

.round label:after {
  border: 2px solid #eb008b;
  border-top: none;
  border-right: none;
  content: '';
  height: 6px;
  width: 12px;
  top: 25%;
  left: 15%;
  opacity: 0;
  position: absolute;
  transform: rotate(-45deg);
}

.round input[type='checkbox'] {
  visibility: hidden;
}

.round input[type='checkbox']:checked + label {
  background-color: white;
  border-color: #eb008b;
}

.round input[type='checkbox']:checked + label:after {
  opacity: 1;
}
</style>

<route lang="yaml">
meta:
  layout: PageClose
  title: Drawer
</route>
