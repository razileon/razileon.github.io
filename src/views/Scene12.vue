<script setup>
import QuestionChoices from '#src/components/QuestionChoices.vue'
</script>

<template>
  <div class="d-flex flex-column h-100">
    <question-choices>
      <template v-slot:image>
        <img alt="image" src="/images/Scene12.jpg" >
      </template>
      <template v-slot:text>
        <h6>In your free time you enjoy </h6>
      </template>
      <template v-slot:links>
        <router-link to="/scene13" type="button" class="btn btn-md btn-dark m-2">
          Hiking
        </router-link>
        <router-link to="/scene13" type="button" class="btn btn-md btn-dark m-2">
          Reading
        </router-link>
        <router-link to="/scene13" type="button" class="btn btn-md btn-dark m-2">
          Partying with friends
        </router-link>
      </template>
    </question-choices>
  </div>
</template>

<style scoped></style>
