<template>
  <keep-alive>
    <div class="question">
      <div class="question-title">{{ question.question }}</div>
      <div class="question-answers">
        <div
          :class="`question-answers-option ${selectedId === index && 'active'}`"
          v-for="(option, index) in sortArray"
          :key="option.text"
          @click="handleClick(index)"
        >
          {{ option.text }}
        </div>
      </div>
    </div>
  </keep-alive>
</template>

<script>
export default {
  name: "QuestionContainer",
  props: {
    question: {
      type: Object,
      required: true,
    },
    answers: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      selectedId: null,
    };
  },
  computed: {
    sortArray() {
      return this.answers.answers.sort((a, b) => 0.5 - Math.random());
    },
  },
  methods: {
    handleClick(optionId) {
      this.selectedId = optionId;
    },
  },
};
</script>

<style lang="scss" scoped>
$current-color: $radical-red;
.question {
  display: flex;
  flex-direction: column;
  border: 3px solid $current-color;
  min-height: 30vh;
  margin-block: 1rem;
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  font-family: "Poppins-Regular";
  overflow: hidden;

  &-title {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    height: 4rem;
    color: $current-color;
    padding-inline: 1rem;
  }

  &-answers {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex: 1;
    color: white;
    position: relative;
    padding-inline: 2rem;
    &-option {
      position: relative;
      transition: all 0.5s;
      padding: 1rem;
      border: 2px solid transparent;
      border-radius: 0.2rem;
      cursor: pointer;
      &:hover {
        transform: translateZ(10px);
        border: 2px solid $current-color;
        color: $current-color;
        box-shadow: 0 0 15px $current-color;
      }

      &:active {
        color: $purple-heart;
        border: 2px solid $purple-heart;
        box-shadow: 0 0 15px $purple-heart;
      }

      &.active {
        color: $purple-heart;
        border: 2px solid $purple-heart;
        box-shadow: 0 0 15px $purple-heart;
        text-shadow: 0 0 15px $purple-heart;
      }
    }
  }
}
</style>
