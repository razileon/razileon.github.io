<script setup>
import QuestionChoices from '#src/components/QuestionChoices.vue'
</script>

<template>
  <div class="d-flex flex-column h-100">

    <question-choices>
      <template v-slot:image>
        <div class="h-100 w-100 bg-dark"></div>
      </template>
      <template v-slot:text>
        <h2>Turtles are cool?</h2>
      </template>
    </question-choices>
  </div>
</template>

<style scoped></style>
