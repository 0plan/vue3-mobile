<script setup lang="ts">
const router = useRouter()
const route = useRoute()
const titleValue = ref<string>(route.meta.title as string)
const stepValue = ref<number>()

const setTitle = (title: string, v: number) => {
  titleValue.value = title
  stepValue.value = v
}

const unsetPdStyle = (path: string) => {
  if (path === '/login/find/id' || path === '/login/find/password')
    return 'login-layout'
}

const grayTheme = (path: string) => {
  if (path === '/my-page/robot-set')
    return 'gray-theme'
}
const movePage = () => {
  if (route.name === 'my-page-profile-set')
    router.go(-2)
  else if (route.name === 'my-page')
    router.push({ path: '/home/' })
  else if (route.name === 'login-join-membership' && stepValue.value === 2)
    stepValue.value = stepValue.value - 1
  else if (route.name === 'login-join-membership' && stepValue.value === 3)
    stepValue.value = stepValue.value - 1
  else if (route.name === 'login-join-membership')
    router.go(-1)
  else if (route.name === 'my-page-privacy-policy')
    router.push({ path: '/my-page/' })
  else router.back()
}
</script>

<template>
  <header class="sub-header">
    <div class="relative h-full flex-center justify-center">
      <button type="button" class="btn__prev">
        <icon light-name="arrow-l__line--3b4" dark-name="arrow-l__line--fdf" :width="28" :height="28" alt="대기장소" />
      </button>
      <h2>
        {{ titleValue }}
      </h2>
    </div>
  </header>
  <main :class="[unsetPdStyle(route.path), grayTheme(route.path)]">
    <RouterView :step-value="stepValue" @set-title="setTitle" />
  </main>
</template>

<style lang="scss" scoped>
.sub-header {
  position: fixed;
  z-index: 999;
  width: 100%;
  min-width: 360px;
  max-width: 900px;
  height: $header-height;
  padding-top: 24px;
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);

  @supports (-webkit-touch-callout: none) {
    height: calc($ios-header-height + var(--sat));
    padding-top: var(--sat);
  }

  h2 {
    @apply text-18 font-700;
  }

  .btn__prev {
    display: inline-block;
    position: absolute;
    top: calc(50%);
    left: 16px;
    width: 28px;
    height: 28px;
    transform: translateY(-50%);
  }
}

main {
  @apply flex flex-col;
  overflow-y: auto;
  position: fixed;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  min-width: 360px;
  max-width: 900px;

  &.login-layout {
    // 로그인 레이아웃 내 패딩 제거
    padding: 68px 0 0 0;
  }
}

.light {
  .sub-header {
    background: rgba(255, 255, 255, 0.3);

    &.gray-theme {
      background: $gray-50;
    }
  }
}

main {
  background: $white-00;

  &.gray-theme {
    background: $gray-50;
  }
}

.dark {
  .sub-header {
    background: rgba(16, 16, 18, 0.3);
  }

  main {
    background: $d-gray-10;
  }
}
</style>
