// app.js

document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        var nameInput = document.querySelector("input[name='name']");
        var emailInput = document.querySelector("input[name='email']");
        var messageInput = document.querySelector("textarea[name='message']");

        var name = nameInput.value.trim();
        var email = emailInput.value.trim();
        var message = messageInput.value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill out all fields.");
            return;
        }

        if (!isValidEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Submit the form (e.g., send an AJAX request to the server)
        alert("Form submitted successfully!");
    });

    function isValidEmail(email) {
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});