import { createStore } from "vuex";
import axios from "@/utils/axios";
const store = createStore({
  state: {
    isAuthenticated: false,
    user: null,
    categories: [],
    quizzes: [],
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
  },
  mutations: {
    login(state, payload) {
      state.isAuthenticated = true;
      state.user = payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
    setCategories(state, payload) {
      state.categories = payload;
    },
    setQuizzes(state, payload) {
      state.quizzes = payload;
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
    async fetchDatas({ commit }) {
      axios.get("categories").then((category_response) => {
        commit("setCategories", category_response.data);
      });
      axios.get("quizzes").then((quizzes_response) => {
        commit("setQuizzes", quizzes_response.data);
      });
    },
  },
});

export default store;
