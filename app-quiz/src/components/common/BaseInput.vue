<template>
  <label :for="forValue" class="label">
    <input
      class="input"
      :id="forValue"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
      :class="{ valid: isValid }"
    />
    <span :class="{ valid: isValid }">
      {{ label }}
      <v-icon name="bi-question-circle-fill" speed="slow" scale="1" />
    </span>
  </label>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    label: {
      type: String,
      required: true,
    },
    forValue: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
  computed: {
    isValid() {
      return this.modelValue?.length > 0;
    },
  },
};
</script>

<style lang="scss" scoped>
$current-color: $radical-red;
label {
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 1.5rem;
  span {
    position: absolute;
    font-family: "Poppins-Regular";
    top: 50%;
    transform: translateY(-50%);
    left: 2rem;
    transition: all 0.4s;
    font-size: 1.1rem;
    padding: 0.1rem 1rem;
    background: var(--color-background);
    user-select: none;
    pointer-events: none;
  }

  input {
    width: 100%;
    background: transparent;
    padding: 1.2rem 2rem 0.6rem 2rem;
    border: 3px solid $current-color;
    border-radius: 0.5rem;
    font-family: "Poppins-Regular";
    color: white;
    font-size: 1.2rem;
    outline: none;
    &:focus {
      //background: $current-color;
      + span {
        //background: $current-color;
        border-inline: 3px solid $current-color;
        top: 0;
      }
    }

    &.valid {
      background: $shiraz;
    }
  }

  span.valid {
    top: 0;
    background: $current-color;
    border-inline: 3px solid $current-color;
    color: black;
    letter-spacing: 1px;
  }
}
</style>
