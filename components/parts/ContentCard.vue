<template lang="pug">
UiCard.card.my-2
  UiCardContent.p-2
    UiSkeleton(
      v-if="loading",
      loading,
      active,
      avatar,
      title,
      :paragraph="{ rows: Math.floor(Math.random() * 5) }"
    )
    div(v-else)
      h3.d-inline-block
        UiIcon person
        | title
      .content-preview.text-muted
        | {{ getContent() }}
</template>
<script setup lang="ts">
const loading = ref(true);
setTimeout(() => {
  loading.value = false;
}, Math.random() * 1000);
const getContent = () => {
  let result = "";
  while (Math.random() < 0.9) {
    result += Math.random().toString(36).substring(2);
    Math.random() < 0.5 && (result += "\n");
  }
  return result;
};
</script>
<style lang="scss">
.content-preview {
  overflow: hidden;
  display: -webkit-box;
  box-orient: vertical;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  -webkit-line-clamp: 2;
}
.card {
  max-width: calc(100vw - 1rem);
}
</style>
