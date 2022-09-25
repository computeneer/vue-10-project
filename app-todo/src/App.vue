<template>
  <TopBar />
  <router-view v-slot="{ Component }">
    <transition name="slide"> <component :is="Component" /> </transition>
  </router-view>

  <!-- <transition>
    <router-view />
  </transition> -->
</template>

<script>
import TopBar from "@/components/common/TopBar.vue";
export default {
  name: "App",
  components: {
    TopBar,
  },
  mounted() {
    this.$store.dispatch("fetchCategories");
  },
};
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.75s ease-out;
}
.slide-enter-to {
  position: absolute;
  width: calc(100% - 4rem);
  right: 0;
}
.slide-enter-from {
  position: absolute;
  width: calc(100% - 4rem);
  right: -100%;
}
.slide-leave-to {
  position: absolute;
  width: calc(100% - 4rem);
  left: -100%;
}
.slide-leave-from {
  position: absolute;
  width: calc(100% - 4rem);
  left: 0;
}
</style>
