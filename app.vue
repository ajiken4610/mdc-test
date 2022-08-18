<template lang="pug">
.container
  NuxtPage
</template>

<style lang="scss">
// @use "@material/layout-grid" with (
//   $breakpoints: (
//     phone: 0,
//     tablet: 600px,
//     medium: 840px,
//     laptop: 1240px,
//     desktop: 1440px,
//   )
// );
// @use "balm-ui/dist/balm-ui";
@use "material-components-web/material-components-web";
// Custom.scss
// Option B: Include parts of Bootstrap

// 1. Include functions first (so you can manipulate colors, SVGs, calc, etc)
@import "bootstrap/scss/functions";

// 2. Include any default variable overrides here
$grid-breakpoints: (
  phone: 0,
  tablet: 600px,
  medium: 840px,
  laptop: 1240px,
  desktop: 1440px,
);
// 3. Include remainder of required Bootstrap stylesheets
@import "bootstrap/scss/variables";
@import "bootstrap/scss/maps";
@import "bootstrap/scss/mixins";

// 4. Include any optional Bootstrap components as you like
@import "bootstrap/scss/root";
@import "bootstrap/scss/reboot";
@import "bootstrap/scss/utilities";
@import "bootstrap/scss/utilities/api";
@import "bootstrap/scss/containers";
</style>
