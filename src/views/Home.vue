<script setup>
import QuestionChoices from '#src/components/QuestionChoices.vue'
</script>

<template>
  <div class="d-flex flex-column h-100">
    <question-choices>
      <template v-slot:image>
        <img alt="image" src="/images/Scene10.jpg" >
      </template>
      <template v-slot:text>
        <h6>You are at a family reunion, and your family is asking about your life. </h6>
      </template>
      <template v-slot:links>
        <router-link to="/scene11" type="button" class="btn btn-md btn-dark">
          Next
        </router-link>
      </template>
    </question-choices>
  </div>
</template>

<style scoped></style>
