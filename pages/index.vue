<template lang="pug">
div
  UiGrid.container
    UiGridCell.d-none-phone(
      :columns="{ default: 4, tablet: 8 }",
      style="background-color: gray"
    ) Menu
    UiGridCell(
      :columns="{ default: 6, tablet: 8 }",
      style="background-color: gray"
    ) Contents
    UiGridCell(
      :columns="{ default: 2, tablet: 8, phone: 4 }",
      style="background-color: gray"
    ) info
</template>

<style scoped lang="scss">
.container {
  max-width: 1440px;
}
</style>
