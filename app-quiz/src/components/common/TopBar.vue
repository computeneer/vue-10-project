<template>
  <nav>
    <div>
      <div class="nav-item">
        <v-icon name="bi-question-circle-fill" animation="float" speed="slow" scale="1.5" />
        <router-link to="/">Quiz Home</router-link>
      </div>
    </div>
    <div class="authenticated" v-if="!getIsAuthenticated">
      <router-link to="register" class="nav-item">
        <v-icon name="bi-person-plus-fill" animation="float" speed="slow" scale="1.5" />
        <span> Register </span>
      </router-link>
      <router-link to="login" class="nav-item">
        <v-icon name="bi-key-fill" animation="float" speed="slow" scale="1.5" />
        <span>Login</span>
      </router-link>
    </div>
    <div v-else>
      <div @click="logout" class="logout nav-item">
        <v-icon name="bi-person-x-fill" animation="float" speed="slow" scale="1.5" />
        <span>Logout</span>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Topbar",
  data() {
    return {
      isAuthenticated: true,
    };
  },
  computed: {
    ...mapGetters(["getIsAuthenticated"]),
  },
  methods: {
    logout() {
      this.$store.commit("logout");
      setTimeout(() => {
        this.$router.replace({ name: "login" });
      }, 250);
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 1rem;
  background: $radical-red;
  height: 60px;
  color: white;
  font-size: 1.3em;
  border-radius: 0.5rem;
  font-family: "Poppins-Regular";

  .logout {
    cursor: pointer;
  }

  .authenticated {
    display: flex;
    gap: 1rem;
  }
  div {
    height: 100%;
    .nav-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      height: 100%;
      position: relative;
      background-blend-mode: multiply;

      svg {
        transition: all 0.3s;
      }

      a {
        transition: all 0.3s;
      }

      &::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        top: 0;
        height: 0%;
        width: 105%;
        background: $shiraz;
        transition: all 0.3s;
      }

      &:hover {
        &::before {
          height: 100%;
        }
      }
    }
  }
}
</style>
