<template>
  <div>
    <!-- <TheAside :navState="navState" /> -->
    <div class="drawer-mobile drawer">
      <input
        id="my-drawer"
        type="checkbox"
        :checked="navStore.asideOpen"
        class="drawer-toggle"
        @change="navStore.toggleAside"
      />
      <div class="drawer-content">
        <main class="relative transition-all">
          <TheHeader />
          <slot />
          <label for="my-drawer" class="btn btn-primary drawer-button"> Open drawer </label>
        </main>
        <TheFooter />
      </div>
      <div class="drawer-side">
        <label for="my-drawer" class="drawer-overlay"></label>
        <aside
          class="w-80 overflow-y-auto bg-base-100 text-base-content"
          @mouseover="navStore.openAside"
          :class="{
            'lg:w-20': !navStore.asideOpen,
          }"
        >
          <div class="p-3" v-if="!navStore.asideOpen">
            <img class="w-14" src="/logo-short.svg" />
          </div>
          <div class="p-3" v-else><img class="w-52" src="/logo.svg" /></div>
          <ul class="menu w-80 overflow-y-auto bg-base-100 text-base-content">
            <MenuItem to="/cart" :icon="CameraIcon" label="First Item" />
            <MenuItem to="/" :icon="CameraIcon" label="Second Item" />
            <MenuItem to="/" :icon="CameraIcon" label="Test Item">
              <MenuItem to="/" label="Test Item">
                <MenuItem to="/" label="Test Item">
                  <MenuItem to="/" label="Test Item"></MenuItem>
                </MenuItem>
              </MenuItem>
            </MenuItem>
          </ul>
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup>
import MenuItem from '@/components/MenuItem.vue'
import { useNavStore } from '@/stores/index.js'
import { CameraIcon } from '@heroicons/vue/solid/index.js'

const navStore = useNavStore()

defineExpose({
  navStore,
  CameraIcon,
})
</script>