<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { themeChange } from 'theme-change'

onMounted(() => {
  themeChange(false)
})
</script>