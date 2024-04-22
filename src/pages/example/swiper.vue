<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
</script>

<template>
  <div>
    <Swiper
      :slides-per-view="4" :pagination="true" :breakpoints="{ 1024: { slidesPerView: 2, slidesPerGroup: 2 } }" :modules="[Pagination]" style="height: 300px; line-height: 100px; align-items: center; text-align: center; border: solid"
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
    </Swiper>
  </div>
</template>

<route lang="yaml">
meta:
  layout: PagePrev
  title: Swiper
</route>
