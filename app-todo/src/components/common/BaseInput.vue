<template>
  <div class="input-group">
    <input
      :id="forValue"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
    />
    <label class="green" :class="{ 'opacity-0': modelValue }" :for="forValue">{{
      label
    }}</label>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    forValue: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">
.input-group {
  display: flex;
  flex-direction: column-reverse;
  position: relative;

  label {
    position: absolute;
    top: 0;
    left: 1rem;
    font-weight: bold;
    font-size: 1.3rem;
    z-index: 2;
    opacity: 0.4;
    pointer-events: none;
  }

  input {
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.2rem;
    outline: none;
    font-size: 1.1rem;

    &:focus {
      + label {
        opacity: 1;
      }
    }
  }

  .opacity-0 {
    opacity: 0 !important;
  }
}
</style>
