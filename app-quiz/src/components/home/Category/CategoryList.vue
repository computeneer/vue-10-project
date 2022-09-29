<template>
  <div class="categories">
    <CategoryListItem v-for="category in getCategories" :category="category" :key="category.id" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CategoryListItem from "./CategoryListItem.vue";

export default {
  name: "CategoryList",
  computed: {
    ...mapGetters(["getCategories"]),
  },
  components: { CategoryListItem },
  mounted() {
    this.$store.commit("setSelectedQuiz", null);
  },
};
</script>

<style lang="scss" scoped>
.categories {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding-block-start: 2rem;
}
</style>
