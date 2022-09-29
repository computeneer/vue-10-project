<template>
  <QuizListSearch />
  <Loading v-if="getIsLoading" />
  <div v-else-if="getQuizzes.length > 0" class="quiz-list">
    <QuizListItem v-for="quiz in getQuizzes" :key="quiz.id" :quiz="quiz" />
  </div>
  <div v-else class="nothing-to-see">
    <router-link to="/">
      <v-icon name="bi-arrow-left-circle-fill" animation="pulse" speed="fast" scale="5" />
    </router-link>
    <span> There is no quiz in this category</span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Loading from "@/components/common/Loading.vue";
import QuizListItem from "./QuizListItem.vue";
import QuizListSearch from "./QuizListSearch.vue";
export default {
  name: "QuizList",
  components: {
    Loading,
    QuizListItem,
    QuizListSearch,
  },
  computed: {
    ...mapGetters(["getQuizzes", "getIsLoading"]),
  },
  created() {
    this.$store.dispatch("fetchQuizzes", this.$route.params.id);
  },
};
</script>

<style lang="scss" scoped>
.quiz-list {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.nothing-to-see {
  $current-color: $radical-red;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: $current-color;
  font-size: 3em;
  width: max-content;
  font-family: "Poppins-Regular";
  display: flex;
  flex-direction: column-reverse;
  gap: 3rem;
  align-items: center;
}
</style>
