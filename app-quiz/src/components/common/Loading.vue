<template>
  <div class="loading"></div>
</template>

<script>
export default {
  name: "Loading",
};
</script>

<style lang="scss" scoped>
.loading {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  /* border-radius: 0.5rem; */
  margin: 3rem;
  background: rgba(0, 0, 0, 0.4);
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 1) 30%,
    rgba(42, 18, 37, 0.8113446062018558) 70%,
    rgba(251, 58, 116, 1) 100%
  );
  animation: loading-animate infinite 4s linear;
}

@keyframes loading-animate {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}
</style>
