// Contact Form Validation
const nameInput = document.getElementById("name") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const messageInput = document.getElementById("message") as HTMLTextAreaElement;
const nameError = document.getElementById("name-error") as HTMLElement;
const emailError = document.getElementById("email-error") as HTMLElement;
const messageError = document.getElementById("message-error") as HTMLElement;

function validateForm(): boolean {
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

function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

document.getElementById("submit-button")?.addEventListener("click", (event: MouseEvent) => {
    event.preventDefault();

    if (validateForm()) {
        // Submit the form
        console.log("Form submitted successfully!");
    }
});