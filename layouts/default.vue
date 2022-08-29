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
        <TheHeader class="mb-8" />
        <main class="relative transition-all">
          <slot />
        </main>
        <TheFooter />
      </div>
      <div class="drawer-side lg:drop-shadow-lg">
        <label for="my-drawer" class="drawer-overlay"></label>
        <TheAside />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useNavStore } from '@/stores/index.js'

const navStore = useNavStore()

defineExpose({
  navStore,
})
</script>