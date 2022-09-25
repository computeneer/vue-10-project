<template>
  <main>
    <CategoryList />
    <TodoList />
    <AddTodo />
  </main>
</template>

<script>
import { mapGetters } from "vuex";
import CategoryList from "../components/category/CategoryList.vue";
import TodoList from "../components/todo/TodoList.vue";
import AddTodo from "../components/todo/AddTodo.vue";

export default {
  name: "Home",
  computed: {
    ...mapGetters(["getCategories"]),
  },
  created() {
    this.$store.dispatch("fetchUserTodos");
  },
  components: { CategoryList, TodoList, AddTodo },
};
</script>

<style lang="scss" scoped>
main {
  display: flex;
  min-height: 100%;
  height: 100%;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
}
</style>
