import { createStore } from "vuex";

const store = createStore({
  state: {
    isAuthenticated: false,
    user: null,
  },
  getters: {
    getIsAuthenticated(state) {
      return state.isAuthenticated;
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
  },
  actions: {},
});

export default store;
