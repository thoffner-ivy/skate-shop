const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const message = document.getElementById("submissionMessage");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    message.textContent = "";
    
    if (nameInput.value.trim() === "") {
        message.textContent = "Please enter a name.";
        return;
    }

    if (!emailInput.value.includes("@")) {
        message.textContent = "Please enter a valid email address.";
        return;
    }

    message.textContent = "Form submitted successfully!";

    form.reset();
});
