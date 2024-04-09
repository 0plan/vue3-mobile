<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode } from 'swiper/modules'
import Header from '~/components/Header.vue'
import { menu } from '~/components/menuBar'

const moduls = [FreeMode]
const target = ref<string>('전체')
const clickSlide = (value: string) => {
  target.value = value
}
</script>

<template>
  <Header />
  <div>
    <Swiper
      slides-per-view="auto" :free-mode="true" :modules="moduls" class="h-12 border-1 border-y-black/30 text-center text-base text-[#47484A] leading-12"
    >
      <SwiperSlide v-for="m in menu" :key="`menu-swiper-${m.name}`" class="w-20" :class="{ active: target === m.name }" @click="clickSlide(m.name)">
        <div class="w-18">
          <span>{{ m.name }}</span>
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
