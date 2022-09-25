<template>
  <div class="form">
    <h2>Sign In</h2>
    <transition name="fade">
      <div v-if="hasError" class="error">Sign In Failed</div>
    </transition>
    <BaseInput
      :forValue="'username'"
      :label="'Username'"
      v-model="userData.username"
      type="text"
    />
    <BaseInput
      :forValue="'password'"
      :label="'Password'"
      v-model="userData.password"
      type="password"
    />
    <button @click="onSubmit" :disabled="!isValid" class="button">
      {{ !isSuccess ? "Sign in" : "Successfull, Redirecting" }}
    </button>
    <div>
      <router-link class="sign-up" to="register"
        >Don't have account? Sign up here</router-link
      >
    </div>
  </div>
</template>

<script>
import BaseInput from "../components/common/BaseInput.vue";
import appAxios from "../utils/axios";
export default {
  name: "Login",
  components: {
    BaseInput,
  },
  data() {
    return {
      userData: {
        username: null,
        password: null,
      },
      hasError: false,
      isSuccess: false,
    };
  },
  methods: {
    validateForm() {
      let isValid = true;
      if (!this.userData.username) {
        isValid = false;
      }
      if (!this.userData.password) {
        isValid = false;
      }
      return isValid;
    },
    async onSubmit() {
      this.hasError = false;
      const { data } = await appAxios.get(
        `users?username=${this.userData.username}&password=${this.userData.password}`
      );
      if (data.length > 0) {
        this.isSuccess = true;
        setTimeout(() => {
          this.$store.commit("login", data[0]);
          this.$router.push({ name: "home" });
        }, 1500);
      } else {
        this.hasError = true;
      }
    },
  },
  computed: {
    isValid() {
      return this.validateForm();
    },
  },
};
</script>

<style scoped lang="scss">
$green: hsla(160, 100%, 37%, 1);
$red: hsl(0, 100%, 72%);
$red-6: rgba(207, 24, 24, 0.6);
$red-5: rgba(207, 29, 29, 0.5);
$green-opacity-2: hsla(160, 100%, 37%, 0.2);
$green-opacity-6: hsla(160, 100%, 37%, 0.6);

h2 {
  text-align: center;
  font-weight: bold;
  color: $green;
  font-size: 2rem;
  text-shadow: 0px 0px 15px $green;
}

.error {
  background: $red-5;
  color: $red;
  padding-block: 0.4rem;
  padding-inline: 1rem;
  font-size: 1.2rem;
  border-radius: 0.3rem;
  font-family: "Droid Sans";
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
    cursor: pointer;
    &:disabled {
      background: $green-opacity-2;
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
}

.sign-up {
  display: flex;
  align-items: center;
  width: fit-content;
  font-size: 1.2rem;
  padding: 0.2rem 0.4rem;

  &:hover {
    text-decoration: underline;
    text-shadow: 0px 0px 5px $green;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
