<template>
  <TopBar />
  <router-view />
</template>

<script>
import TopBar from "@/components/common/TopBar.vue";
export default {
  name: "App",
  components: {
    TopBar,
  },
};
</script>

<style></style>
