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
  created() {
    this.$store.dispatch("fetchDatas");
  },
};
</script>

<style></style>
