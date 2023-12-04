<template>
  <div class="main-background">
    <div class="panel">
      <ToolBar class="panel-toolbar" selected_panel="sessions" />
      <div class="panel-body">
        <ChatWindow v-if="page == 'chat'" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ToolBar from '@/components/ToolBar.vue';
import ChatWindow from '@/components/ChatWindow.vue';
import { ref } from 'vue';

const page = ref<'chat' | 'settings'>('chat');
</script>

<style scoped>
  .main-background {
    @apply absolute h-[100%] w-[100%] bg-gradient-to-bl from-sky-200 to-blue-200;
  }
  
  .panel {
    @apply absolute w-[80%] h-[80%] m-auto top-0 left-0 bottom-0 right-0;
    @apply flex flex-row;
    @apply drop-shadow-md;
  }

  .panel-toolbar {
    @apply rounded-l-lg;
  }

  .panel-body {
    @apply flex-grow rounded-r-lg;
  }
</style>