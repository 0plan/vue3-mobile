<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode } from 'swiper/modules'

const moduls = [FreeMode]
const route = useRoute()
console.log(route)
</script>

<template>
  <div>
    <Swiper
      :slides-per-view="3" :free-mode="true" :space-between="20" :modules="moduls" style="height: 48px; line-height: 48px; align-items: center; text-align: center; border: solid"
    >
      <SwiperSlide>
        test1
      </SwiperSlide>
      <SwiperSlide>
        test2
      </SwiperSlide>
      <SwiperSlide>
        test3
      </SwiperSlide>
      <SwiperSlide>
        test4
      </SwiperSlide>
      <SwiperSlide>
        test5
      </SwiperSlide>
      <SwiperSlide>test6</SwiperSlide>
    </Swiper>
  </div>
</template>

<route lang="yaml">
meta:
  layout: PageClose
  title: Swiper
</route>
