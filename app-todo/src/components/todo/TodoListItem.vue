<template>
  <div @dblclick="onDelete" class="todo-list-item">
    {{ todo.text }}
  </div>
</template>

<script>
export default {
  name: "TodoListItem",
  props: ["todo"],
  methods: {
    onDelete() {
      this.$store.dispatch("deleteTodo", this.todo.id);
    },
  },
};
</script>

<style lang="scss" scoped>
$green: hsla(160, 100%, 37%, 1);
$green-4: hsla(160, 100%, 37%, 0.4);
.todo-list-item {
  display: flex;
  align-items: center;
  padding: 0.6rem 2rem;
  min-height: 3.5rem;
  background: $green;
  color: black;
  font-size: 1.2rem;
  border-radius: calc(1% + 1rem);
  transition: all 0.3s;
  user-select: none;
  width: calc(50% - 0.5rem);

  &:hover {
    background: $green-4;
    color: white;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
  }
}
</style>
