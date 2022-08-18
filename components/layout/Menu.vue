<template lang="pug">
UiDrawer(:type="isModal ? 'modal' : 'permanent'")
  UiDrawerHeader
    UiDrawerTitle Title
    UiDrawerSubtitle Subtitle
  UiDrawerContent
    UiNavItem(active) activeItem
    UiNavItem non-activeItem
</template>

<script setup lang="ts">
const isModal = window.innerWidth < 840;
</script>
