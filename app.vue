<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { themeChange } from 'theme-change'

onMounted(() => {
  themeChange(false)
})
</script>