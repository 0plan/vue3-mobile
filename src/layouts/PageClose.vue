<script setup lang="ts">
const router = useRouter()
const route = useRoute()

const title = ref<string>(route.meta.title as string)
const moveRouter = () => {
  router.back()
}
</script>

<template>
  <header class="sub-header">
    <div class="relative h-full flex-center justify-center">
      <h2>
        {{ title }}
      </h2>
      <button type="button" class="btn__close" @click="moveRouter">
        <icon light-name="close__line--3b4" dark-name="close__line--c9c" :width="28" :height="28" alt="닫기" />
      </button>
    </div>
  </header>
  <main>
    <RouterView />
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
  padding-top: 36px;
  padding-bottom: 12px;
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);

  @supports (-webkit-touch-callout: none) {
    height: calc($ios-header-height + var(--sat));
    padding-top: var(--sat);
  }

  h2 {
    @apply text-18 font-700;
  }

  .btn__close {
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
  }
}

main {
  @apply flex flex-col;
  overflow-y: auto;
  position: fixed;
  width: 100%;
  min-width: 360px;
  max-width: 900px;
  height: 100%;
}

.light {
  .sub-header {
    background: rgba(255, 255, 255, 0.3);

    h2 {
      color: $gray-900;
    }
  }

  main {
    background-color: $white-00;

    &.gray-theme {
      background: $gray-100;
    }
  }
}

.dark {
  .sub-header {
    background: rgba(16, 16, 18, 0.3);

    h2 {
      color: $d-gray-900;
    }
  }

  main {
    background-color: $d-gray-10;
  }
}
</style>
