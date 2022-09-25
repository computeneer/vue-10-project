<template>
  <div class="form">
    <BaseInput
      :forValue="'text'"
      :label="'Todo : '"
      class="add-todo-text"
      v-model="todo"
    />
    <select class="decorated" v-model="categoryId">
      <option disabled :value="null" selected>Please select category</option>
      <option v-for="item in getCategories" :key="item.id" :value="item.id">
        {{ item.name }}
      </option>
    </select>
    <button @click="onSubmit" :disabled="!isValid" class="button">
      Add Todo
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BaseInput from "../common/BaseInput.vue";
export default {
  name: "AddTodo",
  components: { BaseInput },
  data() {
    return {
      todo: null,
      categoryId: null,
    };
  },
  methods: {
    onSubmit() {
      const formData = {
        text: this.todo,
        categoryId: this.categoryId,
      };
      this.$store.dispatch("addTodo", formData);
      this.todo = null;
      this.categoryId = null;
    },
  },
  computed: {
    ...mapGetters(["getCategories"]),
    isValid() {
      return this.todo !== null && this.categoryId !== null;
    },
  },
};
</script>

<style lang="scss" scoped>
$green: hsla(160, 100%, 37%, 1);
$green-6: hsla(160, 100%, 37%, 0.6);
$green-3: hsla(160, 100%, 37%, 0.3);

.form {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  background: $green;
  padding: 1rem;
  .add-todo-text {
    width: 50% !important;
    padding: 0 !important;
  }

  .button {
    border: none;
    padding: 0rem 2rem;
    border-radius: 0.4rem;
  }
  select.decorated {
    background: $green;
    border: 2px solid black;
    border-radius: 0.3rem;
    option {
      &:disabled {
        color: white;
      }
      &:not(:disabled) {
        background: $green-6;
        border: none;
        cursor: pointer;
      }

      &:hover {
        color: red;
        background-color: $green;
        box-shadow: 0px 0px 10px 100px $green inset;
      }

      &:checked {
        background-color: $green;
      }
    }
  }
}
</style>
