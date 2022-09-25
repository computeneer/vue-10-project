<template>
  <div class="category">
    <span>
      {{ category.name }}
    </span>
  </div>
</template>

<script>
export default {
  name: "CategoryListItem",
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.category {
  $current-color: $radical-red;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(50% - 0.5rem);
  height: 125px;
  border: 3px solid $current-color;
  color: $current-color;
  font-family: "Poppins-Regular";
  font-size: 1.5rem;
  letter-spacing: 2px;
  cursor: pointer;
  overflow: hidden;

  span {
    z-index: 5;
    transition: all 0.2s;
  }

  &::before,
  &::after {
    content: "";
    height: 100%;
    background: $current-color;
    width: 0px;
    position: absolute;
    transition: all 0.2s;
  }

  &::before {
    left: 50%;
  }
  &::after {
    right: 50%;
  }

  &:hover {
    span {
      color: black;
    }
    &::before,
    &::after {
      width: 50%;
    }
  }
}
</style>
