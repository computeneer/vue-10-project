<template>
  <div class="form">
    <h2>Sign Up</h2>
    <BaseInput
      :forValue="'name'"
      :label="'First Name'"
      v-model="userData.firstName"
    />
    <BaseInput
      :forValue="'lastname'"
      :label="'Last Name'"
      v-model="userData.lastName"
    />
    <BaseInput
      :forValue="'username'"
      :label="'Username'"
      v-model="userData.username"
    />
    <BaseInput
      :forValue="'email'"
      :label="'E-mail'"
      v-model="userData.email"
      type="email"
    />
    <BaseInput
      :forValue="'password'"
      :label="'Password'"
      v-model="userData.password"
      type="password"
    />
    <BaseInput
      :forValue="'passwordRpt'"
      :label="'Password Confirm'"
      v-model="userData.passwordRpt"
      type="password"
    />
    <button :disabled="!isValid" @click="onSave" class="button">Sign up</button>
    <div v-if="isSuccess">
      Registered Successfully, You Will Be Redirected...
    </div>
  </div>
</template>

<script>
import BaseInput from "../components/common/BaseInput.vue";
import appAxios from "../utils/axios";
export default {
  data() {
    return {
      userData: {
        firstName: null,
        lastName: null,
        username: null,
        email: null,
        password: null,
        passwordRpt: null,
      },
      isSuccess: false,
    };
  },
  methods: {
    async onSave() {
      const userData = {
        ...this.userData,
      };
      delete userData.passwordRpt;
      console.log(userData);
      appAxios.post("/users", userData).then((user_create_response) => {
        if (user_create_response.status === 201) {
          setTimeout(() => {
            this.$router.push({ name: "login" });
          }, 1500);
        }
      });
      this.resetForm();
    },
    resetForm() {
      this.userData = {
        firstName: null,
        lastName: null,
        username: null,
        email: null,
        password: null,
        passwordRpt: null,
      };
    },
    validateForm() {
      let isValid = true;
      if (!this.userData.firstName) {
        isValid = false;
      }
      if (!this.userData.lastName) {
        isValid = false;
      }
      if (!this.userData.username) {
        isValid = false;
      }
      if (!this.userData.email) {
        isValid = false;
      }
      if (!this.userData.password) {
        isValid = false;
      }
      if (!this.userData.passwordRpt) {
        isValid = false;
      }
      if (
        this.userData.password &&
        this.userData.passwordRpt &&
        this.userData.password !== this.userData.passwordRpt
      ) {
        isValid = false;
      }

      return isValid;
    },
  },
  components: { BaseInput },
  computed: {
    isValid() {
      return this.validateForm();
    },
  },
};
</script>

<style scoped lang="scss">
$green: hsla(160, 100%, 37%, 1);
$green-opacity-2: hsla(160, 100%, 37%, 0.2);
$green-opacity-6: hsla(160, 100%, 37%, 0.6);

h2 {
  text-align: center;
  font-weight: bold;
  color: $green;
  font-size: 2rem;
  text-shadow: 0px 0px 15px $green;
}
.form {
  display: flex;
  flex-direction: column;
  background: $green-opacity-2;
  padding-inline: max(5rem, 20%);
  padding-block: 3rem;
  gap: 2rem;
  border-radius: 0.3rem;
  box-shadow: 0rem 0rem 5px $green-opacity-6, 0rem 0rem 15px $green-opacity-6,
    0rem 0rem 20px $green-opacity-6;
  .button {
    padding: 1rem;
    background: $green;
    border: none;
    border-radius: 0.4rem;
    color: white;
    font-weight: bolder;
    transition: all 0.4s;

    &:disabled {
      background: $green-opacity-2;
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
}
</style>
