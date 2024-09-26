document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("appointment-form");
    const paymentButton = document.getElementById("payment-button");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        // You can add your payment processing logic here.
        // For this example, we'll simply display a confirmation message.
        alert("Payment successful. Appointment booked!");
    });
});
