<template>
  <aside
    class="w-80 overflow-y-auto bg-base-200 text-base-content"
    @mouseover="mouseOverAside"
    @mouseleave="mouseLeaveAside"
    :class="{
      'lg:w-20': !navStore.asideOpen,
    }"
  >
    <div class="px-3 pt-3">
      <VShopLogo :short="!navStore.asideOpen" class="max-h-11" />
    </div>
    <div class="divider m-0 px-3"></div>
    <ul
      class="menu w-80 overflow-y-auto text-base-content"
      :class="{
        'rounded-box lg:p-2': navStore.asideOpen,
      }"
    >
      <MenuItem to="/cart" :icon="DashboardIcon" label="Dashboard" />
      <MenuItem :icon="CatalogIcon" label="Catalog">
        <MenuItem to="/product/list" label="Products"></MenuItem>
      </MenuItem>
      <MenuItem to="/" :icon="SalesIcon" label="Sales">
        <MenuItem to="/" label="Test Item">
          <MenuItem to="/" label="Test Item">
            <MenuItem to="/" label="Test Item"></MenuItem>
          </MenuItem>
        </MenuItem>
      </MenuItem>
      <MenuItem to="/" :icon="CustomerIcon" label="Customers" />
      <MenuItem to="/" :icon="PromotionsIcon" label="Promotions" />
      <MenuItem to="/" :icon="ContentManagmentIcon" label="Content management" />
      <MenuItem to="/" :icon="ConfigurationIcon" label="Configuration" />
      <MenuItem to="/" :icon="SystemIcon" label="System" />
      <MenuItem to="/" :icon="ReportsIcon" label="Reports" />
      <MenuItem to="/" :icon="HelpIcon" label="Help" />
    </ul>
  </aside>
</template>

<script setup>
import MenuItem from '@/components/MenuItem.vue'
import { useNavStore } from '@/stores/index.js'
import {
  DesktopComputerIcon as DashboardIcon,
  BookmarkIcon as CatalogIcon,
  ShoppingCartIcon as SalesIcon,
  UserIcon as CustomerIcon,
  TagIcon as PromotionsIcon,
  PuzzleIcon as ContentManagmentIcon,
  CogIcon as ConfigurationIcon,
  CubeIcon as SystemIcon,
  PresentationChartLineIcon as ReportsIcon,
  QuestionMarkCircleIcon as HelpIcon,
} from '@heroicons/vue/24/solid/index.js'

const navStore = useNavStore()

function mouseOverAside() {
  navStore.openAside()
}

function mouseLeaveAside() {
  // if (navStore.asideOpen) navStore.closeAside()
}

defineExpose({
  navStore,
  mouseOverAside,
  mouseLeaveAside,
})
</script>