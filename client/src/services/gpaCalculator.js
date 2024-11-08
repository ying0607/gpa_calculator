// gpaCalculator.js

// 將百分制分數轉換為 4.0 或 4.3 GPA
function convertToGPA(score, scale) {
    if (scale === 4.0) {
      if (score >= 90) return 4.0;
      if (score >= 80) return 3.0;
      if (score >= 70) return 2.0;
      if (score >= 60) return 1.0;
      return 0.0;
    } else if (scale === 4.3) {
      if (score >= 90) return 4.3;
      if (score >= 85) return 4.0;
      if (score >= 80) return 3.7;
      if (score >= 75) return 3.3;
      if (score >= 70) return 3.0;
      if (score >= 65) return 2.7;
      if (score >= 60) return 2.3;
      if (score >= 55) return 2.0;
      return 0.0;
    }
    return 0.0;
  }
  
  // 計算加權 GPA
  function calculateTermGPA(courses, scale) {
    let totalCredits = 0;
    let weightedGPA = 0;
  
    courses.forEach(course => {
      const gpa = convertToGPA(course.score, scale);
      weightedGPA += gpa * course.credits;
      totalCredits += course.credits;
    });
  
    return totalCredits ? (weightedGPA / totalCredits).toFixed(2) : 0;
  }
  
  export { convertToGPA, calculateTermGPA };