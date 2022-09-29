<template>
  <div class="loading">{{ message }}</div>
</template>

<script>
export default {
  name: "Loading",
  data() {
    return {
      target: "Loading....",
      message: "",
      i: 0,
    };
  },
  mounted() {
    setInterval(() => {
      this.message += this.target.charAt(this.i);
      this.i++;
      if (this.i === this.target.length) {
        this.message = "";
        this.i = 0;
      }
    }, 500);
  },
};
</script>

<style lang="scss" scoped>
.loading {
  display: grid;
  place-items: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  border-radius: 0.5rem;
  margin: 3rem 1rem;
  background: rgba(0, 0, 0, 0.4);
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 1) 50%,
    rgba(42, 18, 37, 0.8113446062018558) 80%,
    rgba(251, 58, 116, 1) 100%
  );
  color: $purple-heart;
  font-family: "Poppins-Regular";
  font-weight: bolder;
  font-size: 3rem;
}
</style>
