<template>
  <Form :btnText="isSuccess ? 'Redirecting' : 'Login'" :title="'Login'" :onClick="onClick" :disabled="!isValid">
    <BaseInput :forValue="'username'" :label="'Username'" v-model="userData.username" />
    <BaseInput type="password" :forValue="'password'" :label="'Password'" v-model="userData.password" />
    <router-link class="to-register" to="register">I don't have any account</router-link>
  </Form>
</template>

<script>
import BaseInput from "../components/common/BaseInput.vue";
import Form from "../components/common/Form.vue";
import { hashPassword } from "@/utils/password";
import { mapGetters } from "vuex";
export default {
  name: "LoginView",
  components: { BaseInput, Form },
  data() {
    return {
      userData: {
        username: null,
        password: null,
      },
      isSuccess: null,
      hasError: null,
    };
  },
  methods: {
    async onClick() {
      this.isSuccess = false;
      this.hasError = false;
      const password = hashPassword(this.userData.password);
      const result = await this.$store.dispatch("login", { username: this.userData.username, password });
      if (result) {
        this.isSuccess = true;
        setTimeout(() => {
          this.$router.push("/");
        }, 1500);
      } else {
        this.hasError = true;
      }
    },
  },
  computed: {
    ...mapGetters(["getIsAuthenticated"]),
    isValid() {
      if (!this.userData.username) {
        return false;
      }
      if (!this.userData.password) {
        return false;
      }
      return true;
    },
  },
};
</script>

<style lang="scss" scoped>
.to-register {
  display: block;
  text-align: center;
  margin-block-start: 1rem;
  font-size: 1.3rem;
  color: $radical-red;
  font-family: "Poppins-Regular";

  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 0.17rem;
  }
}
</style>
