<template>
  <aside
    class="fixed top-0 z-10 h-screen whitespace-nowrap bg-neutral text-white shadow-[0_14px_28px_rgba(0,0,0,.25),0_10px_10px_rgba(0,0,0,.22)] transition-all sm:hover:w-64"
    :class="{
      'left-0 w-64 overflow-auto': props.navState == NavigationEnum.OPEN, // force open
      'left-0 w-20 overflow-hidden': props.navState == NavigationEnum.SHRINK, // force shrink
      '-left-full w-64 overflow-auto': props.navState == NavigationEnum.HIDDEN,
      '-left-full w-64 overflow-auto lg:left-0': props.navState == NavigationEnum.DEFAULT,
    }"
  >
    <div>
      <div class="p-3" v-if="props.navState == NavigationEnum.OPEN">
        <img src="/logo-short.svg" />
      </div>
      <div class="p-3" v-else><img src="/logo.svg" /></div>
      <ul class="menu">
        <MenuItem to="/" label="First Item" />
        <MenuItem to="/" label="Second Item" />
        <MenuItem to="/" label="Test Item">
          <MenuItem to="/" label="Test Item">
            <MenuItem to="/" label="Test Item">
              <MenuItem to="/" label="Test Item"> </MenuItem>
            </MenuItem>
          </MenuItem>
        </MenuItem>
      </ul>
    </div>
  </aside>
</template>

<script setup>
import { NavigationEnum } from '@/enums'
import { CameraIcon } from '@heroicons/vue/solid/index.js'
import { useNavStore } from '@/stores/index.js'

const props = defineProps({
  navState: {
    type: String,
    default: NavigationEnum.DEFAULT,
    validator: (val) => Object.values(NavigationEnum).find((e) => e == val),
  },
})

defineExpose({
  CameraIcon,
})
</script>