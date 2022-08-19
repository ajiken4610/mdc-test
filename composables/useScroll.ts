const scrollX = ref(window.scrollX);
const scrollY = ref(window.scrollY);
export default () => [scrollX, scrollY];
export const useScrollX = () => scrollX;
export const useScrollY = () => scrollY;

window.addEventListener("scroll", () => {
  scrollX.value = window.scrollX;
  scrollY.value = window.scrollY;
});
