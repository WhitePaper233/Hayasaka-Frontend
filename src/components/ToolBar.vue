<template>
  <div class="toolbar">
    <div class="toolbar-inner">
      <div class="toolbar-avatar">
        <img src="@/assets/avatar.jpg" :alt="user_name">
      </div>

      <div class="toolbar-tools">
        <div :class="props.selected_panel == 'sessions' ? 'toolbar-tools-sessions-selected' : 'toolbar-tools-sessions'">
            <ChatBubbleOvalLeftEllipsisIconOutline class="toolbar-tools-icon" v-if="props.selected_panel != 'sessions'" />
            <ChatBubbleOvalLeftEllipsisIconSolid class="toolbar-tools-icon-selected" v-else />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { ChatBubbleOvalLeftEllipsisIcon as ChatBubbleOvalLeftEllipsisIconOutline } from '@heroicons/vue/24/outline'
import { ChatBubbleOvalLeftEllipsisIcon as ChatBubbleOvalLeftEllipsisIconSolid } from '@heroicons/vue/24/solid'

const user_name = ref<string>("白芷");

const props = defineProps<{
  selected_panel: 'sessions' | 'bots' | 'groups' | 'tests' | 'settings'
}>()
</script>

<style scoped>
.toolbar {
  @apply flex flex-col w-16 p-3 bg-gray-100 rounded-l-lg;
}

.toolbar-inner {
  @apply mix-blend-normal;
}

.toolbar-avatar {
  @apply drop-shadow-sm py-4;
}

.toolbar-avatar img {
  @apply rounded-full;
}

.toolbar-tools-sessions {
  @apply p-1.5 h-10 transition-all;
  @apply hover:(cursor-pointer bg-gray-200 rounded-md);
}

.toolbar-tools-sessions-selected {
  @apply p-1.5 h-10 bg-gray-200 rounded-md transition-all;
  @apply hover:cursor-pointer;
}

.toolbar-tools-icon {
  @apply stroke-gray-800;
}

.toolbar-tools-icon-selected {
  @apply fill-sky-500;
}
</style>