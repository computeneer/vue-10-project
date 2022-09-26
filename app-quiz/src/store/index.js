import { createStore } from "vuex";
import axios from "@/utils/axios";
const store = createStore({
  state: {
    isAuthenticated: localStorage.getItem("isAuth") || false,
    user: null,
    categories: [],
    quizzes: [],
    isLoading: false,
  },
  getters: {
    getIsAuthenticated(state) {
      return state.isAuthenticated;
    },
    getCategories(state) {
      return state.categories;
    },
    getQuizzes(state) {
      return state.quizzes;
    },
    getIsLoading(state) {
      return state.isLoading;
    },
  },
  mutations: {
    login(state, payload) {
      localStorage.setItem("isAuth", true);
      state.isAuthenticated = true;
      state.user = payload;
    },
    logout(state) {
      localStorage.removeItem("isAuth");
      state.isAuthenticated = false;
      state.user = null;
    },
    setCategories(state, payload) {
      state.categories = payload;
    },
    setQuizzes(state, payload) {
      state.quizzes = payload;
    },
    setIsLoading(state, payload) {
      state.isLoading = payload;
    },
  },
  actions: {
    async login({ commit }, formData) {
      const { data } = await axios.get(`/users?username=${formData.username}&password=${formData.password}`);
      if (data.length > 0) {
        commit("login", data);
        return true;
      }
      return false;
    },
    async fetchCategories({ commit }) {
      const { data } = await axios.get("categories");
      commit("setCategories", data);
    },
    async fetchQuizzes({ commit }, quizId) {
      commit("setIsLoading", true);
      const { data } = await axios.get(`/quizzes?categoryId=${quizId}`);
      commit("setQuizzes", data);
      commit("setIsLoading", false);
    },
  },
});

export default store;
