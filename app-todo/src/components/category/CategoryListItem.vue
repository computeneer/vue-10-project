<template>
  <div
    class="category-item"
    :class="{ selected: getSelectedCategory === category.id }"
    @click="onSelect(category.id)"
  >
    {{ category.name }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CategoryListItem",
  props: ["category"],
  methods: {
    onSelect(id) {
      this.$store.commit("setSelectedCategoryId", id);
    },
  },
  computed: {
    ...mapGetters(["getSelectedCategory"]),
  },
};
</script>

<style lang="scss" scoped>
$green: hsla(160, 100%, 37%, 1);

.category-item {
  display: flex;
  align-items: center;
  padding-block: 0.5rem;
  padding-inline: 1rem;
  color: $green;
  cursor: pointer;
  transition: all 0.5s;
  font-size: 1.1rem;
  font-family: "Helvetica Neue";
  user-select: none;

  &.selected {
    text-shadow: 0px 0px 5px $green, 0px 0px 15px $green;
    border: 1px solid $green;
    box-shadow: 0px 0px 5px 2px $green inset;
  }
}
</style>
