<template>
  <NuxtLayout> <NuxtPage /> </NuxtLayout>
</template>

<script>
import { themeChange } from 'theme-change'

export default {
  setup() {
    onMounted(() => {
      themeChange(false)
    })
  },
}
</script>
