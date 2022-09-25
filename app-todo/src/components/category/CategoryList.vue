<template>
  <div class="category-list">
    <CategoryListItem
      v-for="item in [{ id: null, name: 'All Todos' }, ...getCategories]"
      :key="item.id ?? 'null'"
      :category="item"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CategoryListItem from "./CategoryListItem.vue";
export default {
  computed: {
    ...mapGetters(["getCategories"]),
  },
  components: { CategoryListItem },
};
</script>

<style lang="scss" scoped>
.category-list {
  display: flex;
  flex-direction: column;
  flex: 1;

  @media screen and (max-width: 900px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-evenly;
  }
}
</style>
