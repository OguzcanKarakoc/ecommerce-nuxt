<template>
  <div ref="collapsible">
    <slot></slot>
  </div>
  <div class="max-h-0 overflow-hidden transition-[max-height] duration-200 ease-out">
    <slot name="content"></slot>
  </div>
</template>

<script setup>
const collapsible = ref(null)

const props = defineProps({
  initiallyOpen: {
    type: Boolean,
    default: false,
  },
})

onMounted(() => {
  collapsible.value.addEventListener('click', function () {
    var content = this.nextElementSibling
    if (content.style.maxHeight) {
      content.style.maxHeight = null
    } else {
      content.style.maxHeight = content.scrollHeight + 'px'
    }
  })

  if (props.initiallyOpen) {
    collapsible.value.nextElementSibling.style.maxHeight =
      collapsible.value.nextElementSibling.scrollHeight + 'px'
  }
})
</script>
