import { createStore } from "vuex";
import axios from "@/utils/axios";
const store = createStore({
  state: {
    isAuthenticated: localStorage.getItem("isAuth") || false,
    user: JSON.parse(sessionStorage.getItem("user")) ?? null,
    categories: [],
    quizzes: [],
    isLoading: true,
    selectedQuiz: null,
    userAnswers: null,
  },
  getters: {
    getIsAuthenticated(state) {
      return state.isAuthenticated;
    },
    getUserId(state) {
      return state.user.id;
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
    getCategoryName(state, id) {
      return state.categories.find((a) => a.id === state.selectedQuiz.categoryId).name;
    },
    getSelectedQuiz(state) {
      return state.selectedQuiz;
    },
    getUserAnswers(state) {
      return state.userAnswers;
    },
  },
  mutations: {
    login(state, payload) {
      localStorage.setItem("isAuth", true);
      sessionStorage.setItem("user", JSON.stringify(payload[0]));
      state.isAuthenticated = true;
      state.user = payload[0];
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
    setSelectedQuiz(state, payload) {
      state.selectedQuiz = payload;
    },
    setUserAnswers(state, payload) {
      if (state.userAnswers === null) {
        state.userAnswers = [];
      }
      var index = state.userAnswers.find((answer) => answer.id === payload.id);
      if (index) {
        state.userAnswers = state.userAnswers.filter((answer) => answer.id !== payload.id);
      }
      state.userAnswers.push(payload);
    },
    resetUserAnswers(state) {
      state.userAnswers = null;
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
    async submitQuizAnswers({ commit, state }, payload) {
      const { status } = await axios.post("/userAnswers", { ...payload, answers: state.userAnswers });
      if (status === 200 || status === 201) {
        commit("resetUserAnswers");
        return true;
      }
    },
  },
});

export default store;
