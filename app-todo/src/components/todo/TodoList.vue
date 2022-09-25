<template>
  <div class="todo-list" :class="{ row: viewStyle }">
    <div class="todo-list-navbar">
      <span>
        {{ getSelectedCategory ? getSelectedCategoryName.name : "All Todos" }}
      </span>
      <span @click="viewStyle = !viewStyle" class="grid">#$$#</span>
    </div>
    <TodoListItem v-for="todo in getUserTodos" :key="todo.id" :todo="todo" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TodoListItem from "./TodoListItem.vue";
export default {
  name: "TodoList",
  components: {
    TodoListItem,
  },
  data() {
    return {
      viewStyle: false,
    };
  },
  computed: {
    ...mapGetters([
      "getUserTodos",
      "getSelectedCategory",
      "getSelectedCategoryName",
    ]),
  },
};
</script>

<style lang="scss" scoped>
$green: hsla(160, 100%, 37%, 1);
.todo-list {
  display: flex;
  flex: 4;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
  margin-left: 1rem;

  &.row {
    flex-direction: column;
    .todo-list-item {
      width: 100%;
    }
  }

  &-navbar {
    position: relative;
    width: 100%;
    color: $green;
    text-align: center;
    span {
      font-size: 1.2rem;
      font-weight: bold;
    }

    .grid {
      position: absolute;
      right: 1rem;
      user-select: none;
      cursor: pointer;
      font-size: 1.4rem;
    }
  }
}
</style>
