<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
const router = useRouter()
const movePage = () => {
  router.push('/home')
}
</script>

<template>
  <div text-center>
    <p text-xl>
      테스트중
    </p>
    <div m-2>
      <el-button @click="movePage">
        Main 화면 이동
      </el-button>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
