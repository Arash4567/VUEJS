<template>
  <div>
    <h1 class="mt-5 text-center text-5xl font-extrabold text-red-600">Hello world! - {{ data }}</h1>
    <div v-html="data"></div>
  </div>
</template>
<script setup>
import { ref, reactive, watch } from 'vue'

const data = ref("<b>sample data</b>")

// Directivelar v- prefiksi bilan boshlanadigan atributlardir

//---------- v-model modifiers -------------
// v-model.number
// v-model.lazy - enter bosganda statega yozadi
// v-model.trim - whitespacelarni tozalaydi
// v-model.trim.lazy - chaining ko`rinishi

// --------- Methods & Events ---------------
// --------- Lifecycle Hooks ---------------


</script>
