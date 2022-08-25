<template>
  <div class="dropdown dropdown-end">
    <label tabindex="0" class="btn m-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 mr-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
      Theme
    </label>
    <ul
      tabindex="0"
      class="dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px max-h-96 h-[70vh] w-52 overflow-y-auto shadow-2xl mt-16"
    >
      <div class="grid grid-cols-1 gap-3 p-3">
        <div class="btn" v-for="theme in themes" :key="theme" :data-set-theme="theme" :data-theme="theme">
          {{ theme }}
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
import { ArrowDownIcon, ColorSwatchIcon } from '@heroicons/vue/solid/index.js'

export default {
  components: { ArrowDownIcon, ColorSwatchIcon },
  data() {
    return {
      themes: [
        'light',
        'dark',
        'cupcake',
        'bumblebee',
        'emerald',
        'corporate',
        'synthwave',
        'retro',
        'cyberpunk',
        'valentine',
        'halloween',
        'garden',
        'forest',
        'aqua',
        'lofi',
        'pastel',
        'fantasy',
        'wireframe',
        'black',
        'luxury',
        'dracula',
        'cmyk',
        'autumn',
        'business',
        'acid',
        'lemonade',
        'night',
        'coffee',
        'winter',
      ],
    }
  },
}
</script>
