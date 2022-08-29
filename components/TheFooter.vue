<template>
  <footer class="footer bg-neutral p-4 text-neutral-content mt-8">
    <div class="">
      <p>Powered by Vstore</p>
    </div>
    <div class="justify-self-center">
      {{ date }}
    </div>
    <div class="justify-self-end">
      Vstore version 0.0.1
    </div>
  </footer>
</template>

<script setup>
const date = computed(() => new Date().toDateString())

defineExpose({
  date
})
</script>