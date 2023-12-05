<template>
  <div class="main-background">
    <div class="panel">
      <ToolBar class="panel-toolbar" v-model:selected_panel=page />
      <div class="panel-body">
        <ChatWindow v-if="page == 'sessions'" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ToolBar from '@/components/ToolBar.vue'
import ChatWindow from '@/components/ChatWindow.vue'
import { ref } from 'vue'

import type { Selection } from '@/types'

const page = ref<Selection>('sessions')
</script>

<style scoped>
.main-background {
  @apply absolute h-[100%] w-[100%] bg-gradient-to-bl from-sky-200 to-blue-200;
}

.panel {
  @apply absolute w-[80%] h-[80%] m-auto top-0 left-0 bottom-0 right-0;
  @apply flex flex-row;
  @apply filter drop-shadow-2xl;
}

.panel-toolbar {
  @apply rounded-l-lg;
}

.panel-body {
  @apply flex-grow rounded-r-lg;
}
</style>
