document.addEventListener("DOMContentLoaded", function() {
    const calculateBtn = document.getElementById("calculate-bmi-btn");
    const heightInput = document.getElementById("height");
    const weightInput = document.getElementById("weight");
    const bmiValue = document.getElementById("bmi-value");
    const bmiCategory = document.getElementById("bmi-category");
  
    calculateBtn.addEventListener("click", function() {
      const height = parseFloat(heightInput.value);
      const weight = parseFloat(weightInput.value);
  
      if (!isNaN(height) && !isNaN(weight) && height > 0 && weight > 0) {
        // Calculate BMI
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        console.log(bmi)
  
        // Display the result
        bmiValue.textContent = bmi;
  
        // Determine BMI category
        if (bmi < 18.5) {
          bmiCategory.textContent = "Underweight";
          bmiCategory.style.color = "#FF9800";
        } else if (bmi >= 18.5 && bmi < 24.9) {
          bmiCategory.textContent = "Normal Weight";
          bmiCategory.style.color = "#4CAF50";
        } else if (bmi >= 25 && bmi < 29.9) {
          bmiCategory.textContent = "Overweight";
          bmiCategory.style.color = "#FFC107";
        } else {
          bmiCategory.textContent = "Obese";
          bmiCategory.style.color = "#F44336";
        }
      } else {
        alert("Please enter valid height and weight values.");
      }
    });
});
