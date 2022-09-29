<template>
  <router-link :to="`/quiz?quizId=${quiz.id}`" @click="$store.commit('setSelectedQuiz', quiz)" class="quiz-list-item">{{
    quiz.name
  }}</router-link>
</template>

<script>
export default {
  name: "QuizListItem",
  props: {
    quiz: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.quiz-list-item {
  margin-block: 0.25rem;
  $current-color: $shiraz;
  width: calc(25% - 0.75rem);
  border: 3px solid $current-color;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-family: "Poppins-Regular";
  border-radius: 0.5rem;
  color: $current-color;
  transition: all 0.3s;
  &:hover {
    background: $current-color;
    color: white;
  }
}
</style>
