<template lang="pug">
div(v-if="show")
  .bar.d-medium-none
    LayoutTopBar
  .menu
    LayoutMenu
      #spacer.d-medium-none
      .wrapper
        .content.my-2
          slot
        .info.d-none.d-desktop-block.my-2
          slot(name="info")
</template>

<script setup lang="ts">
const showHeader = useShowHeader();
const show = ref(true);
watch(showHeader, () => {
  show.value = false;
  nextTick(() => {
    setTimeout(() => (show.value = true), 500);
  });
});
</script>

<style scoped lang="scss">
.content {
  flex-grow: 1;
}
.wrapper {
  display: flex;
}
.wrapper > * {
  padding-right: 0.5rem;
  padding-left: 0.5rem;
}
</style>
