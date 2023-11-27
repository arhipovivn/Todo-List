<template>
  <div class="content">
    <div class="content__block">
      <div class="content__image-block">
        <img src="~/assets/images/Illustration.svg" alt="Illustration" class="content__main-image">
      </div>
      <div class="content__main-text">
        <p>
          Today I need to
        </p>
      </div>
      <div class="content__form-block">
      <TextField :placeholder="'Add new todo...'" />
      <TodoButton> Submit</TodoButton>
      </div>
      <div class="content__no-tasks">
        <img src="~/assets/images/checkmark-done-check.svg" alt="checkmark-done-check">
        <p>
          Congrats, you have no more tasks to do
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import TextField from '@/components/UIKit/TextField.vue'
import TodoButton from '@/components/UIKit/TodoButton.vue'


export default {
  name: 'IndexPage',
  components: {
    TextField,
    TodoButton
  }
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  width: 1440px;
  height: 900px;
  padding: 91px 355px 90px 355px;
  justify-content: center;
  align-items: center;

  &__block {
    position: relative; /* Make the container a positioning context */
    border-radius: 24px;
    background: #FFF;
    width: 730px;
    height: 719px;
    flex-shrink: 0;
  }
    &__image-block {
      display: flex;
      justify-content: center;
    }

    &__main-image {
      margin-top: 32px;
    }

    &__main-text {
      color: #202427;
      font-family: Inter;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -0.48px;
      text-align: center;
      margin-top: 48px;
    }

    &__no-tasks {
      position: absolute;
      bottom: 36px;
      left: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      color: #8F99A3;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
    }
    &__form-block{
      margin: 52px;
    display: flex;
    align-items: baseline;
    justify-content: center;
    gap: 16px;
    }
}
</style>