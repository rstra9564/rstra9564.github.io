// Contact Form Validation
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");

function validateForm() {
    let isValid = true;

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required";
        isValid = false;
    }

    if (emailInput.value.trim() === "") {
        emailError.textContent = "Email is required";
        isValid = false;
    } else if (!isValidEmail(emailInput.value)) {
        emailError.textContent = "Invalid email format";
        isValid = false;
    }

    if (messageInput.value.trim() === "") {
        messageError.textContent = "Message is required";
        isValid = false;
    }

    return isValid;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

document.getElementById("submit-button").addEventListener("click", (event) => {
    event.preventDefault();

    if (validateForm()) {
        // Submit the form
        console.log("Form submitted successfully!");
    }
});