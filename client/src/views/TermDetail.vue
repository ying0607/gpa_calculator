<template>
    <div>
      <h1>{{ term.name }} Details</h1>
      <GPACalculator />
    </div>
  </template>
  
  <script>
  import GPACalculator from "@/components/GPACalculator.vue";
  
  export default {
    components: { GPACalculator },
    props: {
      term: Object,
    },
  };
  </script>