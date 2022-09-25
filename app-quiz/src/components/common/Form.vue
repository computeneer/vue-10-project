<template>
  <div class="form">
    <div class="title">
      {{ title }}
    </div>
    <slot />
    <button :disabled="disabled" @click="onClick"><v-icon name="gi-click" scale="1.4" />{{ btnText }}</button>
  </div>
</template>

<script>
export default {
  name: "Form",
  props: {
    title: {
      type: String,
      required: true,
    },
    btnText: {
      type: String,
      required: true,
    },
    onClick: {
      type: Function,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped lang="scss">
.form {
  margin-block: 2rem;
  border: 5px solid $radical-red;
  border-radius: 0.5rem;
  max-width: 750px;
  margin-inline: auto;
  min-height: 450px;
  padding: 1rem 3rem;
  box-shadow: 0 0 5px $radical-red, 0 0 15px $radical-red, 0 0 25px $radical-red;

  .title {
    text-align: center;
    font-size: 2rem;
    font-family: "Poppins-Regular";
    color: $radical-red;
  }

  button {
    $btn-color: $razzmatazz;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-block: 2rem 1rem;
    margin-inline: auto 3rem;
    font-size: 1.2rem;
    font-family: "Poppins-Regular";
    padding: 0.2rem 3rem;
    border: none;
    background: $btn-color;
    border-radius: 0.5rem;
    color: white;
    cursor: pointer;
    transition: all 0.3s;
    &:disabled {
      cursor: not-allowed;
      filter: hue-rotate(30deg);
    }

    &:not(:disabled):hover {
      box-shadow: 0 0 5px $btn-color, 0 0 15px $btn-color, 0 0 25px $btn-color, 0 0 45px $btn-color;
      filter: blur(0.3px);
    }
  }
}
</style>
