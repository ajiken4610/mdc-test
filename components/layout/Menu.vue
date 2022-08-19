<template lang="pug">
UiDrawer(:type="type", v-model="open", navId="menu")
  UiDrawerHeader
    UiDrawerTitle Title
    UiDrawerSubtitle Subtitle
  UiDrawerContent
    UiNav
      NuxtLink(
        v-for="(item,index) of items",
        v-slot="{ isActive, href }",
        :to="item.link",
        :key="index"
      )
        UiNavItem(:href="href", :active="isActive", :icon="item.icon") {{ item.displayName }}
UiDrawerAppContent
  slot
</template>

<script setup lang="ts">
const showHeader = useShowHeader();
const open = computed({
  get() {
    return !showHeader.value;
  },
  set: () => {},
});
const type = computed(() => {
  return showHeader.value ? "modal" : "dismissible";
});

const items = reactive([
  {
    icon: "home",
    displayName: "Home",
    link: "/",
  },
  {
    icon: "explore",
    displayName: "Explore",
    link: "/explore",
  },
]);
</script>
