<script setup>
import QuestionChoices from '#src/components/QuestionChoices.vue'
import {ref} from "vue";
const mistakeCount = ref(0)
</script>

<template>
  <div class="d-flex flex-column h-100">
    <question-choices>
      <template v-slot:image>
        <img alt="image" src="/images/sad_turtle.gif" @click="mistakeCount++" class="h-50"/>
      </template>
      <template v-slot:text>
        <h2>You made {{mistakeCount}} mistake(s)</h2>
      </template>
    </question-choices>
  </div>
</template>

<style scoped></style>
