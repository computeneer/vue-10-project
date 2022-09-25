<template>
  <nav>
    <div>
      <router-link active-class="active" class="nav-logo" to="/"
        >Computeneer Todo</router-link
      >
    </div>
    <div class="nav-link">
      <router-link
        active-class="active"
        v-if="!getIsAuthenticated"
        class="nav-link-item"
        to="login"
      >
        Login
      </router-link>
      <router-link
        active-class="active"
        v-if="!getIsAuthenticated"
        class="nav-link-item"
        to="register"
      >
        Register
      </router-link>
      <router-link
        to="login"
        v-if="getIsAuthenticated"
        @click="onLogout"
        class="green nav-link-item"
        >Logout</router-link
      >
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TopBar",
  methods: {
    onLogout() {
      this.$store.commit("logout");
    },
  },
  computed: {
    ...mapGetters(["getIsAuthenticated"]),
  },
};
</script>

<style lang="scss" scoped>
$green: hsla(160, 100%, 37%, 1);

nav {
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  align-items: center;
  border: 2px solid $green;
  padding-inline: 1rem;
  box-shadow: 0px 0px 15px $green;
  margin-bottom: 2rem;
  align-items: stretch;
  overflow: hidden;
  .nav-logo {
    font-weight: bold;
    font-size: 1.4rem;
    padding-block: 1rem;
    padding-inline: 0.6rem;
  }

  .active {
    text-shadow: 0px 0px 5px $green, 0px 0px 10px $green;
    box-shadow: 0px 0px 5px $green, 0px 0px 15px $green;
  }

  .nav-link {
    display: flex;
    gap: 0.6rem;

    &-item {
      display: inline-flex;
      align-items: center;
      padding-block: 0.3rem;
      padding-inline: 1.2rem;
      height: 100%;
    }

    .green {
      cursor: pointer;
    }
  }
}
</style>
