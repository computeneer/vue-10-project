<template>
  <div class="game-not-started">
    <div class="infos">
      <span class="quiz">Quiz 1</span>
      <span class="category">Sport</span>
    </div>
    <div class="buttons">
      <button class="btn">Start Quiz</button>
      <button class="btn btn-purple" @click="onReturnClick">Return</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuizView",

  methods: {
    onReturnClick() {
      this.$router.push({ name: "home/categories" });
    },
  },
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
</style>
