<template>
  <div class="search">Search Will Be Implemented</div>
</template>

<script>
import BaseInput from "../../common/BaseInput.vue";
export default {
  name: "QuizListSearch",
  data() {
    return {
      search: null,
    };
  },
  components: {
    BaseInput,
  },
};
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  align-items: center;
  gap: 2rem;
}
</style>
