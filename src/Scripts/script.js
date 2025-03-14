/******JS FILE******/
// Image Carousel
const imagePaths = ["images/ENRGY.png", "images/STAY AWHILE.png", "images/LINEZ.png", "images/BURNFORYOU.png", "images/Dans.png", "images/SUBLIMINAL.png"];

document.addEventListener("DOMContentLoaded", () => {
    const carouselContainer = document.getElementById("carousel-container");
    const leftButton = document.getElementById("left_button");
    const rightButton = document.getElementById("right_button");

    if (carouselContainer && leftButton && rightButton) {
        const imageElements = carouselContainer.querySelectorAll("img");

        leftButton.addEventListener("click", () => {
            // shift the items in the array to the left
            let firstLink = imagePaths.shift();
            imagePaths.push(firstLink);

            // display the first three images
            for (let i = 0; i < imageElements.length; i++) {
                imageElements[i].src = imagePaths[i];
            }
        });

        rightButton.addEventListener("click", () => {
            // shift the items in the array to the right
            let lastLink = imagePaths.pop();
            imagePaths.unshift(lastLink);

            // display the first three images
            for (let i = 0; i < imageElements.length; i++) {
                imageElements[i].src = imagePaths[i];
            }
        });
    }
});

// jQuery Radio CheckBox
$(function () {
    $("input[type='radio']").checkboxradio();
});

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