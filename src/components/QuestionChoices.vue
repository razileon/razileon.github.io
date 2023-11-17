<script setup>

</script>
<template>
  <div class="d-flex flex-column w-100 h-100" >
    <div class="w-100" style="height: calc(100vh - 10rem)">
      <div class="h-100">
        <div class="d-flex justify-content-center h-100">
          <slot name="image" class="h-100 mw-100"></slot>
        </div>
      </div>
    </div>
    <div class="gb-button-holder w-100 mb-5 d-flex justify-content-center" style="min-height: 10rem">
      <div class="px-4 white-transparent-background d-flex justify-content-center flex-column">
        <div class="d-flex justify-content-center p-2">
          <slot name="text"></slot>
        </div>
        <div class="d-flex justify-content-center mb-3">
          <slot name="links"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
 .white-transparent-background{
   background-color: rgba(255,255,255,1);
 }
</style>
