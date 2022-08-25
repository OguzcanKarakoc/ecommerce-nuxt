<template>
  <li class="hover-bordered">
    <nuxt-link v-if="to && !isDropdown" :to="to">
      <component
        v-if="icon"
        :is="icon"
        class="h-5 w-5 transition-all"
        :class="{ 'lg:h-12 lg:w-12': !navStore.asideOpen }"
      />
      <span
        :class="{
          'lg:hidden': !navStore.asideOpen,
        }"
        >{{ label }}</span
      >
    </nuxt-link>
    <a class="hover-bordered" v-else @click.prevent="toggleDropdown">
      <component
        v-if="icon"
        :is="icon"
        class="h-5 w-5 transition-all"
        :class="{ 'lg:h-12 lg:w-12': !navStore.asideOpen }"
      />
      <span class="flex-grow">{{ label }}</span>
      <template v-if="isDropdown">
        <ChevronDownIcon v-if="!open" class="h-5 w-5" />
        <ChevronUpIcon v-else class="h-5 w-5" />
      </template>
    </a>

    <ul
      v-if="isDropdown"
      :class="{
        flex: open,
        hidden: !open,
      }"
      class="menu static ml-4 border-l-2 pl-0 transition-all"
    >
      <slot></slot>
    </ul>
  </li>
</template>

<script setup>
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/solid/index.js'
import { useNavStore } from '@/stores/index.js'

const navStore = useNavStore()
const slots = useSlots()
const isDropdown = slots.default ? true : false
const open = ref(false)

navStore.$subscribe((mutation, state) => {
  console.log(mutation, state)
  if (!state.asideOpen) {
    open.value = false
  }
})

const props = defineProps({
  to: String,
  label: {
    type: String,
    required: true,
  },
  icon: [Object, String, Function],
})

function toggleDropdown() {
  open.value = !open.value
  console.log('toggle')
}

defineExpose({
  toggleDropdown,
  isDropdown,
  open,
  ChevronDownIcon,
  ChevronUpIcon,
  navStore,
})
</script>
