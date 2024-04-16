<script setup lang="ts">
const moveTop = () => {
  document.getElementsByTagName('main')[0].scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <div class="h-24 w-14 flex flex-col items-center justify-center">
    <button class="mb-2 h-8 w-8 flex flex-col items-center justify-center border border border-[#AEAEB2] rounded-full bg-white" @click="moveTop">
      <icon
        light-name="filter_arrow"
        :width="20"
        :height="20"
        alt="화살표"
      />
    </button>
    <button class="h-14 w-14 flex flex-col items-center justify-center rounded-full bg-[#EB008B]">
      <icon
        light-name="filter"
        :width="28"
        :height="20"
        alt="필터"
      />
      <span class="text-xs/[17.38px] text-white font-bold">필터</span>
    </button>
  </div>
</template>

<route lang="yaml">

</route>
