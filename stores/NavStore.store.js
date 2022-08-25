export const useNavStore = defineStore('nav', () => {
  const asideOpen = ref(null)

  function toggleAside() {
    if (asideOpen.value == null) asideOpen.value = false
    asideOpen.value = !asideOpen.value
  }

  function closeAside() {
    asideOpen.value = false
  }

  function openAside() {
    asideOpen.value = true
  }

  return { asideOpen, toggleAside, closeAside, openAside }
})
