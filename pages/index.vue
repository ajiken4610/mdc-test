<template lang="pug">
div
  .bar
    LayoutTopBar
  #contents.wrapper
    .menu
      LayoutMenu
    .content content
    .info.d-none.d-desktop-block info
</template>

<style scoped lang="scss">
.content {
  flex-grow: 1;
}
.wrapper {
  display: flex;
}
.wrapper > * {
  min-height: 100vh;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
}
</style>
