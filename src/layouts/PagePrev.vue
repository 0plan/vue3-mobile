<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode } from 'swiper/modules'
import type { Swiper as SwiperClass } from 'swiper/types'
import { menus } from '~/components/menuBar'

const router = useRouter()
const route = useRoute()

const modules = [FreeMode]
const target = ref<string>(route.query.target as string ?? 'all')
const title = ref<string>(route.meta.title as string)

const moveRouter = () => {
  router.back()
}
const clickSlide = (value: string) => {
  target.value = value
}
const initSlideTo = (swiper: SwiperClass) => {
  const targetIndex: number = menus.findIndex(item => item.value === target.value)
  swiper.slideTo(targetIndex, 500)
}
</script>

<template>
  <header m-3 flex justify-items-center>
    <button type="button" @click="moveRouter">
      <icon light-name="arrow_left" dark-name="close__line--c9c" :width="24" :height="24" alt="뒤로가기" />
    </button>
    <p mx-auto text-lg>
      {{ title }}
    </p>
  </header>
  <div>
    <Swiper
      slides-per-view="auto" :free-mode="true" :modules="modules" class="h-12 border-1 border-y-black/30 text-center text-base text-[#47484A] leading-12" @init="initSlideTo"
    >
      <SwiperSlide v-for="m in menus" :key="`menu-swiper-${m.value}`" class="w-20" :class="{ 'text-[#eb008b]': target === m.value }" @click="clickSlide(m.value)">
        <div
          class="w-18 cursor-pointer"
          :class="{ 'underline underline-offset-[13px]': target === m.value }"
        >
          <span>{{ m.label }}</span>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
  <main m-6>
    <RouterView />
  </main>
  <footer absolute fixed bottom-0 right-0 z-11111 mb-4 mr-5>
    <FilterButton />
  </footer>
</template>

<style lang="scss">
.active {
  color: #eb008b;
}
</style>
