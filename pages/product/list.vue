<template>
  <div>
    <div class="container mx-auto my-4 px-4">
      <div class="flex items-center justify-between">
        <h1 class="text-2xl">Products</h1>
        <div class="btn-group">
          <button class="btn btn-sm bg-sky-400 text-white hover:border-solid hover:bg-sky-600">
            <PlusCircleIcon class="mr-1 h-5 w-5" /> Add new
          </button>
          <button class="btn btn-sm bg-violet-400 text-white hover:bg-violet-600">
            <DocumentIcon class="mr-1 h-5 w-5" /> Catalog as PDF
          </button>
          <button class="btn btn-sm bg-emerald-400 text-white hover:bg-emerald-600">
            <ArrowUpTrayIcon class="mr-1 h-5 w-5" /> Export
          </button>
          <button class="btn btn-sm bg-teal-400 text-white hover:bg-teal-600">
            <ArrowDownTrayIcon class="mr-1 h-5 w-5" /> Import
          </button>
          <button class="btn btn-sm bg-rose-400 text-white hover:bg-rose-600">
            <TrashIcon class="mr-1 h-5 w-5" /> Delete (selected)
          </button>
        </div>
      </div>
    </div>
    <BaseWidget />
    <div class="container mx-auto px-4"></div>
  </div>
</template>

<script setup>
import {
  PlusCircleIcon,
  DocumentIcon,
  ArrowUpTrayIcon,
  ArrowDownTrayIcon,
  TrashIcon,
} from '@heroicons/vue/24/solid/index.js'
</script>
