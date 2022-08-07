<template>
  <div>
    <nav class="sticky top-0 flex flex-col bg-red-600">
      <div class="main container mx-auto">
        <ul class="menu menu-horizontal">
          <li tabindex="0" @click="toggleMegaMenu"><span>Vind uw bmw</span></li>
          <li @click="toggleMegaMenu"><span>Aanschaf lease</span></li>
          <li @click="toggleMegaMenu"><span>Elektrisch rijden</span></li>
          <li @click="toggleMegaMenu"><span>Service & accesoires</span></li>
          <li @click="toggleMegaMenu"><span>Meer bmw</span></li>
        </ul>
      </div>
      <Transition name="bounce">
        <div v-show="show" class="overlay fixed top-0 bottom-0 left-0 right-0 flex-grow bg-slate-800/90">
          <div class="container mx-auto rounded-b bg-white p-3">testin</div>
        </div>
      </Transition>
    </nav>

    <div class="container p-10">
      <h1 class="text-4xl">Welcome to .com</h1>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
      <h3 class="mt-10 text-xl">Mega Menu Example, Built with Tailwind CSS</h3>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

let show = ref(false)
const calculateMargin = () => {
  let box = document.querySelector('nav > div.main')
  let height = box.offsetHeight
  let overlay = document.querySelector('nav > div.overlay')
  overlay.style.marginTop = height + 'px'
}

onMounted(() => {
  calculateMargin()
})
onUpdated(() => {
  calculateMargin()
})

const toggleMegaMenu = () => {
  console.log('test is called')
  show.value = !show.value;
}
</script>


<style>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>