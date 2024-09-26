document.addEventListener("DOMContentLoaded", function () {
    const doctorSections = document.querySelectorAll(".doctor");
  
    // Add a click event listener to each doctor section
    doctorSections.forEach((doctorSection) => {
      const doctorName = doctorSection.querySelector("h2");
      const doctorInfo = doctorSection.querySelector(".doctor-info");
  
      doctorName.addEventListener("click", () => {
        doctorInfo.classList.toggle("show-info");
      });
    });
  });
  