<template>
  <div>
    <h2>GPA Calculator</h2>
    <div>
      <label>Score: <input v-model="newCourse.score" type="number" /></label>
      <label>Credits: <input v-model="newCourse.credits" type="number" /></label>
      <label>Scale: 
        <select v-model="newCourse.scale">
          <option value="4.0">4.0</option>
          <option value="4.3">4.3</option>
        </select>
      </label>
      <button @click="addCourse">Add Course</button>
    </div>
    <div v-if="courses.length > 0">
      <ul>
        <li v-for="course in courses" :key="course.name">
          Score: {{ course.score }}, Credits: {{ course.credits }}, Scale: {{ course.scale }}
        </li>
      </ul>
      <button @click="calculateGPA">Calculate GPA</button>
      <p>Term GPA: {{ termGPA }}</p>
    </div>
  </div>
</template>

<script>
import { calculateTermGPA } from "@/services/gpaCalculator";

export default {
  data() {
    return {
      newCourse: { score: 0, credits: 1, scale: 4.0 },
      courses: [],
      termGPA: null,
    };
  },
  methods: {
    addCourse() {
      this.courses.push({ ...this.newCourse });
      this.newCourse = { score: 0, credits: 1, scale: 4.0 };
    },
    calculateGPA() {
      this.termGPA = calculateTermGPA(this.courses, this.newCourse.scale);
    },
  },
};
</script>