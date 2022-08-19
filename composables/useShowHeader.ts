const showHeader = ref(window.innerWidth < 840);
export default () => showHeader;
window.addEventListener("resize", () => {
  showHeader.value = window.innerWidth < 840;
});
