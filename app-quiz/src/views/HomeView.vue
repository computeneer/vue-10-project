<template>
  <div class="home">
    <CategoryList />
  </div>
</template>

<script>
import CategoryList from "../components/home/CategoryList.vue";
export default { components: { CategoryList } };
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
