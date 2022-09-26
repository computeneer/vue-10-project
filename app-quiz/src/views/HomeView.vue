<template>
  <div class="home">
    <router-view />
  </div>
</template>

<script>
import CategoryList from "../components/home/Category/CategoryList.vue";
export default {
  name: "HomeView",
  components: { CategoryList },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  flex: 1;
}
</style>
