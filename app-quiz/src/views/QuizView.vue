<template>
  <div v-if="!isSuccess" class="game-not-started">
    <div class="infos">
      <span class="quiz">{{ getSelectedQuiz.name }}</span>
      <span class="category">{{ getCategoryName }}</span>
    </div>
    <div class="buttons">
      <button @click="fetchQuiz" class="btn">{{ isLoading ? "Loading..." : "Start Quiz" }}</button>
      <button class="btn btn-purple" @click="onReturnClick">Return</button>
    </div>
  </div>
  <div v-else class="game-started">
    <span class="quiz">{{ getSelectedQuiz.name }}</span>
    <QuestionContainer
      v-for="question in questions"
      :key="question.id"
      :question="question"
      :answers="getCurrentQuestionAnswers(question.id)"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import appAxios from "../utils/axios";
import QuestionContainer from "../components/quiz/QuestionContainer.vue";

export default {
  name: "QuizView",
  data() {
    return {
      quiz: null,
      isLoading: false,
      isSuccess: false,
      questions: null,
      answers: null,
      errors: [],
    };
  },
  mounted() {
    this.quiz = this.getSelectedQuiz;
  },
  computed: {
    ...mapGetters(["getSelectedQuiz", "getCategoryName"]),
  },
  methods: {
    onReturnClick() {
      this.$router.push({ name: "home/categories" });
    },
    async fetchQuiz() {
      if (this.isSuccess) {
        return;
      }
      this.isLoading = true;
      await appAxios
        .get(`questions?quizId=${this.quiz.id}`)
        .then((question_response) => {
          this.questions = question_response.data;
        })
        .catch((err) => {
          this.errors.push(err);
          this.isSuccess = false;
        });
      await appAxios
        .get(`answers?quizId=${this.quiz.id}`)
        .then((answers_response) => {
          this.answers = answers_response.data;
          this.isSuccess = true;
        })
        .catch((err) => {
          this.errors.push(err);
          this.isSuccess = false;
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    getCurrentQuestionAnswers(questionId) {
      console.log(this.answers);
      if (this.answers) {
        return this.answers?.find((answer) => answer.questionId === questionId);
      } else {
        console.log("IAMHERE");
        this.fetchQuiz();
        return this.answers?.find((answer) => answer.questionId === questionId);
      }
    },
  },
  components: { QuestionContainer },
};
</script>

<style scoped lang="scss">
.game-not-started {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-family: "Poppins-Regular";
  gap: 2rem;
  font-size: 4rem;
  color: $razzmatazz;

  .infos {
    border-bottom: 4px solid $razzmatazz;
    padding-inline: 3rem;
  }

  .category {
    font-size: 2.4rem;
    margin-left: 1rem;
  }
  .buttons {
    gap: 2rem;

    .btn {
      cursor: pointer;
      $current-color: $radical-red;
      margin-inline: 1rem;
      font-family: "Poppins-Regular";
      font-size: 1.4rem;
      padding: 1em 2em;
      background-color: transparent;
      color: $current-color;
      border: 4px solid $current-color;
      border-radius: 0.5rem;
      transition: all 0.4s;
      &:hover {
        color: black;
        background-color: $current-color;
        text-shadow: 0 0 5px $current-color;
        box-shadow: 0px 0px 5px $current-color, 0px 0px 15px $current-color, 0px 0px 25px $current-color,
          0px 0px 35px $current-color;
      }
      &.btn-purple {
        $current-color: $purple-heart;
        border: 4px solid $current-color;
        color: $current-color;
        &:hover {
          color: white;
          background-color: $current-color;
          text-shadow: 0 0 5px $current-color;
          box-shadow: 0px 0px 5px $current-color, 0px 0px 15px $current-color, 0px 0px 25px $current-color,
            0px 0px 35px $current-color;
        }
      }
    }
  }
}

.game-started {
  .quiz {
    display: block;
    font-family: "Poppins-Regular";
    font-size: 3rem;
    color: $razzmatazz;
    margin-inline: auto;
    text-align: center;
  }
}
</style>
