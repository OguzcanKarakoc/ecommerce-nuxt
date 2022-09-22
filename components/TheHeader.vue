<template>
  <nav
    class="navbar sticky top-0 z-10 flex justify-between bg-neutral text-white transition-all"
    :class="{
      'nav-open': navStore.asideOpen && navStore.asideOpen != null,
      'nav-close': !navStore.asideOpen && navStore.asideOpen != null,
    }"
  >
    <label class="swap-rotate btn swap">
      <input type="checkbox" class="hidden" :checked="navStore.asideOpen" @change="handleAside" />
      <MenuIcon class="hidden h-full w-full fill-current p-2 lg:block" />
      <XIcon class="swap-on h-full w-full fill-current p-2 lg:hidden" />
      <MenuIcon class="swap-off h-full w-full fill-current p-2 lg:hidden" />
    </label>
    <ul class="menu menu-horizontal">
      <MenuItem label="Test" />
      <MenuItem label="Test" />
      <MenuItem label="Test" />
      <ThemePicker />
    </ul>
  </nav>
</template>

<script setup>
import { Bars3Icon as MenuIcon, XMarkIcon as XIcon } from '@heroicons/vue/24/solid/index.js'
import { useNavStore } from '@/stores/index.js'
import MenuItem from '@/components/MenuItem.vue'

const navStore = useNavStore()

function handleAside(event) {
  navStore.toggleAside()
}

defineExpose({
  MenuItem,
  navStore,
  handleAside,
})
</script>
