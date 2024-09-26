document.addEventListener("DOMContentLoaded", function () {
    const goBackButton = document.getElementById("go-back-button");

    goBackButton.addEventListener("click", function () {
        window.location.href = "/"; // Navigate back to the home page
    });
});
