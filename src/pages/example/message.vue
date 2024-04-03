<script setup lang="ts">
type messageType = 'success' | 'warning' | 'error' | 'info'
const messagePopup = (message: string, type: messageType) => {
  return ElMessage({
    type,
    message,

  })
}
const clickAlert = () => {
  return ElMessageBox.alert('Test', 'Alert', {
    confirmButtonText: '확인',
    type: 'info',
  })
}
const clickConfirm = () => {
  return ElMessageBox.confirm('Test', {
    title: 'Confirm',
    confirmButtonText: '확인',
    cancelButtonText: '취소',
    confirmButtonClass: 'btn__confirm',
    cancelButtonClass: 'btn__cancel',
  })
}
</script>

<template>
  <div class="px-20px pt-104px">
    <div>
      <h2>Confirm</h2>
      <ul class="flex flex-wrap">
        <li class="m-5px">
          <el-button @click="clickAlert">
            Alert
          </el-button>
        </li>
        <li class="m-5px">
          <el-button @click="clickConfirm">
            Confirm
          </el-button>
        </li>
      </ul>
    </div>
    <div class="mt5">
      <h2>Toast</h2>
      <ul class="flex flex-wrap">
        <li class="m-5px">
          <el-button @click="messagePopup('Success 테스트중', 'success')">
            Success
          </el-button>
        </li>
        <li class="m-5px">
          <el-button @click="messagePopup('Info 테스트중', 'info')">
            Info
          </el-button>
        </li>
        <li class="m-5px">
          <el-button @click="messagePopup('Warring 테스트중', 'warning')">
            Warning
          </el-button>
        </li>
        <li class="m-5px">
          <el-button @click="messagePopup('Error 테스트중', 'error')">
            Error
          </el-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: PageClose
  title: Message
</route>
