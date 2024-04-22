<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode } from 'swiper/modules'
import Header from '~/components/Header.vue'
import { menus } from '~/components/menuBar'

const modules = [FreeMode]
const target = ref<string>('all')
const clickSlide = (value: string) => {
  target.value = value
}
</script>

<template>
  <Header />
  <div>
    <Swiper
      slides-per-view="auto" :free-mode="true" :modules="modules" class="h-12 border-1 border-y-black/30 text-center text-base text-[#47484A] leading-12"
    >
      <SwiperSlide v-for="m in menus" :key="`menu-swiper-${m.value}`" class="w-20" :class="{ active: target === m.value }" @click="clickSlide(m.value)">
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
</template>

<style lang="scss">
.active {
  color: #eb008b;
}
</style>
