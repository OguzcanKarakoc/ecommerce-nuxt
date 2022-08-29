<template>
  <div>
    <div class="container mx-auto my-4 px-4">
      <div class="flex items-center justify-between">
        <h1 class="text-2xl">Products</h1>
        <div class="btn-group">
          <button class="btn btn-sm bg-sky-400 hover:border-solid hover:bg-sky-600">
            <PlusCircleIcon class="mr-1 h-5 w-5" /> Add new
          </button>
          <button class="btn btn-sm bg-violet-400 hover:bg-violet-600">
            <DocumentIcon class="mr-1 h-5 w-5" /> Catalog as PDF
          </button>
          <button class="btn btn-sm bg-emerald-400 hover:bg-emerald-600">
            <ArrowUpTrayIcon class="mr-1 h-5 w-5" /> Export
          </button>
          <button class="btn btn-sm bg-teal-400 hover:bg-teal-600">
            <ArrowDownTrayIcon class="mr-1 h-5 w-5" /> Import
          </button>
          <button class="btn btn-sm bg-rose-400 hover:bg-rose-600">
            <TrashIcon class="mr-1 h-5 w-5" /> Delete (selected)
          </button>
        </div>
      </div>
    </div>
    <div class="container mx-auto my-4 px-4">
      <div class="card bg-base-100 shadow-xl">
        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
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
