<template>
  <div class="toolbar">
    <div class="toolbar-inner">
      <div class="toolbar-tools-tags">
        <vs-tooltip placement="right">
          <div class="toolbar-avatar">
            <img src="@/assets/avatar.jpg" :alt="user_name" />
          </div>
          <template #content>当前角色: {{ user_name }}</template>
        </vs-tooltip>

        <div class="toolbar-tools">
          <!-- 聊天按钮 开始 -->
          <vs-tooltip placement="right">
            <div
              :class="
                props.selected_panel == 'sessions'
                  ? 'toolbar-tools-btn-selected'
                  : 'toolbar-tools-btn'
              "
              @click="change_selection('sessions')"
            >
              <ChatBubbleOvalLeftEllipsisIconOutline
                class="toolbar-tools-icon"
                v-if="props.selected_panel != 'sessions'"
              />
              <ChatBubbleOvalLeftEllipsisIconSolid class="toolbar-tools-icon-selected" v-else />
            </div>
            <template #content>聊天</template>
          </vs-tooltip>
          <!-- 聊天按钮 结束 -->

          <!-- 角色按钮 开始 -->
          <vs-tooltip placement="right">
            <div
              :class="
                props.selected_panel == 'charactars'
                  ? 'toolbar-tools-btn-selected'
                  : 'toolbar-tools-btn'
              "
              @click="change_selection('charactars')"
            >
              <UserIconOutline
                class="toolbar-tools-icon"
                v-if="props.selected_panel != 'charactars'"
              />
              <UserIconSolid class="toolbar-tools-icon-selected" v-else />
            </div>
            <template #content>角色</template>
          </vs-tooltip>
          <!-- 角色按钮 结束 -->

          <!-- 群组按钮 开始 -->
          <vs-tooltip placement="right">
            <div
              :class="
                props.selected_panel == 'groups'
                  ? 'toolbar-tools-btn-selected'
                  : 'toolbar-tools-btn'
              "
              @click="change_selection('groups')"
            >
              <UserGroupIconOutline
                class="toolbar-tools-icon"
                v-if="props.selected_panel != 'groups'"
              />
              <UserGroupIconSolid class="toolbar-tools-icon-selected" v-else />
            </div>
            <template #content>群组</template>
          </vs-tooltip>
          <!-- 群组按钮 结束 -->

          <!-- 自动化测试按钮 开始 -->
          <vs-tooltip placement="right">
            <div
              :class="
                props.selected_panel == 'tests' ? 'toolbar-tools-btn-selected' : 'toolbar-tools-btn'
              "
              @click="change_selection('tests')"
            >
              <BeakerIconOutline
                class="toolbar-tools-icon"
                v-if="props.selected_panel != 'tests'"
              />
              <BeakerIconSolid class="toolbar-tools-icon-selected" v-else />
            </div>
            <template #content>自动测试</template>
          </vs-tooltip>
          <!-- 自动化测试按钮 结束 -->
        </div>
      </div>

      <!-- 管理按钮栏 开始 -->
      <div class="toolbar-tools-management">
        <!-- 设置按钮 开始 -->
        <vs-tooltip placement="right">
          <div
            :class="
              props.selected_panel == 'settings'
                ? '!mt-1 !mb-0 toolbar-tools-btn-selected'
                : '!mt-1 !mb-0 toolbar-tools-btn'
            "
            @click="change_selection('settings')"
          >
            <Cog6ToothIconOutline
              class="toolbar-tools-icon"
              v-if="props.selected_panel != 'settings'"
            />
            <Cog6ToothIconSolid class="toolbar-tools-icon-selected" v-else />
          </div>
          <template #content>设置</template>
        </vs-tooltip>
        <!-- 设置按钮 结束 -->

        <!-- 角色管理按钮 开始 -->
        <vs-tooltip placement="right">
          <div
            :class="
              props.selected_panel == 'charactar_manage'
                ? '!mb-1 !mt-0 toolbar-tools-btn-selected'
                : '!mb-1 !mt-0 toolbar-tools-btn'
            "
            @click="change_selection('charactar_manage')"
          >
            <ListBulletIconOutline
              class="toolbar-tools-icon"
              v-if="props.selected_panel != 'charactar_manage'"
            />
            <ListBulletIconSolid class="toolbar-tools-icon-selected" v-else />
          </div>
          <template #content>角色管理</template>
        </vs-tooltip>
        <!-- 角色管理按钮 结束 -->
      </div>
      <!-- 管理按钮栏 结束 -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  ChatBubbleOvalLeftEllipsisIcon as ChatBubbleOvalLeftEllipsisIconOutline,
  UserIcon as UserIconOutline,
  UserGroupIcon as UserGroupIconOutline,
  BeakerIcon as BeakerIconOutline,
  ListBulletIcon as ListBulletIconOutline,
  Cog6ToothIcon as Cog6ToothIconOutline
} from '@heroicons/vue/24/outline'
import {
  ChatBubbleOvalLeftEllipsisIcon as ChatBubbleOvalLeftEllipsisIconSolid,
  UserIcon as UserIconSolid,
  UserGroupIcon as UserGroupIconSolid,
  BeakerIcon as BeakerIconSolid,
  ListBulletIcon as ListBulletIconSolid,
  Cog6ToothIcon as Cog6ToothIconSolid
} from '@heroicons/vue/24/solid'

import type { Selection } from '@/types'

const user_name = ref<string>('白芷')

const props = defineProps<{
  selected_panel: Selection
}>()

const emits = defineEmits<{
  (e: 'update:selected_panel', value: Selection): void
}>()

function change_selection(traget: Selection) {
  emits('update:selected_panel', traget)
}
</script>

<style scoped>
.toolbar {
  @apply flex h-full w-16 p-3 bg-gray-100 rounded-l-lg;
}

.toolbar-inner {
  @apply mix-blend-normal flex flex-col justify-between;
}

.toolbar-avatar {
  @apply filter drop-shadow-md my-6 transform transition-all;
  @apply hover:(cursor-pointer scale-110);
}

.toolbar-avatar img {
  @apply rounded-full;
}

.toolbar-tools-btn {
  @apply my-2 p-1.5 h-10 transition-all;
  @apply hover:(cursor-pointer bg-gray-200 rounded-md);
}

.toolbar-tools-btn-selected {
  @apply my-2 p-1.5 h-10 bg-gray-200 rounded-md transition-all;
  @apply hover:cursor-pointer;
}

.toolbar-tools-icon {
  @apply stroke-gray-800;
}

.toolbar-tools-icon-selected {
  @apply fill-sky-500;
  animation: icon-stroke-fill 250ms ease-in-out forwards;
}

.toolbar-tools-management {
  @apply flex h-full flex-col-reverse;
}

@keyframes icon-stroke-fill {
  from {
    @apply fill-transparent;
  }
  to {
    @apply fill-sky-500;
  }
}
</style>
