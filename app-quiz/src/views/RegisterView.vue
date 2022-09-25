<template>
  <Form :title="'Register'" :btnText="isSuccess ? 'Successful' : 'Register'" :onClick="onClick" :disabled="!isValid">
    <BaseInput :forValue="'firstname'" :label="'First Name'" v-model="userData.firstName" />
    <BaseInput :forValue="'lastname'" :label="'Last Name'" v-model="userData.lastname" />
    <BaseInput type="email" :forValue="'email'" :label="'E-Mail'" v-model="userData.email" />
    <BaseInput :forValue="'username'" :label="'Username'" v-model="userData.username" />
    <BaseInput type="password" :forValue="'password'" :label="'Password'" v-model="userData.password" />
    <BaseInput type="password" :forValue="'passwordRpt'" :label="'Confirm Password'" v-model="userData.passwordRpt" />
    <label class="checkbox" for="accepted">
      <input type="checkbox" id="accepted" v-model="userData.accepted" />
      <span class="check" />
      <span> I {{ userData.accepted ? "Accepted" : "Rejected" }} the Terms </span>
    </label>
  </Form>
</template>

<script>
import Form from "../components/common/Form.vue";
import BaseInput from "../components/common/BaseInput.vue";
import { hashPassword } from "@/utils/password";
import axios from "@/utils/axios";
export default {
  name: "RegisterView",
  components: { Form, BaseInput },
  data() {
    return {
      userData: {
        firstName: null,
        lastname: null,
        username: null,
        email: null,
        password: null,
        passwordRpt: null,
        accepted: false,
      },
      isSuccess: false,
    };
  },
  methods: {
    async onClick() {
      const formData = {
        ...this.userData,
      };
      delete formData.passwordRpt;
      formData.password = hashPassword(this.userData.password);
      const { status } = await axios.post("/users", formData);
      if (status === 201) {
        this.isSuccess = true;
        this.userData = {
          firstName: null,
          lastname: null,
          username: null,
          email: null,
          password: null,
          passwordRpt: null,
          accepted: false,
        };
      }
    },
  },
  computed: {
    isValid() {
      let result = true;
      if (!this.userData.firstName) {
        result = false;
      }
      if (!this.userData.lastname) {
        result = false;
      }
      if (!this.userData.email) {
        result = false;
      }
      if (!this.userData.password) {
        result = false;
      }
      if (!this.userData.passwordRpt) {
        result = false;
      }
      if (!this.userData.username) {
        result = false;
      }
      if (!this.userData.accepted) {
        result = false;
      }
      if (this.userData.password && this.userData.passwordRpt && this.userData.password !== this.userData.passwordRpt) {
        result = false;
      }

      return result;
    },
  },
};
</script>

<style lang="scss" scoped>
.checkbox {
  display: flex;
  font-family: "Poppins-Regular";
  margin-block: 1rem;
  padding-left: 1rem;
  align-items: center;
  gap: 1rem;
  font-size: 1.2rem;
  color: $radical-red;
  user-select: none;
  .check {
    width: 17px;
    aspect-ratio: 1 / 1;
    background: $radical-red;
  }

  input[type="checkbox"] {
    display: none;

    &:checked {
      + span {
        border: 4px solid $shiraz;
      }
    }
  }
}
</style>
