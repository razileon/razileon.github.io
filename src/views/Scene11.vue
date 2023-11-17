<script setup>
import QuestionChoices from '#src/components/QuestionChoices.vue'
</script>

<template>
  <div class="d-flex flex-column h-100">
    <question-choices>
      <template v-slot:image>
        <img alt="image" src="/images/Scene11.jpg" />
      </template>
      <template v-slot:text>
        <h6>Your job is </h6>
      </template>
      <template v-slot:links>
        <router-link to="/scene12" type="button" class="btn btn-md btn-dark m-2">
          An artist
        </router-link>
        <router-link to="/scene12" type="button" class="btn btn-md btn-dark m-2">
          A researcher
        </router-link>
        <router-link to="/scene12" type="button" class="btn btn-md btn-dark m-2">
          A police officer
        </router-link>
      </template>
    </question-choices>
  </div>
</template>

<style scoped></style>
