<template lang="pug">
UiDrawer.position-fixed.drawer(:type="type", v-model="open", navId="menu")
  UiDrawerHeader
    UiDrawerTitle Title
    UiDrawerSubtitle Subtitle
  UiDrawerContent
    .d-flex.flex-column.h-100
      UiNav
        NuxtLink(
          v-for="(item,index) of topItems",
          custom,
          v-slot="{ isActive, href }",
          :to="item.link",
          :key="index"
        )
          UiNavItem(:href="href", :active="isActive") {{ item.displayName }}
            template(#before="{ iconClass }")
              UiIcon(:class="iconClass") {{ item.icon }}
      .mt-auto.d-medium-none
      .d-none.d-medium-block
        UiDivider
      UiNav
        NuxtLink(to="/account", custom, v-slot="{ isActive, href }")
          UiNavItem(:href="href", :active="isActive") Account
            template(#before="{ iconClass }")
              UiIcon(:class="iconClass") person
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

const topItems = reactive([
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

<style scoped lang="scss">
.drawer {
  z-index: 0;
}
</style>
