<template>
  <Form :btnText="isSuccess ? 'Redirecting' : 'Login'" :title="'Login'" :onClick="onClick" :disabled="!isValid">
    <BaseInput :forValue="'username'" :label="'Username'" v-model="userData.username" />
    <BaseInput type="password" :forValue="'password'" :label="'Password'" v-model="userData.password" />
  </Form>
</template>

<script>
import BaseInput from "../components/common/BaseInput.vue";
import Form from "../components/common/Form.vue";
import { hashPassword } from "@/utils/password";
import axios from "@/utils/axios";
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
    };
  },
  methods: {
    async onClick() {
      const password = hashPassword(this.userData.password);
      const { data } = await axios.get(`/users?username=${this.userData.username}&password=${password}`);
      if (data.length > 0) {
        this.isSuccess = true;

        setTimeout(() => {
          this.$router.push({ name: "home" });
        }, 2000);
      } else {
        this.isSuccess = false;
      }
    },
  },
  computed: {
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

<style></style>
