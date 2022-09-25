import { createStore } from "vuex";
import appAxios from "../utils/axios";

const store = createStore({
  state: {
    todos: [],
    categories: [],
    user: {
      email: null,
      firstName: null,
      id: null,
      lastName: null,
      username: null,
    },
    isAuthenticated: false,
    selectedCategoryId: null,
  },
  getters: {
    getUserTodos(state) {
      if (!state.selectedCategoryId) {
        return state.todos;
      } else {
        return state.todos.filter(
          (todo) => todo.categoryId === state.selectedCategoryId
        );
      }
    },
    getUsername(state) {
      return state.user.username;
    },
    getCategories(state) {
      return state.categories;
    },
    getIsAuthenticated(state) {
      return state.isAuthenticated;
    },
    getSelectedCategory(state) {
      return state.selectedCategoryId;
    },
    getSelectedCategoryName(state) {
      return state.categories.find((a) => a.id === state.selectedCategoryId);
    },
  },
  mutations: {
    setUserTodos(state, payload) {
      state.todos = payload;
    },
    addUserTodos(state, payload) {
      state.todos.push(payload);
    },
    setCategories(state, payload) {
      state.categories = payload;
    },
    login(state, payload) {
      state.isAuthenticated = true;
      delete payload.password;
      state.user = payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
    setSelectedCategoryId(state, payload) {
      state.selectedCategoryId = payload;
    },
    deleteTodo(state, payload) {
      state.todos = state.todos.filter((todo) => todo.id !== payload);
    },
  },
  actions: {
    async fetchCategories({ commit }) {
      const { data } = await appAxios.get("categories");
      commit("setCategories", data);
    },
    async addTodo({ state, commit }, formData) {
      if (state.isAuthenticated) {
        const submitData = {
          ...formData,
          userId: state.user?.id,
          isDone: false,
        };
        const { data } = await appAxios.post("todos", submitData);
        commit("addUserTodos", data);
      }
    },
    async fetchUserTodos({ state, commit }) {
      const { data } = await appAxios.get(`todos?userId=${state.user?.id}`);
      commit("setUserTodos", data);
    },
    async deleteTodo({ commit }, id) {
      await appAxios.delete(`todos/${id}`);
      commit("deleteTodo", id);
    },
  },
});

export default store;
